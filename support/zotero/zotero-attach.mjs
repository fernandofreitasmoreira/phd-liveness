#!/usr/bin/env node
// support/zotero/zotero-attach.mjs
//
// Descarrega PDFs de URLs públicos e adiciona-os como anexos a items Zotero
// existentes. Plano JSON declarativo, dry-run por defeito.
//
// Uso:
//   node support/zotero/zotero-attach.mjs <plan.json>
//   node support/zotero/zotero-attach.mjs <plan.json> --apply
//
// Operação suportada:
//   { "type": "attach-pdf", "parentKey": "ABCD1234", "url": "https://...pdf",
//     "filename": "optional.pdf", "comment": "..." }
//
// Fluxo por anexo (4 calls Zotero + 1 download):
//   1. GET <url> com User-Agent realista; valida magic bytes %PDF-.
//   2. POST /items com itemType=attachment, linkMode=imported_url, parentItem.
//   3. POST /items/<key>/file com md5+filename+filesize+mtime → uploadInfo.
//   4. POST <uploadInfo.url> com prefix+file+suffix (S3-like multipart).
//   5. POST /items/<key>/file?upload=<uploadKey> → registar.
//
// Read-from-internet + write-to-Zotero. Não modifica items existentes além
// de criar children attachments.

import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const HERE = dirname(fileURLToPath(import.meta.url));
const ENV_FILE = join(HERE, '.env');

function loadEnv(path) {
  if (!existsSync(path)) { console.error(`[attach] .env não encontrado: ${path}`); process.exit(1); }
  const env = {};
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (m) env[m[1]] = m[2].trim();
  }
  return env;
}

const env = loadEnv(ENV_FILE);
const API_KEY = env.ZOTERO_API_KEY;
const USER_ID = env.ZOTERO_USER_ID;
const API = `https://api.zotero.org/users/${USER_ID}`;
const ZOTERO_HEADERS = { 'Zotero-API-Key': API_KEY, 'Zotero-API-Version': '3' };
const BROWSER_UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const planFile = args.filter((a) => !a.startsWith('--'))[0];
if (!planFile) { console.error('Uso: zotero-attach.mjs <plan.json> [--apply]'); process.exit(1); }
const plan = JSON.parse(readFileSync(planFile, 'utf8'));

// ---------------------------------------------------------------------------
async function downloadPdf(url) {
  const r = await fetch(url, { headers: { 'User-Agent': BROWSER_UA, 'Accept': 'application/pdf,*/*' }, redirect: 'follow' });
  if (!r.ok) throw new Error(`HTTP ${r.status} ${r.statusText} em ${url}`);
  const ab = await r.arrayBuffer();
  const buf = Buffer.from(ab);
  if (buf.length < 4 || buf.slice(0, 4).toString('ascii') !== '%PDF') {
    const head = buf.slice(0, 200).toString('utf8').replace(/[\x00-\x1f]/g, '·');
    throw new Error(`Resposta não é PDF (magic bytes "${buf.slice(0, 4).toString('ascii')}"). Início: ${head}`);
  }
  const md5 = createHash('md5').update(buf).digest('hex');
  return { buf, md5, size: buf.length };
}

function deriveFilename(url, override) {
  if (override) return override;
  const u = new URL(url);
  const last = decodeURIComponent(u.pathname.split('/').filter(Boolean).pop() || 'document');
  let name = last.replace(/\?.*$/, '').replace(/[<>:"/\\|?*]/g, '_');
  if (!/\.pdf$/i.test(name)) name += '.pdf';
  return name.slice(0, 200);
}

async function zoteroJson(method, path, body, extraHeaders = {}) {
  const opts = { method, headers: { ...ZOTERO_HEADERS, ...extraHeaders } };
  if (body !== undefined) {
    if (typeof body === 'string') {
      opts.body = body;
    } else {
      opts.headers['Content-Type'] = 'application/json';
      opts.body = JSON.stringify(body);
    }
  }
  const r = await fetch(`${API}${path}`, opts);
  if (!r.ok) throw new Error(`${method} ${path} HTTP ${r.status}: ${await r.text()}`);
  return r.json();
}

async function attachPdf(parentKey, pdfUrl, filenameOverride) {
  // 1. Download + verify
  console.log(`  ↓ download ${pdfUrl}`);
  const { buf, md5, size } = await downloadPdf(pdfUrl);
  const filename = deriveFilename(pdfUrl, filenameOverride);
  console.log(`    ✓ ${(size / 1024).toFixed(1)} KB, md5=${md5.slice(0, 8)}…, filename=${filename}`);

  if (!APPLY) {
    console.log(`  (dry-run — would upload to Zotero parent ${parentKey})`);
    return null;
  }

  // 2. Create attachment stub
  const stub = {
    itemType: 'attachment',
    parentItem: parentKey,
    linkMode: 'imported_url',
    title: filename,
    filename,
    contentType: 'application/pdf',
    url: pdfUrl,
    charset: '',
    tags: [],
    relations: {},
  };
  const createR = await zoteroJson('POST', '/items', [stub]);
  const succ = createR.successful?.['0'];
  if (!succ) throw new Error(`POST /items falhou: ${JSON.stringify(createR.failed)}`);
  const attachKey = succ.key;
  console.log(`    ✓ stub criado: ${attachKey}`);

  // 3. Authorize upload
  const formBody = new URLSearchParams({
    md5,
    filename,
    filesize: String(size),
    mtime: String(Date.now()),
  }).toString();
  const r2 = await fetch(`${API}/items/${attachKey}/file`, {
    method: 'POST',
    headers: { ...ZOTERO_HEADERS, 'Content-Type': 'application/x-www-form-urlencoded', 'If-None-Match': '*' },
    body: formBody,
  });
  if (!r2.ok) throw new Error(`POST /file (auth) HTTP ${r2.status}: ${await r2.text()}`);
  const upload = await r2.json();

  if (upload.exists === 1) {
    console.log(`    ✓ ficheiro já existe (deduplicação Zotero), apenas linkado`);
    return attachKey;
  }

  // 4. PUT to S3
  const prefix = Buffer.from(upload.prefix);
  const suffix = Buffer.from(upload.suffix);
  const body = Buffer.concat([prefix, buf, suffix]);
  const r3 = await fetch(upload.url, {
    method: 'POST',
    headers: { 'Content-Type': upload.contentType },
    body,
  });
  if (!r3.ok) throw new Error(`S3 upload HTTP ${r3.status}: ${await r3.text()}`);
  console.log(`    ✓ S3 upload OK`);

  // 5. Register
  const r4 = await fetch(`${API}/items/${attachKey}/file`, {
    method: 'POST',
    headers: { ...ZOTERO_HEADERS, 'Content-Type': 'application/x-www-form-urlencoded', 'If-None-Match': '*' },
    body: `upload=${upload.uploadKey}`,
  });
  if (!r4.ok) throw new Error(`POST /file (register) HTTP ${r4.status}: ${await r4.text()}`);
  console.log(`    ✓ registado`);

  return attachKey;
}

// ---------------------------------------------------------------------------
async function main() {
  console.log(`\n=== ${plan.name || planFile} ===`);
  if (plan.rationale) console.log(`Rationale: ${plan.rationale}`);
  console.log(`Mode: ${APPLY ? '*** APPLY ***' : 'dry-run (use --apply para fazer upload)'}`);
  console.log(`Operations: ${plan.operations.length}\n`);

  let ok = 0, fail = 0;
  const results = [];
  for (const [i, op] of plan.operations.entries()) {
    if (op.type !== 'attach-pdf') { console.error(`[${i + 1}] tipo desconhecido: ${op.type}`); fail++; continue; }
    console.log(`[${i + 1}/${plan.operations.length}] attach-pdf`);
    if (op.comment) console.log(`  → ${op.comment}`);
    console.log(`  parent=${op.parentKey}`);
    try {
      const key = await attachPdf(op.parentKey, op.url, op.filename);
      results.push({ parentKey: op.parentKey, attachKey: key, url: op.url, ok: true });
      ok++;
    } catch (err) {
      console.error(`  ✗ ERROR: ${err.message}`);
      results.push({ parentKey: op.parentKey, url: op.url, ok: false, error: err.message });
      fail++;
      // Continua para o próximo (não aborta) — assim vemos quais falham
    }
  }
  console.log(`\n${ok} ok, ${fail} failed`);
  if (fail > 0) {
    console.log('Falhas:');
    for (const r of results.filter((r) => !r.ok)) console.log(`  ${r.parentKey} ${r.url} — ${r.error}`);
  }
  if (!APPLY) console.log('Para aplicar: re-correr com --apply');
}

main().catch((err) => { console.error('FALHOU:', err); process.exit(1); });

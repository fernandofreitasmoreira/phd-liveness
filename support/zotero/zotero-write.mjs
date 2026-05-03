#!/usr/bin/env node
// support/zotero/zotero-write.mjs
//
// Executa um plano JSON contra a Zotero Web API. Por defeito --dry-run:
// mostra o que faria + valida pré-condições (item existe, versão fresca, etc.).
// Com --apply executa de facto. Cada operação respeita If-Unmodified-Since-Version
// (concorrência optimista) — falha se o item mudou entretanto.
//
// Uso:
//   node support/zotero/zotero-write.mjs work/research/zotero-plan-XYZ.json
//   node support/zotero/zotero-write.mjs work/research/zotero-plan-XYZ.json --apply
//
// Operações suportadas:
//   - update-citation-key:  PATCH .data.citationKey
//   - merge-items:          merge tags+collections, re-parent children, delete slave
//   - create-item:          POST novo item
//   - add-tags:             PATCH .data.tags (union com existentes)
//   - add-note:             POST child note
//   - add-to-collection:    PATCH .data.collections (union)

import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ENV_FILE = join(HERE, '.env');

function loadEnv(path) {
  if (!existsSync(path)) { console.error(`[write] .env não encontrado: ${path}`); process.exit(1); }
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
const HEADERS = { 'Zotero-API-Key': API_KEY, 'Zotero-API-Version': '3' };

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const VERBOSE = args.includes('--verbose');
const planFile = args.filter((a) => !a.startsWith('--'))[0];
if (!planFile) { console.error('Uso: zotero-write.mjs <plan.json> [--apply] [--verbose]'); process.exit(1); }
if (!existsSync(planFile)) { console.error(`[write] plano não encontrado: ${planFile}`); process.exit(1); }

const plan = JSON.parse(readFileSync(planFile, 'utf8'));

// ---------------------------------------------------------------------------
// HTTP helpers
// ---------------------------------------------------------------------------
async function http(method, path, body, extraHeaders = {}) {
  const opts = { method, headers: { ...HEADERS, ...extraHeaders } };
  if (body !== undefined) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(body);
  }
  const url = path.startsWith('http') ? path : `${API}${path}`;
  for (let attempt = 0; attempt < 4; attempt++) {
    const r = await fetch(url, opts);
    if (r.status === 429 || r.status === 503) {
      const wait = parseInt(r.headers.get('retry-after') || '5', 10);
      console.warn(`[write] ${r.status}, espera ${wait}s…`);
      await new Promise((res) => setTimeout(res, wait * 1000));
      continue;
    }
    return r;
  }
  throw new Error(`[write] desistido após 4 tentativas: ${method} ${url}`);
}

async function getItem(key) {
  const r = await http('GET', `/items/${key}`);
  if (!r.ok) throw new Error(`GET /items/${key} HTTP ${r.status}: ${await r.text()}`);
  return r.json();
}
async function getChildren(key) {
  const r = await http('GET', `/items/${key}/children?limit=100`);
  if (!r.ok) throw new Error(`GET children HTTP ${r.status}`);
  return r.json();
}
async function patchItem(key, version, patch) {
  const r = await http('PATCH', `/items/${key}`, patch, { 'If-Unmodified-Since-Version': String(version) });
  if (r.status === 412) throw new Error(`Item ${key} mudou no servidor (version ${version} é stale). Re-sync e tenta de novo.`);
  if (!r.ok) throw new Error(`PATCH /items/${key} HTTP ${r.status}: ${await r.text()}`);
  return parseInt(r.headers.get('last-modified-version') || version, 10);
}
async function createItems(items) {
  const r = await http('POST', '/items', items);
  if (!r.ok) throw new Error(`POST /items HTTP ${r.status}: ${await r.text()}`);
  const out = await r.json();
  if (Object.keys(out.failed || {}).length) {
    console.error('[write] criação parcial — failed:', out.failed);
  }
  return out;
}
async function deleteItem(key, version) {
  const r = await http('DELETE', `/items/${key}`, undefined, { 'If-Unmodified-Since-Version': String(version) });
  if (r.status === 412) throw new Error(`Item ${key} mudou no servidor (stale). Re-sync e tenta de novo.`);
  if (!r.ok && r.status !== 204) throw new Error(`DELETE /items/${key} HTTP ${r.status}: ${await r.text()}`);
}

// ---------------------------------------------------------------------------
// Operações
// ---------------------------------------------------------------------------

async function opUpdateCitationKey(op) {
  const { zoteroKey, newKey } = op;
  const item = await getItem(zoteroKey);
  const old = item.data.citationKey || '(none)';
  console.log(`  ${zoteroKey} v${item.version}  citationKey: ${old} → ${newKey}`);
  if (item.data.citationKey === newKey) {
    console.log('  ✓ já está correcto, skip');
    return;
  }
  if (APPLY) {
    await patchItem(zoteroKey, item.version, { citationKey: newKey });
    console.log('  ✓ APPLIED');
  } else {
    console.log('  (dry-run)');
  }
}

async function opMergeItems(op) {
  const { masterKey, slaveKey, newCitationKey, comment } = op;
  if (comment) console.log(`  → ${comment}`);
  const master = await getItem(masterKey);
  const slave = await getItem(slaveKey);
  const slaveChildren = await getChildren(slaveKey);

  const masterTitle = master.data.title || master.data.nameOfAct || '(sem título)';
  console.log(`  master ${masterKey} v${master.version}: ${masterTitle.slice(0, 60)}`);
  console.log(`         tags=${master.data.tags.length} cols=${master.data.collections.length} children=${master.meta?.numChildren ?? '?'} ck=${master.data.citationKey || '(none)'}`);
  console.log(`  slave  ${slaveKey} v${slave.version}: ${(slave.data.title || slave.data.nameOfAct || '').slice(0, 60)}`);
  console.log(`         tags=${slave.data.tags.length} cols=${slave.data.collections.length} children=${slaveChildren.length} ck=${slave.data.citationKey || '(none)'}`);

  // Merge tags (union)
  const tags = new Set(master.data.tags.map((t) => t.tag));
  for (const t of slave.data.tags) tags.add(t.tag);
  // Merge collections (union)
  const collections = new Set([...master.data.collections, ...slave.data.collections]);
  // Patch master
  const patch = {
    tags: [...tags].map((t) => ({ tag: t })),
    collections: [...collections],
  };
  if (newCitationKey) patch.citationKey = newCitationKey;

  console.log(`  → master tags: ${master.data.tags.length} → ${tags.size}`);
  console.log(`  → master collections: ${master.data.collections.length} → ${collections.size}`);
  console.log(`  → re-parent ${slaveChildren.length} children → master`);
  console.log(`  → delete slave ${slaveKey}`);
  if (newCitationKey) console.log(`  → master citationKey: ${master.data.citationKey || '(none)'} → ${newCitationKey}`);

  if (APPLY) {
    let masterVersion = master.version;
    masterVersion = await patchItem(masterKey, masterVersion, patch);
    for (const child of slaveChildren) {
      await patchItem(child.key, child.version, { parentItem: masterKey });
    }
    await deleteItem(slaveKey, slave.version);
    console.log('  ✓ APPLIED');
  } else {
    console.log('  (dry-run)');
  }
}

async function opCreateItem(op) {
  const { data, comment } = op;
  if (comment) console.log(`  → ${comment}`);
  console.log(`  create ${data.itemType}: ${(data.title || data.nameOfAct || '').slice(0, 70)}`);
  console.log(`         tags=${(data.tags || []).length} collections=${(data.collections || []).length} ck=${data.citationKey || '(none)'}`);
  if (APPLY) {
    const out = await createItems([data]);
    const created = out.successful?.['0'];
    if (created) console.log(`  ✓ APPLIED → ${created.key} v${created.version}`);
    else console.error(`  ✗ FAILED:`, out.failed);
  } else {
    console.log('  (dry-run)');
  }
}

async function opAddTags(op) {
  const { zoteroKey, tags: newTags } = op;
  const item = await getItem(zoteroKey);
  const existing = new Set(item.data.tags.map((t) => t.tag));
  const added = newTags.filter((t) => !existing.has(t));
  console.log(`  ${zoteroKey} v${item.version}  tags: ${existing.size} existing, +${added.length} new`);
  if (added.length === 0) { console.log('  ✓ já tem todas, skip'); return; }
  if (VERBOSE || added.length <= 6) console.log(`         + ${added.join(', ')}`);
  const merged = new Set([...existing, ...newTags]);
  if (APPLY) {
    await patchItem(zoteroKey, item.version, { tags: [...merged].map((t) => ({ tag: t })) });
    console.log('  ✓ APPLIED');
  } else {
    console.log('  (dry-run)');
  }
}

async function opAddNote(op) {
  const { parentKey, note, replaceIfExists } = op;
  const children = await getChildren(parentKey);
  const existingNote = children.find((c) => c.data.itemType === 'note');
  if (existingNote && !replaceIfExists) {
    console.log(`  ${parentKey} já tem nota (${existingNote.key}), skip (usa replaceIfExists para substituir)`);
    return;
  }
  const html = mdToHtml(note);
  console.log(`  ${parentKey}  add-note (${note.length} chars md → ${html.length} chars html)`);
  if (existingNote && replaceIfExists) console.log(`         substitui nota existente ${existingNote.key}`);
  if (APPLY) {
    if (existingNote && replaceIfExists) {
      await patchItem(existingNote.key, existingNote.version, { note: html });
    } else {
      await createItems([{ itemType: 'note', parentItem: parentKey, note: html, tags: [] }]);
    }
    console.log('  ✓ APPLIED');
  } else {
    console.log('  (dry-run)');
  }
}

async function opAddToCollection(op) {
  const { zoteroKey, collectionKey } = op;
  const item = await getItem(zoteroKey);
  if ((item.data.collections || []).includes(collectionKey)) {
    console.log(`  ${zoteroKey} já em collection ${collectionKey}, skip`);
    return;
  }
  const newCols = [...(item.data.collections || []), collectionKey];
  console.log(`  ${zoteroKey} v${item.version}  +collection ${collectionKey}`);
  if (APPLY) {
    await patchItem(zoteroKey, item.version, { collections: newCols });
    console.log('  ✓ APPLIED');
  } else {
    console.log('  (dry-run)');
  }
}

// Markdown → HTML mínimo (Zotero notes esperam HTML)
function mdToHtml(md) {
  const lines = md.split('\n');
  const out = [];
  let inList = false;
  for (const line of lines) {
    if (/^##\s/.test(line)) {
      if (inList) { out.push('</ul>'); inList = false; }
      out.push(`<h2>${escapeHtml(line.replace(/^##\s+/, ''))}</h2>`);
    } else if (/^###\s/.test(line)) {
      if (inList) { out.push('</ul>'); inList = false; }
      out.push(`<h3>${escapeHtml(line.replace(/^###\s+/, ''))}</h3>`);
    } else if (/^[-*]\s/.test(line)) {
      if (!inList) { out.push('<ul>'); inList = true; }
      out.push(`<li>${inlineMd(line.replace(/^[-*]\s+/, ''))}</li>`);
    } else if (line.trim() === '') {
      if (inList) { out.push('</ul>'); inList = false; }
      out.push('');
    } else {
      if (inList) { out.push('</ul>'); inList = false; }
      out.push(`<p>${inlineMd(line)}</p>`);
    }
  }
  if (inList) out.push('</ul>');
  return out.filter((l) => l !== '').join('\n');
}
function inlineMd(s) {
  s = escapeHtml(s);
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');
  s = s.replace(/`(.+?)`/g, '<code>$1</code>');
  s = s.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  return s;
}
function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ---------------------------------------------------------------------------
const OPERATIONS = {
  'update-citation-key': opUpdateCitationKey,
  'merge-items': opMergeItems,
  'create-item': opCreateItem,
  'add-tags': opAddTags,
  'add-note': opAddNote,
  'add-to-collection': opAddToCollection,
};

async function main() {
  console.log(`\n=== ${plan.name || planFile} ===`);
  if (plan.rationale) console.log(`Rationale: ${plan.rationale}`);
  console.log(`Mode: ${APPLY ? '*** APPLY ***' : 'dry-run (use --apply para executar)'}`);
  console.log(`Operations: ${plan.operations.length}\n`);

  let ok = 0, fail = 0;
  for (const [i, op] of plan.operations.entries()) {
    const handler = OPERATIONS[op.type];
    if (!handler) { console.error(`[${i + 1}] tipo desconhecido: ${op.type}`); fail++; continue; }
    console.log(`[${i + 1}/${plan.operations.length}] ${op.type}`);
    try {
      await handler(op);
      ok++;
    } catch (err) {
      console.error(`  ✗ ERROR: ${err.message}`);
      fail++;
      if (op.continueOnError !== true) {
        console.error('Aborting (set continueOnError:true no item para ignorar erros)');
        break;
      }
    }
  }
  console.log(`\n${ok} ok, ${fail} failed`);
  if (!APPLY) console.log('Para aplicar: re-correr com --apply');
}

main().catch((err) => { console.error('FALHOU:', err); process.exit(1); });

#!/usr/bin/env node
// support/zotero/sync.mjs
//
// Pull read-only da Web API do Zotero, gera:
//   - notes/{bibkey}.md         (uma nota Markdown por item)
//   - dossiers/dossier-*.md     (agregado por collection top-level)
//   - dissertation.bib          (BibTeX exportado pela API)
//   - collections-tree.md       (mapa da hierarquia de collections)
//   - index.json                (cache completa, gitignored)
//
// Read-only por convenção: NÃO chama endpoints de escrita, mesmo que a chave permita.
// Para escrita ver zotero-write.mjs (a criar quando necessário).
//
// Uso: `node support/zotero/sync.mjs` a partir da raiz do repo (ou qualquer cwd).
// Requer Node ≥18 (fetch nativo). Zero dependências.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// ---------------------------------------------------------------------------
// Setup: paths e .env
// ---------------------------------------------------------------------------
const HERE = dirname(fileURLToPath(import.meta.url));
const NOTES_DIR = join(HERE, 'notes');
const DOSSIERS_DIR = join(HERE, 'dossiers');
const BIB_FILE = join(HERE, 'dissertation.bib');
const TREE_FILE = join(HERE, 'collections-tree.md');
const INDEX_FILE = join(HERE, 'index.json');
const ENV_FILE = join(HERE, '.env');

function loadEnv(path) {
  if (!existsSync(path)) {
    console.error(`[sync] .env não encontrado em ${path}`);
    console.error('       Copia .env.example → .env e preenche.');
    process.exit(1);
  }
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
if (!API_KEY || !USER_ID) {
  console.error('[sync] ZOTERO_API_KEY e ZOTERO_USER_ID têm de estar em .env');
  process.exit(1);
}

const API = `https://api.zotero.org/users/${USER_ID}`;
const HEADERS = { 'Zotero-API-Key': API_KEY, 'Zotero-API-Version': '3' };

// ---------------------------------------------------------------------------
// HTTP helpers (com paginação e backoff)
// ---------------------------------------------------------------------------
async function fetchJson(url, headers = HEADERS) {
  for (let attempt = 0; attempt < 4; attempt++) {
    const r = await fetch(url, { headers });
    if (r.status === 429 || r.status === 503) {
      const wait = parseInt(r.headers.get('retry-after') || '5', 10);
      console.warn(`[sync] ${r.status}, esperar ${wait}s…`);
      await new Promise((res) => setTimeout(res, wait * 1000));
      continue;
    }
    if (!r.ok) throw new Error(`HTTP ${r.status} em ${url}: ${await r.text()}`);
    return { data: await r.json(), headers: r.headers };
  }
  throw new Error(`[sync] desistido após 4 tentativas: ${url}`);
}

async function fetchText(url, headers = HEADERS) {
  const r = await fetch(url, { headers });
  if (!r.ok) throw new Error(`HTTP ${r.status} em ${url}`);
  return r.text();
}

async function fetchAllPaginated(path, params = {}) {
  const out = [];
  let start = 0;
  const limit = 100;
  while (true) {
    const qs = new URLSearchParams({ ...params, format: 'json', limit, start }).toString();
    const { data, headers } = await fetchJson(`${API}${path}?${qs}`);
    out.push(...data);
    const total = parseInt(headers.get('total-results') || '0', 10);
    if (out.length >= total || data.length === 0) break;
    start += limit;
  }
  return out;
}

// ---------------------------------------------------------------------------
// Bibkey: gera a partir do citationKey, do extra ou de uma heurística
// ---------------------------------------------------------------------------
function deriveBibkey(item) {
  // 1. Campo nativo (Zotero 6.0+ sob "extra" como `Citation Key: foo`)
  if (item.data.citationKey) return item.data.citationKey;
  const extra = item.data.extra || '';
  const ckMatch = extra.match(/Citation Key:\s*(\S+)/);
  if (ckMatch) return ckMatch[1];

  // 2. Heurística: firstAuthorLastName + year + firstWord
  const creators = item.data.creators || [];
  let author = 'anon';
  for (const c of creators) {
    if (c.lastName) { author = c.lastName; break; }
    if (c.name) { author = c.name.split(/\s+/).pop(); break; }
  }
  author = author.toLowerCase().replace(/[^a-z0-9]/g, '');

  let year = 'nd';
  if (item.meta?.parsedDate) year = item.meta.parsedDate.slice(0, 4);
  else if (item.data.date) {
    const m = item.data.date.match(/\b(19|20)\d{2}\b/);
    if (m) year = m[0];
  }

  const titleField = item.data.title || item.data.nameOfAct || item.data.shortTitle || '';
  const stop = new Set(['the', 'a', 'an', 'on', 'of', 'in', 'and', 'for', 'to']);
  const firstWord = titleField
    .toLowerCase()
    .split(/\W+/)
    .filter((w) => w && !stop.has(w))[0] || 'untitled';

  return `${author}${year}${firstWord}`;
}

// ---------------------------------------------------------------------------
// HTML → Markdown leve (apenas tags que o Zotero usa em notas)
// ---------------------------------------------------------------------------
function htmlToMd(html) {
  if (!html) return '';
  let s = html;
  // Normalizar quebras
  s = s.replace(/\r\n?/g, '\n');
  // Headers
  s = s.replace(/<h1[^>]*>(.*?)<\/h1>/gis, '\n# $1\n');
  s = s.replace(/<h2[^>]*>(.*?)<\/h2>/gis, '\n## $1\n');
  s = s.replace(/<h3[^>]*>(.*?)<\/h3>/gis, '\n### $1\n');
  s = s.replace(/<h4[^>]*>(.*?)<\/h4>/gis, '\n#### $1\n');
  // Inline
  s = s.replace(/<(strong|b)[^>]*>(.*?)<\/\1>/gis, '**$2**');
  s = s.replace(/<(em|i)[^>]*>(.*?)<\/\1>/gis, '*$2*');
  s = s.replace(/<code[^>]*>(.*?)<\/code>/gis, '`$1`');
  s = s.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gis, '[$2]($1)');
  // Listas
  s = s.replace(/<li[^>]*>(.*?)<\/li>/gis, '- $1\n');
  s = s.replace(/<\/?(ul|ol)[^>]*>/gi, '\n');
  // Parágrafos e quebras
  s = s.replace(/<p[^>]*>/gi, '\n').replace(/<\/p>/gi, '\n');
  s = s.replace(/<br[^>]*>/gi, '\n');
  // Restante: stripar tags
  s = s.replace(/<[^>]+>/g, '');
  // Entidades
  s = s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<')
       .replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  // Compactar quebras múltiplas
  s = s.replace(/\n{3,}/g, '\n\n').trim();
  return s;
}

// ---------------------------------------------------------------------------
// Tag classifier: agrupa tags pela faceta (type, role, area, …)
// ---------------------------------------------------------------------------
const FACETS = ['type', 'role', 'area', 'thesis', 'modality', 'method', 'quality', 'priority'];
function classifyTags(tags) {
  const grouped = Object.fromEntries(FACETS.map((f) => [f, []]));
  const other = [];
  for (const t of tags) {
    const tag = t.tag;
    const m = tag.match(/^([a-z]+):(.+)$/);
    if (m && FACETS.includes(m[1])) grouped[m[1]].push(m[2]);
    else other.push(tag);
  }
  return { grouped, other };
}

// ---------------------------------------------------------------------------
// Slug seguro para nomes de ficheiro
// ---------------------------------------------------------------------------
function slug(s) {
  return s.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// ---------------------------------------------------------------------------
// Limpa diretório (mantém .gitkeep)
// ---------------------------------------------------------------------------
function cleanDir(dir) {
  mkdirSync(dir, { recursive: true });
  for (const f of readdirSync(dir)) {
    if (f === '.gitkeep') continue;
    unlinkSync(join(dir, f));
  }
}

// ---------------------------------------------------------------------------
// Render: markdown de um item
// ---------------------------------------------------------------------------
const HEADERS_TEMPLATE = ['Síntese', 'Função na tese', 'Diálogo com outras fontes', 'Citações úteis', 'Reservas', 'Decisão'];

function renderItemNote(item, bibkey, parsedNote, collectionsByKey) {
  const d = item.data;
  const title = d.title || d.nameOfAct || d.shortTitle || '(sem título)';
  const itemType = d.itemType;
  const creators = (d.creators || []).map((c) => c.lastName || c.name || '').filter(Boolean).join(', ') || '—';
  const date = d.date || d.dateEnacted || (item.meta?.parsedDate ?? '—');
  const url = d.url || (d.DOI ? `https://doi.org/${d.DOI}` : '');
  const { grouped, other } = classifyTags(d.tags || []);
  const collections = (d.collections || []).map((k) => collectionsByKey[k]?.path || k).sort();

  const tagBlock = FACETS.map((f) => {
    const xs = grouped[f];
    return xs.length ? `- **${f}:** ${xs.map((x) => `\`${x}\``).join(', ')}` : null;
  }).filter(Boolean).join('\n');

  const otherBlock = other.length ? `\n- *outras:* ${other.map((t) => `\`${t}\``).join(', ')}` : '';

  // Detectar se a nota Zotero já segue a estrutura dos 6 headers
  const noteMd = parsedNote || '';
  const usesTemplate = HEADERS_TEMPLATE.some((h) => new RegExp(`^##\\s+${h}\\b`, 'mi').test(noteMd));

  let body;
  if (noteMd && usesTemplate) {
    body = noteMd;
  } else if (noteMd) {
    body = `## Notas (formato livre — converter para template quando possível)\n\n${noteMd}`;
  } else {
    body = HEADERS_TEMPLATE.map((h) => `## ${h}\n\n_(por preencher)_`).join('\n\n');
  }

  return `---
bibkey: ${bibkey}
zotero-key: ${item.key}
title: ${JSON.stringify(title)}
type: ${itemType}
creators: ${JSON.stringify(creators)}
date: ${date}
url: ${url}
last-sync: ${new Date().toISOString()}
---

# ${title}

> **${creators}** · *${itemType}* · ${date}${url ? ` · [link](${url})` : ''}
> Zotero key: \`${item.key}\` · Bibkey: \`@${bibkey}\`

## Tags
${tagBlock || '_(sem tags da taxonomia aplicadas)_'}${otherBlock}

## Collections
${collections.length ? collections.map((c) => `- ${c}`).join('\n') : '_(sem collection)_'}

---

${body}
`;
}

// ---------------------------------------------------------------------------
// Pipeline principal
// ---------------------------------------------------------------------------
async function main() {
  console.log('[sync] início');
  const t0 = Date.now();

  // 1. Validar chave
  const { data: keyInfo } = await fetchJson(`https://api.zotero.org/keys/${API_KEY}`);
  console.log(`[sync] chave OK — utilizador: ${keyInfo.username} (${keyInfo.userID})`);
  if (keyInfo.userID !== parseInt(USER_ID, 10)) {
    console.warn(`[sync] aviso: USER_ID em .env (${USER_ID}) ≠ chave (${keyInfo.userID})`);
  }

  // 2. Collections
  console.log('[sync] a puxar collections…');
  const collectionsRaw = await fetchAllPaginated('/collections');
  const collectionsByKey = {};
  for (const c of collectionsRaw) {
    collectionsByKey[c.data.key] = { ...c.data, children: [] };
  }
  // Resolver paths hierárquicos
  function resolvePath(key, seen = new Set()) {
    if (seen.has(key)) return '(cycle)';
    seen.add(key);
    const c = collectionsByKey[key];
    if (!c) return key;
    if (!c.parentCollection) return c.name;
    return `${resolvePath(c.parentCollection, seen)} / ${c.name}`;
  }
  for (const k of Object.keys(collectionsByKey)) {
    collectionsByKey[k].path = resolvePath(k);
  }
  console.log(`[sync] ${collectionsRaw.length} collections`);

  // 3. Items (excluir attachments via API; notas standalone via filtro local)
  console.log('[sync] a puxar items (sem attachments)…');
  const itemsRaw = await fetchAllPaginated('/items', { itemType: '-attachment' });
  const items = itemsRaw.filter((i) => i.data.itemType !== 'note');
  console.log(`[sync] ${items.length} items principais (excluídos ${itemsRaw.length - items.length} notas standalone)`);

  // 4. Notas (children de cada item com numChildren > 0)
  const notesByParent = {};
  const itemsWithChildren = items.filter((i) => (i.meta?.numChildren ?? 0) > 0);
  console.log(`[sync] a puxar notas de ${itemsWithChildren.length} items…`);
  for (const item of itemsWithChildren) {
    const { data: children } = await fetchJson(`${API}/items/${item.key}/children?format=json&limit=100`);
    const notes = children.filter((c) => c.data.itemType === 'note');
    if (notes.length) {
      notesByParent[item.key] = notes
        .map((n) => htmlToMd(n.data.note))
        .filter(Boolean)
        .join('\n\n---\n\n');
    }
  }

  // 5. Render notes/{bibkey}.md
  console.log('[sync] a escrever notas…');
  cleanDir(NOTES_DIR);
  const itemsByBibkey = {};
  const collisions = [];
  for (const item of items) {
    let bibkey = deriveBibkey(item);
    if (itemsByBibkey[bibkey]) {
      // Collision: sufixo com Zotero key abreviada
      const oldKey = `${bibkey}-${itemsByBibkey[bibkey].key.slice(0, 4).toLowerCase()}`;
      collisions.push({ bibkey, items: [itemsByBibkey[bibkey].key, item.key] });
      bibkey = `${bibkey}-${item.key.slice(0, 4).toLowerCase()}`;
    }
    item._bibkey = bibkey;
    itemsByBibkey[bibkey] = item;
    const md = renderItemNote(item, bibkey, notesByParent[item.key], collectionsByKey);
    writeFileSync(join(NOTES_DIR, `${bibkey}.md`), md);
  }
  if (collisions.length) {
    console.warn(`[sync] ${collisions.length} colisões de bibkey resolvidas com sufixo`);
  }

  // 6. Dossiers por sub-collection de 40_Thesis_Manuscript (mapeia capítulos)
  console.log('[sync] a gerar dossiers…');
  cleanDir(DOSSIERS_DIR);
  const thesisRoot = collectionsRaw.find((c) => c.data.name === '40_Thesis_Manuscript');
  if (thesisRoot) {
    const subs = collectionsRaw.filter((c) => c.data.parentCollection === thesisRoot.data.key);
    for (const sub of subs) {
      const itemsInSub = items.filter((i) => (i.data.collections || []).includes(sub.data.key));
      if (itemsInSub.length === 0) continue;
      const md = renderDossier(sub.data.name, itemsInSub, collectionsByKey);
      writeFileSync(join(DOSSIERS_DIR, `${slug(sub.data.name)}.md`), md);
    }
  }
  // Dossier "excluded" (06_Excluded)
  const excluded = collectionsRaw.find((c) => c.data.name === '06_Excluded');
  if (excluded) {
    const itemsExcluded = items.filter((i) => (i.data.collections || []).includes(excluded.data.key));
    if (itemsExcluded.length) {
      const md = renderDossier('06_Excluded — itens descartados', itemsExcluded, collectionsByKey, true);
      writeFileSync(join(DOSSIERS_DIR, 'excluded.md'), md);
    }
  }

  // 7. dissertation.bib via API (formato bibtex)
  console.log('[sync] a exportar BibTeX…');
  const bibChunks = [];
  for (let start = 0; start < items.length; start += 100) {
    const slice = items.slice(start, start + 100).map((i) => i.key).join(',');
    const url = `${API}/items?itemKey=${slice}&format=bibtex&limit=100`;
    bibChunks.push(await fetchText(url));
  }
  writeFileSync(BIB_FILE, `% Gerado por sync.mjs em ${new Date().toISOString()}\n% Não editar à mão — fonte de verdade é o Zotero.\n\n${bibChunks.join('\n')}\n`);

  // 8. collections-tree.md
  console.log('[sync] a escrever collections-tree.md…');
  writeFileSync(TREE_FILE, renderTree(collectionsRaw, items));

  // 9. index.json (cache, gitignored)
  writeFileSync(INDEX_FILE, JSON.stringify({
    syncedAt: new Date().toISOString(),
    keyInfo,
    counts: { items: items.length, collections: collectionsRaw.length, notes: Object.keys(notesByParent).length },
    items,
    collections: collectionsRaw,
  }, null, 2));

  const dt = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`[sync] terminado em ${dt}s`);
  console.log(`        notas:      ${items.length}`);
  console.log(`        dossiers:   ${readdirSync(DOSSIERS_DIR).filter((f) => f.endsWith('.md')).length}`);
  console.log(`        bib:        ${BIB_FILE}`);
  console.log(`        cache:      ${INDEX_FILE}`);
  if (collisions.length) {
    console.log(`        ⚠  ${collisions.length} colisões de bibkey:`);
    for (const c of collisions) console.log(`          - ${c.bibkey} (${c.items.join(', ')})`);
  }
}

// ---------------------------------------------------------------------------
// Render: dossier
// ---------------------------------------------------------------------------
function renderDossier(name, items, collectionsByKey, isExcluded = false) {
  const lines = [`# Dossier — ${name}`, '', `_${items.length} ${items.length === 1 ? 'item' : 'items'} · gerado em ${new Date().toISOString().slice(0, 10)}_`, ''];
  for (const item of items) {
    const d = item.data;
    const title = d.title || d.nameOfAct || '(sem título)';
    const creators = (d.creators || []).map((c) => c.lastName || c.name || '').filter(Boolean).join(', ');
    const { grouped } = classifyTags(d.tags || []);
    const tagSummary = FACETS
      .map((f) => grouped[f].length ? `${f}:${grouped[f].join('+')}` : null)
      .filter(Boolean).join(' · ');
    lines.push(`### \`@${item._bibkey}\` — ${title}`);
    lines.push(`*${creators || '—'}* · ${d.itemType} · ${d.date || item.meta?.parsedDate || '—'}`);
    if (tagSummary) lines.push(`Tags: ${tagSummary}`);
    lines.push(`→ [nota](../notes/${item._bibkey}.md)`);
    lines.push('');
  }
  if (isExcluded) {
    lines.push('---', '', '> **Defesa de exclusão:** abrir cada nota individual para ver a justificação registada.', '');
  }
  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Render: árvore de collections
// ---------------------------------------------------------------------------
function renderTree(collectionsRaw, items) {
  const itemsByCol = {};
  for (const i of items) for (const k of (i.data.collections || [])) (itemsByCol[k] ??= []).push(i);
  const byParent = {};
  for (const c of collectionsRaw) (byParent[c.data.parentCollection || 'root'] ??= []).push(c);
  for (const k of Object.keys(byParent)) byParent[k].sort((a, b) => a.data.name.localeCompare(b.data.name));

  const lines = ['# Collections — árvore', '', `_Gerado em ${new Date().toISOString().slice(0, 10)} · ${collectionsRaw.length} collections, ${items.length} items_`, ''];
  function walk(parentKey, depth) {
    for (const c of (byParent[parentKey] || [])) {
      const n = (itemsByCol[c.data.key] || []).length;
      lines.push(`${'  '.repeat(depth)}- **${c.data.name}** (${n} ${n === 1 ? 'item' : 'items'}) · \`${c.data.key}\``);
      walk(c.data.key, depth + 1);
    }
  }
  walk('root', 0);
  return lines.join('\n');
}

// ---------------------------------------------------------------------------
main().catch((err) => {
  console.error('[sync] FALHOU:', err);
  process.exit(1);
});

#!/usr/bin/env node
// support/zotero/propose-item.mjs
//
// Gera um draft de item Zotero (BibTeX + tags da taxonomia + esboço de nota
// com os 6 headers) para `work/research/proposed-items-YYYY-MM-DD.md`.
// O Fernando revê, ajusta e cola no Zotero manualmente. Não escreve na
// biblioteca — handoff propositadamente humano.
//
// Uso:
//   node support/zotero/propose-item.mjs --doi 10.1109/CVPR.2020.00813
//   node support/zotero/propose-item.mjs --doi 10.1145/2633600 --area xai --thesis XAI-LIV
//   node support/zotero/propose-item.mjs --url https://example.com/paper
//
// Resolve metadata via CrossRef (DOI) ou pede que preenchas manualmente (URL).

import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, '..', '..');
const PROPOSED_DIR = resolve(REPO_ROOT, '..', '..', '..', 'work', 'research'); // ../../../work/research relativo a worktree
// Fallback: tenta encontrar work/ subindo até 4 níveis
function findWorkDir(start) {
  let cur = start;
  for (let i = 0; i < 6; i++) {
    const candidate = join(cur, 'work', 'research');
    if (existsSync(dirname(candidate))) return candidate;
    cur = dirname(cur);
  }
  return null;
}

const args = process.argv.slice(2);
function arg(name) {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : null;
}

const doi = arg('doi');
const url = arg('url');
const tagOverrides = {
  type: arg('type'), role: arg('role'), area: arg('area'),
  thesis: arg('thesis'), modality: arg('modality'), method: arg('method'),
  quality: arg('quality') || 'useful', priority: arg('priority') || 'medium',
};

if (!doi && !url) {
  console.error('Uso: --doi <DOI> [--type ...] [--role ...] [--area ...] [--thesis ...]');
  console.error('   ou --url <URL> (vais ter de preencher metadata à mão)');
  process.exit(1);
}

async function fromCrossRef(doi) {
  const r = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`,
    { headers: { 'User-Agent': 'phd-liveness propose-item.mjs (mailto:fernandofreitasmoreira@users.noreply.github.com)' } });
  if (!r.ok) throw new Error(`CrossRef HTTP ${r.status}`);
  const j = (await r.json()).message;
  return {
    doi,
    title: (j.title || [])[0] || '',
    authors: (j.author || []).map((a) => `${a.family}, ${a.given || ''}`.trim()),
    year: j.issued?.['date-parts']?.[0]?.[0] || j.created?.['date-parts']?.[0]?.[0] || '',
    journal: (j['container-title'] || [])[0] || '',
    publisher: j.publisher || '',
    type: j.type || '',
    url: j.URL || `https://doi.org/${doi}`,
  };
}

function deriveBibkey(meta) {
  const author = (meta.authors[0] || 'anon').split(',')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
  const year = String(meta.year || 'nd').slice(0, 4);
  const stop = new Set(['the', 'a', 'an', 'on', 'of', 'in', 'and', 'for', 'to']);
  const firstWord = (meta.title || '').toLowerCase().split(/\W+/).filter((w) => w && !stop.has(w))[0] || 'untitled';
  return `${author}${year}${firstWord}`;
}

function bibtexEntry(meta, bibkey) {
  const fields = {
    title: meta.title,
    author: meta.authors.map((a) => a).join(' and '),
    year: meta.year,
    journal: meta.journal,
    publisher: meta.publisher,
    doi: meta.doi,
    url: meta.url,
  };
  const lines = [`@article{${bibkey},`];
  for (const [k, v] of Object.entries(fields)) {
    if (v) lines.push(`  ${k} = {${v}},`);
  }
  lines.push('}');
  return lines.join('\n');
}

function tagsBlock(t) {
  return Object.entries(t)
    .filter(([_, v]) => v)
    .map(([k, v]) => `${k}:${v}`).join(' ');
}

async function main() {
  let meta;
  if (doi) {
    console.log(`[propose] CrossRef → ${doi}`);
    meta = await fromCrossRef(doi);
  } else {
    meta = { title: '[POR PREENCHER]', authors: [], year: 'nd', journal: '', publisher: '', type: 'webpage', url, doi: '' };
  }
  const bibkey = deriveBibkey(meta);

  const draft = `# Item proposto — ${bibkey}

_Gerado em ${new Date().toISOString().slice(0, 10)} via \`propose-item.mjs\`. Revê, ajusta e cola no Zotero. Quando estiver na biblioteca, próximo \`sync.mjs\` integra-o._

## Metadata
- **Título:** ${meta.title}
- **Autores:** ${meta.authors.join(' · ') || '—'}
- **Ano:** ${meta.year}
- **Container:** ${meta.journal || meta.publisher || '—'}
- **DOI:** ${meta.doi || '—'}
- **URL:** ${meta.url || '—'}

## BibTeX
\`\`\`bibtex
${bibtexEntry(meta, bibkey)}
\`\`\`

## Tags sugeridas (taxonomia)
\`${tagsBlock(tagOverrides)}\`

> Confirma/ajusta. Lembra-te das obrigatórias: 1× \`type:\`, ≥1× \`role:\`, ≥1× \`area:\`, \`thesis:\` se relevante.

## Esboço de nota (template — cola no Zotero como nota associada ao item)

## Síntese
_(3 linhas máx. — claim central + tipo de evidência (empírica/teórica/normativa) + alcance)_

## Função na tese
_(em que secção entra; que afirmação minha sustenta; SP/objectivo)_

## Diálogo com outras fontes
_(com que items concorda/contradiz/complementa — usar @bibkey)_

## Citações úteis
_(quotes textuais com pp.; marcar [introdução] / [discussão] / [contraponto])_

## Reservas
_(vieses, alcance limitado, idade, qualidade do peer-review, retracções via Scite)_

## Decisão
- [ ] cito-a — em [secção]
- [ ] descarto-a — porquê (defesa preparada)
- [ ] re-ler depois de [data/condição]
`;

  const workResearch = findWorkDir(REPO_ROOT) || join(REPO_ROOT, 'work', 'research');
  mkdirSync(workResearch, { recursive: true });
  const out = join(workResearch, `proposed-items-${new Date().toISOString().slice(0, 10)}_${bibkey}.md`);
  writeFileSync(out, draft);
  console.log(`[propose] escrito: ${out}`);
  console.log(`[propose] bibkey sugerido: ${bibkey}`);
}

main().catch((err) => { console.error('[propose] FALHOU:', err); process.exit(1); });

# `support/zotero/` — sincronização com a biblioteca Zotero

*Source of truth* da bibliografia: **Zotero Cloud** (utilizador `fernandofreitasmoreira`). Este directório consome a Web API e gera artefactos legíveis (Markdown + BibTeX) para o repositório, para o Overleaf, e para o Claude.

## Ficheiros

| Ficheiro | Tipo | Versionado | Descrição |
|---|---|---|---|
| `sync.mjs` | *script* | ✅ | Pull *read-only* da API → notas + dossiers + .bib |
| `propose-item.mjs` | *script* | ✅ | Gera *draft* de item novo em `work/research/` para o Fernando colar no Zotero |
| `.env.example` | template | ✅ | Como configurar credenciais |
| `.env` | credenciais | ❌ (gitignored) | Chave API + userID |
| `notes/{bibkey}.md` | gerado | ✅ | Uma nota por item, com tags + collections + corpo |
| `dossiers/{slug}.md` | gerado | ✅ | Agregado por sub-collection de `40_Thesis_Manuscript` |
| `dissertation.bib` | gerado | ✅ | BibTeX exportado pela API |
| `collections-tree.md` | gerado | ✅ | Árvore de collections com contagem |
| `index.json` | cache | ❌ (gitignored) | *Snapshot* completo da API para *queries* offline |

Os ficheiros gerados são **regeneráveis a partir do Zotero**. Não editar à mão — mudanças perdem-se no próximo *sync*. Para alterar conteúdo, alterar no Zotero.

## Setup (uma vez)

1. Copia `.env.example` para `.env`.
2. Gera chave em https://www.zotero.org/settings/security#applications. *Read-only* basta para `sync.mjs`; *write* só se quiseres usar o futuro `zotero-write.mjs`.
3. Cola chave + *userID* em `.env`.

## Uso quotidiano

```bash
# Pull do Zotero → ficheiros locais (~5-10 s para ~250 items)
node support/zotero/sync.mjs

# Propor novo item (CrossRef preenche metadata)
node support/zotero/propose-item.mjs --doi 10.1109/CVPR.2020.00813 --area xai --thesis XAI-LIV
node support/zotero/propose-item.mjs --url https://example.com/paper
```

## Convenções

### Tags (taxonomia controlada)

Cada item deve ter:
- **1×** `type:` — `journal | conference | report | regulation | directive | standard | dataset | news | website | documentation`
- **≥1×** `role:` — `motivation | context | evidence | state-of-the-art | method | regulation | compliance | dataset | benchmark | background`
- **≥1×** `area:` — `liveness | pad | xai | federated-learning | differential-privacy | multimodal-biometrics | deepfakes | security | privacy | eudi-wallet | digital-identity | identity-proofing | ai-act | gdpr | nis2 | design-science-research`
- `thesis:` se relevante — `motivation | state-of-the-art | methodology | regulatory-framework | XAI-LIV | FLEET-LIV | MULTI-LIV | ADVR-LIV | datasets | compliance-analysis`

E facetas opcionais: `modality:`, `method:`, `quality:`, `priority:`. Lista completa em [CLAUDE.md §12.6](../../CLAUDE.md).

### Notas — 6 *headers* fixos

Escrever cada nota em **Markdown puro** (Zotero 8 aceita). Estrutura (extraída pelo `sync.mjs`):

```markdown
## Síntese
3 linhas máx. — claim central + tipo de evidência + alcance.

## Função na tese
Em que secção entra, que afirmação sustenta, SP/objectivo.

## Diálogo com outras fontes
Concorda/contradiz/complementa, com @bibkey.

## Citações úteis
Quotes (pp.) com [introdução] / [discussão] / [contraponto].

## Reservas
Vieses, alcance, idade, peer-review, retracções (cross-check Scite).

## Decisão
- [ ] cito-a — em [secção]
- [ ] descarto-a — porquê
- [ ] re-ler depois de [data/condição]
```

### Bibkeys

Geradas por `sync.mjs` a partir de:
1. `data.citationKey` (Zotero 6.0.27+)
2. `Citation Key:` no campo `extra` (Better BibTeX)
3. Heurística: `author + year + firstSignificantWord`, em que `author` =
   - `lastName`/`name` do primeiro creator, ou
   - para `statute`: `legislativeBody` → `Legislative Body:` em `extra` → parse de `nameOfAct` (ex.: "European Parliament and the Council" → `eu`), ou
   - para `webpage`: `websiteTitle` → primeiro *label* do *hostname*, ou
   - para `report`/`document`: `institution` → `publisher`, ou
   - `anon` como último recurso, com sufixo `-XXXX` (4 chars do Zotero key) automaticamente.

Colisões legítimas (mesmo author + year + firstWord) também resolvidas com sufixo `-XXXX`.

## Princípio: read-only por convenção

`sync.mjs` **não** chama endpoints de escrita, mesmo que a chave permita. Toda a escrita na biblioteca acontece via Zotero *desktop* ou via futuro `zotero-write.mjs` com `--dry-run` por defeito. Reduz risco de *bugs* corrompedores.

## Integração com Overleaf

O `dissertation.bib` gerado é **a fonte canónica**. Caminhos de consumo:
- **Overleaf nativo**: usar a integração Zotero do Overleaf (puxa directamente da Cloud). Este `.bib` no GitHub é a cópia versionada/auditável, não o consumido pelo Overleaf.
- **Overleaf via GitHub Sync**: o `.bib` chega via *push* do *sync* + GitHub Sync.

Os dois caminhos convergem na mesma fonte (Zotero Cloud), portanto não há divergência possível.

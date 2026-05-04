---
bibkey: huangSurveyDeepLearningbased2024
zotero-key: AGWGBNDU
title: "A Survey on Deep Learning-based Face Anti-Spoofing"
type: journalArticle
creators: "Huang, Chong, Hsu, Hsu, Chiang, Chen, Hsu"
date: 2024-12-17
url: https://doi.org/10.1561/116.20240053
last-sync: 2026-05-04T12:05:58.085Z
---

# A Survey on Deep Learning-based Face Anti-Spoofing

> **Huang, Chong, Hsu, Hsu, Chiang, Chen, Hsu** · *journalArticle* · 2024-12-17 · [link](https://doi.org/10.1561/116.20240053)
> Zotero key: `AGWGBNDU` · Bibkey: `@huangSurveyDeepLearningbased2024`

## Tags
- **type:** `journal`
- **role:** `evidence`, `method`, `motivation`, `state-of-the-art`
- **area:** `ai-act`, `deepfakes`, `federated-learning`, `identity-proofing`, `liveness`, `multimodal-biometrics`, `nis2`, `pad`, `privacy`, `security`, `xai`
- **thesis:** `motivation`, `state-of-the-art`
- **modality:** `face`, `rppg`
- **quality:** `core`, `strong`
- **priority:** `high`, `medium`

## Collections
- PhD_UMinho_Liveness / 40_Thesis_Manuscript / 41_Introduction

---

## Síntese

Huang, Chong, Hsu, Hsu, Chiang, Chen e Hsu (*APSIPA Transactions on Signal and Information Processing*, vol. 13(1), 2024-12-17, pp. 1-33; DOI 10.1561/116.20240053; *gold OA* CC-BY-NC, NOW Publishers). **Revisão sistemática** focada exclusivamente em ***Face Anti-Spoofing*** (FAS) baseado em *deep learning*. Estrutura: revisão dos desafios comuns em FAS, depois agrupamento das técnicas em duas grandes categorias — **two-class FAS** (com *auxiliary supervision*, *local descriptor-enhanced feature learning*, *disentangled feature learning*, *meta-learning*, *adversarial learning*, *data augmentation*, *long-range dependency learning*, e *multimodal learning*) e **one-class FAS** (com *reconstruction supervision*, *statistical learning* e *generative feature learning*, aprendendo a noção de "vivo" apenas a partir de imagens reais). Inclui levantamento de *datasets* públicos disponíveis. Tipo de evidência: revisão sistemática em revista *peer-reviewed* (Q2-Q3 SCImago em processamento de sinal). Alcance: estado da arte mais recente em FAS *deep-learning-based*.

## Função na tese

**Cap. 1, secção "Motivação científica":** **fonte de revisão recente** (Dezembro 2024) que estrutura o estado da arte em FAS de forma directamente alinhada com a focalização da tese (face). Sustenta a afirmação de que «os *surveys* mais recentes documentam ganhos substanciais com o recurso a aprendizagem profunda», com referência específica a *meta-learning*, *aumento de dados* e *modelos generativos para síntese de ataques* (todos cobertos por Huang). Linha de trabalho: estado da arte (Cap. 3) com aplicabilidade transversal — a categorização **two-class vs one-class** é central para SP4 (ADVR-LIV: *one-class* é particularmente relevante para *zero-shot*) e para SP3 (MULTI-LIV: a categoria *multimodal learning* dentro de FAS).

## Diálogo com outras fontes

Complementa @shaheedDeepLearningTechniques2024 (que cobre PAD em múltiplas modalidades; Huang foca-se exclusivamente em face). Mais recente que @yu_deep_2023 e @yu_face_2020. Cita-se no mesmo parágrafo da tese com Shaheed, mas operacionaliza melhor a categorização técnica que servirá Cap. 3+. Conecta-se com @george_biometric_2020 (FAS multi-channel — *multimodal learning* category de Huang) e com @ge_difffas_2024 (DiffFAS — *generative feature learning*). Para o eixo *one-class FAS* / *zero-shot*, ligação directa a @joshi2024synthetic e @ge_difffas_2024.

## Citações úteis

- *Categorização central* (verbatim, *abstract*): «these anti-spoofing methods generally fall into two main categories, i.e., two-class FAS and one-class FAS» — útil em [Cap. 3, estado da arte] e [Cap. 8 ADVR-LIV] como dicotomia estruturante.

- *Técnicas two-class* (verbatim, *abstract*): «auxiliary supervision, local descriptor-enhanced feature learning, disentangled feature learning, meta learning, adversarial learning, data augmentation, long-range dependency learning, and multimodal learning» — útil em [Cap. 3] como mapa do espaço técnico.

- *Técnicas one-class* (verbatim, *abstract*): «reconstruction supervision, statistical learning, and generative feature learning to learn liveness features solely from live images» — útil em [Cap. 8 ADVR-LIV] como base para o argumento de robustez *zero-shot*.

## Reservas

- Tally Scite em 2026-05: 4 *citing publications*; 0 inbound *Smart Citations* — paper publicado em Dezembro 2024, demasiado recente para validação adversarial. Sem retracções declaradas.

- *Gold open access* CC-BY-NC (NOW Publishers/APSIPA) — uso académico permitido sem restrições.

- *Survey* baseado em literatura até ~mid-2024; poderá não cobrir desenvolvimentos pós-LLMs/diffusion mais recentes.

- O acesso ao PDF integral via Scite indica `accessType: publisher` mas `contentDenied: true` — descarregar via DOI directo no editor confirma OA.

- Foco exclusivo em face — para outras modalidades (rPPG, voz, sensores), são necessárias fontes complementares.

## Decisão

- [x] cito-a — Cap. 1 (motivação científica), Cap. 3 (estado da arte), Cap. 7 (MULTI-LIV), Cap. 8 (ADVR-LIV)

- [ ] re-ler quando o tally Scite tiver ≥5 *supporting/contrasting* (estimado 12-18 meses)

- DOI: 10.1561/116.20240053

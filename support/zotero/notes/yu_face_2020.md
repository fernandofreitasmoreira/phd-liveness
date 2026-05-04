---
bibkey: yu_face_2020
zotero-key: E932QCPJ
title: "Face Anti-Spoofing with Human Material Perception"
type: preprint
creators: "Yu, Li, Niu, Shi, Zhao"
date: 2020-07-04
url: http://arxiv.org/abs/2007.02157
last-sync: 2026-05-04T15:55:23.516Z
---

# Face Anti-Spoofing with Human Material Perception

> **Yu, Li, Niu, Shi, Zhao** · *preprint* · 2020-07-04 · [link](http://arxiv.org/abs/2007.02157)
> Zotero key: `E932QCPJ` · Bibkey: `@yu_face_2020`

## Tags
- **type:** `conference`, `journal`
- **role:** `evidence`, `method`, `motivation`, `state-of-the-art`
- **area:** `ai-act`, `deepfakes`, `federated-learning`, `liveness`, `multimodal-biometrics`, `pad`, `privacy`, `xai`
- **thesis:** `MULTI-LIV`, `motivation`, `state-of-the-art`
- **modality:** `face`, `rppg`
- **quality:** `strong`, `useful`
- **priority:** `high`, `medium`

## Collections
- PhD_UMinho_Liveness / 40_Thesis_Manuscript / 41_Introduction

---

## Síntese

Yu, Li, Niu, Shi e Zhao (***Face Anti-Spoofing with Human Material Perception***, ECCV 2020 — *Computer Vision — ECCV 2020*, vol. 12356, pp. 557-575, Springer; DOI 10.1007/978-3-030-58571-6_33; *pre-print* arXiv 2007.02157). **Reformulação conceptual** do problema de FAS: em vez de tratar como classificação binária *live/spoof*, os autores propõem-no como **percepção da diferença material humana** entre tecidos reais (pele) e materiais sintéticos (papel, vidro, silicone). Apresentam o **BCN** (*Bilateral Convolutional Network*) que opera ao nível dos materiais e aprende discriminação por traços texturais físicos. Tipo de evidência: *paper* metodológico em *top-tier conference* (ECCV). Alcance: avanço conceptual em FAS *deep-learning-based*. *Scite tally* em 2026-05: 177 *citing publications*, 78 *Smart Citations* (0 *supporting* / 0 *contrasting* / 78 *mentioning*) — paper canónico, padrão consistente com fundadores recentes.

## Função na tese

**Cap. 1, secção "Motivação científica":** sustenta a afirmação sobre os progressos em FAS por **reformulação conceptual** — não apenas melhorias quantitativas mas mudanças no modo de pensar o problema. **Cap. 7 (MULTI-LIV):** referência directa para a discussão sobre **sinais texturais de material** como dimensão de fusão. **Cap. 3 (Estado da arte):** posicionamento metodológico relevante. Linha de trabalho: SP3 (MULTI-LIV) prioritariamente; transversal a SP1 (XAI-LIV — material perception é interpretável) e SP4 (ADVR-LIV — robustez a novos materiais).

## Diálogo com outras fontes

Reformulação conceptual no quadro estabelecido por @yu_deep_2023 (de que Yu é também co-autor — survey TPAMI). Conecta-se com @huangSurveyDeepLearningbased2024 (que estrutura *two-class FAS*; "material perception" é uma das vertentes de *disentangled feature learning*). Antecede metodologicamente @ge_difffas_2024 (DiffFAS — usa modelos generativos para sintetizar variação de material). Diálogo natural com @george_biometric_2020 (multi-channel — capta diferenças materiais via canais físicos como NIR/thermal; Yu 2020 capta-as conceptualmente no domínio visual). Suporta a categoria *deepfake attack* na taxonomia @europeanunionagencyforcybersecurity.RemoteIdentityProofing2022 (já que material perception é fragil a deepfakes que aprenderam reproduzir textura de pele).

## Citações úteis

- *Reformulação conceptual* (verbatim, *abstract*): «we rephrase face anti-spoofing as a material recognition problem» — útil em [Cap. 1, motivação científica] e [Cap. 7, MULTI-LIV] como ângulo conceptual.

- *Premissa material* (verbatim, *abstract*): «All these cues are based on the discrepancy among physical materials (e.g., skin, glass, paper and silicone)» — útil para fundamentar a fusão multimodal sobre base material.

## Reservas

- **Closed access** (Springer ECCV proceedings) — descarregar via subscrição U. Minho ou via arXiv 2007.02157 (versão *pre-print*).

- Paper de 2020 — anterior à era *foundation models* e *diffusion*; a abordagem *material perception* é desafiada por ataques que aprendem a reproduzir características materiais (cf. @ge_difffas_2024).

- O *dataset* primário é OULU-NPU + CASIA-MFSD + Replay-Attack — sem componente multi-canal (color only). Para extrapolação para multimodalidade plena, complementar com @george_biometric_2020.

- Sem retracções declaradas.

- Tally Scite consistente (78 *mentioning*, 0 *supp/contr*) — paper canónico citado como *prior work* sem validação adversarial activa significativa.

## Decisão

- [x] cito-a — Cap. 1 (motivação científica), Cap. 3 (estado da arte), Cap. 7 (MULTI-LIV)

- [ ] descarregar arXiv 2007.02157 para citações verbatim em Cap. 7 (descrição BCN)

- DOI: 10.1007/978-3-030-58571-6_33

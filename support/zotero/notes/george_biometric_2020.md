---
bibkey: george_biometric_2020
zotero-key: VSUZANV5
title: "Biometric Face Presentation Attack Detection with Multi-Channel Convolutional Neural Network"
type: journalArticle
creators: "George, Mostaani, Geissenbuhler, Nikisins, Anjos, Marcel"
date: 2020
url: http://arxiv.org/abs/1909.08848
last-sync: 2026-05-04T15:50:56.130Z
---

# Biometric Face Presentation Attack Detection with Multi-Channel Convolutional Neural Network

> **George, Mostaani, Geissenbuhler, Nikisins, Anjos, Marcel** · *journalArticle* · 2020 · [link](http://arxiv.org/abs/1909.08848)
> Zotero key: `VSUZANV5` · Bibkey: `@george_biometric_2020`

## Tags
- **type:** `journal`
- **role:** `evidence`, `method`, `motivation`, `state-of-the-art`
- **area:** `ai-act`, `deepfakes`, `federated-learning`, `liveness`, `multimodal-biometrics`, `pad`, `privacy`, `xai`
- **thesis:** `MULTI-LIV`, `motivation`, `state-of-the-art`
- **modality:** `multimodal`, `rppg`
- **method:** `feature-fusion`
- **quality:** `core`, `strong`
- **priority:** `high`, `medium`

## Collections
- PhD_UMinho_Liveness / 40_Thesis_Manuscript / 41_Introduction

---

## Síntese

George, Mostaani, Geissenbuhler, Nikisins, Anjos e Marcel (***Biometric Face Presentation Attack Detection With Multi-Channel Convolutional Neural Network***, *IEEE Transactions on Information Forensics and Security* — TIFS, vol. 15, pp. 42-55, 2020; DOI 10.1109/TIFS.2019.2916652; *open access* verde via arXiv 1909.08848). **Paper de referência** do *Idiap Research Institute* que propõe abordagem **multi-canal CNN** para PAD facial, juntando **cor, profundidade, infravermelho próximo (NIR) e térmico**. Introduzem o ***dataset* WMCA** (*Wide Multi-Channel presentation Attack*), com ampla variedade de ataques 2D e 3D (incluindo máscaras de silicone) tanto para *impersonation* como *obfuscation*. Resultado central: a abordagem multi-canal atinge **ACER de 0.3%** no WMCA, superando *baselines* baseadas em *features* manuais e em CNNs uni-canal. Disponibilizam código e dados publicamente para reprodutibilidade. *Scite tally* em 2026-05: 276 *citing publications*, 235 *Smart Citations* (1 *supporting* / 0 *contrasting* / 224 *mentioning*) — paper canónico em PAD multi-canal. Tipo de evidência: *paper* metodológico *peer-reviewed* em revista Q1 (TIFS) com *dataset* e código abertos. Alcance: estado da arte 2020 em PAD multi-canal.

## Função na tese

**Cap. 1, secção "Motivação científica":** sustenta a afirmação sobre os progressos em **fusão multimodal/multi-canal** para PAD. **Cap. 3 (Estado da arte):** referência canónica em PAD multi-canal. **Cap. 7 (MULTI-LIV):** **fonte central** que demonstra empiricamente o ganho da fusão multi-canal vs uni-canal — base directa para SP3. **Cap. 8 (ADVR-LIV):** WMCA é potencial *dataset* para a tese. Linha de trabalho: SP3 (MULTI-LIV) prioritariamente; SP4 (ADVR-LIV); transversal a SP1 (XAI-LIV — multi-canal facilita explicações por canal).

## Diálogo com outras fontes

Integra rPPG (cf. @xiaobai_li_generalized_2016, @liu_3d_2016) como uma das modalidades adicionais possíveis (na verdade George 2020 não usa rPPG mas é referenciado pelos autores como complementaridade discutida). Aplica multi-canal CNN no quadro estabelecido por @yu_deep_2023 e @huangSurveyDeepLearningbased2024. Suporta empiricamente a categoria *multimodal learning* da taxonomia *two-class* de @huangSurveyDeepLearningbased2024. Operacionaliza tecnicamente o que a ENISA caracteriza em @europeanunionagencyforcybersecurity.RemoteIdentityProofing2022 e @europeanunionagencyforcybersecurity.RemoteIDProofing2024 (taxonomias de presentation attacks que multi-channel detection mitiga). Liga-se com @ge_difffas_2024 (DiffFAS — geração de ataques sintéticos sobre os mesmos canais).

## Citações úteis

- *Tese central* (verbatim, *abstract*): «As the quality of presentation attack instruments improves over time, achieving reliable PA detection with visual spectra alone remains very challenging. We argue that analysis in multiple channels might help to address this issue» — útil em [Cap. 1] e [Cap. 7].

- *Multi-canal específico* (verbatim, *abstract*): «Data from different channels such as color, depth, near-infrared and thermal are available to advance the research in face PAD» — útil em [Cap. 7] como caracterização do conjunto de canais.

- *Resultado experimental* (verbatim, *abstract*): «outperform the baselines achieving an ACER of 0.3% on the introduced dataset» — útil em [Cap. 7] como *baseline* quantitativa.

- *Reprodutibilidade* (verbatim, *abstract*): «The database and the software to reproduce the results are made available publicly» — útil para argumento sobre reprodutibilidade científica do estado da arte.

## Reservas

- Multi-canal exige **hardware específico** (depth + NIR + thermal) que não está universalmente disponível em smartphones de consumidor. A tese deve negociar este *trade-off* na sua arquitectura *on-device*.

- ACER de 0.3% no WMCA é resultado em condições controladas — degradação em *cross-dataset* / *cross-domain* não foi exaustivamente explorada na publicação original.

- Paper de 2020 — métodos posteriores podem ter superado quantitativamente os resultados (verificar *leaderboard* WMCA).

- *Open access* verde — versão arXiv 1909.08848 disponível.

- Sem retracções declaradas.

- Tally Scite robusto (235 Smart Citations, 1 supporting / 0 contrasting / 224 mentioning) — paper canónico no domínio.

## Decisão

- [x] cito-a — Cap. 1 (motivação científica), Cap. 3 (estado da arte), Cap. 7 (MULTI-LIV — fonte central), Cap. 8 (ADVR-LIV)

- [ ] descarregar PDF (arXiv) para citações verbatim em Cap. 7; considerar WMCA como *dataset* para experimentação da tese

- DOI: 10.1109/TIFS.2019.2916652 · arXiv: 1909.08848

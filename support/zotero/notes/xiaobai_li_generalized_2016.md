---
bibkey: xiaobai_li_generalized_2016
zotero-key: 6A6HFBBE
title: "Generalized face anti-spoofing by detecting pulse from face videos"
type: journalArticle
creators: "Xiaobai Li, Komulainen, Zhao, Pong-Chi Yuen, Pietikainen"
date: 12/2016
url: http://ieeexplore.ieee.org/document/7900300/
last-sync: 2026-05-04T15:50:56.131Z
---

# Generalized face anti-spoofing by detecting pulse from face videos

> **Xiaobai Li, Komulainen, Zhao, Pong-Chi Yuen, Pietikainen** · *journalArticle* · 12/2016 · [link](http://ieeexplore.ieee.org/document/7900300/)
> Zotero key: `6A6HFBBE` · Bibkey: `@xiaobai_li_generalized_2016`

## Tags
- **type:** `conference`, `journal`
- **role:** `evidence`, `method`, `motivation`, `state-of-the-art`
- **area:** `ai-act`, `deepfakes`, `federated-learning`, `liveness`, `multimodal-biometrics`, `pad`, `privacy`, `xai`
- **thesis:** `MULTI-LIV`, `motivation`, `state-of-the-art`
- **modality:** `rppg`
- **quality:** `core`, `strong`
- **priority:** `high`, `medium`

## Collections
- PhD_UMinho_Liveness / 40_Thesis_Manuscript / 41_Introduction

---

## Síntese

Li, Komulainen, Zhao, Yuen e Pietikäinen (***Generalized face anti-spoofing by detecting pulse from face videos***, ICPR 2016, pp. 4244-4249; DOI 10.1109/ICPR.2016.7900300). **Paper pioneiro** que aplica detecção de pulso por *remote photoplethysmography* (**rPPG**) ao problema da prova de vida facial. Premissa central: «*a pulse signal exists in a real living face but not in any mask or print material*» — fornece pista fisiológica universal e generalizável para detectar ataques. Avaliação em duas vertentes: (1) demonstração em base 3DMAD; (2) **experiência *cross-database* com máscaras REAL-F de alta qualidade**, em que métodos baseados apenas em textura falham mas o rPPG detecta os ataques que «*never seen during development*». Conclusão metodológica: combinação cascata complementar — rPPG contra ataques de impressão; análise de cor/textura contra ataques de vídeo. *Scite tally* em 2026-05: 169 *citing publications*, 53 *Smart Citations* (0 *supporting* / 0 *contrasting* / 53 *mentioning*) — paper canónico mas com baixa validação adversarial substantiva por agora. Tipo de evidência: *paper* metodológico com avaliação experimental. Alcance: estado da arte 2016 em rPPG-FAS; persiste como referência fundadora.

## Função na tese

**Cap. 1, secção "Motivação científica":** suporta a afirmação sobre os progressos em **detecção baseada em sinais fisiológicos**, particularmente rPPG, que a tese vê como dimensão central de SP3 (MULTI-LIV). **Cap. 7 (MULTI-LIV):** **fonte canónica fundadora** — qualquer discussão de rPPG na tese parte daqui. Linha de trabalho: SP3 (MULTI-LIV) prioritariamente — fixa rPPG como modalidade de fusão; transversal a SP4 (ADVR-LIV) — generalização *cross-domain*.

## Diálogo com outras fontes

Fundadora dentro de rPPG-FAS. Conecta-se directamente com @liu_3d_2016 (publicado quase em simultâneo, focando especificamente em máscaras 3D com rPPG; complementaridade temática). Antecede @george_biometric_2020 (multi-channel CNN com rPPG entre os canais). Fonte da posição da literatura mais recente — @huangSurveyDeepLearningbased2024 e @yu_deep_2023 (surveys que situam rPPG no quadro da fusão multimodal). Em ligação a @europeanunionagencyforcybersecurity.RemoteIdentityProofing2022 (que enumera ataques contra máscara 3D na taxonomia ENISA — rPPG é a defesa fisiológica).

## Citações úteis

- *Premissa fisiológica fundadora* (verbatim, *abstract*): «a pulse signal exists in a real living face but not in any mask or print material, the method could be a generalized solution for face liveness detection» — útil em [Cap. 1] e [Cap. 7] para fixar a base conceptual.

- *Resultado *cross-database*** (verbatim, *abstract*): «our cross-database experiment with high quality REAL-F masks shows that the pulse based method is able to detect even the previously unseen mask type whereas texture based methods fail to generalize beyond the development data» — útil em [Cap. 7] e [Cap. 8 ADVR-LIV] como evidência de robustez *cross-domain* fundadora.

- *Sistema cascata* (paráfrase): combinação de rPPG (contra impressão) + textura de cor (contra vídeo replay) — útil em [Cap. 7] como princípio de fusão complementar.

## Reservas

- Paper de 2016 — anterior a desenvolvimentos significativos em *deep-learning rPPG* (DeepPhys, RhythmNet, etc.) e em geração de ataques sintéticos (deepfakes pós-2018). A tese deve citar Li 2016 como fundadora e complementar com literatura recente.

- *Cross-database* test limitado a um tipo específico de máscaras (REAL-F) — generalização para todo o espaço de ataques (3D printed, silicone, deepfake video) requer validação posterior.

- Métodos baseados em texturas/SDK comerciais melhoraram entretanto; o argumento de superioridade do rPPG deve ser actualizado com literatura mais recente.

- Tally Scite revela 53 *mentioning* sem *supporting/contrasting* — interessante: paper canónico mas que a comunidade trata mais como *prior work* do que como objecto de validação adversarial activa.

- *Open access* verde via arXiv ou via subscrição IEEE.

- Sem retracções declaradas.

## Decisão

- [x] cito-a — Cap. 1 (motivação científica) e Cap. 7 (MULTI-LIV, base canónica rPPG)

- [ ] descarregar PDF para citações verbatim em Cap. 7 (descrição do método de extração de pulso)

- DOI: 10.1109/ICPR.2016.7900300

---
bibkey: Grother2022FRVT
zotero-key: NWPKTIMA
title: "Face Recognition Vendor Test (FRVT) Part 8: Summarizing Demographic Differentials"
type: report
creators: "Grother, Ngan, Hanaoka"
date: 2022
url: https://doi.org/10.6028/NIST.IR.8429
last-sync: 2026-05-04T16:09:38.745Z
---

# Face Recognition Vendor Test (FRVT) Part 8: Summarizing Demographic Differentials

> **Grother, Ngan, Hanaoka** · *report* · 2022 · [link](https://doi.org/10.6028/NIST.IR.8429)
> Zotero key: `NWPKTIMA` · Bibkey: `@Grother2022FRVT`

## Tags
- **type:** `report`
- **role:** `benchmark`, `context`, `evidence`
- **area:** `liveness`, `pad`
- **thesis:** `regulatory-framework`, `state-of-the-art`
- **modality:** `face`
- **quality:** `core`, `strong`
- **priority:** `high`

## Collections
- PhD_UMinho_Liveness / 20_Compliance_and_Standards / 24_ISO_30107_and_PAD_Standards

---

## Síntese

Grother (***Face Recognition Vendor Test (FRVT) Part 8: Summarizing Demographic Differentials***, NIST Interagency Report **NIST IR 8429**, **Julho 2022**; DOI 10.6028/NIST.IR.8429; *open access* gratuito via NIST). Apresenta **medidas-síntese** (*summary inequity measures*) sobre disparidades demográficas de algoritmos de reconhecimento facial submetidos ao FRVT *one-to-one*. **Sucessor metodológico de NIST IR 8280 (FRVT Part 3, Dezembro 2019)**, que documentou pela primeira vez a magnitude das disparidades. Conclusões empíricas centrais (do NIST IR 8280, sintetizadas neste relatório): **disparidades de *false positive rate* são generalizadas** mesmo em imagens de elevada qualidade, com variações de **factor 720×** entre grupos demográficos (ex.: homens polacos 35-50 anos têm FMR 1:25.000; mulheres nigerianas 65+ anos têm FMR 1:35 — comparação no mesmo limiar); *false negative rates* variam por factor ~3. Suporta o desenvolvimento da norma **ISO/IEC 19795-10** (*Quantifying biometric system performance across demographic groups*, esperada 2023) para a qual fornece base empírica. Tipo de evidência: relatório técnico oficial NIST com metodologia rigorosa e dados sistemáticos. Alcance: referência *de facto* para discussões sobre equidade biométrica.

## Função na tese

**Cap. 2, contexto de discriminação:** **fonte canónica empírica** sobre disparidades demográficas em sistemas biométricos faciais — argumento central para a discussão sobre **fairness e art. 10.º(5) AI Act** (que requer dados representativos). **Cap. 7 (MULTI-LIV):** suporta o argumento sobre necessidade de avaliação demográfica em PAD/FAS. **Cap. 8 (ADVR-LIV):** PA detection beneficia de dados estratificados; a disparidade demográfica é vector adversarial *de facto*. Linha de trabalho: Cap. 2 (regulação × fairness); Cap. 7 (avaliação multi-modal demográfica); SP1 (XAI-LIV — explicar decisões em populações enviesadas).

## Diálogo com outras fontes

Referência empírica fundadora das discussões sobre fairness biométrica que sustentam @vanBekkum2025Article10 (art. 10.º(5) AI Act exige dados representativos para correcção de viés — fundamento empírico aqui). Conecta-se com a obrigação de governação de dados em @anon2024regulation (AI Act art. 10.º). Articula-se com @temoshokDigitalIdentityGuidelines2025 (NIST SP 800-63A-4 — IAL2/3 invocam standards de equidade que dependem da metodologia desenvolvida em IR 8429). Antecede e enquadra a discussão sobre métricas de *equity* em @huangSurveyDeepLearningbased2024, @yu_deep_2023, @george_biometric_2020 (que devem reportar resultados estratificados).

## Citações úteis

- *Identificação canónica* (verbatim factual): «NIST IR 8429: Face Recognition Vendor Test (FRVT) Part 8: Summarizing Demographic Differentials», Patrick Grother, Information Access Division, ITL, NIST, July 2022.

- *Disparidade massiva FMR* (paráfrase fiel ao Abstract+Introdução): variações de **factor 720×** entre grupos demográficos no mesmo limiar; FMR varia por **factor ~3**.

- *Foco metodológico* (verbatim, *Abstract*): «this report compiles and analyzes various demographic summary measures for how face recognition false positive and false negative error rates differ across age, sex, and race-based demographic groups» — útil em [Cap. 2] e [Cap. 7].

- *Atribuição de causas FNR vs FMR* (verbatim, *Abstract*): «false negative inequities are substantially due to poor photography of certain groups including under-exposure of dark-skinned individuals [...] much larger false positive variations [...] must be mitigated by algorithm developers» — útil para argumento sobre responsabilidades fragmentadas (captura vs algoritmo).

- *Ligação a ISO/IEC* (verbatim factual): «This report documents various summary measures. It is intended to support developers, and to inform development of the ISO/IEC 19795-10 standard entitled Quantifying biometric system performance across demographic groups».

## Reservas

- Relatório de **2022** — campo evolui rapidamente; alguns números específicos podem ter mudado em FRVT mais recentes. Verificar tabela actualizada no portal NIST FRVT.

- Foco em **identificação facial** (matching), não especificamente em PAD/liveness — extrapolação para PAD demográfico é argumento por analogia, não por replicação directa.

- Avaliação cobre principalmente algoritmos voluntariamente submetidos ao FRVT — *self-selection bias* potencial (algoritmos com viés mais grave podem não ter sido submetidos).

- Free of charge via NIST. Sem retracções; pequena release note 2023-03-24 (correcção subscript).

- Relatório técnico institucional — não é literatura *peer-reviewed* académica, mas é referência *de facto* internacional.

## Decisão

- [x] cito-a — Cap. 2 (regulação × fairness), Cap. 7 (avaliação multi-modal demográfica), Cap. 8 (ADVR-LIV)

- [ ] verificar dados FRVT mais recentes no portal NIST quando finalizar Cap. 7 — actualização para versão mais recente possível

- DOI: 10.6028/NIST.IR.8429

---
bibkey: europeanunionagencyforcybersecurity.RemoteIdentityProofing2022
zotero-key: DL8ILRJV
title: "Remote identity proofing: attacks & countermeasures."
type: report
creators: "European Union Agency for Cybersecurity."
date: 2022
url: https://data.europa.eu/doi/10.2824/183066
last-sync: 2026-05-04T11:06:33.055Z
---

# Remote identity proofing: attacks & countermeasures.

> **European Union Agency for Cybersecurity.** · *report* · 2022 · [link](https://data.europa.eu/doi/10.2824/183066)
> Zotero key: `DL8ILRJV` · Bibkey: `@europeanunionagencyforcybersecurity.RemoteIdentityProofing2022`

## Tags
- **type:** `report`
- **role:** `context`, `evidence`, `motivation`, `state-of-the-art`
- **area:** `deepfakes`, `digital-identity`, `identity-proofing`, `liveness`, `nis2`, `pad`, `security`
- **thesis:** `motivation`, `regulatory-framework`, `state-of-the-art`
- **quality:** `core`, `strong`
- **priority:** `high`

## Collections
- PhD_UMinho_Liveness / 40_Thesis_Manuscript / 41_Introduction

---

## Síntese

ENISA, *Remote Identity Proofing: Attacks & Countermeasures* (Janeiro 2022, atualizado Junho 2022, v1.1; ISBN 978-92-9204-549-4; DOI 10.2824/183066). Constrói sobre relatório anterior da agência (Março 2021) e foca-se em **ataques de apresentação facial contra prova de vida remota**. Identifica e classifica quatro tipos principais de ataques: *photo attack*, *video replay attack*, *3D mask attack* e *deepfake attack*. Recomenda controlos em cinco domínios: ambientais, do documento de identidade, de detecção de ataques de apresentação (PAD), organizacionais e processuais. Metodologia mista — *desk research*, entrevistas a fornecedores (Thales DIS, FaceTec, IDnow, Veriff, etc.), *survey* e *workshop* com agências nacionais (ANSSI, BSI, etc.) e academia. Tipo de evidência: relatório oficial de agência europeia (*grey literature* de elevada autoridade). Alcance: ecossistema digital UE, âmbito eIDAS + AMLD5.

## Função na tese

**Cap. 1, secção "Motivação empírica":** sustenta a transição argumentativa de "fraude por engenharia social" para "fraude pela apropriação da apresentação biométrica". A ENISA é a primeira fonte da tese a enumerar o conjunto canónico de vectores (foto, replay vídeo, máscara 3D, deepfake) — ancora a relevância dos mecanismos de prova de vida.

**Cap. 2, secção "Outras normas técnicas relevantes":** posicionado em par com o ENISA 2024 (*good practices*) como **referência técnica EU sem força normativa** que complementa ISO/IEC 30107-3 e CEN/TS 18099 na identificação de vectores de ataque e definição de requisitos.

Linha de trabalho: transversal — particularmente relevante para SP4 (ADVR-LIV), onde a taxonomia ENISA fixa o conjunto adversarial mínimo a testar.

## Diálogo com outras fontes

Antecede e é complementado por @europeanunionagencyforcybersecurity.RemoteIDProofing2024 (mesma agência, refinamento em *good practices*). Complementar a @schmittDigitalDeceptionGenerative2024 (Schmitt cobre engenharia social alargada; ENISA foca-se em ataques biométricos). Ancora institucionalmente a literatura técnica em @huangSurveyDeepLearningbased2024, @yu_deep_2023 e @shaheedDeepLearningTechniques2024 (lado da defesa). Suporta empiricamente @sandovalThreatDeepfakesCriminal2024 e o pilar *Realistic Content Creation* de @schmittDigitalDeceptionGenerative2024 (lado do atacante). Antecede normativamente @CENTS18099_2024 (que cobre a lacuna de *injection attacks*).

## Citações úteis

- *Definição operativa* (verbatim, p. 7): «Identity proofing is the process by which a service provider collects and validates information about an applicant and verifies that collected and validated information actually belongs to the applicant» — útil em [Cap. 1, motivação] e [Cap. 2, definições].

- *Taxonomia adversarial* (verbatim, executive summary): «photo attack, video of user replay attack, 3D mask attack, deepfake attack» — útil em [Cap. 8, ADVR-LIV] como base do conjunto adversarial canónico EU.

- *Domínios de controlos* (verbatim, executive summary): «environmental controls, identity document controls, presentation attack detection, organisational controls, process controls» — útil em [Cap. 9, integração *end-to-end*] como mapa estruturante da arquitectura de defesa.

- *Delimitação de âmbito* (verbatim, p. 9): «This report does not include analysis of remote identity proofing methods that are based on electronic identification or digital certificates» — útil para enquadrar a complementaridade entre prova de vida (foco da tese) e métodos baseados em certificados (eIDAS, EUDI Wallet).

- *Validação institucional* (verbatim, p. 8): a relevância do RIP é reforçada pelo facto de o âmbito do relatório ir «far beyond the context of trust services [...] as covered by the 5th EU Anti-Money Laundering directive (AMLD5)».

## Reservas

- Versão 1.1 (Junho 2022) — anterior à democratização generalizada de LLMs e *diffusion text-to-video* (2023+); a sofisticação descrita dos *deepfakes* é a do estado-da-arte 2021-2022.

- O relatório foca *presentation attacks*, mas trata *injection attacks* (*camera-bypass*) apenas marginalmente — esse vector é desenvolvido no ENISA 2024 e na CEN/TS 18099:2024.

- *Grey literature*: não revisto por pares em sentido académico, mas validada por consulta extensiva a indústria, agências nacionais e academia (lista nominal nos *Acknowledgements*).

- *Open access* via publicação ENISA, sem paywall. Sem retracções nem correcções declaradas.

## Decisão

- [x] cito-a — Cap. 1 (motivação), Cap. 2 (normas técnicas), Cap. 8 (ADVR-LIV, taxonomia adversarial)

- [ ] re-ler se ENISA publicar nova edição substantiva (provável pós entrada plena em vigor do eIDAS 2.0)

- DOI: 10.2824/183066 · ISBN 978-92-9204-549-4 · Catálogo TP-09-21-525-EN-N

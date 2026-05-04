---
bibkey: BSI_ANSSI_EUDI_2025
zotero-key: 9M8AGVBI
title: "Remote Identity Proofing for EUDI Wallet Onboarding: Strengthening Assurance Against Evolving Threats"
type: report
creators: "Bundesamt für Sicherheit in der Informationstechnik (BSI), Agence nationale de la sécurité des systèmes d'information (ANSSI)"
date: 2025
url: https://cyber.gouv.fr/sites/default/files/document/ANSSI_BSI_Joint_Paper_remote_identity_proofing_for_EUDI.pdf
last-sync: 2026-05-04T17:21:57.196Z
---

# Remote Identity Proofing for EUDI Wallet Onboarding: Strengthening Assurance Against Evolving Threats

> **Bundesamt für Sicherheit in der Informationstechnik (BSI), Agence nationale de la sécurité des systèmes d'information (ANSSI)** · *report* · 2025 · [link](https://cyber.gouv.fr/sites/default/files/document/ANSSI_BSI_Joint_Paper_remote_identity_proofing_for_EUDI.pdf)
> Zotero key: `9M8AGVBI` · Bibkey: `@BSI_ANSSI_EUDI_2025`

## Tags
- **type:** `report`
- **role:** `compliance`, `context`, `method`, `regulation`
- **area:** `eudi-wallet`, `identity-proofing`, `liveness`, `nis2`, `security`
- **thesis:** `regulatory-framework`
- **quality:** `core`, `strong`
- **priority:** `high`

## Collections
- PhD_UMinho_Liveness / 20_Compliance_and_Standards / 25_EUDI_ARF_and_Architecture
- PhD_UMinho_Liveness / 40_Thesis_Manuscript / 48_RegulatoryFramework

---

## Síntese

***Remote Identity Proofing for EUDI Wallet Onboarding: Strengthening Assurance Against Evolving Threats***. **Joint paper das duas autoridades de cibersegurança da Alemanha e França** — *Bundesamt für Sicherheit in der Informationstechnik* (**BSI**) e *Agence nationale de la sécurité des systèmes d'information* (**ANSSI**) — publicado em **2025**. **Sequela do BSI-ANSSI Joint Release de Dezembro 2023** que apresentou os modelos de ameaça gerais; este documento foca o progresso desde 2023 e identifica *gaps* que afectam a fiabilidade do *remote identity proofing video-based* no contexto do **onboarding EUDI Wallet**. **Argumento central**: o onboarding EUDI deve cumprir **Level of Assurance (LoA) High** segundo o eIDAS; embora os sistemas eID nacionais já notificados como LoA High sejam pathway preferencial, o *remote identity proofing* avaliado e certificado é pathway alternativo viável mas com desafios técnicos sérios — sobretudo quando se usam métodos *video-based*. **Goals essenciais identificados**: (1) ***Biometric genuineness*** — confirmar que a face capturada é *live and untampered*; (2) **Document authenticity** — documento de identidade vivo, genuíno, inalterado e em posse do requerente; (3) **Face matching** — comparação biométrica entre face capturada e foto do documento. **Sistemas video devem integrar**: **PAD** (presentation attack detection com *liveness detection*), **IAD** (injection attack detection — detectar *virtual cameras* ou alterações na comunicação), ***randomized challenge response*** contra *replay attacks*, ***tamper detection*** no stream de video (*glitch*, *motion consistency*). Identifica fragilidades do **OCR** (sensível a iluminação, foco, distorção; vector de ataque) e da **leitura NFC** (mais segura mas restringida por leis nacionais). Refere a Proposta sobre Reg. (UE) 2019/1157 art. 11(6) (uso de dados biométricos em documentos de identidade). Tipo de evidência: relatório técnico conjunto de dois reguladores nacionais europeus de elevada autoridade. Alcance: contexto EUDI Wallet e RIDP em geral.

## Função na tese

**Cap. 2, secção "Outras normas técnicas relevantes":** **fonte canónica institucional dual** (BSI + ANSSI) que articula explicitamente o quadro regulatório EUDI Wallet com o requisito técnico de prova de vida. Sustenta a afirmação central da tese sobre a **complementaridade PAD + IAD** como exigência técnica para *onboarding* EUDI. Linha de trabalho: regulatório-arquitectural; relevante para Cap. 1, Cap. 2 e Cap. 9 (integração *end-to-end*).

## Diálogo com outras fontes

Referência institucional dupla que **suporta directamente** a posição da tese sobre a importância simultânea de **PAD e IAD**. Articula-se com @europeanunionagencyforcybersecurity.RemoteIDProofing2024 (ENISA *good practices* — três autoridades europeias alinhadas no mesmo princípio). Conecta-se com @CENTS18099_2024 (CEN/TS 18099 — codifica formalmente IAD que BSI-ANSSI exigem). Antecede e enquadra @temoshokDigitalIdentityGuidelines2025 (NIST SP 800-63A-4) como contraponto americano. Suporta o caso português @AplicacaoMovelGovpt e @AtivarChaveMovel — a CMD activada por biometria/videochamada deve cumprir os mesmos requisitos do EUDI Wallet quando a transição se materializar.

## Citações úteis

- *Lista canónica de mecanismos* (verbatim, p. 3): «Systems using video capture must integrate: Presentation Attack Detection (PAD) including liveness detection mechanisms, robust against presentation attacks; Injection Attack Detection (IAD), such as detecting virtual cameras or other methods altering the intended data communication; Randomized challenge response mechanisms to detect pre-recorded (replay-attacks) content; Tamper detection features in the video stream (e.g. glitch detection, motion consistency)» — útil em [Cap. 2] e [Cap. 9] como mapa estruturante.

- *Verification goals* (verbatim, p. 3): «Biometric genuineness: Confirm that the captured face is live and untampered. Document authenticity: Ensure that the identity document is live, genuine, unaltered and in current possession of the applicant. Face matching: The captured face and the identity document source data (face picture of the rightful holder) are successfully verified by biometric comparison and the identity document is bound to the applicant» — útil para definição operacional dos requisitos.

- *OCR vulnerability* (verbatim, p. 4): «Most remote identity verification systems still rely on optical character recognition (OCR) to extract data from ID documents. However, OCR is particularly sensitive to lighting, focus, and image distortion. This process introduces a high risk of incorrect data capture and especially the potential usage as an attack vector» — útil para argumento sobre a necessidade de NFC/chip reading.

- *LoA High requirement* (verbatim, p. 2): «onboarding procedures must meet Level of Assurance (LoA) High, as required by eIDAS» — útil para fundamentar o nível de exigência técnica.

## Reservas

- *Joint release* institucional, sem revisão por pares académica — força institucional alta mas natureza editorial diferente da literatura *peer-reviewed*.

- Foca *video-based remote identity proofing* — não cobre exaustivamente outras modalidades. Para PAD multimodal, complementar com @george_biometric_2020 e @huangSurveyDeepLearningbased2024.

- Documento sucessor do BSI-ANSSI 2023 (referenciado no PDF) — leitura conjunta enriquece análise.

- *Open access* via cyber.gouv.fr (publicação institucional ANSSI).

- Sem retracções declaradas.

## Decisão

- [x] cito-a — Cap. 1 (motivação), Cap. 2 (normas técnicas relevantes), Cap. 9 (integração end-to-end)

- [ ] re-ler quando BSI-ANSSI publicarem novo *joint release* (ciclo bianual aparente)

---
bibkey: europeanunionagencyforcybersecurity.RemoteIDProofing2024
zotero-key: VDCFA3JN
title: "Remote ID proofing: good practices."
type: report
creators: "European Union Agency for Cybersecurity."
date: 2024
url: https://data.europa.eu/doi/10.2824/885606
last-sync: 2026-05-04T11:59:06.799Z
---

# Remote ID proofing: good practices.

> **European Union Agency for Cybersecurity.** · *report* · 2024 · [link](https://data.europa.eu/doi/10.2824/885606)
> Zotero key: `VDCFA3JN` · Bibkey: `@europeanunionagencyforcybersecurity.RemoteIDProofing2024`

## Tags
- **type:** `report`
- **role:** `evidence`, `method`, `motivation`, `state-of-the-art`
- **area:** `deepfakes`, `digital-identity`, `eudi-wallet`, `identity-proofing`, `liveness`, `nis2`, `pad`, `security`
- **thesis:** `motivation`, `regulatory-framework`
- **quality:** `core`, `strong`
- **priority:** `high`

## Collections
- PhD_UMinho_Liveness / 40_Thesis_Manuscript / 41_Introduction

---

## Síntese

ENISA, *Remote ID Proofing: Good Practices* (Março 2024; ISBN 978-92-9204-661-3; DOI 10.2824/885606; CC-BY 4.0). Sequência ao relatório de 2022 (@europeanunionagencyforcybersecurity.RemoteIdentityProofing2022) com **âmbito alargado** — cobre agora **presentation attacks E injection attacks** contra face e documento de identidade, introduzindo formalmente **IAD** (*Injection Attack Detection*) como categoria de controlo distinta de PAD. Estrutura: Cap. 2 (background com revisão de desenvolvimentos legais e regulatórios — eIDAS 2.0, EUDIW), Cap. 3 (visão actualizada de ataques: presentation, injection, identity document), Cap. 4 (boas práticas em seis domínios — environmental, PAD, **IAD**, identity document, procedural, organisational), Cap. 5 (conclusões e *wider concerns*). Identifica como práticas mais relevantes para defender documentos de identidade os ***status lookups* em registos** e o **NFC chip scanning** (não consistentemente legalizado para entidades privadas em toda a UE). Metodologia: revisão de literatura + dois inquéritos + entrevistas de seguimento com TSPs, fornecedores RIDP, *conformity assessment bodies*, autoridades nacionais (ANSSI, BSI, DIGST, RIA, AGID, etc.). Tipo de evidência: relatório oficial de agência europeia. Alcance: ecossistema digital UE no contexto de eIDAS 2.0 e EUDIW.

## Função na tese

**Cap. 1, secção "Motivação empírica":** assinala que «ataques de apresentação e ataques de injecção» são vectores em crescimento — fornece a justificação institucional EU para a relevância contemporânea da prova de vida. **Cap. 2, secção "Do PAD":** documenta que a delimitação da ISO/IEC 30107-3 (que cobre apenas Tipo 1 — apresentação ao sensor) deixa não coberta uma superfície crescente, e que a ENISA 2024 reconhece IAD como categoria autónoma. **Cap. 2, secção "A ecologia dos esquemas de avaliação de conformidade":** suporta a observação de **heterogeneidade nacional** como factor de potencial *race-to-the-bottom* regulatório (citação directa). **Cap. 2, secção "Outras normas técnicas relevantes":** posicionado em par com ENISA 2022 como referência técnica europeia complementar a ISO/IEC 30107 e CEN/TS 18099:2024. Linha de trabalho: regulatório/metodológico, transversal a SP1, SP3 e SP4.

## Diálogo com outras fontes

Sequência directa de @europeanunionagencyforcybersecurity.RemoteIdentityProofing2022 — mesma agência, mesmo tema, **âmbito alargado** (introduz IAD). Concorda com @CENTS18099_2024 — a CEN/TS 18099 é a operacionalização normativa formal do que a ENISA 2024 estabelece como boa prática. Diálogo crítico com @anon2016regulation (RGPD) na questão da legalidade do *NFC chip scanning* por entidades privadas — a ENISA aponta inconsistência legal como obstáculo. Suporta empiricamente @schmittDigitalDeceptionGenerative2024 e @sandovalThreatDeepfakesCriminal2024 (lado da defesa institucional ao fenómeno que ambos descrevem do lado da ameaça). Conecta-se com @anon2024regulation (AI Act, alto risco) na lógica de "defensive good practices". Antecede @BSI_ANSSI_EUDI_2025 (relatório conjunto ANSSI-BSI sobre prova de identidade no contexto EUDIW).

## Citações úteis

- *Âmbito alargado* (verbatim, capa lateral, p. 8): «This report has an extended scope in comparison with the previous ENISA report on RIDP, covering presentation and injection attacks against the face and identity documents» — útil em [Cap. 1, motivação] e [Cap. 2, do PAD] para fixar a transição PAD → PAD+IAD.

- *Justificação contextual* (verbatim, executive summary, p. 6): «The increasing volume and sophistication of attacks causes concerns regarding the trustworthiness of the process. This relates to the emergence of new types of attacks, such as high-quality deepfakes, and the availability of computational resources and tools which allow scaling and automation» — útil em [Cap. 1, motivação empírica].

- *Race-to-the-bottom regulatório* (paráfrase fiel ao argumento da Cap. 5): a heterogeneidade dos esquemas nacionais de certificação é factor de fragmentação e potencial *race-to-the-bottom*, justificando harmonização — útil em [Cap. 2, ecologia dos esquemas de avaliação de conformidade].

- *Limitação NFC* (verbatim, executive summary, p. 7): «while scanning the NFC chip to verify the holder's personal information and biometric photo could eliminate several of the synthetic attacks, it is not currently legally and consistently permitted for private entities (trust service providers (TSPs), RIDP providers) across the EU» — útil em [Cap. 2, secção sobre articulação RGPD/eIDAS] e [Cap. 9, integração *end-to-end*].

- *Lista de domínios de controlo* (paráfrase fiel, Cap. 4): seis domínios — *environmental, PAD, IAD, identity document, procedural, organisational* — útil em [Cap. 9] como mapa estruturante da arquitectura de defesa actualizada (face ao 2022, que tinha cinco).

## Reservas

- *Grey literature* — não revisto por pares em sentido académico, mas validado por consulta extensiva a indústria, agências nacionais e academia (FaceTec, iProov, IDnow, Veridas, Yoti, Ondato, Inverid, etc.).

- Foco regulatório em **eIDAS 2.0 + EUDIW** — aplicação a contextos comerciais não-europeus requer adaptação.

- Datado de Março 2024 — algumas evoluções tecnológicas posteriores (LLMs multimodais, *diffusion video*) podem não estar cobertas com profundidade.

- *Open access* CC-BY 4.0 (publicação ENISA), texto integral em data.europa.eu.

- Sem retracções nem correcções declaradas.

## Decisão

- [x] cito-a — Cap. 1 (motivação), Cap. 2 (PAD, ecologia de conformidade, normas técnicas), Cap. 9 (integração)

- [ ] re-ler se ENISA publicar nova edição com conteúdo sobre LLMs multimodais ou *diffusion video*

- DOI: 10.2824/885606 · ISBN 978-92-9204-661-3

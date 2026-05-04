---
bibkey: temoshokDigitalIdentityGuidelines2025
zotero-key: WBHDJ22E
title: "Digital Identity Guidelines: Identity Proofing and Enrollment"
type: report
creators: "Temoshok, Abruzzi, Choong, Fenton, Galluzzo, LaSalle, Lefkovitz, Regenscheid, Vachino"
date: 2025/07/31
url: https://csrc.nist.gov/pubs/sp/800/63/a/4/final
last-sync: 2026-05-04T11:06:33.054Z
---

# Digital Identity Guidelines: Identity Proofing and Enrollment

> **Temoshok, Abruzzi, Choong, Fenton, Galluzzo, LaSalle, Lefkovitz, Regenscheid, Vachino** · *report* · 2025/07/31 · [link](https://csrc.nist.gov/pubs/sp/800/63/a/4/final)
> Zotero key: `WBHDJ22E` · Bibkey: `@temoshokDigitalIdentityGuidelines2025`

## Tags
- **type:** `report`
- **role:** `compliance`, `context`, `evidence`, `method`, `motivation`
- **area:** `ai-act`, `deepfakes`, `digital-identity`, `gdpr`, `identity-proofing`, `liveness`, `nis2`, `security`
- **thesis:** `motivation`, `regulatory-framework`
- **quality:** `core`, `strong`
- **priority:** `high`

## Collections
- PhD_UMinho_Liveness / 40_Thesis_Manuscript / 41_Introduction

---

## Síntese

NIST Special Publication 800-63A-4, *Digital Identity Guidelines: Identity Proofing and Enrollment* (Temoshok, Abruzzi, Choong, Fenton, Galluzzo, LaSalle, Lefkovitz, Regenscheid, Vachino; publicado 2025-07-31; DOI 10.6028/NIST.SP.800-63a-4). Define requisitos técnicos para *identity proofing* e *enrollment* em três níveis de garantia — **Identity Assurance Levels** (IAL1, IAL2, IAL3). A versão -4 supera formalmente a NIST SP 800-63A anterior. Para os níveis IAL2 e IAL3, integra **prova de vida como requisito formal** para verificação biométrica remota. Tipo de evidência: directiva técnica oficial do governo federal dos EUA — autoridade reconhecida internacionalmente em *standards* de identidade digital. Alcance: sistemas federais norte-americanos com adopção *de facto* internacional.

## Função na tese

**Cap. 2, secção "Contraponto: NIST SP 800-63A-4":** serve explicitamente como **contraponto comparativo** ao quadro normativo europeu (eIDAS 2.0, AI Act, ENISA, ISO/IEC 30107, CEN/TS 18099). Sustenta a afirmação de que a estrutura NIST é **mais prescritiva em níveis de garantia** (IAL1/2/3 com requisitos detalhados por nível) mas **menos exigente em termos regulamentares de IA aplicada à biometria** do que o quadro europeu.

**Cap. 2, secção "Do PAD":** referenciada na discussão sobre a delimitação da ISO/IEC 30107-3 — enquanto a ISO operacionaliza apenas o ponto de ataque na apresentação (Tipo 1), a NIST integra prova de vida como requisito mas com formato menos modular.

Linha de trabalho: regulatório/metodológico. A NIST funciona como referência alternativa, não substituta, do quadro europeu adoptado pela tese.

## Diálogo com outras fontes

Alternativo (não concordante nem contraditório) a @europeanunionagencyforcybersecurity.RemoteIdentityProofing2022 e @europeanunionagencyforcybersecurity.RemoteIDProofing2024 — operam sobre âmbito eIDAS, NIST sobre FIPS. Diálogo natural com @BSI_ANSSI_EUDI_2025 (que faz precisamente esta comparação em contexto de fraude no *onboarding* EUDI Wallet). Complementar a @CENTS18099_2024: NIST não tem ainda norma análoga focada especificamente em *injection attacks*. Posiciona-se face a @anon2024regulation (AI Act): a NIST é prescritiva em IAL mas não classifica os sistemas como "alto risco" no sentido AI Act.

## Citações úteis

- *Foco do guideline* (verbatim, *abstract*): «This guideline focuses on identity proofing and enrollment for use in digital authentication. During the process of identity proofing, an applicant provides evidence to a credential service provider (CSP) reliably identifying themselves, thereby allowing the CSP to assert that identification at a useful identity assurance level. This document defines technical requirements for each of three identity assurance levels» — útil em [Cap. 2, contraponto NIST].

- *Substituição de versão* (verbatim, *abstract*): «This publication supersedes NIST Special Publication (SP) 800-63A» — útil para fixar a versão canónica de referência (-4).

- *Posicionamento na família 800-63* (paráfrase): a SP 800-63A-4 cobre *enrollment* e *identity proofing*; complementada por SP 800-63B (autenticação) e SP 800-63C (federação) — útil para contextualizar a delimitação do documento citado.

## Reservas

- Documento publicado em Julho de 2025 — recente; ainda em fase de adopção pelo *ecosystem* de Trust Service Providers e CSPs federais EUA.

- Foco em sistemas **federais norte-americanos** — aplicação a casos comerciais ou europeus requer adaptação.

- Não inclui análise específica de ataques sintéticos (*deepfakes*) com profundidade técnica — para esse aspecto, a tese complementa com ENISA 2022 e CEN/TS 18099:2024.

- Texto integral em *open access* via csrc.nist.gov; embora indexado como "closed" em alguns agregadores comerciais (Scite, etc.), não há paywall na fonte oficial.

- Sem retracções declaradas; revisões editoriais correntes da família 800-63 fazem parte do processo público de comentários NIST.

## Decisão

- [x] cito-a — Cap. 2 (contraponto NIST + discussão de PAD)

- [ ] re-ler se NIST publicar SP 800-63A-5 ou erratas substantivas

- DOI: 10.6028/NIST.SP.800-63a-4 · URL canónico: https://csrc.nist.gov/pubs/sp/800/63/a/4/final

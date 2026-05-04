---
bibkey: AutenticacaoComChave
zotero-key: SZSKWN32
title: "Autenticação com Chave Móvel Digital"
type: webpage
creators: "Agência para a Reforma Tecnológica do Estado"
date: 3/16/2026
url: https://www.autenticacao.gov.pt/chave-movel-digital/autenticacao
last-sync: 2026-05-04T13:06:48.662Z
---

# Autenticação com Chave Móvel Digital

> **Agência para a Reforma Tecnológica do Estado** · *webpage* · 3/16/2026 · [link](https://www.autenticacao.gov.pt/chave-movel-digital/autenticacao)
> Zotero key: `SZSKWN32` · Bibkey: `@AutenticacaoComChave`

## Tags
- **type:** `website`
- **role:** `context`, `motivation`
- **area:** `digital-identity`, `security`
- **thesis:** `motivation`, `regulatory-framework`
- **quality:** `useful`
- **priority:** `low`, `medium`

## Collections
- PhD_UMinho_Liveness / 40_Thesis_Manuscript / 41_Introduction

---

## Síntese

Página oficial em **autenticacao.gov.pt** (gestão da **ARTE — Agência para a Reforma Tecnológica do Estado**) sobre o **processo de autenticação com Chave Móvel Digital**. Documenta o regime de **dois factores** da CMD: (1) **PIN da CMD** (escolhido na activação); (2) **código de segurança numérico e temporário** recebido via um de quatro canais — **SMS, aplicação móvel gov.pt, e-mail, ou leitura de código QR** através da aplicação gov.pt. Com a aplicação gov.pt instalada, é possível **usar biometria (verificação facial ou impressão digital) em alternativa ao código de segurança**. Apresenta os cinco passos do fluxo de autenticação via telemóvel (selecção do separador CMD, autorização de utilização de dados, inserção do número de telemóvel e PIN, código de segurança ou biometria, confirmação dos dados pessoais). Tipo de evidência: comunicação oficial institucional. Alcance: utilizadores CMD em Portugal (pessoas singulares).

## Função na tese

**Cap. 1, secção "Motivação regulatória e tecnológica: EUDI":** complementa @AplicacaoMovelGovpt e @AtivarChaveMovel ao detalhar o **fluxo concreto de autenticação** que a CMD oferece. **Cap. 2, secção "O caso português":** suporta a afirmação de que a CMD opera com mecanismos de autenticação multi-factor já em produção, com biometria como factor opcional. Linha de trabalho: motivação aplicada — fixa o protocolo de autenticação que coexiste com a prova de vida que a tese investiga; SP3 (MULTI-LIV) particularmente relevante (multimodalidade já integrada no quotidiano CMD).

## Diálogo com outras fontes

Citada em par com @republicaLeiNo37, @DecretoLeiNo88, @republicaDecretoLeiNo12 (regime jurídico) e @AplicacaoMovelGovpt, @ChaveMovelDigital, @AtivarChaveMovel, @Noticias (ecossistema operacional). Articula-se com @europeanunionagencyforcybersecurity.RemoteIDProofing2024 (a CMD é caso concreto do RIDP que a ENISA caracteriza). Conecta-se com @zotero-item-165 (eIDAS 2.0) — a EUDI Wallet portuguesa migrará este fluxo de autenticação para o ecossistema da carteira.

## Citações úteis

- *Caracterização canónica* (verbatim): «A Chave Móvel Digital é um sistema simples e seguro de autenticação em portais da Administração Pública e outros, que requer apenas dois passos de segurança».

- *Quatro canais de código de segurança* (verbatim): «SMS», «Aplicação móvel gov.pt», «E-mail», «Leitura de código QR através da aplicação móvel gov.pt».

- *Biometria como alternativa* (verbatim): «Com a aplicação móvel gov.pt instalada, pode usar a biometria (verificação facial ou impressão digital), em alternativa ao código de segurança, para se autenticar com CMD» — útil em [Cap. 2, caso português] como evidência operacional.

## Reservas

- Página dinâmica — registar data de consulta (snapshot Zotero 2026-03-16). A oferta de canais e o protocolo de autenticação podem alterar-se.

- Não detalha o pipeline biométrico subjacente (modelos, FNMR/FMR, PAD) — a página foca-se no processo do utilizador, não na engenharia interna. Para análise técnica, consultar fontes especializadas.

- A página não distingue **verificação biométrica** (matching com referência) de **prova de vida** (anti-spoofing) — distinção crítica para a tese; importa não inferir das funcionalidades expostas a maturidade técnica subjacente.

- Comunicação institucional, não auditoria independente.

## Decisão

- [x] cito-a — Cap. 1 (motivação regulatória) e Cap. 2 (caso português)

- [ ] re-ler quando o regime CMD migrar para EUDI Wallet portuguesa

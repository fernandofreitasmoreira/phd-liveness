---
bibkey: AplicacaoMovelGovpt
zotero-key: 8KAL68XB
title: "Aplicação móvel gov.pt"
type: webpage
creators: "Agência para a Reforma Tecnológica do Estado"
date: 3/16/2026
url: https://www.autenticacao.gov.pt/aplicacao/autenticacao-gov-movel
last-sync: 2026-05-04T12:46:15.086Z
---

# Aplicação móvel gov.pt

> **Agência para a Reforma Tecnológica do Estado** · *webpage* · 3/16/2026 · [link](https://www.autenticacao.gov.pt/aplicacao/autenticacao-gov-movel)
> Zotero key: `8KAL68XB` · Bibkey: `@AplicacaoMovelGovpt`

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

Página oficial do Estado português em **autenticacao.gov.pt** (gestão da **ARTE — Agência para a Reforma Tecnológica do Estado**) sobre a **aplicação móvel gov.pt**. Documenta as funcionalidades operacionais da app: (1) **activação da Chave Móvel Digital por biometria** (verificação facial); (2) activação dos certificados digitais do Cartão de Cidadão; (3) **autenticação com CMD usando biometria (verificação facial ou impressão digital)** em alternativa ao código de segurança; (4) geração na app do código de segurança da CMD em alternativa ao SMS; (5) **assinatura de documentos PDF**. Disponível em **Android, iOS e Harmony OS (Huawei)** — abrangência multi-plataforma. Posicionada como o canal central, recomendado e mais flexível de acesso à CMD desde o seu lançamento. Tipo de evidência: comunicação oficial institucional. Alcance: cidadãos residentes ou com vínculo administrativo a Portugal, com smartphone.

## Função na tese

**Cap. 1, secção "Motivação regulatória e tecnológica: EUDI":** sustenta a afirmação de que a aplicação gov.pt é o canal operacional da CMD em Portugal e que **integra biometria facial** como meio de activação e autenticação. **Cap. 2, secção "O caso português":** citada em par com @Noticias para sustentar que «a nova aplicação GOV.PT, lançada em 26 de Dezembro de 2024, agregou num único canal funcionalidades antes dispersas por ID.GOV e Autenticação.GOV, incluindo a activação da CMD por biometria facial, a autenticação com CMD, a assinatura de documentos PDF e a gestão de documentos digitais». **Confirmação operacional crítica para a tese**: a verificação remota de identidade por biometria facial **já é prática estatal em Portugal**, não uma novidade trazida pela EUDI Wallet. Linha de trabalho: motivação aplicada — fixa o caso de uso real em que a investigação se insere; relevante para SP1 (XAI-LIV — explicar decisões de autenticação biométrica), SP2 (FLEET-LIV — operação on-device) e SP3 (MULTI-LIV — combinação de biometria com outros factores).

## Diálogo com outras fontes

É o canal operacional dos regimes legais @republicaLeiNo37 + @DecretoLeiNo88 + @republicaDecretoLeiNo12. Citada em par com @AtivarChaveMovel, @AutenticacaoComChave, @ChaveMovelDigital e @Noticias. Conecta-se directamente com a discussão técnica em @europeanunionagencyforcybersecurity.RemoteIdentityProofing2022 e @europeanunionagencyforcybersecurity.RemoteIDProofing2024 (a aplicação gov.pt é caso concreto de RIDP por face nas categorias da ENISA). Antecede a transição para EUDI Wallet (@zotero-item-165). Constitui referência aplicada para o caso de uso na investigação — qualquer artefacto de prova de vida produzido pela tese tem aqui o ambiente de implantação realista em Portugal.

## Citações úteis

- *Funcionalidades operacionais* (paráfrase fiel): activar a CMD por biometria (verificação facial); activar certificados do Cartão de Cidadão; usar biometria (face ou impressão digital) para autenticação com CMD em alternativa ao código; gerar código de segurança CMD na app em alternativa ao SMS; assinar documentos PDF.

- *Cobertura multi-plataforma* (factual): disponível em Android (Play Store), iOS (App Store) e Huawei (Harmony OS, AppGallery).

- *Posicionamento na arquitectura CMD* (paráfrase fiel): a aplicação móvel deixa de exigir o envio do código por SMS de forma automática quando instalada, podendo o utilizador alternar entre código gerado na app ou recepção via SMS.

## Reservas

- Página dinâmica — registar data de consulta. Funcionalidades podem expandir-se ou alterar-se rapidamente, especialmente na transição para EUDI Wallet portuguesa.

- Sem detalhes técnicos sobre o pipeline biométrico (modelos, FNMR/FMR, PAD) — gap a complementar com fontes técnicas específicas.

- A página não distingue claramente entre verificação facial estática (matching) e prova de vida (liveness) — distinção crítica para a tese; importa não inferir das funcionalidades genéricas a sofisticação técnica que está por trás.

- Comunicação institucional com viés positivo (promoção do canal); para análise crítica, complementar com auditorias técnicas externas (e.g. relatórios CNPD, auditorias da Tribunal de Contas, etc.).

- Sem revisão por pares.

## Decisão

- [x] cito-a — Cap. 1 (motivação regulatória) e Cap. 2 (caso português CMD), em par com @Noticias

- [ ] re-ler quando for anunciada actualização substantiva da app ou quando for publicada documentação técnica do pipeline biométrico

---
bibkey: CNCSBoasPraticas
zotero-key: AMVIUJ8G
title: "CNCS - Boas práticas contra o Phishing, o Smishing e o Vishing"
type: webpage
creators: "Centro Nacional de Cibersegurança"
date: 01/08/2024
url: https://www.cncs.gov.pt/pt/boas-praticas-contra-o-phishing-o-smishing-e-o-vishing/
last-sync: 2026-05-04T10:46:19.691Z
---

# CNCS - Boas práticas contra o Phishing, o Smishing e o Vishing

> **Centro Nacional de Cibersegurança** · *webpage* · 01/08/2024 · [link](https://www.cncs.gov.pt/pt/boas-praticas-contra-o-phishing-o-smishing-e-o-vishing/)
> Zotero key: `AMVIUJ8G` · Bibkey: `@CNCSBoasPraticas`

## Tags
- **type:** `website`
- **role:** `evidence`, `motivation`
- **area:** `digital-identity`, `nis2`, `security`
- **thesis:** `motivation`
- **quality:** `useful`
- **priority:** `medium`

## Collections
- PhD_UMinho_Liveness / 40_Thesis_Manuscript / 41_Introduction

---

## Síntese

Documento oficial do Centro Nacional de Cibersegurança (Portugal), última actualização 01-08-2024, organizado em três secções: (a) definições operacionais de *phishing* / *smishing* / *vishing*, (b) recomendações práticas, (c) dados quantitativos do CERT.PT. Fornece a base estatística nacional para a prevalência destes vectores: *phishing*/*smishing* passaram de **31% dos incidentes registados em 2019 para 43% em 2020**, com **subida de 160% em termos absolutos**, mantendo trajectória ascendente em 2021 (Boletim CERT.PT 4/2021). A análise táctica do segundo trimestre de 2020 (Boletim 3/2020) caracteriza os padrões recorrentes: 90% dos casos exploram a autoridade/credibilidade do emissor, 79% incentivam o *login*. Fonte primária institucional, autoridade nacional de cibersegurança.

## Função na tese

**Cap. 1, secção "Motivação empírica: fraude digital, simulação de identidade e erosão da confiança":** sustenta com **dados quantitativos verificáveis** a afirmação central de que o *phishing* e o *smishing* são vectores de fraude digital crescentemente prevalentes em Portugal — sem esta fonte, o argumento ficaria desancorado de evidência local. Fixa também a tipologia *phishing*/*smishing*/*vishing* que a tese reutiliza, alinhada com a definição da autoridade nacional. A análise táctica (90%/79%) é base útil para a discussão sobre como os ataques exploram canais e identidades institucionais — relevante transversalmente para SP1 (XAI-LIV, explicabilidade da decisão de autenticidade) e SP4 (ADVR-LIV, modelação do atacante).

## Diálogo com outras fontes

Concorda com @BancoPortugalAlerta (alcance complementar — CNCS transversal; BdP sectorial), e suporta empiricamente em Portugal os três pilares teóricos de @schmittDigitalDeceptionGenerative2024. Os dados do CERT.PT (incidentes registados e tipologia táctica) antecedem e contextualizam empiricamente os casos concretos noticiados em @CEOFraudGrupo, @OperacaoPivotMais, @BurlasOlaPai, @DetencaoSuspeitaBurla, @Invista250Euros e @simasVideoFalsoCNN2026.

## Citações úteis

- *Definição operativa* (verbatim): «O *phishing* é um tipo de ataque em que se usam técnicas de engenharia social para capturar informação sensível de uma vítima através de *email*. [...] Quando esta técnica é utilizada através de SMS, dá pelo nome de *smishing* e, por telefone (voz), de *vishing*» — útil em [Cap. 1, motivação empírica] como definição-base alinhada com autoridade nacional.

- *Dados quantitativos* (verbatim): «O *phishing* e o *smishing* têm sido os tipos de incidentes mais registados pelo CERT.PT: em 2019 corresponderam a 31% dos incidentes registados e em 2020 a 43%, tendo subido, nesse ano, em termos absolutos, 160% (CNCS, Riscos e Conflitos 2021)» — útil em [Cap. 1, motivação empírica, parágrafo sobre dimensão do problema em Portugal].

- *Análise táctica* (CNCS, Boletim n.º 3/2020, sobre o 2.º trimestre de 2020, verbatim): «o tipo de persuasão mais utilizado pelos atacantes em 90% dos casos, é o argumento da autoridade/credibilidade do emissor (um Banco, por exemplo), 79% das mensagens incentivam o *login* numa conta, 12% pedem dados relacionados a um produto/serviço, 7% prometem um ganho financeiro e 3% referem-se ao preenchimento de um documento» — útil em [Cap. 1, motivação empírica] e em [Cap. 8 ADVR-LIV, taxonomia de pretextos de personificação].

## Reservas

Dados quantitativos do CERT.PT referem-se a 2019-2021 — não cobrem o período pós-democratização de IA generativa (2023+), pelo que a sofisticação e o volume actuais podem exceder substancialmente a tendência observada. Documento de boas práticas (não estudo metodologicamente robusto); os boletins citados (Riscos e Conflitos 2021; Boletins n.º 4/2021 e n.º 3/2020) são fontes secundárias dentro deste documento. A fonte não menciona explicitamente o uso de IA generativa pelos atacantes — gap que a literatura mais recente (e.g. @schmittDigitalDeceptionGenerative2024) cobre. Não revisto por pares.

## Decisão

- [x] cito-a — Cap. 1, secção "Motivação empírica"

- [ ] re-ler quando CNCS publicar relatório Riscos e Conflitos 2024 ou 2025 (substitui ou complementa)

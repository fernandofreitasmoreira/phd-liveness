---
bibkey: BancoPortugalAlerta
zotero-key: AHYKQQK8
title: "Banco de Portugal alerta para tentativas de fraude para obter as credenciais de segurança dos clientes bancários | Banco de Portugal"
type: webpage
creators: "Banco de Portugal"
date: 28/9/2023
url: https://www.bportugal.pt/comunicado/banco-de-portugal-alerta-para-tentativas-de-fraude-para-obter-credenciais-de-seguranca
last-sync: 2026-05-04T10:46:19.692Z
---

# Banco de Portugal alerta para tentativas de fraude para obter as credenciais de segurança dos clientes bancários | Banco de Portugal

> **Banco de Portugal** · *webpage* · 28/9/2023 · [link](https://www.bportugal.pt/comunicado/banco-de-portugal-alerta-para-tentativas-de-fraude-para-obter-credenciais-de-seguranca)
> Zotero key: `AHYKQQK8` · Bibkey: `@BancoPortugalAlerta`

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

Comunicado oficial do Banco de Portugal (28-09-2023) que alerta clientes bancários para tentativas de fraude por mensagens SMS e correio electrónico dirigidas à obtenção de credenciais de segurança. Exemplifica o *modus operandi* com texto verbatim de mensagens fraudulentas e identifica um vector técnico crítico — o **encadeamento de SMS fraudulento com mensagens legítimas do banco** (apropriação do *sender ID*). Fonte primária institucional, autoridade nacional de supervisão bancária. Alerta qualitativo, sem dados de prevalência.

## Função na tese

**Cap. 1, secção "Motivação empírica: fraude digital, simulação de identidade e erosão da confiança":** documenta institucionalmente em Portugal o vector *phishing*/*smishing* como ameaça operacional contra credenciais bancárias. Sustenta a afirmação de que a expansão dos serviços digitais alargou a superfície de ataque associada à identidade digital, com confirmação da própria autoridade de supervisão. Especialmente útil pela evidência do **encadeamento de canais legítimos** — ataque que explora a confiança estabelecida no canal SMS bancário, fenómeno que mecanismos centrados apenas na mensagem (filtros de conteúdo) não capturam.

## Diálogo com outras fontes

Concorda com @CNCSBoasPraticas (posição institucional portuguesa, escopo complementar — BdP sectorial bancário; CNCS transversal). Ilustra empiricamente os três pilares conceptuais de @schmittDigitalDeceptionGenerative2024: *Realistic Content Creation* (mensagens personalizadas com nome do utilizador, ex.: "Manuel, o seu nome de utilizador expira nesta data"), *Advanced Targeting* (encadeamento com fluxo SMS legítimo do banco), *Automated Attack Infrastructure* (escala observada). Antecede operacionalmente as evidências policiais portuguesas em @CEOFraudGrupo, @OperacaoPivotMais, @BurlasOlaPai e @DetencaoSuspeitaBurla.

## Citações úteis

- 
*Modus operandi* — texto fraudulento exacto: «Alerta de segurança – sua conta foi bloqueada por motivos de segurança. Identificamos que não atualizou a sua aplicação. Para desbloquear AGORA, aceda ao botão CONTINUAR ou clique AQUI» — útil em [Cap. 1, motivação empírica] como evidência concreta do nível de personalização atingido.

- 
*Vector técnico crítico* (verbatim): «Alertamos ainda que, no caso das mensagens de texto, é possível que o contacto apareça encadeado com outras mensagens legítimas do seu banco/prestador de serviços de pagamento» — útil em [Cap. 1, discussão de erosão de canais de confiança] e em [Cap. 8 ADVR-LIV, modelação de ataques que exploram identidade institucional].

- 
*Princípio de defesa* (verbatim): «Em regra, o banco/prestador de serviços de pagamento nunca solicita a informação referida pelo telefone» — útil para enquadrar a necessidade de autenticação móvel forte e canais oficiais.

## Reservas

Comunicado institucional qualitativo — não contém prevalência nem dados sobre eficácia dos ataques (para esses, ver @CNCSBoasPraticas que cita boletins do CERT.PT). Alerta de Setembro de 2023, anterior à democratização generalizada de LLMs e ferramentas de geração de áudio/vídeo sintético; a sofisticação dos ataques actuais ultrapassa o que o comunicado descreve. Sem revisão por pares.

## Decisão

- 
[x] cito-a — Cap. 1, secção "Motivação empírica"

- 
[ ] re-ler depois de [emissão de novo alerta BdP que substitua este, ou relatório anual de fraude bancária 2025]

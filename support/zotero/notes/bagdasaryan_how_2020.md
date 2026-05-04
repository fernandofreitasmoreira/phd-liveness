---
bibkey: bagdasaryan_how_2020
zotero-key: NRL3DDDP
title: "How To Backdoor Federated Learning"
type: conferencePaper
creators: "Bagdasaryan, Veit, Hua, Estrin, Shmatikov"
date: 2020-06-03
url: https://proceedings.mlr.press/v108/bagdasaryan20a.html
last-sync: 2026-05-04T15:43:35.726Z
---

# How To Backdoor Federated Learning

> **Bagdasaryan, Veit, Hua, Estrin, Shmatikov** · *conferencePaper* · 2020-06-03 · [link](https://proceedings.mlr.press/v108/bagdasaryan20a.html)
> Zotero key: `NRL3DDDP` · Bibkey: `@bagdasaryan_how_2020`

## Tags
- **type:** `conference`
- **role:** `evidence`, `method`, `motivation`, `state-of-the-art`
- **area:** `ai-act`, `deepfakes`, `federated-learning`, `liveness`, `multimodal-biometrics`, `pad`, `privacy`, `security`, `xai`
- **thesis:** `FLEET-LIV`, `motivation`, `state-of-the-art`
- **modality:** `rppg`
- **quality:** `core`, `useful`
- **priority:** `high`, `medium`

## Collections
- PhD_UMinho_Liveness / 00_Workflow / 01_Inbox
- PhD_UMinho_Liveness / 40_Thesis_Manuscript / 41_Introduction

---

## Síntese

Bagdasaryan, Veit, Hua, Estrin e Shmatikov (***How To Backdoor Federated Learning***, AISTATS 2020 — *pre-print* arXiv 1807.00459, originalmente 2018; *open access* verde). **Paper que formaliza ataques *backdoor*** em FL: demonstram que **um único participante malicioso, ou um pequeno grupo (<1% dos participantes)**, pode inserir uma *backdoor functionality* persistente no modelo global. Apresentam o método **"constrain-and-scale"** baseado em **substituição de modelo (*model replacement*)**: o atacante treina um modelo com tarefa principal + tarefa *backdoor* + termo de ofuscação contra detecção de anomalias, e escala o resultado para evadir a média federada. Resultado central: «*An attacker selected in a single round of federated learning can cause the global model to immediately reach 100% accuracy on the backdoor task*»; em tarefa de previsão de palavras com 80.000 participantes, **comprometer apenas 8 (0.01%)** atinge 50% de *backdoor accuracy*, **vs. 400 participantes maliciosos no envenenamento de dados clássico**. *Scite tally* em 2026-05: 671 *citing publications*, 273 *Smart Citations* (5 *supporting* / 1 *contrasting* / 267 *mentioning*) — paper canónico no domínio de ataques FL.

## Função na tese

**Cap. 1, secção "Motivação científica":** sustenta a afirmação de que «em aprendizagem federada, ataques sofisticados conseguem introduzir *backdoors* com fracção mínima de participantes maliciosos». **Cap. 6 (FLEET-LIV):** **fonte canónica de ameaça** — qualquer discussão de robustez em FL deve partir desta caracterização do *threat model*. **Cap. 8 (ADVR-LIV):** referência para a modelação adversarial. Linha de trabalho: SP2 (FLEET-LIV) e SP4 (ADVR-LIV); transversal a discussões sobre auditabilidade (SP1 XAI-LIV).

## Diálogo com outras fontes

Ataca o sistema fundado por @mcmahan_communication-efficient_2017 (FedAvg) — Bagdasaryan demonstra a vulnerabilidade. É **complementar** a @abadi_deep_2016 (DP é uma defesa conceptual contra inferência sobre dados privados, mas DP-SGD não previne directamente *backdoors* introduzidas por *model replacement*). É contestado/respondido por @zheng_novel_2024 (LayerCAM-AE — defesa específica para esta classe de ataques). Conecta-se com a discussão regulatória em @anon2024regulation (AI Act art. 15.º — robustez exige defesas contra *poisoning*).

## Citações úteis

- *Tese central* (verbatim, *abstract*): «We show that this makes federated learning vulnerable to a model-poisoning attack that is significantly more powerful than poisoning attacks that target only the training data» — útil em [Cap. 1] e [Cap. 6].

- *Resultado central* (verbatim, *abstract*): «An attacker selected in a single round of federated learning can cause the global model to immediately reach 100% accuracy on the backdoor task» — útil em [Cap. 6 FLEET-LIV] e [Cap. 8 ADVR-LIV] como evidência de severidade do *threat model*.

- *Eficiência face ao envenenamento clássico* (verbatim do excerto Scite): «in a word-prediction task with 80,000 total participants, compromising just 8 of them is enough to achieve 50% backdoor accuracy, as compared to 400 malicious participants needed by the data-poisoning attack» — útil em [Cap. 6] como argumento sobre desproporção atacante/defesa.

- *Técnica core* (verbatim, *abstract*): «a new model-poisoning methodology based on model replacement [...] generic constrain-and-scale technique [...] evades anomaly detection-based defenses by incorporating the evasion into the attacker's loss function during training» — útil em [Cap. 6] como caracterização do método.

## Reservas

- Paper de 2018-2020 — campo evoluiu rapidamente. A defesa @zheng_novel_2024 (2024) é uma das respostas; literatura mais recente sobre *secure aggregation* e *certified defenses* deverá complementar em Cap. 6.

- Foco em tarefas de classificação de imagens (CIFAR) e *word prediction* — extrapolação para FAS/PAD requer trabalho próprio (gap a explorar pela tese).

- *Open access* verde via arXiv.

- Tally Scite robusto (273 Smart Citations, 5 supporting / 1 contrasting / 267 mentioning) — paper estabelecido com validação adversarial substantiva.

## Decisão

- [x] cito-a — Cap. 1 (motivação científica), Cap. 6 (FLEET-LIV, threat model), Cap. 8 (ADVR-LIV)

- [ ] descarregar PDF para citações verbatim em Cap. 6 (algoritmo "constrain-and-scale")

- arXiv: 10.48550/arXiv.1807.00459

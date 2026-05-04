---
bibkey: mcmahan_communication-efficient_2017
zotero-key: 2YTIUL9D
title: "Communication-Efficient Learning of Deep Networks from Decentralized Data"
type: conferencePaper
creators: "McMahan, Moore, Ramage, Hampson, Arcas"
date: 2017-04-10
url: https://proceedings.mlr.press/v54/mcmahan17a.html
last-sync: 2026-05-04T13:31:53.544Z
---

# Communication-Efficient Learning of Deep Networks from Decentralized Data

> **McMahan, Moore, Ramage, Hampson, Arcas** · *conferencePaper* · 2017-04-10 · [link](https://proceedings.mlr.press/v54/mcmahan17a.html)
> Zotero key: `2YTIUL9D` · Bibkey: `@mcmahan_communication-efficient_2017`

## Tags
- **type:** `conference`
- **role:** `background`, `evidence`, `method`, `motivation`, `state-of-the-art`
- **area:** `ai-act`, `deepfakes`, `federated-learning`, `liveness`, `multimodal-biometrics`, `pad`, `privacy`, `xai`
- **thesis:** `FLEET-LIV`, `motivation`, `state-of-the-art`
- **modality:** `rppg`
- **method:** `federated-averaging`
- **quality:** `core`, `useful`
- **priority:** `high`, `medium`

## Collections
- PhD_UMinho_Liveness / 40_Thesis_Manuscript / 41_Introduction

---

## Síntese

McMahan, Moore, Ramage, Hampson e Arcas (***Communication-Efficient Learning of Deep Networks from Decentralized Data***, AISTATS 2017; *pre-print* arXiv 1602.05629, originalmente Fevereiro 2016). **Paper seminal** que **introduz formalmente o termo "*Federated Learning*"** e propõe o algoritmo **FedAvg** (*Federated Averaging*) — método prático de aprendizagem federada baseado em *iterative model averaging*. Apresenta avaliação empírica extensa em **cinco arquitecturas de modelos** e **quatro *datasets***, demonstrando robustez face a distribuições não-IID e dados *unbalanced* — características definidoras do *setting* federado. Mostra **redução de 10×-100×** em *communication rounds* face ao SGD síncrono. Tipo de evidência: paper metodológico fundador do campo. Alcance: o *paper* fundador da aprendizagem federada moderna; *Smart Citation tally* Scite em 2026-05: **5967 citing publications**, 781 *Smart Citations*, 5 *supporting*, 0 *contrasting*, 776 *mentioning* — paper canónico com impacto extraordinário.

## Função na tese

**Cap. 1, secção "Motivação científica":** **fonte fundadora** que sustenta a afirmação da tese sobre os progressos em aprendizagem federada como linha de investigação relevante para a prova de vida. Referência indispensável para Cap. 6 (FLEET-LIV). **Cap. 3 (Estado da arte) e Cap. 6 (FLEET-LIV):** **fonte canónica de referência** — qualquer discussão de FL parte do FedAvg. Linha de trabalho: SP2 (FLEET-LIV) prioritariamente; transversal a todas as SPs onde se discuta o substrato de aprendizagem.

## Diálogo com outras fontes

Fonte fundadora do campo. Antecede e enquadra @bagdasaryan_how_2020 (ataques *backdoor* em FedAvg), @zheng_novel_2024 (defesa contra envenenamento no contexto FL), @abadi_deep_2016 (Differential Privacy aplicada a *deep learning* — base para FL+DP). Conecta-se com @Bourtoule2021Machine (*machine unlearning* — relevante quando FL precisa de desempoderar dados). Para o problema concreto da aprendizagem federada *cross-device* em PAD, complementar com literatura específica posterior (não coberta nestas 65 referências do Cap. 1+2 mas presente nos capítulos seguintes).

## Citações úteis

- *Definição canónica do *federated learning*** (verbatim, *abstract*): «We advocate an alternative that leaves the training data distributed on the mobile devices, and learns a shared model by aggregating locally-computed updates. We term this decentralized approach Federated Learning» — útil em [Cap. 1] e em [Cap. 3 estado da arte].

- *Algoritmo central* (verbatim): «We present a practical method for the federated learning of deep networks based on iterative model averaging» — útil em [Cap. 6 FLEET-LIV] como caracterização do FedAvg.

- *Resultado empírico* (verbatim): «a reduction in required communication rounds by 10-100× as compared to synchronized stochastic gradient descent» — útil para fundamentar o argumento sobre *communication-efficiency* em FL.

- *Robustez face a non-IID* (verbatim, *abstract*): «the approach is robust to the unbalanced and non-IID data distributions that are a defining characteristic of this setting».

## Reservas

- Paper de 2016 (arXiv) / 2017 (AISTATS) — anterior a desenvolvimentos críticos posteriores (FL+DP-SGD formal, *secure aggregation*, ataques *backdoor*, *personalized FL*, etc.). A abordagem original está superada em vários aspectos mas continua como ponto de partida obrigatório.

- Foco em problema *cross-device* genérico — não trata especificidades biométricas ou regulatórias (RGPD/AI Act). A tese aplica FedAvg num contexto onde os requisitos regulatórios e adversariais são mais exigentes do que o paper original prevê.

- Sem retracções (Scite confirmado).

- *Open access* verde via arXiv.

- Tally Scite extraordinário (5967 *citing publications*) — paper estabelecido com validação adversarial densa (5 *supporting* / 0 *contrasting* / 776 *mentioning* — predominância de "mentioning" típica de paper fundador, citado como *prior work*).

## Decisão

- [x] cito-a — Cap. 1 (motivação científica), Cap. 3 (estado da arte), Cap. 6 (FLEET-LIV)

- [ ] re-ler quando explicar FedAvg em detalhe (Cap. 6) — descarregar PDF para citações verbatim de seções específicas

- arXiv: 10.48550/arXiv.1602.05629 (publicação conferência: AISTATS 2017)

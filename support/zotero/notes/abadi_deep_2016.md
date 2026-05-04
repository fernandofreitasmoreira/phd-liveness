---
bibkey: abadi_deep_2016
zotero-key: H3FQ4JJC
title: "Deep Learning with Differential Privacy"
type: conferencePaper
creators: "Abadi, Chu, Goodfellow, McMahan, Mironov, Talwar, Zhang"
date: 2016-10-24
url: http://arxiv.org/abs/1607.00133
last-sync: 2026-05-04T15:43:35.727Z
---

# Deep Learning with Differential Privacy

> **Abadi, Chu, Goodfellow, McMahan, Mironov, Talwar, Zhang** · *conferencePaper* · 2016-10-24 · [link](http://arxiv.org/abs/1607.00133)
> Zotero key: `H3FQ4JJC` · Bibkey: `@abadi_deep_2016`

## Tags
- **type:** `conference`
- **role:** `background`, `evidence`, `method`, `motivation`, `state-of-the-art`
- **area:** `ai-act`, `deepfakes`, `differential-privacy`, `federated-learning`, `liveness`, `multimodal-biometrics`, `pad`, `privacy`, `xai`
- **thesis:** `FLEET-LIV`, `motivation`, `state-of-the-art`
- **modality:** `rppg`
- **method:** `dp-sgd`
- **quality:** `core`, `useful`
- **priority:** `high`, `medium`

## Collections
- PhD_UMinho_Liveness / 40_Thesis_Manuscript / 41_Introduction

---

## Síntese

Abadi, Chu, Goodfellow, McMahan, Mironov, Talwar e Zhang (***Deep Learning with Differential Privacy***, ACM CCS 2016, pp. 308-318; DOI 10.1145/2976749.2978318). **Paper seminal** que introduz formalmente o ***DP-SGD*** (*Differentially Private Stochastic Gradient Descent*), articulando *Differential Privacy* (Dwork et al.) com *deep learning*. Apresenta: (1) algoritmo prático de SGD com adição de ruído gaussiano calibrado; (2) ***moments accountant*** — análise refinada da composição de privacidade ao longo de iterações de treino, com ganhos significativos face ao *strong composition theorem*; (3) implementação em **TensorFlow** disponibilizada publicamente; (4) validação empírica em MNIST e CIFAR-10 com *budget* (ε, δ) modesto. Demonstra que «*we can train deep neural networks with non-convex objectives, under a modest privacy budget, and at a manageable cost in software complexity, training efficiency, and model quality*». Tipo de evidência: *paper* metodológico fundador. Alcance: o *paper* fundador da privacidade diferencial em *deep learning*; *Scite* tally em 2026-05: **5639 citing publications**, 5357 *Smart Citations* (35 *supporting* / 2 *contrasting* / 5312 *mentioning*) — paper canónico com massive impact.

## Função na tese

**Cap. 1, secção "Motivação científica":** sustenta a afirmação sobre os progressos em **privacidade diferencial aplicada a *deep learning*** como fundamento conceptual da arquitectura FL+DP da tese. **Cap. 6 (FLEET-LIV):** **fonte canónica indispensável** — qualquer discussão de DP em *deep learning* parte daqui. Linha de trabalho: SP2 (FLEET-LIV) prioritariamente (DP é metade do par FL+DP); transversal a SP1 (XAI-LIV — privacidade dos *saliency maps*) e SP3 (MULTI-LIV — DP em fusão multimodal).

## Diálogo com outras fontes

Fonte fundadora de DP em DL. Conecta-se directamente com @mcmahan_communication-efficient_2017 (FedAvg — co-autoria McMahan; FedAvg + DP-SGD constituem o par técnico canónico que a tese adopta). Antecede e enquadra @bagdasaryan_how_2020 (que ataca a confidencialidade no contexto FL — DP é uma das defesas conceptuais possíveis). Para o problema concreto de DP em PAD/FAS, a tese mostra que esta integração (FL+DP+PAD) é menos explorada — gap que a investigação pretende preencher.

## Citações úteis

- *Tese central* (verbatim, *abstract*): «Often, the training of models requires large, representative datasets, which may be crowdsourced and contain sensitive information. The models should not expose private information in these datasets» — útil em [Cap. 1] para ancorar o problema.

- *Resultado prático* (verbatim, *abstract*): «we can train deep neural networks with non-convex objectives, under a modest privacy budget, and at a manageable cost in software complexity, training efficiency, and model quality» — útil em [Cap. 6] para o argumento de viabilidade FL+DP.

- *Generalização do *moments accountant*** (verbatim factual, *abstract*): «a refined analysis of privacy costs within the framework of differential privacy» — útil para discussão técnica em Cap. 6 sobre composição de privacidade.

## Reservas

- Paper de 2016 — superado em alguns aspectos por desenvolvimentos posteriores (Rényi DP, *zero-concentrated* DP, *opacus* para PyTorch). A tese deve citar Abadi como fundadora e complementar com literatura recente (não coberta nestas 65 referências do Cap. 1+2 mas presente nos capítulos seguintes).

- A análise de *trade-off* entre privacidade e *utility* não cobre exaustivamente cenários *high-dimensional* nem atenção a *fairness*.

- *Open access* verde — disponível em arXiv e via DOI directo.

- Sem retracções (Scite confirmado).

- Tally Scite extraordinário (5639 *citing publications*; 5/2/5312 supporting/contrasting/mentioning) — paper estabelecido com validação adversarial densa e poucos contestadores substantivos.

## Decisão

- [x] cito-a — Cap. 1 (motivação científica), Cap. 3 (estado da arte FL+DP), Cap. 6 (FLEET-LIV, base canónica)

- [ ] descarregar PDF para citações verbatim de seções específicas (quando explicar DP-SGD em detalhe em Cap. 6)

- DOI: 10.1145/2976749.2978318

---
bibkey: zheng_novel_2024
zotero-key: H673AP9W
title: "A Novel Defense Against Poisoning Attacks on Federated Learning: LayerCAM Augmented with Autoencoder"
type: preprint
creators: "Zheng, Yuan, Li, Ni, Tovar, Crowcroft"
date: 2024-06-02
url: http://arxiv.org/abs/2406.02605
last-sync: 2026-05-04T15:43:35.726Z
---

# A Novel Defense Against Poisoning Attacks on Federated Learning: LayerCAM Augmented with Autoencoder

> **Zheng, Yuan, Li, Ni, Tovar, Crowcroft** · *preprint* · 2024-06-02 · [link](http://arxiv.org/abs/2406.02605)
> Zotero key: `H673AP9W` · Bibkey: `@zheng_novel_2024`

## Tags
- **type:** `journal`
- **role:** `evidence`, `method`, `motivation`, `state-of-the-art`
- **area:** `ai-act`, `deepfakes`, `federated-learning`, `liveness`, `multimodal-biometrics`, `pad`, `privacy`, `xai`
- **thesis:** `motivation`
- **modality:** `rppg`
- **quality:** `useful`
- **priority:** `medium`
- *outras:* `Computer Science - Artificial Intelligence`, `Computer Science - Computer Vision and Pattern Recognition`, `Computer Science - Cryptography and Security`, `Computer Science - Machine Learning`

## Collections
- PhD_UMinho_Liveness / 00_Workflow / 01_Inbox
- PhD_UMinho_Liveness / 40_Thesis_Manuscript / 41_Introduction

---

## Síntese

Zheng, Yuan, Li, Ni, Tovar e Crowcroft (***A Novel Defense Against Poisoning Attacks on Federated Learning: LayerCAM Augmented with Autoencoder***, *arXiv* 2406.02605, 02-06-2024; *open access* verde). Propõem o **LayerCAM-AE**, estratégia de defesa contra ataques de envenenamento (*poisoning*) em FL que **integra Layer Class Activation Mapping (LayerCAM) com um autoencoder (AE)**. O método gera **mapas de calor** das updates de modelo dos participantes, e o AE actua como detector de anomalia sobre estes mapas. Argumento central: ataques recentes circunvertem **métodos de detecção baseados em distância Euclidiana** (amplamente adoptados); o LayerCAM-AE detecta padrões mais subtis ao operar no espaço de representação interna do modelo. Tipo de evidência: *paper* metodológico com avaliação experimental. Alcance: defesa específica contra *model-poisoning* em FL.

## Função na tese

**Cap. 1, secção "Motivação científica":** sustenta a afirmação de que existem **defesas activas** em desenvolvimento contra os ataques que @bagdasaryan_how_2020 demonstra. **Cap. 6 (FLEET-LIV):** referência directa para o lado defensivo do estado da arte FL. Particularmente útil porque liga **mapeamento de atenção (CAM)** — relevante para SP1 (XAI-LIV) — com defesa adversarial em FL — relevante para SP2 (FLEET-LIV). É um caso concreto da intersecção XAI × FL × ADVR. Linha de trabalho: SP2 (FLEET-LIV) prioritariamente; com pertinência transversal a SP1 (XAI-LIV) e SP4 (ADVR-LIV).

## Diálogo com outras fontes

Resposta directa a @bagdasaryan_how_2020 (constrain-and-scale evasivo às defesas baseadas em distância) — Zheng propõe alternativa que opera no espaço de activações em vez de distâncias. Complementar a @abadi_deep_2016 (DP-SGD não previne directamente *backdoors*; LayerCAM-AE é uma defesa adicional). Articula técnicas de XAI (LayerCAM) com FL — ponto de junção potencialmente útil para a integração da SP1 (XAI-LIV) e SP2 (FLEET-LIV) na tese. Conecta-se com a obrigação regulatória em @anon2024regulation (AI Act art. 15.º — robustez contra ataques) — LayerCAM-AE pode ser apresentado como solução de conformidade.

## Citações úteis

- *Tese central* (verbatim, *abstract*): «Recent attacks on federated learning (FL) can introduce malicious model updates that circumvent widely adopted Euclidean distance-based detection methods. This paper proposes a novel defense strategy, referred to as LayerCAM-AE, designed to counteract model poisoning in federated learning».

- *Mecanismo defensivo* (verbatim, *abstract*): «LayerCAM-AE puts forth a new Layer Class Activation Mapping (LayerCAM) integrated with an autoencoder (AE), significantly enhancing detection capabilities. Specifically, LayerCAM-AE generates a heat map for [model updates]» — útil em [Cap. 6 FLEET-LIV] como caracterização do método.

- *Posicionamento face ao estado da arte* (paráfrase): a contribuição é deixar de operar em **distâncias** (Euclidiana) e passar a operar em **espaço de activações** via CAM — útil para argumento conceptual em Cap. 6.

## Reservas

- *Pre-print* arXiv recente (Junho 2024) — ainda em curso de avaliação adversarial. O *Scite* não exibiu *tally* significativo no momento da consulta.

- A integração CAM × FL é metodologicamente interessante mas exige avaliação extensa — a tese deve verificar se há replicações independentes ou comparações sistemáticas com outros métodos.

- Validação experimental do *paper* original deve ser examinada com cuidado — verificar *datasets*, *baselines*, e tipos de ataque cobertos para avaliar generalização para o contexto biométrico.

- *Open access* verde via arXiv. Sem retracções declaradas.

## Decisão

- [x] cito-a — Cap. 1 (motivação científica) e Cap. 6 (FLEET-LIV, defesas)

- [ ] re-ler quando o Scite *tally* tiver ≥5 *supporting/contrasting* (12-18 meses) ou se for publicado em conferência/revista revista por pares

- arXiv: 10.48550/arXiv.2406.02605

---

# Annotations
(7/31/2025, 10:45:38 PM)

“Recent attacks on federated learning (FL) can introduce malicious model updates that circumvent widely adopted Euclidean distance-based detection methods. This paper proposes a novel defense strategy,” (Zheng et al., 2024, p. 1) Teste ver se o obsidian funciona

---
bibkey: ge_difffas_2024
zotero-key: DM86BTIQ
title: "DiffFAS: Face Anti-Spoofing via Generative Diffusion Models"
type: preprint
creators: "Ge, Liu, Yu, Shi, Qi, Li, Kälviäinen"
date: 2024-09-13
url: http://arxiv.org/abs/2409.08572
last-sync: 2026-05-04T13:31:53.545Z
---

# DiffFAS: Face Anti-Spoofing via Generative Diffusion Models

> **Ge, Liu, Yu, Shi, Qi, Li, Kälviäinen** · *preprint* · 2024-09-13 · [link](http://arxiv.org/abs/2409.08572)
> Zotero key: `DM86BTIQ` · Bibkey: `@ge_difffas_2024`

## Tags
- **type:** `conference`, `journal`
- **role:** `evidence`, `method`, `motivation`, `state-of-the-art`
- **area:** `ai-act`, `deepfakes`, `federated-learning`, `liveness`, `multimodal-biometrics`, `pad`, `privacy`, `xai`
- **thesis:** `ADVR-LIV`, `motivation`, `state-of-the-art`
- **modality:** `face`, `rppg`
- **method:** `adversarial-training`, `diffusion`
- **quality:** `strong`, `useful`
- **priority:** `high`, `medium`
- *outras:* `Computer Science - Computer Vision and Pattern Recognition`

## Collections
- PhD_UMinho_Liveness / 00_Workflow / 01_Inbox
- PhD_UMinho_Liveness / 40_Thesis_Manuscript / 41_Introduction

---

## Síntese

Ge, Liu, Yu, Shi, Qi, Li e Kälviäinen (***DiffFAS: Face Anti-Spoofing via Generative Diffusion Models***, *arXiv* 2409.08572, 13-09-2024; *open access* verde). **Reformulação do problema do *domain shift*** em FAS: os autores deconstroem o *domain shift* em **dois factores ortogonais — *image style* e *image quality***. *Quality* afecta a pureza com que a informação de *spoof* é apresentada; *style* afecta a forma como essa informação é manifesta. Propõem **DiffFAS**, um *framework* baseado em modelos generativos *diffusion* que (a) ataca cada um dos factores separadamente; (b) gera amostras sintéticas de *spoof* e *live* que mitigam *domain shift*; (c) é treinável de forma *end-to-end*. Tipo de evidência: *paper* metodológico com avaliação experimental. Alcance: estado da arte em FAS *cross-domain*.

## Função na tese

**Cap. 1, secção "Motivação científica":** sustenta a afirmação da tese sobre o uso «de modelos generativos para síntese de ataques», dando exemplo concreto e recente. **Cap. 3 (Estado da arte) e Cap. 8 (ADVR-LIV):** referência directa para a integração de *diffusion models* no quadro adversarial — *paper* central para SP4 (síntese de ataques sintéticos *zero-shot*) e SP3 (qualidade da imagem como dimensão de fusão multimodal). Linha de trabalho: SP4 (ADVR-LIV) prioritariamente, com pertinência para SP3 (MULTI-LIV) e SP1 (XAI-LIV — a separação style/quality é interpretável).

## Diálogo com outras fontes

É uma das fontes que sustentam empiricamente o argumento sobre **modelos generativos como vector adversarial e como ferramenta de defesa** que @schmittDigitalDeceptionGenerative2024 enquadra teoricamente. Conecta-se com @karrasAnalyzingImprovingImage2020 (StyleGAN, antecessor generativo) e com a categoria *generative feature learning* identificada em @huangSurveyDeepLearningbased2024. Contraponto a @yu_deep_2023 (revisão de FAS *deep-learning-based* em geral, sem foco em *diffusion*). Contextualiza @ENISA-RemoteIDProofing2024 (que reconhece *deepfake attacks* como vector formal). Para *zero-shot* generalization, ligar com @joshi2024synthetic.

## Citações úteis

- *Reformulação do *domain shift*** (verbatim, *abstract*): «we rethink about the inherence of domain shift and deconstruct it into two factors: image style and image quality. Quality influences the purity of the presentation of spoof information, while style affects the manner in which spoof information is [presented]» — útil em [Cap. 8 ADVR-LIV] como base conceptual.

- *Posicionamento metodológico* (paráfrase): DiffFAS aplica modelos *diffusion* generativos para sintetizar amostras *cross-domain*, atacando estilo e qualidade separadamente — útil em [Cap. 3 estado da arte].

## Reservas

- ***Preprint* arXiv** (2024-09-13) — não identificado como publicação revista por pares formal no índice Scite. Pode estar em revisão ou já publicado em conferência (e.g. ECCV, CVPR, AAAI) sem ainda actualização do registo. [VERIFICAR — confirmar se há versão final em conferência/revista.]

- *Tally* Scite limitado para *preprint* recente; dados de validação adversarial pela comunidade ainda em curso.

- *Diffusion models* exigem recursos computacionais elevados — *trade-off* operacional para aplicação *on-device* (relevante para a tese; pode ser usado off-device em treino mas dificulta inferência *on-device*).

- *Open access* verde via arXiv (*pre-print*).

- Sem retracções ou *concerns*.

## Decisão

- [x] cito-a — Cap. 1 (motivação científica), Cap. 3 (estado da arte), Cap. 8 (ADVR-LIV)

- [ ] re-ler quando publicado em conferência/revista revista por pares (verificar via Scite/Academix em ~6 meses)

- DOI/arXiv: 10.48550/arXiv.2409.08572

---

Comment: ECCV 24

---
bibkey: huangSurveyDeepLearningbased2024
zotero-key: AGWGBNDU
title: "A Survey on Deep Learning-based Face Anti-Spoofing"
type: journalArticle
creators: "Huang, Chong, Hsu, Hsu, Chiang, Chen, Hsu"
date: 2024-12-17
url: https://doi.org/10.1561/116.20240053
last-sync: 2026-05-03T22:08:45.305Z
---

# A Survey on Deep Learning-based Face Anti-Spoofing

> **Huang, Chong, Hsu, Hsu, Chiang, Chen, Hsu** · *journalArticle* · 2024-12-17 · [link](https://doi.org/10.1561/116.20240053)
> Zotero key: `AGWGBNDU` · Bibkey: `@huangSurveyDeepLearningbased2024`

## Tags
- **type:** `journal`
- **role:** `evidence`, `method`, `motivation`, `state-of-the-art`
- **area:** `ai-act`, `deepfakes`, `federated-learning`, `identity-proofing`, `liveness`, `multimodal-biometrics`, `nis2`, `pad`, `privacy`, `security`, `xai`
- **thesis:** `motivation`, `state-of-the-art`
- **modality:** `face`, `rppg`
- **quality:** `core`, `strong`
- **priority:** `high`, `medium`

## Collections
- PhD_UMinho_Liveness / 40_Thesis_Manuscript / 41_Introduction

---

## Notas (formato livre — converter para template quando possível)

- 
Problema abordado: 
O paper aborda o problema de face anti-spoofing (FAS), também designado face presentation attack detection ou face liveness detection, isto é, a distinção entre imagens/vídeos de faces genuínas e ataques de spoofing, incluindo print attacks, replay attacks e 3D mask attacks. O foco está na evolução recente de métodos baseados em deep learning para melhorar robustez, generalização e capacidade de lidar com ataques novos e não vistos.

- 
Pergunta ou hipótese: 
Sendo um survey, o paper não testa uma hipótese única. A pergunta subjacente é: como evoluíram os métodos de deep learning para FAS, quais são os seus principais paradigmas, técnicas, datasets, métricas e desafios, e que direções futuras parecem mais promissoras?

- 
Contributo principal: O principal contributo é uma taxonomia atualizada e abrangente de métodos de FAS baseados em deep learning, organizada em:

- 
two-class FAS vs. one-class FAS;

- 
cenários cross-domain: DG, DA, SFDA e TTA;

- 
famílias técnicas principais;

- 
datasets single-modal e multi-modal;

- 
métricas de avaliação e direções futuras. O survey também destaca tópicos recentes não cobertos com a mesma ênfase em surveys anteriores, como source-free domain adaptation, test-time adaptation, vision-language models e acoustic-based features.

- 
Método / abordagem técnica: 
Trata-se de um artigo de survey/overview. A estrutura analítica central organiza a literatura em:

- 
two-class FAS: métodos treinados com amostras live e spoof;

- 
one-class FAS: métodos treinados apenas com amostras live;

- 
cenários de generalização/adaptação: domain generalization (DG), domain adaptation (DA), source-free domain adaptation (SFDA) e test-time adaptation (TTA). 

No caso de two-class FAS, o survey agrupa as abordagens por técnicas como:

- 
auxiliary supervision;

- 
local descriptor-enhanced feature learning;

- 
disentangled feature learning;

- 
meta learning;

- 
adversarial learning;

- 
data augmentation;

- 
long-range dependency feature learning (incluindo ViTs);

- 
unified attack detection;

- 
multi-modalities feature learning. 

No caso de one-class FAS, agrupa sobretudo:

- 
reconstruction supervision;

- 
statistical learning;

- 
synthetic/generative feature learning.

- 
Dados / dataset: O paper não recolhe dados próprios; faz revisão de benchmarks públicos. Datasets single-modal relevantes resumidos:

- 
NUAA;

- 
Yale_Recaptured;

- 
CASIA-MFSD;

- 
Replay-Attack;

- 
MSU-MFSD;

- 
OULU-NPU;

- 
Rose-Youtu;

- 
SiW;

- 
SiW-M;

- 
CelebA-Spoof;

- 
HiFiMask;

- 
CASIA-SURF 3DMask, entre outros. 

Datasets multi-modal relevantes resumidos:

- 
3DMAD;

- 
CASIA-SURF;

- 
WMCA;

- 
HQ-WMCA;

- 
CeFA;

- 
PADISI;

- 
ERPA;

- 
CSMAD, entre outros. O survey destaca RGB, IR/NIR, depth, thermal e SWIR como modalidades mais recorrentes.

- 
Métricas: O survey destaca como métricas principais em FAS:

- 
FRR;

- 
FAR;

- 
HTER;

- 
EER;

- 
AUC;

- 
APCER;

- 
BPCER;

- 
ACER. 

Sublinha que ACER, APCER e BPCER são particularmente relevantes em avaliação PAD/FAS, sendo ACER um indicador agregado frequente em cenários intra-dataset.

- 
Resultados principais: Como survey, os “resultados” são de síntese e não experimentais próprios. Os principais achados são:

- 
o campo de FAS evoluiu de abordagens mais simples e unimodais para arquiteturas profundas mais complexas e multimodais;

- 
a distinção entre two-class e one-class FAS é hoje central para entender a literatura;

- 
a generalização cross-domain continua a ser um dos maiores problemas práticos;

- 
técnicas como auxiliary supervision, disentanglement, meta learning, adversarial learning e transformers têm sido decisivas para melhorar robustez;

- 
a multimodalidade tende a aumentar robustez e fiabilidade, sobretudo quando integra RGB com depth, IR/NIR, thermal ou sinais acústicos;

- 
começa a surgir uma convergência entre FAS físico e deteção de ataques digitais/forgery, sob o tema unified attack detection;

- 
há espaço de crescimento em language guidance, test-time adaptation e exploração de modalidades menos dependentes de sensores especializados.

- 
Limitações: Sendo um survey, a limitação principal não está no desenho experimental, mas no âmbito:

- 
o artigo sintetiza literatura, não valida empiricamente uma arquitetura nova;

- 
não oferece comparação experimental homogénea entre todas as técnicas, o que é normal em surveys;

- 
o foco é claramente face anti-spoofing, pelo que a generalização para outros modos biométricos ou para sistemas integrados de identidade digital on-device não é tratada diretamente;

- 
a dimensão regulatória, explicabilidade auditável e privacidade formal não é o centro do survey.

- 
Fragilidades ou riscos:

- 
O survey é muito forte no mapeamento técnico, mas menos orientado a requisitos de compliance, explicabilidade regulatória e deployment móvel sob restrições energéticas.

- 
A multimodalidade discutida depende muitas vezes de sensores especializados (IR, depth, thermal), o que reduz aplicabilidade direta em smartphones comuns.

- 
A componente one-class e TTA é promissora, mas ainda parece menos madura do que a literatura two-class.

- 
O survey refere language guidance e acoustic-based features como direções emergentes, mas ainda sem convergência metodológica consolidada.

- 
Relevância para a minha tese: 
Este paper é altamente relevante para a tese. Funciona como referência de base para mapear o estado da arte técnico em liveness/PAD facial. É particularmente útil para:

- 
enquadrar o problema de face anti-spoofing/liveness dentro da literatura recente;

- 
estruturar a revisão da literatura por paradigmas (two-class vs one-class);

- 
identificar técnicas relevantes para multimodalidade, rPPG, unified attack detection e robustness;

- 
identificar datasets públicos úteis para benchmarking;

- 
consolidar as métricas nucleares de avaliação, especialmente ACER/APCER/BPCER. Para a tua tese, o paper é especialmente relevante para:

- 
XAI-LIV: por identificar attention maps, CLIP/VLMs e outros sinais auxiliares, embora não aprofunde XAI auditável;

- 
MULTI-LIV: por discutir multimodalidade RGB/IR/depth e também sinais acústicos;

- 
ADVR-LIV: por sintetizar adversarial learning, unified attack detection e evolução dos ataques;

- 
FLEET-LIV: de forma indireta, sobretudo na discussão de TTA, privacidade e adaptação, embora não trate federated learning como eixo central. Também ajuda a justificar por que razão métodos unimodais puramente visuais são insuficientes para a próxima geração de sistemas mais robustos, o que converge com a tua motivação de combinar face, rPPG, voz e sensores on-device. :contentReference[oaicite:6]{index=6} :contentReference[oaicite:7]{index=7}

- 
Secção da tese: Este paper entra sobretudo em:

- 
thesis:state-of-the-art

- 
thesis:motivation

- 
thesis:XAI-LIV

- 
thesis:MULTI-LIV

- 
thesis:ADVR-LIV

- 
thesis:datasets

- 
thesis:evaluation-metrics 
Também pode apoiar o enquadramento do threat model e da evolução do campo FAS.

- 
Citação útil: “This article conducts a comprehensive survey on recent deep learning-based FAS approaches and introduces public FAS benchmark datasets, and different settings.”

Citação útil adicional: “We comprehensively cover recent deep learning-based face anti-spoofing methods on common two-class and one-class settings as well as cross-domain scenarios, including domain generalization (DG), domain adaptation (DA), source-free domain adaptation (SFDA), and test-time adaptation (TTA).”

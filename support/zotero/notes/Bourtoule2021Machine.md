---
bibkey: Bourtoule2021Machine
zotero-key: 4EHBKIV5
title: "Machine Unlearning"
type: conferencePaper
creators: "Bourtoule, Chandrasekaran, Choquette-Choo, Jia, Travers, Zhang, Lie, Papernot"
date: 2021
url: https://doi.org/10.1109/SP40001.2021.00019
last-sync: 2026-05-04T16:22:43.141Z
---

# Machine Unlearning

> **Bourtoule, Chandrasekaran, Choquette-Choo, Jia, Travers, Zhang, Lie, Papernot** · *conferencePaper* · 2021 · [link](https://doi.org/10.1109/SP40001.2021.00019)
> Zotero key: `4EHBKIV5` · Bibkey: `@Bourtoule2021Machine`

## Tags
- **type:** `conference`
- **role:** `context`, `method`
- **area:** `federated-learning`, `gdpr`, `privacy`
- **thesis:** `methodology`, `regulatory-framework`
- **quality:** `strong`, `useful`
- **priority:** `medium`

## Collections
- PhD_UMinho_Liveness / 10_Knowledge_Base / 14_Federated_Learning_and_DP
- PhD_UMinho_Liveness / 20_Compliance_and_Standards / 22_GDPR

---

## Síntese

Bourtoule, Chandrasekaran, Choquette-Choo, Jia, Travers, Zhang, Lie e Papernot (***Machine Unlearning***, *IEEE Symposium on Security and Privacy* — IEEE S&P 2021, pp. 141-159; DOI 10.1109/SP40001.2021.00019; *open access* via arXiv 1912.03817). **Paper seminal** que **formaliza o problema do *machine unlearning*** — a remoção do efeito de pontos de dados específicos sobre um modelo treinado, sem requerer re-treino completo. Propõe **SISA training** (*Sharded, Isolated, Sliced, and Aggregated*), framework de treino dividido em *shards* e *slices* que permite **unlearning eficiente**: para esquecer um ponto, basta re-treinar o *shard*/*slice* afectado em vez de todo o modelo. Demonstra empiricamente *speedup* de até 4.63× (Purchase) e 2.45× (SVHN) face a re-treino completo. Aborda também os trade-offs entre granularidade do *sharding*, *accuracy* e custo de unlearning. *Scite tally* em 2026-05: **493 *citing publications***, 243 *Smart Citations* (2 *supporting* / 0 *contrasting* / 241 *mentioning*) — paper canónico em *machine unlearning*. Tipo de evidência: *paper* metodológico em conferência *top-tier* (IEEE S&P, A* CORE). Alcance: fonte fundadora do campo.

## Função na tese

**Cap. 2, secção "Articulação RGPD–AI Act":** suporta a afirmação da tese sobre o ***right to erasure*** (Art. 17.º GDPR) como exigência que sistemas de IA com aprendizagem contínua devem ser capazes de honrar. **Cap. 6 (FLEET-LIV):** referência fundamental para a discussão sobre **unlearning em FL**, especialmente no contexto da tese onde dados biométricos podem precisar ser removidos por exercício de direitos GDPR. Linha de trabalho: SP2 (FLEET-LIV) prioritariamente; transversal a Cap. 2 (regulatório).

## Diálogo com outras fontes

Fonte fundadora de *machine unlearning*. Conecta-se com @anon2016regulation (GDPR art. 17.º — direito ao esquecimento) e com @anon2024regulation (AI Act art. 26.º — obrigações de deployers). Articula-se com @mcmahan_communication-efficient_2017 (FedAvg — *unlearning* em FL é problema mais complexo do que em ML centralizado), @abadi_deep_2016 (DP-SGD — DP fornece protecção ex-ante; unlearning é remediação ex-post), @bagdasaryan_how_2020 (backdoor FL — unlearning como defesa), @zheng_novel_2024 (LayerCAM-AE — defesa).

## Citações úteis

- *Definição operacional* (paráfrase fiel ao paper): *machine unlearning* é a remoção do efeito de pontos de dados específicos sobre um modelo treinado, sem requerer re-treino completo, ideialmente preservando a *accuracy* nos dados restantes.

- *Framework SISA* (paráfrase): treino dividido em **S**harded, **I**solated, **S**liced, **A**ggregated — útil em [Cap. 2] e [Cap. 6] como referência canónica.

- *Resultado empírico* (paráfrase): *speedup* até 4.63× face a re-treino completo, dependendo do *dataset* e granularidade do *sharding*.

## Reservas

- Paper de 2021 — campo evoluiu rapidamente; literatura posterior cobre *unlearning* em modelos *foundation*, em FL, e com garantias formais. A tese deve citar Bourtoule como fundadora e complementar com literatura recente.

- *Open access* via arXiv (versão pre-print). Versão IEEE S&P paywall.

- Foco em modelos centralizados — *unlearning* em FL é problema adicional não totalmente coberto neste paper.

- Sem retracções declaradas.

- Tally Scite robusto (243 Smart Citations, 2 supporting / 0 contrasting / 241 mentioning) — paper estabelecido sem contestação substantiva.

## Decisão

- [x] cito-a — Cap. 2 (articulação RGPD–AI Act, right to erasure) e Cap. 6 (FLEET-LIV — unlearning)

- [ ] re-ler em Cap. 6 quando explicar SISA training em detalhe; descarregar PDF arXiv

- DOI: 10.1109/SP40001.2021.00019 · arXiv: 1912.03817

# phd-liveness

Repositório de artefactos e materiais de suporte da tese de doutoramento
**"Prova de vida on-device para identidade digital: Uma abordagem federada, multimodal, explicável e robusta"**
(Fernando António Freitas Moreira — Doutoramento em Informática, Escola de Engenharia, Universidade do Minho).

Metodologia: Design Science Research (Hevner et al., 2004; Gregor & Hevner, 2013).

Contexto detalhado da investigação — linhas de trabalho, decisões-chave, mapeamento para capítulos — em [CONTEXT.md](CONTEXT.md).

## Hall de entrada

A página [index.html](https://fernandofreitasmoreira.github.io/phd-liveness/) serve como hall de entrada para todos os artefactos e materiais de suporte produzidos no âmbito da tese — visualizações, ferramentas de apoio aos capítulos, código dos artefactos DSR e documentos auxiliares. À medida que novos objectos forem desenvolvidos (linhas SP1–SP4 e integração final), são acrescentados a este índice para acesso centralizado.

## Estrutura

```
phd-liveness/
├── artifacts/        ← artefactos DSR (contribuição científica)
│   ├── xai-liv/      ← O1: explicabilidade (Cap. 5)
│   ├── fleet-liv/    ← O2: federada on-device (Cap. 6)
│   ├── multi-liv/    ← O3: fusão multimodal (Cap. 7)
│   ├── advr-liv/     ← O4: robustez adversarial (Cap. 8)
│   └── integration/  ← Cap. 9: sistema end-to-end + conformidade AI Act
├── support/          ← material auxiliar (não é contribuição científica)
│   ├── visualizations/
│   ├── presentation/
│   └── scripts/
├── thesis/           ← capítulos .tex
├── CONTEXT.md
└── README.md
```

**artifacts/** contêm os artefactos avaliáveis por métricas (ACER, FNMR, fidelidade XAI, etc.). **support/** contém ferramentas e materiais auxiliares.

## Visualizações publicadas

- [Ecossistema normativo — Capítulo 2](https://fernandofreitasmoreira.github.io/phd-liveness/support/visualizations/ecossistema-normativo-ch2.html) — mapa interativo de 12 instrumentos normativos (AI Act, RGPD, NIS 2, CRA, eIDAS 2.0, ISO 30107, CEN/TS 18099, ISO 19795, ETSI TS 119 461, JTC 21, ARF EUDI Wallet, NIST SP 800-63A-4) com 20 ligações tipificadas e texto autêntico de artigos. Inclui **roadmap normativo prospectivo 2024–2031** com 78 eventos (timeline horizontal + dashboard de marcos próximos + secção "Marcos temporais" por instrumento no painel lateral), com taxonomias ortogonais de força jurídica, destinatário regulado, estatuto epistemológico da fonte e níveis de certeza. 6 *thesis gates* sinalizados como marcos de monitorização contínua.

## Licença

Este repositório é disponibilizado sob a [Creative Commons Attribution 4.0 International License (CC-BY-4.0)](LICENSE). Ver [LICENSE](LICENSE) para os termos completos.

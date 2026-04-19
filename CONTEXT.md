# CONTEXT.md — PhD Liveness Detection Repository

## Investigador
- **Nome:** Fernando António Freitas Moreira
- **Programa:** Doutoramento em Informática, Escola de Engenharia, Universidade do Minho
- **Orientador:** Dr. João Marco
- **Metodologia:** Design Science Research (Hevner et al., 2004; Gregor & Hevner, 2013)

## Título de trabalho
"Prova de vida on-device para identidade digital: Uma abordagem federada, multimodal, explicável e robusta"

## Pergunta de investigação global
É possível conceber um sistema de prova de vida federado, multimodal, explicável e adversarialmente robusto, operando on-device, que cumpra as exigências aplicáveis a sistemas de alto risco no quadro do AI Act?

## Linhas de trabalho (Sub-perguntas → Objectivos)

| Linha | Sub-pergunta | Objectivo | Capítulo |
|-------|-------------|-----------|----------|
| **XAI-LIV** | Como tornar as decisões de liveness explicáveis? | O1: Métricas de explicabilidade para PAD (ISO 30107-3 + XAI) | Cap. 5 |
| **FLEET-LIV** | Até que ponto FL com DP mantém desempenho e privacidade on-device? | O2: Arquitectura FL-DP on-device, quantificada em latência, energia e privacidade | Cap. 6 |
| **MULTI-LIV** | Qual o ganho da fusão multimodal passiva? | O3: Método de fusão adaptativa multimodal com dataset próprio | Cap. 7 |
| **ADVR-LIV** | Que técnicas de geração adversarial preparam melhor para ataques zero-shot? | O4: Pipeline de ataques sintéticos (GAN/diffusion) com avaliação zero-shot | Cap. 8 |
| **Integração** | Os 4 módulos funcionam juntos com conformidade AI Act? | Sistema end-to-end + análise de conformidade prudencial | Cap. 9 |

## Estrutura do repositório (acordada)

```
phd-liveness/
├── artifacts/
│   ├── xai-liv/           ← O1: explicabilidade
│   ├── fleet-liv/         ← O2: federada on-device
│   ├── multi-liv/         ← O3: fusão multimodal
│   ├── advr-liv/          ← O4: robustez adversarial
│   └── integration/       ← Cap. 9: sistema end-to-end
│       ├── pipeline/      ← orquestração dos 4 módulos
│       ├── compliance/    ← avaliação contra Art. 8.º–15.º AI Act
│       └── benchmarks/    ← métricas integradas
├── support/
│   ├── visualizations/    ← mapas interativos, diagramas
│   ├── presentation/      ← slides, posters para defesa
│   └── scripts/           ← utilitários de análise
├── thesis/                ← capítulos .tex (ou sync Overleaf)
├── CONTEXT.md             ← este ficheiro
└── README.md
```

### Distinção fundamental
- **artifacts/** — artefactos de investigação DSR. Constituem contribuição científica. São avaliados com métricas (ACER, FNMR, fidelidade XAI, etc.) e publicáveis.
- **support/** — material auxiliar. Ferramentas de visualização, apresentação e análise que apoiam o processo mas não são contribuição científica.

## Ficheiros existentes

### support/visualizations/ecossistema-normativo-ch2.html
Mapa interativo do ecossistema normativo do Capítulo 2 ("Enquadramento Regulatório e Normativo"). Ficheiro HTML standalone, zero dependências. Contém:
- 12 instrumentos normativos organizados em 3 planos (direito vinculativo, standards técnicos, contexto de deployment)
- 20 ligações tipificadas (articulação regulatória, referência normativa, implementação, tensão, sobreposição, presunção de conformidade)
- 48 entradas de artigo/secção com texto expandível ao clicar
- Texto autêntico de 16 artigos obtidos via MCP de regulamentos europeus (AI Act, RGPD, NIS 2, CRA, eIDAS 2.0)
- Sínteses rigorosas para normas técnicas pagas (ISO 30107, CEN/TS 18099, ISO 19795, ETSI TS 119 461)
- Painel lateral deslizante, dark mode automático, design académico para defesa
- Stack: vanilla HTML/CSS/JS, custom properties, CSS Grid, zero frameworks

## Decisões-chave da investigação

### Conformidade prudencial
O sistema é concebido para satisfazer voluntariamente os requisitos de alto risco do AI Act (Art. 8.º–15.º), sem presumir que é classificado como alto risco. Justificação: (1) indeterminação contextual de classificação; (2) generalizabilidade DSR; (3) boas práticas de engenharia. Ver Subsecção 2.3.2 do Cap. 2.

### Modelo Bizarro
Conceito de "inversão epistémica complementar" — modelo de liveness treinado em faces sintéticas/geradas por IA que pergunta "isto é artificial?" em vez de "isto é vivo?". Posicionado em ADVR-LIV (O4) como arquitectura dual-pipeline com ligações naturais a XAI-LIV. Valor em modos de falha complementares, especialmente em cenários zero-shot.

### NIS 2 — aplicabilidade indirecta
A NIS 2 afecta o fornecedor de liveness por via indirecta (cadeia de abastecimento), não directamente. QTSPs são entidades essenciais; impõem requisitos contratuais/técnicos aos seus fornecedores de componentes.

### Fluxo de trabalho colaborativo
- Claude (claude.ai) produz drafts → GPT-4o/o3 faz revisão adversarial → Fernando arbitra
- Capítulo 2 está completo e fechado após 3 rondas de revisão adversarial
- Tese escrita em Português (pt-PT), termos técnicos em inglês em itálico
- LaTeX com glossários, Overleaf + Zotero

## Ambiente técnico
- **Tese:** Overleaf + Zotero, ficheiro principal `dissertation.tex`, capítulos em `chapters/`
- **Glossário:** `glossaries` package, centralizado em `glossary-definitions.tex`
- **Compilação:** pdflatex → makeglossaries → pdflatex → pdflatex

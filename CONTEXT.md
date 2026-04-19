# Tema de Tese e Plano de Trabalhos

> **Investigador:** Fernando António Freitas Moreira
> **Programa:** Doutoramento em Informática, Escola de Engenharia, Universidade do Minho
> **Orientador:** Dr. João Marco
> **Metodologia:** *Design Science Research* (Hevner et al., 2004; Gregor & Hevner, 2013)
> **Versão do documento:** V2 — Junho de 2025

---

## 1. Motivação e Enquadramento

A próxima geração da EUDI Wallet exige mecanismos de prova de vida (*liveness detection*), isto é, conjuntos de técnicas que verificam se uma amostra biométrica provém de um ser humano vivo e não de um artefacto como uma foto, vídeo ou máscara, cada vez mais robustos, transparentes e compatíveis com o AI Act, RGPD e NIS 2.

Esta exigência resulta da combinação de vários elementos. Em primeiro lugar, os documentos da Comissão Europeia sobre a EUDI Wallet, nomeadamente o *Architecture Reference Framework*, estabelecem requisitos como a autenticação biométrica local, o *onboarding* digital com verificação remota da identidade (incluindo detecção de ataques de apresentação) e a adopção de princípios de minimização de dados e privacidade, incluindo a realização de prova de vida local (European Commission, 2023). Adicionalmente, o AI Act classifica os sistemas de identificação biométrica remota como sistemas de alto risco (art. 6.º e Anexo III), implicando requisitos elevados de documentação e fiabilidade (European Parliament & Council, 2024), o que impõe o uso de provas de vida mais robustas. Finalmente, a prática observada em consórcios-piloto como o POTENTIAL e o EWC confirma esta tendência, incluindo o *liveness check* como etapa obrigatória nos fluxos de criação da identidade digital no telemóvel (POTENTIAL Consortium, 2023; European Wallet Consortium, 2023).

A crescente sofisticação de agentes automatizados, nomeadamente os conteúdos audiovisuais sintéticos gerados por modelos de IA, os chamados *bots* e *deepfakes*, tem sido amplamente documentada, com avanços significativos na geração de conteúdo sintético indistinguível do real (Westerlund, 2019; ENISA, 2023). Estes agentes têm sido associados à manipulação de opinião pública em redes sociais e à interferência em processos eleitorais, como demonstrado em análises de impacto digital na democracia (Bradshaw & Howard, 2018; European Commission, 2021). Este contexto torna evidente a necessidade de mecanismos fiáveis para verificação de identidade humana em ambientes digitais (World Economic Forum, 2022; AI Act, 2024).

Tal risco não se limita a distorcer a esfera pública: os mesmos *bots* e *deepfakes* podem orquestrar ataques de apresentação em massa, gerando rostos sintéticos ou vídeos manipulados que tentam iludir sistemas de *liveness* básicos. Ao automatizar a tentativa de registo em plataformas governamentais e bancárias, conseguem explorar fragilidades nos testes de movimento ou padrões faciais, multiplicando contas falsas e fragilizando a confiança nos serviços digitais. Assim, a prova de vida deixa de ser apenas um requisito técnico e torna-se barreira crítica contra identidades artificiais à escala, exigindo métodos mais robustos, explicáveis e resistentes ao *spoofing* gerado por IA.

Os agentes falsos (*bots* e *deepfakes*) impactam a prova de vida de quatro formas principais:

1. **Escalonamento de ataques de apresentação**, com *bots* responsáveis por cerca de 20% das tentativas de autenticação (F5 Labs, 2023): *bots* podem gerar milhares de tentativas por segundo, testando variações de rostos sintéticos até encontrarem combinações que passem nos limites de *liveness*. Isto satura os servidores, força a afinação de tolerâncias e aumenta o risco de falsos positivos.

2. **Geração de *spoofing* hiper-realista**: modelos GAN, e mais recentemente avanços em StyleGAN e em *diffusion models*, permitem reproduzir micro-texturas cutâneas indistinguíveis do real (Karras et al., 2020; Ge et al., 2024), podendo enganar detectores baseados apenas em evidência visual. Estes modelos referem-se a duas famílias de modelos generativos: os *GANs* (*Generative Adversarial Networks*) produzem imagens sintéticas através de um jogo competitivo entre gerador e discriminador; os modelos de *diffusion* criam imagens refinando ruído branco por passos sucessivos, resultando em amostras de maior estabilidade e qualidade. Sem pistas fisiológicas como movimento natural ou sinais cardio-respiratórios medidos a partir de variações de cor na pele em vídeo (*rPPG*), entre outros, o sistema poderá aceitar uma entidade não-humana.

3. **Envenenamento de dados e do modelo**: estudos mostram que um único cliente malicioso em aprendizagem federada pode introduzir *backdoors* persistentes (Bagdasaryan et al., 2020; Zheng et al., 2024). Se a prova de vida aprender de forma contínua, em especial em técnicas em que cada dispositivo treina localmente e partilha apenas gradientes agregados (*federated learning*), técnicas essas especialmente interessantes na preservação da privacidade dos dados originais, um atacante pode injectar gradientes alterados ou exemplos artificiais marcados como "vivos", degradando o modelo até aceitar *deepfakes* reais.

4. **Ataques de correlação temporal**, em que *deepfakes* *lip-sync* conseguem alinhar áudio e vídeo com precisão sub-*frame*, enganando testes que não avaliem coerência multimodal (Liu et al., 2024): *deepfakes* conseguem sincronizar áudio-lábios em milissegundos. Se o algoritmo de *liveness* não verificar coerência temporal entre voz, movimento e batimento cardíaco, um vídeo sintético perfeitamente sincronizado passa pelo teste.

Em conjunto, estes vectores tornam indispensável adicionar multimodalidade (voz + *rPPG* + dados de sensores), explicabilidade para apresentar justificações humanas que ajudem a perceber as decisões de um modelo — como por exemplo apresentar *saliency maps*, *attention* e contra-factuais (*explainability*) — e robustez adversarial (treino com *spoof* sintético) à próxima geração de mecanismos de prova de vida.

Garantir que a identidade digital das pessoas seja verificada no seu dispositivo, com privacidade formal e explicabilidade, constitui um desafio ainda sem resposta académica completa. Embora existam linhas de investigação que asseguram privacidade e verificações seguras sem revelação de dados — como as provas de conhecimento zero (*ZKPs*, *Zero-Knowledge Proofs*), que permitem provar que uma afirmação é verdadeira sem revelar os dados subjacentes (por exemplo, provar que alguém tem mais de 18 anos sem revelar a data de nascimento), e a criptografia homomórfica, que permite realizar cálculos sobre dados encriptados sem os desencriptar — estas não endereçam directamente o desafio da verificação de identidade humana em tempo real, nomeadamente a prova de vida. Esta última constitui um problema distinto e essencial para garantir a integridade do *onboarding* digital e da autenticação biométrica local, especialmente em contextos vulneráveis a ataques de apresentação ou uso de *deepfakes*. A investigação proposta visa gerar conhecimento que suporte essa confiança, beneficiando directamente o sistema de identidade digital português (Chave Móvel Digital) e o ecossistema europeu.

Esta conjuntura levanta uma questão central de investigação que orienta o presente plano de trabalhos.

---

## 2. Pergunta de Investigação Global

> **É possível conceber um sistema de *liveness* federado, multimodal, explicável e adversarialmente robusto, operando *on-device*, que cumpra integralmente as exigências de Alto Risco do AI Act?**

Para responder à pergunta de investigação global, foram formuladas quatro sub-perguntas e respectivos objectivos, organizados em quatro linhas de trabalho complementares.

---

## 3. Sub-Perguntas de Investigação e respectivos objectivos específicos

### 3.1 *Explainable AI Liveness* (XAI-LIV)

**Sub-pergunta:** Como tornar as decisões de *liveness* explicáveis a auditores e utilizadores?

**Objectivo O1:** Definir métricas de explicabilidade para *Presentation Attack Detection* (ISO 30107-3 + XAI). Este objectivo visa desenvolver indicadores quantitativos e qualitativos (ex.: fidelidade, plausibilidade, localizações salientes) que permitam auditar decisões de prova de vida, em conformidade com o AI Act e os critérios da norma ISO.

### 3.2 *Federated Liveness at Edge* (FLEET-LIV)

**Sub-pergunta:** Até que ponto a aprendizagem federada (*FL*) com *Differential Privacy* (*DP*) — que garante limites formais de reidentificação adicionando ruído estatístico às actualizações dos modelos — mantém desempenho e privacidade em contexto móvel?

**Objectivo O2:** Desenhar arquitectura FL-DP *on-device*, quantificada em latência, energia e privacidade. Procura-se implementar um sistema de aprendizagem federado em dispositivos móveis com protecções formais de *Differential Privacy*, avaliando o impacto em desempenho, consumo de energia e segurança.

### 3.3 *Multimodal Liveness* (MULTI-LIV)

**Sub-pergunta:** Qual o ganho em fusão multimodal passiva (face, *rPPG*, voz, dados de sensores dos dispositivos) face a abordagens unimodais?

**Objectivo O3:** Desenvolver um método de fusão adaptativa multi-modal e validar num conjunto de dados recolhidos especificamente no âmbito desta investigação. O objectivo é combinar sinais de vídeo facial, estimativas de ritmo cardíaco obtidas por fotopletismografia remota (*rPPG*), voz e dados de sensores embutidos nos dispositivos dos utilizadores (como acelerómetro, giroscópio ou sensor de proximidade), com vista à detecção passiva de prova de vida. A recolha de dados será realizada com a participação de voluntários, em ambiente controlado, respeitando os princípios éticos e legais aplicáveis. A abordagem permitirá obter um conjunto de dados realista e variado, com diferentes condições de iluminação, pose e ruído, e com registo simultâneo de múltiplas modalidades, o que é escasso em bases de dados públicas. Estes dados servirão para treinar e validar modelos robustos, capazes de se adaptar dinamicamente à indisponibilidade, falha ou degradação de uma ou mais modalidades.

### 3.4 *Adversarial-Robust Liveness* (ADVR-LIV)

**Sub-pergunta:** Que técnicas de geração adversarial melhor preparam o modelo para ataques *zero-shot*?

**Objectivo O4:** Criar *pipeline* de ataques sintéticos (GAN/*diffusion*) e avaliar a capacidade de um modelo lidar com ataques nunca vistos durante o treino, mantendo baixa taxa de erro (robustez *zero-shot*). Ou seja, pretende-se gerar exemplos artificiais de ataque que não existam nos dados de treino, para testar a resiliência do sistema a *deepfakes* e *spoofing* não previsto, validando a generalização do modelo.

---

## 6. Plano Técnico e Métricas

- ***Design Science Research***: iterações de concepção-avaliação.
- **Dados**: combinação de *datasets* públicos (LivDet-Face 2024, CASIA-SURF, outros) e recolha nacional (~1 000 participantes).
- **Avaliação**: ACER, FNMR, energia (mWh/inferência), explicabilidade (fidelidade), conformidade AI Act.
- **Ferramentas**: PyTorch Mobile, TensorFlow Lite, PySyft (*FL*), Google Tink (assinatura), *Trusted Execution Environment*.

---

## 7. Cronograma Resumido (8 Semestres)

| Sem. | Actividades-chave | Entregáveis |
|------|-------------------|-------------|
| 1 | Revisão sistemática + definição detalhada de perguntas | Relatório Estado-da-Arte |
| 2 | Revisão sistemática + definição detalhada de perguntas + Plano detalhado de Tese | Prova Pública Planeamento |
| 3 | Protótipo XAI-LIV; Implementação FL-DP (FLEET-LIV) | Artigo Conferência 1 |
| 4 | Testes de campo + optimização energética | *Report* Interno |
| 5 | Módulo MULTI-LIV + captura multimodal | Artigo Conferência 2 |
| 6 | *Pipeline* ADVR-LIV + robustez *zero-shot* | Artigo *Journal* |
| 7 | Integração *end-to-end* + auditoria AI Act | Demonstração |
| 8 | Redacção final e defesa | Tese & Defesa |

---

## 8. Justificação da Abordagem Metodológica

A *Design Science Research* (DSR) parece ser a abordagem mais adequada para os trabalhos identificados, enquadrando-se no modelo *relevance → design → rigor* proposto por Hevner et al. (2004) e reforçado por Gregor & Hevner (2013):

1. **Natureza construtiva** — o doutoramento visa conceber artefactos (modelos de *liveness*, protocolos FL-DP, *pipeline* adversarial) e avaliá-los empiricamente, enquadrando-se no ciclo *relevance → design → rigor* do DSR.

2. **Iteração e utilidade demonstrada** — DSR prevê ciclos sucessivos de prototipagem-avaliação, adequados a ajustar o sistema às exigências regulatórias (AI Act, RGPD).

3. **Contributo científico generalizável** — para além de resolver o problema prático, cada iteração pretende produzir *design principles* transferíveis (e.g., métricas de XAI para PAD).

### Alternativas consideradas

Apesar da DSR parecer a mais indicada, poderão ainda ser alvo de consideração mais aprofundada as seguintes opções:

- ***Experimental Research*** — mais adequada à confirmação de hipóteses isoladas, menos à criação de sistemas complexos.
- ***Action Research*** ou ***Case Study*** — concentradas em intervenções organizacionais; não proporcionam artefactos generalizáveis com o mesmo rigor construtivista do DSR.

---

## 9. Referências

Bagdasaryan, E., Veit, A., Hua, Y., Estrin, D., & Shmatikov, V. (2020). How to backdoor federated learning. In *Proceedings of the 23rd International Conference on Artificial Intelligence and Statistics* (pp. 2938–2948). PMLR. https://proceedings.mlr.press/v108/bagdasaryan20a/bagdasaryan20a.pdf

Bradshaw, S., & Howard, P. N. (2018). *Challenging truth and trust: A global inventory of organized social media manipulation*. Oxford Internet Institute. https://demtech.oii.ox.ac.uk/

Brakerski, Z., Gentry, C., & Vaikuntanathan, V. (2014). (Leveled) fully homomorphic encryption without bootstrapping. *ACM Transactions on Computation Theory*, 6(3), 1–36. https://doi.org/10.1145/2633600

Chingovska, I., Anjos, A., & Marcel, S. (2012). On the effectiveness of local binary patterns in face anti-spoofing. In *BIOSIG 2012* (pp. 1–7). https://www.researchgate.net/publication/230775873_On_the_Effectiveness_of_Local_Binary_Patterns_in_Face_Anti-spoofing

European Commission. (2021). *Tackling online disinformation: A European approach*. https://digital-strategy.ec.europa.eu/en/policies/online-disinformation

European Commission. (2023). *European Digital Identity Wallet Architecture Reference Framework*. Publications Office of the European Union. https://eu-digital-identity-wallet.github.io/eudi-doc-architecture-and-reference-framework/2.2.0/

European Parliament & Council. (2024). *Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*. Official Journal of the European Union. https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng

European Union Agency for Cybersecurity (ENISA). (2023). *Threat landscape report 2023 — Emerging technologies*. https://www.enisa.europa.eu/publications/enisa-threat-landscape-2023

European Wallet Consortium. (2023). https://eudiwalletconsortium.org/

F5 Labs. (2023). *2023 Identity Threat Report: Executive Summary*. https://www.f5.com/labs/articles/threat-intelligence/2023-identity-threat-report-executive-summary

Ge, X., Liu, X., Yu, Z., Shi, J., Qi, C., Li, J., & Kälviäinen, H. (2024). DiffFAS: Face anti-spoofing via generative diffusion models. In *Computer Vision — ECCV 2024* (pp. 144–161). Springer. https://arxiv.org/pdf/2409.08572

Goldreich, O. (2004). *Foundations of cryptography: Volume 2, basic applications*. Cambridge University Press. https://www.researchgate.net/publication/239066122_Foundations_of_cryptography_II_Basic_applications

Goldreich, O., Micali, S., & Wigderson, A. (1991). Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems. *Journal of the ACM*, 38(3), 690–728. https://doi.org/10.1145/102782.102783

Gregor, S., & Hevner, A. R. (2013). Positioning and presenting design science research for maximum impact. *MIS Quarterly*, 37(2), 337–355. https://doi.org/10.25300/MISQ/2013/37.2.01

Hevner, A. R., March, S. T., Park, J., & Ram, S. (2004). Design science in information systems research. *MIS Quarterly*, 28(1), 75–105. https://misq.umn.edu/design-science-in-information-systems-research.html

ISO/IEC. (2023). *ISO/IEC 30107-3:2023 — Information technology — Biometric presentation attack detection — Part 3: Testing and reporting*. International Organization for Standardization. https://www.iso.org/standard/79520.html

Karras, T., Laine, S., Aittala, M., Hellsten, J., Lehtinen, J., & Aila, T. (2020). Analyzing and improving the image quality of StyleGAN. In *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition* (pp. 8110–8119). IEEE. https://openaccess.thecvf.com/content_CVPR_2020/papers/Karras_Analyzing_and_Improving_the_Image_Quality_of_StyleGAN_CVPR_2020_paper.pdf

Li, Y., Chang, M. C., & Lyu, S. (2018). In ictu oculi: Exposing AI-created fake videos by detecting eye blinking. In *IEEE International Workshop on Information Forensics and Security (WIFS)*. https://www.researchgate.net/publication/330797421_In_Ictu_Oculi_Exposing_AI_Created_Fake_Videos_by_Detecting_Eye_Blinking

Liu, W., She, T., Liu, J., Wang, R., Yao, D., & Liang, Z. (2024). *Lips are lying: Spotting the temporal inconsistency between audio and visual in lip-syncing deepfakes* (arXiv:2401.15668). https://arxiv.org/pdf/2401.15668v1

POTENTIAL Consortium. (2023). *Deliverable D3.1 — Onboarding & Identity Proofing Requirements*. EU Digital Identity Large Scale Pilot. https://www.digital-identity-wallet.eu

Westerlund, M. (2019). The emergence of deepfake technology: A review. *Technology Innovation Management Review*, 9(11), 40–53. https://doi.org/10.22215/timreview/1282

World Economic Forum. (2022). *Earning Digital Trust: Decision-Making for Trustworthy Technologies*. https://www3.weforum.org/docs/WEF_Earning_Digital_Trust_2022.pdf

Zheng, J., Yuan, X., Li, K., Ni, W., Tovar, E., & Crowcroft, J. (2024). *A novel defense against poisoning attacks on federated learning: LayerCAM-AE* (arXiv:2406.02605). https://arxiv.org/pdf/2406.02605

---

## Anexo A — Recursos complementares (lista não exaustiva)

### Regulamentos e Directivas

- **AI Act** (Regulamento UE 2024/1689) — https://eur-lex.europa.eu/eli/reg/2024/1689/oj
- **RGPD** (Regulamento UE 2016/679) — https://eur-lex.europa.eu/eli/reg/2016/679/oj
- **NIS 2** (Directiva UE 2022/2555) — https://eur-lex.europa.eu/eli/dir/2022/2555/oj

### *Datasets*

- **LivDet-Face 2024** — https://face2024.livdet.org/
- **CASIA-SURF** — https://paperswithcode.com/dataset/casia-surf

### Normas

- **ISO/IEC 30107-3** (*PAD*) — https://www.iso.org/standard/79520.html

### Ferramentas & *Frameworks*

- **PyTorch Mobile** — https://pytorch.org/mobile/home/
- **TensorFlow Lite** — https://www.tensorflow.org/lite
- **PySyft** (*Federated Learning*) — https://github.com/OpenMined/PySyft
- **Google Tink** (Cripto) — https://developers.google.com/tink
- **Arm TrustZone** (*TEE*) — https://developer.arm.com/Processors/TrustZone%20for%20Cortex-A

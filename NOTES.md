# NOTES.md — Refinamentos posteriores à proposta

Notas de trabalho que refinam ou estendem a proposta original (ver [CONTEXT.md](CONTEXT.md)) mas que ainda não foram incorporadas formalmente num capítulo da tese. Este ficheiro evolui à medida que a investigação progride; entradas consolidadas migram para o respectivo capítulo e podem ser removidas daqui.

---

## Conformidade prudencial

O sistema é concebido para satisfazer voluntariamente os requisitos de alto risco do AI Act (Art. 8.º–15.º), **sem presumir** que é classificado como alto risco.

**Justificação:**
1. **Indeterminação contextual de classificação** — a qualificação como sistema de alto risco depende do contexto de uso (identificação biométrica remota vs. autenticação local) e do integrador final; o fornecedor de um componente de *liveness* não controla esse enquadramento.
2. **Generalizabilidade DSR** — para que os artefactos produzidos sirvam de *design principles* transferíveis, devem assumir o regime regulatório mais exigente plausível.
3. **Boas práticas de engenharia** — os requisitos de Art. 8.º–15.º (gestão de risco, governança de dados, documentação técnica, transparência, supervisão humana, robustez/precisão/ciber-segurança) representam práticas recomendadas mesmo fora do regime de alto risco.

**Localização prevista:** Subsecção 2.3.2 do Capítulo 2 ("Enquadramento Regulatório e Normativo").

---

## Modelo Bizarro

Conceito de **inversão epistémica complementar** — modelo de *liveness* treinado em faces sintéticas/geradas por IA que pergunta *"isto é artificial?"* em vez de *"isto é vivo?"*.

**Enquadramento:** posicionado em **ADVR-LIV (O4)** como arquitectura *dual-pipeline*, com ligações naturais a **XAI-LIV (O1)** via análise de sobreposição entre regiões salientes do detector canónico (pró-*liveness*) e do detector bizarro (pró-artificial).

**Valor:** modos de falha complementares, especialmente em cenários *zero-shot* onde o detector canónico nunca viu o vector de ataque e o detector bizarro pode ainda reconhecer o artefacto pela sua artificialidade.

**Risco a investigar:** sobreposição de falhas em ataques adversariais optimizados simultaneamente contra ambos os modelos.

---

## NIS 2 — aplicabilidade indirecta

A **NIS 2** (Directiva UE 2022/2555) não se aplica directamente ao fornecedor de *liveness*: a investigação não produz uma entidade essencial ou importante no sentido do Art. 3.º da directiva.

**Aplicabilidade por via indirecta:** os QTSPs (*Qualified Trust Service Providers*) e os emissores da EUDI Wallet são tipicamente entidades essenciais sob NIS 2, e impõem aos seus fornecedores de componentes — incluindo o módulo de *liveness* — requisitos contratuais e técnicos alinhados com as suas obrigações (gestão de risco de cadeia de abastecimento, notificação de incidentes, continuidade, criptografia).

**Implicação prática:** o sistema deve expor primitivas e documentação que permitam ao integrador (QTSP) cumprir as suas obrigações NIS 2 — não basta satisfazer o AI Act.

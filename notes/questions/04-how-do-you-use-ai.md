# How do you use AI in your workflow?

> En Kaya esta pregunta es casi segura (empresa de AI + bonus point en la JD).
> Doble lectura del entrevistador: (1) ¿sos productivo con AI? (2) ¿podés crecer
> hacia AI engineering, como dice la JD?
>
> Timebox: **60-75 segundos**.

## Mi respuesta (v1)

I use AI tools as part of my daily engineering workflow to move faster and improve the quality of my output. I use Claude and Codex for debugging, code review, documentation, exploring implementation options, and thinking through edge cases.

I also use more structured workflows, like OpenSpec-style approaches, where I define the goal, constraints, and acceptance criteria before using AI to help with implementation. That helps me get more reliable results. I also use MCPs, like Linear MCP, to connect AI with task management, Playwright, Figma or Github MCP among others.

I'm preparing for the Claude Certified Architect certification because I want to go deeper into how to integrate AI into engineering workflows in a structured way. For me, AI is an accelerator, not a replacement for engineering judgment. It helps me move faster, but I still own the decisions around architecture, quality, testing, and product impact.

## ✅ Lo que ya está fuerte

- **"An accelerator, not a replacement for engineering judgment"** — cierre perfecto. Responde la objeción antes de que la hagan.
- **Spec-first workflow** (goal, constraints, acceptance criteria ANTES de implementar) — esto te diferencia del 90% que dice "uso ChatGPT para autocompletar".
- Herramientas concretas y actuales (MCPs de Linear, Playwright, Figma, GitHub).
- Longitud correcta (~70 segundos).




## 🔧 Tres ajustes

### 1. Falta UN ejemplo vivido (el mismo patrón de siempre: claim sin evidencia)

Listás categorías — debugging, review, docs — pero ningún momento real.
Un mini-ejemplo de 15 segundos lo arregla:

> "For example, with the Figma MCP I can go from a design file to a typed
> component scaffold, and then use Playwright MCP to verify the implemented
> flow end-to-end — so AI is involved from design handoff to verification."

(Elegir el ejemplo REAL más fuerte que tenga — design-to-code con Figma MCP es
ideal para ESTA JD, que es literalmente "Figma to production".)

### 2. Falta el mecanismo de calidad (cómo "owneás" las decisiones)

"I still own the decisions" es una claim. El mecanismo la hace creíble:

> "My rule is simple: I never merge code I don't fully understand. AI output
> goes through the same bar as human code — review, tests, and linting."

### 3. Falta el puente a Kaya (usar AI → construir AI)

La JD dice "grow into AI engineering work". Cerrar con eso:

> "And part of why Kaya appeals to me is that AI isn't just in my workflow —
> it's in the product. I want to move from using AI to build, to building
> products with AI in them."

## Follow-ups probables (preparar especialmente la primera)

- **"Tell me about a time AI got it wrong / led you astray. How did you catch it?"**
  ← trampa clásica. Tener UNA historia real: qué generó mal, cómo lo detectaste
  (test, review, conocimiento del dominio), qué cambiaste en tu workflow.
- "How do you decide what NOT to delegate to AI?"
- "Doesn't AI make you slower on code you then have to review?"
- "What's an MCP? Explain it to me." ← *si nombrás la herramienta, tenés que poder explicarla simple: "a standard protocol that lets the AI talk to external tools — my task tracker, the browser, Figma — instead of just generating text".*

## Notas de delivery

- [ ] Ejemplo real elegido y practicado (¿Figma MCP design-to-code? ¿Playwright verify?)
- [ ] Historia de "AI se equivocó y lo agarré" lista
- [ ] Ojo: la certificación ya la menciono en Tell-me-about-yourself — no repetirla dos veces en la misma entrevista

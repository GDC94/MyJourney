# Tell me about yourself

> Timebox al responder: **90 segundos a 2 minutos máximo**. Practicar con timer.

## Mi respuesta

Sure. I'm a frontend / product engineer with more than five years of experience ***building production web applications***, 
with React, Next.js, TypeScript, Javascript among others.

What I really enjoy about frontend is the mix of design, engineering, and product. I like taking a Figma design 
and **making it** real in a way that feels accurate, polished and easy to use, improve performance and explore new tools that help me work better.

In my most recent role, I've been working on a Cryptocurrency Platform 
with real-time market data, where performance and responsiveness are really important. 

So there, I:
  - Migrated high-frequency endpoints with market data updates from REST polling to WebSockets, improving how quickly the interface reacted to market changes
    
    (with REST polling, the client keeps asking the server for new data every few seconds. With WebSockets, the connection stays open, so the server can send updates immediately when new market data is available) 

  - Implemented reusable frontend components and documented them in Storybook

  - Integrated TradingView charts into the platform

  - helped improve perceived load and interaction speed appliying code splitting and memoization
     
    (
      
       Improved frontend performance and maintainability by identifying code smells, applying SOLID principles, and using code splitting and memoization to reduce unnecessary renders: 
          
          # Code splitting involves breaking JavaScript into smaller chunks so that not everything is loaded at the start. In Next.js, lazy loading helps improve initial loading by reducing the amount of JavaScript needed to render a route, and allows defer Client Components or libraries until they are actually needed.
          # I used useMemo and React.memo to avoid unnecessary recalculations and re-renders in screens with frequent market data updates.
          # Some common examples I look for are duplicated logic, components with too many responsibilities, unclear naming, large effects, too many props, unnecessary abstractions, or weak typing with too much any
    
    )

Before that, I worked in different product environments, including payment flows, high-demand ticketing experiences or Web3 products. I have also used tools like PostHog or Amplitude to build funnels, understand the user behavior and then iterate based on evidence instead of assumptions. 

(For instance, I used PostHog to track the account creation flow and build a funnel that showed us where users were dropping off. We identified that the registration process had too many steps, and many users were abandoning it before completing their account. 
Based on that data, I reduced the number of screens, added a progress indicator, and asked only for the essential information upfront. 
That made the onboarding flow clearer, reduced friction, and made it easier for users to complete the process.
)

One thing that has really improved my way of work as product creators today is the use of AI tools. That’s why I use Claude, Codex, OpenSpec-style workflows, and MCPs to speed up debugging, code review, documentation, technical exploration, and task management.


In addition, I'm preparing for the ***Claude Certified Architect certification*** because I want to learn how to use AI more effectively as part of my day-to-day engineering workflow. My goal is to increase both the speed and quality, move faster, reduce repetitive tasks, explore better solutions, and deliver more high-quality outputs.

For instance, I use them 

- to draft components
- improve TypeScript types
- write clearer PR descriptions
- and think about edge cases before opening a pull request
- identify possible unnecessary re-renders
- caching opportunities
- or better ways to structure some data flows.

But I also want to use IA to:

- to generate more complete testing strategies, including edge cases, regression scenarios, integration tests
- I’d like to connect AI with observability tools to detect unusual patterns in performance, errors, before they become critical issues.
- to simulate complex user journeys, detect friction points, and identify possible UX or business logic issues before release.
- to implement AI-powered design-to-code validation because the gap between Figma and the actual implementation is a very common problem in frontend teams. The   idea wouldn’t be just pixel-perfect comparison, but detecting meaningful visual differences like spacing, typography, layout issues, missing states, responsive problems, or design system inconsistencies before they reach production.

To sum up, when I read Kaya’s job description, I saw a strong match between what the role requires and the value I can bring.

I think tah the mix of product engineering, frontend execution, AI, and real operational problems is very aligned with my experience, and t hat’s why I believe I could contribute meaningfully to Kaya, taking ownership, moving fast, and helping build product experiences that real customers can rely on.

## Estructura (por qué funciona)

```
Presente (quién soy + qué me importa)
  → Evidencia (trading: performance, WebSockets)
  → Pasado (breadth: payments, ticketing, analytics)
  → Diferenciador (AI workflow)
  → Por qué Kaya (cierre con energía)
```

## Follow-ups probables que dispara esta respuesta

- "Tell me more about the REST polling → WebSockets migration. What challenges did you face?"
- "How exactly did you measure 'perceived load'? What improved?"
- "How do you use AI in your daily workflow without losing code quality?"
- "What did you learn from working on payment flows?"

**Regla:** todo lo que mencionás acá tiene que aguantar 5 minutos de profundización. Si no podés hablar 5 minutos de algo, sacalo de la respuesta.


Hi, i am german, i am a frontend developer with more than five years of experiencie working with prduction web apps, uising tecnologies like react, next js, typescript, among others. I really enjoy taking a figma and making it real in a way that feels accurate, polish and easy to use. in the last months,
I have been working on a cryptocurrencies platform built over solana blockchain, and there i built several components, features and integrations such as trading view charts, to show raeal time market data. Before that, i worked as a frontend engii on a platform, agricultural platorm called Nera, that belongs to Banco Galicia, where it helps build a new digital experience for rural residents, allowing them to purchase supplies using bank loans 
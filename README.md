# Kaya — Interview Prep Template

Template de práctica para la posición de **Product Engineer en Kaya AI**.
Construido con el stack exacto de la JD para practicar live coding, dashboards
y design-to-code.

## Stack

| Herramienta | Rol | JD |
| ----------- | --- | -- |
| React 19 + TypeScript | Base | ✅ "TypeScript, React" |
| Vite | Bundler / dev server | (la JD prefiere Next.js — Vite es ideal para live coding) |
| Tailwind CSS v4 | Estilos | ✅ "Tailwind CSS" |
| shadcn/ui (Base UI) | Componentes | ✅ "modern component libraries (Shadcn, Radix)" |
| TanStack React Query | Server state | ✅ "React Query" |
| Jotai | Client state | ✅ "Jotai" |
| Recharts | Data viz | ✅ "Recharts, Chart.js, D3" |
| ESLint + Prettier | Calidad | ✅ "linting, formatting" |

## Comandos

```bash
pnpm dev        # dev server
pnpm typecheck  # tsc -b
pnpm lint       # eslint
pnpm format     # prettier
```

## Estructura

```
src/
├── components/ui/     # shadcn components (button, card, table, tabs, …)
├── features/orders/   # OrdersDashboard — demo de referencia
├── lib/
│   ├── api.ts         # mock REST API con delay + modos: success/empty/error/slow
│   └── utils.ts       # cn() helper
└── store/atoms.ts     # Jotai atoms (client state)
notes/
├── job-description.md     # la JD completa
├── behavioral.md          # preguntas STAR + respuestas a completar
├── technical-questions.md # Q&A técnicas de React/TS/CSS
└── exercises.md           # ejercicios de live coding por nivel
```

## El dashboard demo

`OrdersDashboard` es la **referencia de patrones**, no un ejercicio:

- React Query para server state (con `queryKey` que incluye sus dependencias)
- Jotai para UI state (filtros, búsqueda) — server y client state separados
- Los **4 estados de datos** manejados explícitamente: loading (skeletons),
  error (mensaje + retry), empty (de API y de filtros — son distintos), success
- Selector "API mode" para forzar cada estado y practicar
- Recharts con `ResponsiveContainer`
- Tabla shadcn con filtros combinables

## Cómo practicar

1. Elegí un ejercicio de `notes/exercises.md`
2. `git checkout -b exercise/<nombre>`
3. Timebox de 30-45 min, narrando en voz alta
4. Al terminar, compará contra los patrones del dashboard demo

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A frontend interview-prep / practice workspace (React 19 + Vite + TS), not a shipping product. It mirrors the Kaya AI Product Engineer stack so live-coding and DSA drills can be practiced under realistic conditions. Curriculum and intent live in `MISSION.md`, `NOTES.md`, `README.md`, `RESOURCES.md`.

- `src/exercises/` — live-coding exercises (fetch/Query/forms/tables)
- `src/features/orders/OrdersDashboard.tsx` — reference implementation (React Query + Jotai + Recharts, all 4 data states)
- `src/playground/`, `src/practice/` — DSA / array-method drills (WIP, intentionally buggy)
- `src/lib/api.ts` — mock REST API with `success`/`empty`/`error`/`slow` modes
- `notes/questions/` — interview Q&A, one markdown file per question, numbered

## Commands (pnpm)

- `pnpm dev` — Vite dev server
- `pnpm typecheck` — `tsc -b` (composite build; excludes playground/practice — see gotcha below)
- `pnpm build` — `tsc -b && vite build`
- `pnpm lint` — `eslint .`
- `pnpm format` — Prettier over `src/**/*.{ts,tsx,css}` and `notes/**/*.md`

Per global rule: never run `pnpm build` after changes.

## Practice-file isolation (key gotcha)

`tsconfig.app.json` explicitly **excludes** `src/playground` and `src/practice`, so `pnpm typecheck` and `pnpm build` ignore in-progress drills — a buggy exercise never breaks the build. Each of those dirs has its own `tsconfig.json` (the editor's closest config) that keeps `strict: true` but sets `noUnusedLocals`/`noUnusedParameters` to `false`, so they're still type-checked live while you write them. Don't add playground/practice files to the app build to "fix" type errors — that defeats the isolation.

## Code style

- Prettier non-defaults: **no semicolons**, single quotes, `trailingComma: all`, `printWidth: 80`, Tailwind class sorting via `prettier-plugin-tailwindcss`. Match this.
- `src/components/ui/**` (shadcn, Base UI `base-nova`) disables `react-refresh/only-export-components` — dual exports there are intentional; don't "fix" them.
- Import alias: `@` → `src/` (e.g. `@/lib/utils`, `@/components/ui`).

## Stack notes

- State: **Jotai** (client, `src/store/atoms.ts`) + **TanStack React Query v5** (server). QueryClient defaults set in `main.tsx` (`staleTime: 30_000`, `retry: 1`).
- UI: Tailwind v4 (CSS variables, dark mode via `next-themes`), shadcn/ui, Recharts, sonner, lucide-react.
- No test framework is installed — this repo verifies by running the app, not by tests.

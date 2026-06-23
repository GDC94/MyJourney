# Live Coding Exercises — Práctica

> Cada ejercicio se hace en una branch nueva: `git checkout -b exercise/<nombre>`.
> Timebox sugerido: 30-45 min, como una entrevista real.
> Hablá EN VOZ ALTA mientras codeás — practicá narrar tus decisiones.

## Nivel 1 — Fundamentos (calentamiento)

- [ ] **Counter con historial**: contador +/- que guarda cada valor en una lista, con undo.
- [ ] **Todo list**: agregar, completar, borrar, filtrar (all/active/done). Sin librerías de estado.
- [ ] **Tabs accesibles**: componente de tabs desde cero (sin shadcn), con teclado (←/→).
- [ ] **Debounced search input**: input que "busca" (filtra una lista local) con debounce de 300ms. Custom hook `useDebounce`.

## Nivel 2 — Data fetching (lo más probable para esta JD)

- [ ] **Fetch con 4 estados**: consumir `https://jsonplaceholder.typicode.com/users` y renderizar loading/error/empty/success. Primero con useEffect, después refactor a React Query. Explicar la diferencia.
- [ ] **Lista con paginación**: posts paginados con botones prev/next, deshabilitar bordes, mantener datos previos mientras carga (`placeholderData: keepPreviousData`).
- [ ] **Búsqueda remota**: input que dispara fetch con debounce + cancelación (AbortController o React Query con queryKey dinámica).
- [ ] **Optimistic update**: toggle de favorito que actualiza la UI al instante y revierte si falla.

## Nivel 3 — Dashboards (el día a día del rol)

- [ ] **Tabla sorteable**: la tabla de orders del template + sort por columna (asc/desc/none) clickeando el header.
- [ ] **Filtros combinables en URL**: persistir filtros de la tabla en query params (compartir link = mismo estado).
- [ ] **Chart interactivo**: agregar al dashboard un line chart de Recharts con selector de rango (3m/6m/12m).
- [ ] **KPI cards**: fila de 4 cards (total spend, on-time %, delayed count, active POs) calculadas de los datos, con skeleton states.

## Nivel 4 — Design-to-code

- [ ] **Recrear un componente de un screenshot**: elegir un card/modal de un producto real (Linear, Vercel, Stripe) y clonarlo pixel-perfect con Tailwind.
- [ ] **Empty states con intención**: diseñar e implementar empty states para 3 contextos distintos (sin datos, sin resultados de búsqueda, error de permiso).
- [ ] **Responsive dashboard**: hacer que el dashboard del template funcione perfecto en 375px, 768px y 1440px.

## Nivel 5 — Conceptos para explicar mientras codeás

- [ ] Implementar `useFetch` casero y explicar las race conditions que React Query resuelve.
- [ ] Implementar un mini `useState` + explicar closures y por qué el state "viejo" aparece en callbacks.
- [ ] Render props vs custom hooks vs composición — refactorizar el mismo componente de las tres formas.

---

## Checklist de entrevista (leer antes de cada sesión)

1. **Repetí el enunciado** con tus palabras antes de codear. Preguntá edge cases.
2. **Empezá simple** — versión que funciona primero, refactor después.
3. **Narrá tu pensamiento** — el silencio es lo peor que podés hacer.
4. **Tipá todo** — nada de `any`. Si no sabés el tipo, `unknown` y narroweá.
5. **Manejá los 4 estados** aunque no te lo pidan — es lo que distingue seniority.
6. **Nombrá bien** — variables y funciones que se expliquen solas.
7. Al terminar: **mencioná qué mejorarías** con más tiempo (tests, a11y, virtualización).

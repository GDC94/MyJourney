# Playbook del ejercicio — 10 minutos

> **No es "terminar un feature". Es mostrar cómo pensás y comunicás bajo presión.**
> Ellos saben que 10 min no alcanzan para terminar. Evalúan el PROCESO.

## El reparto de los 10 minutos

```
0:00-1:00   ENTENDER  → repetir el problema, preguntar edge cases, decir el plan
1:00-7:00   CONSTRUIR → MVP que funciona, narrando en voz alta
7:00-9:00   ESTADOS   → loading / error / empty (lo que distingue seniority)
9:00-10:00  CERRAR    → "con más tiempo agregaría X, Y, Z"
```

> Si solo te acordás de UNA cosa: **el primer minuto NO se codea. Se habla.**

## Los 3 ejes que evalúan (en orden de peso)

1. **¿Entendés antes de teclear?** El que pierde arranca a codear en el segundo 1.
   El que gana dice: *"Before I start — let me make sure I understand. You want
   X. A couple of questions: should it handle Y? What about Z?"*
2. **¿Narrás?** Silencio = no pueden evaluarte. Decí lo que hacés y POR QUÉ.
   *"I'll start with the data shape... I'm typing the response so the rest is safe..."*
3. **¿Código limpio aunque sea chico?** Nombres claros, tipado (nada de `any`),
   los estados de datos. Mejor poco y prolijo que mucho y sucio.

## Guion de apertura (memorizar la forma, no las palabras)

> "Cool. So the goal is [repetir con mis palabras]. Before I jump in —
> [1-2 preguntas de edge cases]. My plan: I'll get a basic version rendering
> first, then handle loading and error states, then polish if there's time.
> I'll think out loud as I go. Sound good?"

Esto solo ya te pone por encima de la media. Demuestra producto + comunicación
+ priorización en 20 segundos.

## Lo que SÍ o SÍ tiene que aparecer (aunque sea simple)

- [ ] **Tipos** — interface del dato antes de usarlo
- [ ] **Los 4 estados** — aunque sea un `if (isLoading) return ...` mínimo.
      La JD lo pide TEXTUAL. Es la señal más barata de seniority frontend.
- [ ] **Nombres claros** — `purchaseOrders`, no `data2`
- [ ] **key correcta** en listas (no el index si hay id)
- [ ] **Narración constante**

## Lo que se perdona si lo VERBALIZÁS

No llegar a terminar está OK si decís qué falta:
> "I'm running low on time — with more time I'd add: empty state, debounce on
> the search, tests for the filter logic, and accessibility on the inputs."

Eso convierte "no terminé" en "sé exactamente qué falta y por qué" = seniority.

## Trampas que matan en 10 min

- ❌ Codear en silencio → no pueden evaluarte
- ❌ Arrancar sin preguntar → asumís mal y perdés 5 min en lo que no era
- ❌ Pelearte con setup/imports → tené el template caliente, conocé los paths
- ❌ Over-engineering → no metas Redux para una lista de 5 items
- ❌ `any` para salir del paso → narrá: "I'd type this properly, for now..."
- ❌ Quedarte trabado en silencio → si te trabás, PENSÁ EN VOZ ALTA, pedí ayuda

## Pre-flight (tener listo ANTES de empezar)

- [ ] `pnpm dev` levanta sin errores
- [ ] Editor con TS workspace version (no el bundled viejo)
- [ ] `OrdersDashboard.tsx` revisado: useQuery, 4 estados, filtro
- [ ] Sé los imports de memoria: useState, useQuery, los de shadcn
- [ ] Practiqué "fetch + 4 estados" de memoria al menos 2 veces sin mirar

## Drill recomendado para practicar HOY

De `notes/exercises.md` → **"Fetch con 4 estados"**:
consumir `https://jsonplaceholder.typicode.com/users`, renderizar
loading/error/empty/success. Hacelo en 10 min con timer, narrando en voz alta
como si te escucharan. Después compará contra `OrdersDashboard.tsx`.

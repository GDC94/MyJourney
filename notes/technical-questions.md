# Technical Questions — React / TypeScript / Frontend

> Preguntas frecuentes en entrevistas para roles como el de Kaya.
> Respondé primero SIN mirar la respuesta. Escribí tu propia versión.

## React Core

### 1. ¿Qué es el reconciliation / Virtual DOM y por qué existe?

**Mi respuesta:**

**Puntos clave:** React mantiene una representación en memoria del árbol de UI.
Al cambiar estado, genera un nuevo árbol, lo difea contra el anterior (diffing)
y aplica el mínimo de mutaciones reales al DOM. El DOM real es lento de mutar;
el diffing en memoria es barato. Keys ayudan al algoritmo a identificar
elementos en listas.

### 2. ¿Cuándo se re-renderiza un componente?

**Mi respuesta:**

**Puntos clave:** (1) cambia su state, (2) re-renderiza su padre, (3) cambia el
valor de un context que consume. NO se re-renderiza "cuando cambian las props"
per se — las props cambian PORQUE el padre re-renderizó.

### 3. `useMemo` vs `useCallback` vs `React.memo` — ¿cuándo usar cada uno?

**Mi respuesta:**

**Puntos clave:** `useMemo` memoiza un valor calculado; `useCallback` memoiza
una función (es `useMemo(() => fn, deps)`); `React.memo` evita re-render del
componente si las props no cambiaron (shallow compare). Solo valen la pena
cuando hay un problema medido — memoizar todo es ruido. Con React Compiler
esto tiende a automatizarse.

### 4. ¿Por qué `useEffect` con array vacío se ejecuta dos veces en desarrollo?

**Puntos clave:** StrictMode monta → desmonta → remonta para detectar effects
sin cleanup. Si tu effect rompe con esto, el effect está mal escrito.

### 5. Controlled vs uncontrolled components

**Puntos clave:** controlled = el valor vive en React state (`value` +
`onChange`); uncontrolled = el valor vive en el DOM (`defaultValue` + ref).

### 6. ¿Cómo evitás prop drilling? Tradeoffs de cada opción

**Puntos clave:** composición (children/slots) primero, context para datos de
baja frecuencia (theme, user), Jotai/Zustand para client state compartido que
cambia seguido. Context re-renderiza TODOS los consumers al cambiar el value.

## Data Fetching & React Query

### 7. ¿Server state vs client state? ¿Por qué React Query y no useEffect + useState?

**Puntos clave:** server state es asíncrono, compartido, puede quedar stale.
React Query da caching, deduplicación, refetch en focus, retry, invalidación.
El fetch manual con useEffect tiene race conditions, no cachea, duplica lógica
de loading/error en cada componente.

### 8. ¿Qué es `queryKey` y cómo funciona la invalidación?

**Puntos clave:** la key identifica la cache entry; incluir TODAS las
dependencias del fetch en la key (como deps de useEffect).
`invalidateQueries` marca stale y refetchea las activas.

### 9. Manejo de los 4 estados de datos (la JD lo pide textual)

**Puntos clave:** loading (skeleton con la forma del contenido real), error
(mensaje + retry action), empty (distinto de error — guiar al usuario), success.
Bonus: distinguir empty de API vs empty por filtros. Ver `OrdersDashboard.tsx`.

## TypeScript

### 10. `interface` vs `type`

**Puntos clave:** casi intercambiables; interface es extendible (declaration
merging), type permite unions, intersections, mapped types. Convención del
equipo > preferencia personal.

### 11. ¿Qué hace `unknown` y por qué es mejor que `any`?

**Puntos clave:** `any` desactiva el type checking; `unknown` te obliga a
narrowear antes de usar. `unknown` para inputs externos (API responses, catch).

### 12. Generics — ¿cuándo escribirías una función genérica?

**Puntos clave:** cuando la relación entre input y output types debe
preservarse (ej: `filterOrders(orders: T[]): T[]`).

### 13. Discriminated unions para estados de UI

**Puntos clave:**
```ts
type FetchState<T> =
  | { status: 'loading' }
  | { status: 'error'; error: Error }
  | { status: 'success'; data: T }
```
El compilador fuerza a manejar cada caso — imposible acceder a `data` en loading.

## CSS / Tailwind

### 14. ¿Cómo encarás responsive design con Tailwind?

**Puntos clave:** mobile-first (las clases sin prefijo son la base, `md:` /
`lg:` agregan), evitar breakpoints arbitrarios, usar contenedores con
`max-w-*` + `mx-auto`, grid/flex con `gap` en vez de márgenes.

### 15. ¿Specificity y por qué Tailwind la evita?

**Puntos clave:** utilities tienen una sola clase de specificity uniforme; el
orden lo resuelve la generación del CSS, no la cascada. Sin guerra de
`!important`.

## Performance

### 16. ¿Cómo diagnosticás un re-render problemático?

**Puntos clave:** React DevTools Profiler → ver qué renderiza y por qué;
buscar objetos/funciones recreados como props, context values sin memoizar,
estado demasiado arriba en el árbol (bajar el estado a donde se usa).

### 17. ¿Code splitting / lazy loading en Vite?

**Puntos clave:** `React.lazy` + `Suspense`, dynamic `import()` crea un chunk
separado automáticamente. Lazy de rutas/modales pesados, no de todo.

## REST / APIs

### 18. ¿Qué hacés cuando un endpoint es lento y no lo controlás?

**Puntos clave:** skeleton + optimistic UI donde aplique, cache con
staleTime, prefetch on hover, paginación/virtualización para listas grandes,
hablar con el equipo de backend (la JD dice que las APIs son de otro equipo —
comunicación importa).

### 19. Status codes que tenés que saber explicar

**Puntos clave:** 200/201/204, 301/304, 400 vs 422, 401 vs 403, 404, 409,
429, 500/502/503.

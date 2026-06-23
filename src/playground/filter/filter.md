# filter

Devuelve un **array nuevo** con solo los elementos que **cumplen una condición**. Puede ser más corto que el original. No muta.

```ts
const nums = [1, 2, 3, 4]
nums.filter((n) => n % 2 === 0) // [2, 4]
```

## Firma

```ts
array.filter((item, index) => condicionBooleana)
```

El callback devuelve `true` (lo dejo) o `false` (lo descarto).

## Cuándo usarlo

- Buscar/filtrar: `users.filter((u) => u.active)`
- Sacar valores vacíos: `arr.filter(Boolean)`
- Por índice: `arr.filter((_, i) => i % 2 === 0)` (posiciones pares)

## Regla mental

> filter = "quedate con los que cumplen". Devuelve un array (puede ser []).

## map vs filter (no los confundas)

- `map` → MISMA cantidad, valores transformados
- `filter` → MENOS cantidad, valores intactos

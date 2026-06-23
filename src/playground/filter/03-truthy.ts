// FILTER — Ejercicio 3: Sacar valores falsy
// Dado [0, 1, '', 'a', null, 2, undefined, 3], dejá solo los "truthy".
// Correr: pnpm tsx src/playground/filter/03-truthy.ts

function compact<T>(arr: T[]): T[] {
  // TODO  (pista: filter(Boolean))
  return []
}

console.log(compact([0, 1, '', 'a', null, 2, undefined, 3]))
// esperado: [1, 'a', 2, 3]

// ─── Solución ───────────────────────────────────────────────────────────
// return arr.filter(Boolean)
// (Boolean convierte cada item a true/false: 0, '', null, undefined → false)

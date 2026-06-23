// forEach — Ejercicio 1: Acumular en algo externo
// Usando forEach, sumá los precios en la variable 'total'.
// Correr: pnpm tsx src/playground/forEach/01-side-effect.ts

function sumWithForEach(prices: number[]): number {
  let total = 0
  // TODO  (prices.forEach((p) => { ... }))
  return total
}

console.log(sumWithForEach([100, 250, 50])) // esperado: 400

// ─── Solución ───────────────────────────────────────────────────────────
// prices.forEach((p) => { total += p })
// return total
// (Nota: reduce sería más idiomático. forEach es para efectos.)

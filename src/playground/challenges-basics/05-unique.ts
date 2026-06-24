// CHALLENGE — Unique
// Devolvé los elementos sin repetir, manteniendo el orden.
// Correr: pnpm tsx src/playground/challenges-basics/05-unique.ts

function unique<T>(arr: T[]): T[] {
  return arr.filter((x, i) => arr.indexOf(x) === i)
}

console.log(unique([1, 2, 2, 3, 1, 4])) // esperado: [1, 2, 3, 4]

// ─── Solución ───────────────────────────────────────────────────────────
// return [...new Set(arr)]
// o: return arr.filter((x, i) => arr.indexOf(x) === i)

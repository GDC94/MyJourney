// FILTER — Ejercicio 2: Buscar por texto
// Devolvé las palabras que contienen la letra 't' (case-insensitive).
// Correr: pnpm tsx src/playground/filter/02-search.ts

function withT(arr: string[]): string[] {
  // TODO  (pista: .toLowerCase().includes('t'))
  return []
}

console.log(withT(['React', 'Next', 'Vite', 'Node']))
// esperado: ['Next', 'Vite']

// ─── Solución ───────────────────────────────────────────────────────────
// return arr.filter((w) => w.toLowerCase().includes('t'))

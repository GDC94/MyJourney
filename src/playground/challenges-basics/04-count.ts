// CHALLENGE — Count occurrences
// Contá cuántas veces aparece cada palabra. → { a: 3, b: 1, c: 1 }
// Correr: pnpm tsx src/playground/challenges-basics/04-count.ts

function countWords(words: string[]): Record<string, number> {
  // TODO
  return {}
}

console.log(countWords(['a', 'b', 'a', 'c', 'a']))
// esperado: { a: 3, b: 1, c: 1 }

// ─── Solución ───────────────────────────────────────────────────────────
// return words.reduce((acc, w) => {
//   acc[w] = (acc[w] || 0) + 1
//   return acc
// }, {} as Record<string, number>)

// forEach — Ejercicio 2: Contar con un contador externo
// Contá cuántas palabras tienen más de 4 letras.
// Correr: pnpm tsx src/playground/forEach/02-count.ts

function countLong(words: string[]): number {
  let count = 0
  // TODO  (forEach + if + count++)
  return count
}

console.log(countLong(['react', 'next', 'vite', 'svelte']))
// esperado: 2 (react, svelte)

// ─── Solución ───────────────────────────────────────────────────────────
// words.forEach((w) => { if (w.length > 4) count++ })
// return count

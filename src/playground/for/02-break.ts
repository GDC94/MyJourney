// FOR — Ejercicio 2: Frenar con break
// Devolvé el índice del PRIMER número negativo. -1 si no hay.
// (Esto luce el poder del for: frena apenas lo encuentra.)
// Correr: pnpm tsx src/playground/for/02-break.ts

function firstNegativeIndex(arr: number[]): number {
  // TODO  (for + if (arr[i] < 0) return i;  al final return -1)
  return -1
}

console.log(firstNegativeIndex([3, 7, -2, 9, -5])) // esperado: 2

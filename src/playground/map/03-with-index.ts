// MAP — Ejercicio 3: Usando el índice
// Prefijá cada palabra con su posición: ['a','b'] → ['0: a', '1: b']
// Correr: pnpm tsx src/playground/map/03-with-index.ts

function withIndex(arr: string[]): string[] {
  return arr.map((word, index) => index + ': ' + word)
}

console.log(withIndex(['react', 'next', 'vite']))
// esperado: ['0: react', '1: next', '2: vite']

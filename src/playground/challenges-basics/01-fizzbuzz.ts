// CHALLENGE — FizzBuzz (el calentamiento clásico)
// Devolvé 1..n. Múltiplo de 3 → 'Fizz', de 5 → 'Buzz', de ambos → 'FizzBuzz'.
// Correr: pnpm tsx src/playground/challenges-basics/01-fizzbuzz.ts

function fizzbuzz(n: number): string[] {
  // TODO
  return []
}

console.log(fizzbuzz(15))
// esperado: ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']

// ─── Solución ───────────────────────────────────────────────────────────
// return Array.from({ length: n }, (_, i) => {
//   const x = i + 1
//   if (x % 15 === 0) return 'FizzBuzz'
//   if (x % 3 === 0) return 'Fizz'
//   if (x % 5 === 0) return 'Buzz'
//   return String(x)
// })

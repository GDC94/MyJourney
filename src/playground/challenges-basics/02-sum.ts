// CHALLENGE — Sum
// Sumá todos los números del array.
// Correr: pnpm tsx src/playground/challenges-basics/02-sum.ts

function sum(nums: number[]): number {
  // TODO
  return 0
}

console.log(sum([10, 20, 30])) // esperado: 60

// ─── Solución ───────────────────────────────────────────────────────────
// return nums.reduce((acc, n) => acc + n, 0)


// dado un arra devulve un nuevo array  [1,2,3] -> [1,1,2,2]
function double(numbers: number[]): number[] {
 const res = numbers.map( n => [n, n]);
 return res.flat();
}
console.log(double([1,2,3]))
// CHALLENGE — Max
// Devolvé el número más grande (practicá con reduce, sin Math.max).
// Correr: pnpm tsx src/playground/challenges-basics/03-max.ts

function maxValue(nums: number[]): number {
  // TODO
  return 0
}

console.log(maxValue([3, 9, 2, 7])) // esperado: 9

// ─── Solución ───────────────────────────────────────────────────────────
// return nums.reduce((max, n) => (n > max ? n : max), nums[0])
// o simplemente: return Math.max(...nums)

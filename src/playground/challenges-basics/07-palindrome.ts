// CHALLENGE — Palindrome
// ¿La palabra se lee igual al derecho y al revés?
// Correr: pnpm tsx src/playground/challenges-basics/07-palindrome.ts

function isPalindrome(s: string): boolean {
  // TODO
  return false
}

console.log(isPalindrome('neuquen')) // esperado: false
console.log(isPalindrome('reconocer')) // esperado: true

// ─── Solución ───────────────────────────────────────────────────────────
// return s === s.split('').reverse().join('')

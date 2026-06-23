// CHALLENGE DATA — Promedio de amount (redondeado)
// Correr: pnpm tsx src/playground/challenges-data/02-average-amount.ts
import { orders, type Order } from './data'

function averageAmount(list: Order[]): number {
  // TODO  (total / cantidad → Math.round)
  return 0
}

console.log(averageAmount(orders)) // esperado: 374833

// ─── Solución ───────────────────────────────────────────────────────────
// return Math.round(list.reduce((acc, o) => acc + o.amount, 0) / list.length)

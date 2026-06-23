// CHALLENGE DATA — Total spend por supplier
// → { Nucor: 490000, Carrier: 509000, Caterpillar: 1250000 }
// Correr: pnpm tsx src/playground/challenges-data/01-spend-by-supplier.ts
import { orders, type Order } from './data'

function spendBySupplier(list: Order[]): Record<string, number> {
  // TODO  (reduce → objeto)
  return {}
}

console.log(spendBySupplier(orders))

// ─── Solución ───────────────────────────────────────────────────────────
// return list.reduce((acc, o) => {
//   acc[o.supplier] = (acc[o.supplier] || 0) + o.amount
//   return acc
// }, {} as Record<string, number>)

// CHALLENGE DATA — Key by id (array → objeto-lookup para buscar en O(1))
// → { 'PO-1': {...}, 'PO-2': {...}, ... }
// Correr: pnpm tsx src/playground/challenges-data/07-key-by-id.ts
import { orders, type Order } from './data'

function keyById(list: Order[]): Record<string, Order> {
  // TODO  (reduce → acc[o.id] = o)
  return {}
}

console.log(keyById(orders))

// ─── Solución ───────────────────────────────────────────────────────────
// return list.reduce((acc, o) => {
//   acc[o.id] = o
//   return acc
// }, {} as Record<string, Order>)

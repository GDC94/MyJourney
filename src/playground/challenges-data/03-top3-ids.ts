// CHALLENGE DATA — Top 3 orders más caras → solo ids, sin mutar
// → ['PO-4', 'PO-2', 'PO-6']
// Correr: pnpm tsx src/playground/challenges-data/03-top3-ids.ts
import { orders, type Order } from './data'

function top3Ids(list: Order[]): string[] {
  // TODO  (toSorted → slice → map)
  return []
}

console.log(top3Ids(orders)) // esperado: ['PO-4', 'PO-2', 'PO-6']

// ─── Solución ───────────────────────────────────────────────────────────
// return list.toSorted((a, b) => b.amount - a.amount).slice(0, 3).map((o) => o.id)

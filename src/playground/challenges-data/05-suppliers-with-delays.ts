// CHALLENGE DATA — Suppliers con AL MENOS una order delayed (únicos)
// → ['Nucor', 'Caterpillar']
// Correr: pnpm tsx src/playground/challenges-data/05-suppliers-with-delays.ts
import { orders, type Order } from './data'

function suppliersWithDelays(list: Order[]): string[] {
  // TODO  (filter → map → Set)
  return []
}

console.log(suppliersWithDelays(orders)) // esperado: ['Nucor', 'Caterpillar']

// ─── Solución ───────────────────────────────────────────────────────────
// return [...new Set(
//   list.filter((o) => o.status === 'delayed').map((o) => o.supplier)
// )]

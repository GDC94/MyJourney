// CHALLENGE DATA — Partition en [activas, cerradas]
// Activas = pending | delayed ; Cerradas = delivered
// Correr: pnpm tsx src/playground/challenges-data/08-partition.ts
import { orders, type Order } from './data'

function partition(list: Order[]): [Order[], Order[]] {
  // TODO  (dos filter, o un reduce con tupla)
  return [[], []]
}

console.log(partition(orders).map((g) => g.map((o) => o.id)))
// esperado: [['PO-2','PO-3','PO-4','PO-6'], ['PO-1','PO-5']]

// ─── Solución ───────────────────────────────────────────────────────────
// return [
//   list.filter((o) => o.status !== 'delivered'),
//   list.filter((o) => o.status === 'delivered'),
// ]

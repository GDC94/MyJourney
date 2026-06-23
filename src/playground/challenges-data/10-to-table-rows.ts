// CHALLENGE DATA — Formatear para una tabla
// Devolvé solo { id, supplier, amount } con amount como string '$184,000'.
// Correr: pnpm tsx src/playground/challenges-data/10-to-table-rows.ts
import { orders, type Order } from './data'

function toTableRows(list: Order[]) {
  // TODO  (map + toLocaleString)
  return []
}

console.log(toTableRows(orders))
// esperado: [{ id: 'PO-1', supplier: 'Nucor', amount: '$184,000' }, ...]

// ─── Solución ───────────────────────────────────────────────────────────
// return list.map((o) => ({
//   id: o.id,
//   supplier: o.supplier,
//   amount: `$${o.amount.toLocaleString()}`,
// }))

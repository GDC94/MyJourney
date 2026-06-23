// CHALLENGE DATA — Count por project Y por status (objeto anidado)
// → { 'DC-04': { delivered:1, pending:2 }, 'BioLab': {...}, 'Fab-02': {...} }
// Correr: pnpm tsx src/playground/challenges-data/09-count-by-project-status.ts
import { orders, type Order } from './data'

function countByProjectAndStatus(
  list: Order[],
): Record<string, Record<string, number>> {
  // TODO  (reduce anidado)
  return {}
}

console.log(countByProjectAndStatus(orders))

// ─── Solución ───────────────────────────────────────────────────────────
// return list.reduce((acc, o) => {
//   acc[o.project] ||= {}
//   acc[o.project][o.status] = (acc[o.project][o.status] || 0) + 1
//   return acc
// }, {} as Record<string, Record<string, number>>)

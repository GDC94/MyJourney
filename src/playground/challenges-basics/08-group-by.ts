// CHALLENGE — Group by (el patrón más útil para dashboards)
// Agrupá las orders por status → { delivered: [...], delayed: [...] }
// Correr: pnpm tsx src/playground/challenges-basics/08-group-by.ts

interface Order {
  id: string
  status: 'delivered' | 'delayed' | 'pending'
}

const orders: Order[] = [
  { id: 'PO-1', status: 'delivered' },
  { id: 'PO-2', status: 'delayed' },
  { id: 'PO-3', status: 'delivered' },
]

function groupByStatus(list: Order[]): Record<string, Order[]> {
  // TODO
  return {}
}

console.log(groupByStatus(orders))
// esperado: { delivered: [PO-1, PO-3], delayed: [PO-2] }

// ─── Solución ───────────────────────────────────────────────────────────
// return list.reduce((acc, o) => {
//   (acc[o.status] ||= []).push(o)
//   return acc
// }, {} as Record<string, Order[]>)

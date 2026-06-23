// CHALLENGE DATA — El supplier con MAYOR gasto total
// → 'Caterpillar'
// Correr: pnpm tsx src/playground/challenges-data/06-top-supplier.ts
import { orders, type Order } from './data'

function topSupplier(list: Order[]): string {
  // TODO  (armá el spend por supplier → Object.entries → sort)
  return ''
}

console.log(topSupplier(orders)) // esperado: 'Caterpillar'

// ─── Solución ───────────────────────────────────────────────────────────
// const spend = list.reduce((acc, o) => {
//   acc[o.supplier] = (acc[o.supplier] || 0) + o.amount
//   return acc
// }, {} as Record<string, number>)
// return Object.entries(spend).sort((a, b) => b[1] - a[1])[0][0]

// CHALLENGE DATA — % de orders delayed sobre el total (redondeado)
// 2 delayed de 6 → 33
// Correr: pnpm tsx src/playground/challenges-data/04-delayed-percentage.ts
import { orders, type Order } from './data'

function delayedPercentage(list: Order[]): number {
  // TODO
  return 0
}

console.log(delayedPercentage(orders)) // esperado: 33

// ─── Solución ───────────────────────────────────────────────────────────
// return Math.round(
//   (list.filter((o) => o.status === 'delayed').length / list.length) * 100
// )

// SOME — Ejercicio 1: ¿Existe alguno?
// ¿Hay algún producto sin stock (stock === 0)?
// Correr: pnpm tsx src/playground/some-every/01-some.ts

interface Product {
  name: string
  stock: number
}

const products: Product[] = [
  { name: 'Steel', stock: 12 },
  { name: 'Cement', stock: 0 },
  { name: 'Cable', stock: 5 },
]

function hasOutOfStock(arr: Product[]): boolean {
  // TODO
  return false
}

console.log(hasOutOfStock(products)) // esperado: true
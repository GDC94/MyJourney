// FIND — Ejercicio 1: Buscar por id
// Encontrá el user con id === 3.
// Correr: pnpm tsx src/playground/find/01-find.ts

interface User {
  id: number
  name: string
}

const users: User[] = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Beto' },
  { id: 3, name: 'Caro' },
]

function findById(arr: User[], id: number): User | undefined {
  // TODO
  return undefined
}

console.log(findById(users, 3)) // esperado: { id: 3, name: 'Caro' }
console.log(findById(users, 99)) // esperado: undefined

// MAP — Ejercicio 2: Extraer un campo
// Dado un array de users, devolvé solo sus nombres.
// Correr: pnpm tsx src/playground/map/02-extract-field.ts

interface User {
  id: number
  name: string
  email: string
}

const users: User[] = [
  { id: 1, name: 'Ana', email: 'ana@mail.com' },
  { id: 2, name: 'Beto', email: 'beto@mail.com' },
]

function names(arr: User[]): string[] {
  return arr.map((user) => user.name)
}

console.log(names(users)) // esperado: ['Ana', 'Beto']


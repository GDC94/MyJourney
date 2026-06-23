// SORT — Ejercicio 2: Por un campo de objetos
// Ordená los users por edad (menor a mayor).
// Correr: pnpm tsx src/playground/sort/02-by-field.ts

interface User {
  name: string
  age: number
}

const users: User[] = [
  { name: 'Ana', age: 30 },
  { name: 'Beto', age: 22 },
  { name: 'Caro', age: 41 },
]

function sortByAge(arr: User[]): User[] {
  // TODO
  return []
}

console.log(sortByAge(users).map((u) => u.name))
// esperado: ['Beto', 'Ana', 'Caro']
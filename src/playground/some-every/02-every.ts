// EVERY — Ejercicio 2: ¿Todos cumplen?
// ¿Todos los campos del form están completos (no vacíos)?
// Correr: pnpm tsx src/playground/some-every/02-every.ts

const formFields = ['Ana', 'ana@mail.com', 'Mensaje de prueba']
const incompleteForm = ['Ana', '', 'Hola']

function allFilled(fields: string[]): boolean {
  // TODO  (pista: .trim() !== '')
  return false
}

console.log(allFilled(formFields)) // esperado: true
console.log(allFilled(incompleteForm)) // esperado: false
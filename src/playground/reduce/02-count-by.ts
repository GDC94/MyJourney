// REDUCE — Ejercicio 2: Contar ocurrencias (reduce → objeto)
// Contá cuántas veces aparece cada fruta.
// Correr: pnpm tsx src/playground/reduce/02-count-by.ts

function countBy(arr: string[]): Record<string, number> {
  // TODO  (acumulador = objeto vacío {})
  const resultado = arr.reduce((arr, elemento) => {
    arr[elemento] = (arr[elemento] || 0) + 1
    return arr
  }, {} as Record<string, number>)
  return resultado
}

console.log(countBy(['apple', 'banana', 'apple', 'cherry', 'apple']))
// esperado: { apple: 3, banana: 1, cherry: 1 }
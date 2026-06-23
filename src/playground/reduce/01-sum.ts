// REDUCE — Ejercicio 1: Sumar
// Sumá todos los números del array.
// Correr: pnpm tsx src/playground/reduce/01-sum.ts

function sum(arr: number[]): number {
  return arr.reduce((acumulador, numero) => acumulador + numero, 0)
}

console.log(sum([10, 20, 30, 40]))


function multiply(arr: number[]): number {
  const arregloDeNumeros = arr;
  return arregloDeNumeros.reduce((acumulador, numero) => acumulador + numero, 0)
}

console.log(multiply([1, 2, 3, 4]))
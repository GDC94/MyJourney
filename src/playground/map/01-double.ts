// MAP — Ejercicio 1: Duplicar
// Dado [1, 2, 3, 4], devolvé cada número multiplicado por 2.
// Correr: pnpm tsx src/playground/map/01-double.ts

function double(arr: number[]): number[] {
  return arr.map( number => number * 2);
}

console.log(double([1, 2, 3, 4]))
// ===========================================================================
// ARRAYS — ejercicios por PATRÓN (fácil → intermedio)
//
//   pnpm tsx src/practice/arrays.ts
//
// Resolvé cada TODO, descomentá su show(), corré. Soluciones al final.
// El objetivo NO es terminarlos: es RECONOCER el patrón de cada uno.
// ===========================================================================

function show(label: string, value: unknown) {
  console.log(`\n🔹 ${label}`)
  console.log(value)
}

const nums = [5, 2, 8, 1, 9, 3]
const fruits = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']

// ███ PATRÓN 1: MAP (transformar cada elemento) ███████████████████████████

// 1.1 Duplicá cada número.
function double(arr: number[]): number[] {
  // TODO
  return []
}
// show('1.1 double', double(nums))  // [10, 4, 16, 2, 18, 6]

// 1.2 Pasá cada fruta a MAYÚSCULAS.
function upper(arr: string[]): string[] {
  // TODO
  return []
}
// show('1.2 upper', upper(['a', 'b']))  // ['A', 'B']

// 1.3 Convertí [1,2,3] en [{ value: 1 }, { value: 2 }, { value: 3 }].
function wrap(arr: number[]) {
  // TODO
  return []
}
// show('1.3 wrap', wrap([1, 2, 3]))

// ███ PATRÓN 2: FILTER (quedarte con algunos) █████████████████████████████

// 2.1 Solo los números pares.
function evens(arr: number[]): number[] {
  // TODO
  return []
}
// show('2.1 evens', evens(nums))  // [2, 8]

// 2.2 Palabras de más de 5 letras.
function longWords(arr: string[]): string[] {
  // TODO
  return []
}
// show('2.2 long', longWords(['hi', 'banana', 'cat', 'cherry']))

// 2.3 Sacá los valores "falsy" de [0, 1, '', 'a', null, 2, undefined].
function compact<T>(arr: T[]): T[] {
  // TODO  (pista: Boolean)
  return []
}
// show('2.3 compact', compact([0, 1, '', 'a', null, 2]))  // [1, 'a', 2]

// ███ PATRÓN 3: REDUCE (acumular a un valor) ██████████████████████████████

// 3.1 Sumá todos los números.
function sum(arr: number[]): number {
  // TODO
  return 0
}
// show('3.1 sum', sum(nums))  // 28

// 3.2 Contá cuántas veces aparece cada fruta. → { apple: 3, banana: 2, cherry: 1 }
function countBy(arr: string[]): Record<string, number> {
  // TODO
  return {}
}
// show('3.2 countBy', countBy(fruits))

// 3.3 Encontrá el MAYOR sin Math.max.
function max(arr: number[]): number {
  // TODO
  return 0
}
// show('3.3 max', max(nums))  // 9

// ███ PATRÓN 4: FIND / SOME / EVERY (buscar y preguntar) ██████████████████

// 4.1 El primer número mayor a 5.
function firstOver5(arr: number[]): number | undefined {
  // TODO
  return undefined
}
// show('4.1 firstOver5', firstOver5(nums))  // 8

// 4.2 ¿Hay algún número negativo? → boolean
function hasNegative(arr: number[]): boolean {
  // TODO
  return false
}
// show('4.2 hasNegative', hasNegative([1, -2, 3]))  // true

// 4.3 ¿Todos son positivos? → boolean
function allPositive(arr: number[]): boolean {
  // TODO
  return false
}
// show('4.3 allPositive', allPositive([1, 2, 3]))  // true

// ███ PATRÓN 5: SORT (ordenar — ¡sin mutar!) ██████████████████████████████

// 5.1 Números ascendente (sin mutar el original).
function sortAsc(arr: number[]): number[] {
  // TODO  (toSorted o [...arr].sort)
  return []
}
// show('5.1 sortAsc', sortAsc(nums))  // [1, 2, 3, 5, 8, 9]

// 5.2 Palabras alfabéticamente.
function sortWords(arr: string[]): string[] {
  // TODO  (localeCompare)
  return []
}
// show('5.2 sortWords', sortWords(['banana', 'apple', 'cherry']))

// ███ PATRÓN 6: DEDUP / FLATTEN / CHAINING ████████████████████████████████

// 6.1 Valores únicos.
function unique<T>(arr: T[]): T[] {
  // TODO  (Set)
  return []
}
// show('6.1 unique', unique(fruits))  // ['apple', 'banana', 'cherry']

// 6.2 Aplaná [[1,2],[3,4],[5]] → [1,2,3,4,5].
function flatten<T>(arr: T[][]): T[] {
  // TODO
  return []
}
// show('6.2 flatten', flatten([[1, 2], [3, 4], [5]]))

// 6.3 CHAINING: de nums, tomá los pares, duplicalos, y sumalos.
//     pares [2,8] → dobles [4,16] → suma 20
function chainExample(arr: number[]): number {
  // TODO  (filter → map → reduce)
  return 0
}
// show('6.3 chaining', chainExample(nums))  // 20

// ███ INTERMEDIOS ████████████████████████████████████████████████████████

// 7.1 Promedio (redondeado).
function average(arr: number[]): number {
  // TODO
  return 0
}
// show('7.1 average', average(nums))  // 5

// 7.2 Segundo número más grande (sin duplicados).
function secondLargest(arr: number[]): number {
  // TODO  (unique → sort desc → [1])
  return 0
}
// show('7.2 secondLargest', secondLargest([5, 9, 9, 2, 8]))  // 8

// 7.3 Agrupá números en { even: [...], odd: [...] }.
function groupParity(arr: number[]): { even: number[]; odd: number[] } {
  // TODO
  return { even: [], odd: [] }
}
// show('7.3 groupParity', groupParity(nums))

// ===========================================================================
// SOLUCIONES (tapá hasta intentar)
// ===========================================================================
/*
1.1 arr.map((n) => n * 2)
1.2 arr.map((s) => s.toUpperCase())
1.3 arr.map((value) => ({ value }))

2.1 arr.filter((n) => n % 2 === 0)
2.2 arr.filter((w) => w.length > 5)
2.3 arr.filter(Boolean)

3.1 arr.reduce((acc, n) => acc + n, 0)
3.2 arr.reduce((acc, f) => { acc[f] = (acc[f] || 0) + 1; return acc }, {} as Record<string, number>)
3.3 arr.reduce((m, n) => (n > m ? n : m), arr[0])

4.1 arr.find((n) => n > 5)
4.2 arr.some((n) => n < 0)
4.3 arr.every((n) => n > 0)

5.1 arr.toSorted((a, b) => a - b)
5.2 arr.toSorted((a, b) => a.localeCompare(b))

6.1 [...new Set(arr)]
6.2 arr.flat()   // o arr.reduce((acc, x) => acc.concat(x), [])
6.3 arr.filter((n) => n % 2 === 0).map((n) => n * 2).reduce((a, b) => a + b, 0)

7.1 Math.round(arr.reduce((a, n) => a + n, 0) / arr.length)
7.2 [...new Set(arr)].toSorted((a, b) => b - a)[1]
7.3 arr.reduce((acc, n) => {
      (n % 2 === 0 ? acc.even : acc.odd).push(n)
      return acc
    }, { even: [], odd: [] } as { even: number[]; odd: number[] })
*/

// ===========================================================================
// METHOD DRILLS — un bloque por MÉTODO, muchos ejercicios de cada uno
//
//   pnpm tsx src/practice/methods-drills.ts
//
// La idea: dominar CADA método aislado. Resolvé el TODO, descomentá el show(),
// corré. Soluciones al final. Narrá en voz alta qué hace cada uno.
//
// 🔑 Regla mental por método:
//   for / for...of → control total (break, índice, performance)
//   forEach        → ejecutar algo por cada item (NO devuelve nada)
//   map            → transformar → array NUEVO del mismo largo
//   filter         → quedarte con algunos → array más corto
//   reduce         → acumular a UN valor (número, objeto, lo que sea)
//   some / every   → preguntar sí/no → boolean
//   find           → el PRIMER item que cumple
//   sort           → ordenar (¡copiá antes, muta!)
// ===========================================================================

function show(label: string, value: unknown) {
  console.log(`\n🔹 ${label}`)
  console.log(value)
}

const nums = [4, 8, 15, 16, 23, 42]
const words = ['react', 'next', 'vite', 'node']

// ███████████████████████████████████████████████████████████████████████
// 1. CICLO FOR clásico  (control total: índice, break, continue)
// ███████████████████████████████████████████████████████████████████████

// 1.1 Sumá todos los nums con un for clásico.
function sumWithFor(arr: number[]): number {
  // TODO  (let total = 0; for (let i = 0; i < arr.length; i++) ...)
  return 0
}
// show('1.1 sumWithFor', sumWithFor(nums))  // 108

// 1.2 Devolvé el índice del primer número > 20 (sin findIndex). -1 si no hay.
function indexOfFirstOver20(arr: number[]): number {
  // TODO  (for + if + return i; al final return -1)
  return -1
}
// show('1.2 indexOfFirstOver20', indexOfFirstOver20(nums))  // 4

// 1.3 for...of: concatená todas las words separadas por '-'. (sin join)
function joinWithFor(arr: string[]): string {
  // TODO  (for (const w of arr) { ... })
  return ''
}
// show('1.3 joinWithFor', joinWithFor(words))  // 'react-next-vite-node'

// ███████████████████████████████████████████████████████████████████████
// 2. forEach  (ejecutar algo por cada item — NO devuelve nada)
// ███████████████████████████████████████████████████████████████████████

// 2.1 Usando forEach, llená un array con los nums duplicados.
//     (sí, map sería mejor — pero practicá forEach: push dentro del callback)
function doubleWithForEach(arr: number[]): number[] {
  const result: number[] = []
  // TODO  (arr.forEach((n) => result.push(...)))
  return result
}
// show('2.1 doubleWithForEach', doubleWithForEach(nums))

// 2.2 Con forEach, contá cuántas words tienen 4 letras.
function countLen4(arr: string[]): number {
  let count = 0
  // TODO  (arr.forEach((w) => { if (...) count++ }))
  return count
}
// show('2.2 countLen4', countLen4(words))  // 3 (next, vite, node)

// ███████████████████████████████████████████████████████████████████████
// 3. MAP  (transformar → array nuevo del mismo largo)
// ███████████████████████████████████████████████████████████████████████

// 3.1 Largo de cada palabra. → [5, 4, 4, 4]
function lengths(arr: string[]): number[] {
  // TODO
  return []
}
// show('3.1 lengths', lengths(words))

// 3.2 Cada num + su cuadrado: → [{n:4, sq:16}, ...]
function withSquares(arr: number[]) {
  // TODO
  return []
}
// show('3.2 withSquares', withSquares([2, 3]))

// 3.3 map con índice: prefijá cada word con su posición. → ['0:react', '1:next', ...]
function withIndex(arr: string[]): string[] {
  // TODO  (arr.map((w, i) => ...))
  return []
}
// show('3.3 withIndex', withIndex(words))

// ███████████████████████████████████████████████████████████████████████
// 4. FILTER  (quedarte con algunos)
// ███████████████████████████████████████████████████████████████████████

// 4.1 Nums divisibles por 4. → [4, 8, 16]
function divisibleBy4(arr: number[]): number[] {
  // TODO
  return []
}
// show('4.1 divisibleBy4', divisibleBy4(nums))

// 4.2 Words que contienen la letra 't'. → ['next', 'vite']
function withT(arr: string[]): string[] {
  // TODO
  return []
}
// show('4.2 withT', withT(words))

// 4.3 filter + index: los items en posición PAR (0, 2, 4...). → [4, 15, 23]
function evenPositions(arr: number[]): number[] {
  // TODO  (arr.filter((_, i) => ...))
  return []
}
// show('4.3 evenPositions', evenPositions(nums))

// ███████████████████████████████████████████████████████████████████████
// 5. REDUCE  (acumular a un valor)
// ███████████████████████████████████████████████████████████████████████

// 5.1 Producto de todos los nums (multiplicar). valor inicial 1.
function product(arr: number[]): number {
  // TODO
  return 1
}
// show('5.1 product', product([2, 3, 4]))  // 24

// 5.2 La palabra más larga. → 'react'
function longest(arr: string[]): string {
  // TODO  (reduce comparando length)
  return ''
}
// show('5.2 longest', longest(words))

// 5.3 reduce → objeto: agrupá words por su largo. → { 5: ['react'], 4: ['next','vite','node'] }
function groupByLength(arr: string[]): Record<number, string[]> {
  // TODO
  return {}
}
// show('5.3 groupByLength', groupByLength(words))

// ███████████████████████████████████████████████████████████████████████
// 6. SOME / EVERY  (preguntar sí/no → boolean)
// ███████████████████████████████████████████████████████████████████████

// 6.1 ¿Hay algún num mayor a 40? → true
function anyOver40(arr: number[]): boolean {
  // TODO
  return false
}
// show('6.1 anyOver40', anyOver40(nums))

// 6.2 ¿Todas las words tienen menos de 6 letras? → true
function allShort(arr: string[]): boolean {
  // TODO
  return false
}
// show('6.2 allShort', allShort(words))

// ███████████████████████████████████████████████████████████████████████
// 7. FIND / FINDINDEX  (el primero que cumple)
// ███████████████████████████████████████████████████████████████████████

// 7.1 La primera word que empieza con 'n'. → 'next'
function firstWithN(arr: string[]): string | undefined {
  // TODO
  return undefined
}
// show('7.1 firstWithN', firstWithN(words))

// 7.2 El índice del num 16. → 3
function indexOf16(arr: number[]): number {
  // TODO  (findIndex)
  return -1
}
// show('7.2 indexOf16', indexOf16(nums))

// ███████████████████████████████████████████████████████████████████████
// 8. SORT  (ordenar — ¡copiá antes, muta!)
// ███████████████████████████████████████████████████████████████████████

// 8.1 Nums descendente, sin mutar. → [42, 23, 16, 15, 8, 4]
function sortDesc(arr: number[]): number[] {
  // TODO
  return []
}
// show('8.1 sortDesc', sortDesc(nums))

// 8.2 Words por LARGO (más corta primero), sin mutar.
function sortByLength(arr: string[]): string[] {
  // TODO  (a.length - b.length)
  return []
}
// show('8.2 sortByLength', sortByLength(words))

// 8.3 Words alfabéticamente. → ['next', 'node', 'react', 'vite']
function sortAlpha(arr: string[]): string[] {
  // TODO  (localeCompare)
  return []
}
// show('8.3 sortAlpha', sortAlpha(words))

// ===========================================================================
// SOLUCIONES (tapá hasta intentar)
// ===========================================================================
/*
1.1 let total = 0; for (let i = 0; i < arr.length; i++) total += arr[i]; return total
1.2 for (let i = 0; i < arr.length; i++) if (arr[i] > 20) return i; return -1
1.3 let res = ''; for (const w of arr) res = res ? res + '-' + w : w; return res

2.1 arr.forEach((n) => result.push(n * 2)); return result
2.2 arr.forEach((w) => { if (w.length === 4) count++ }); return count

3.1 arr.map((w) => w.length)
3.2 arr.map((n) => ({ n, sq: n * n }))
3.3 arr.map((w, i) => `${i}:${w}`)

4.1 arr.filter((n) => n % 4 === 0)
4.2 arr.filter((w) => w.includes('t'))
4.3 arr.filter((_, i) => i % 2 === 0)

5.1 arr.reduce((acc, n) => acc * n, 1)
5.2 arr.reduce((long, w) => (w.length > long.length ? w : long), '')
5.3 arr.reduce((acc, w) => { (acc[w.length] ||= []).push(w); return acc }, {} as Record<number, string[]>)

6.1 arr.some((n) => n > 40)
6.2 arr.every((w) => w.length < 6)

7.1 arr.find((w) => w.startsWith('n'))
7.2 arr.findIndex((n) => n === 16)

8.1 arr.toSorted((a, b) => b - a)
8.2 arr.toSorted((a, b) => a.length - b.length)
8.3 arr.toSorted((a, b) => a.localeCompare(b))
*/

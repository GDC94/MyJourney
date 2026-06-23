// ===========================================================================
// OBJECTS — ejercicios por PATRÓN (fácil → intermedio)
//
//   pnpm tsx src/practice/objects.ts
//
// La clave de los objetos: Object.keys / Object.values / Object.entries
// te convierten un objeto en ARRAYS, y ahí usás todo lo que ya sabés.
// ===========================================================================

function show(label: string, value: unknown) {
  console.log(`\n🔹 ${label}`)
  console.log(value)
}

const user = { id: 1, name: 'Ana', age: 30, role: 'admin' }
const scores: Record<string, number> = { math: 90, history: 75, science: 88 }

// ███ PATRÓN 1: keys / values / entries (objeto → array) ███████████████████

// 1.1 Devolvé las CLAVES del objeto. → ['id', 'name', 'age', 'role']
function keys(obj: object): string[] {
  // TODO  (Object.keys)
  return []
}
// show('1.1 keys', keys(user))

// 1.2 Devolvé los VALORES. → [1, 'Ana', 30, 'admin']
function values(obj: object): unknown[] {
  // TODO  (Object.values)
  return []
}
// show('1.2 values', values(user))

// 1.3 Devolvé los pares [clave, valor]. → [['id',1], ['name','Ana'], ...]
function entries(obj: object): [string, unknown][] {
  // TODO  (Object.entries)
  return []
}
// show('1.3 entries', entries(user))

// ███ PATRÓN 2: agregar sobre valores ████████████████████████████████████

// 2.1 Sumá todos los scores. → 253
function sumValues(obj: Record<string, number>): number {
  // TODO  (Object.values → reduce)
  return 0
}
// show('2.1 sumValues', sumValues(scores))

// 2.2 La materia con MAYOR score. → 'math'
function topKey(obj: Record<string, number>): string {
  // TODO  (Object.entries → reduce o sort)
  return ''
}
// show('2.2 topKey', topKey(scores))

// 2.3 ¿Algún score < 80? → boolean
function anyBelow80(obj: Record<string, number>): boolean {
  // TODO  (Object.values → some)
  return false
}
// show('2.3 anyBelow80', anyBelow80(scores))  // true

// ███ PATRÓN 3: transformar un objeto ████████████████████████████████████

// 3.1 Subí todos los scores en 5. → { math: 95, history: 80, science: 93 }
//     Pista: entries → map → Object.fromEntries
function bumpScores(obj: Record<string, number>): Record<string, number> {
  // TODO
  return {}
}
// show('3.1 bumpScores', bumpScores(scores))

// 3.2 Invertí claves y valores de { a: 'x', b: 'y' } → { x: 'a', y: 'b' }.
function invert(obj: Record<string, string>): Record<string, string> {
  // TODO
  return {}
}
// show('3.2 invert', invert({ a: 'x', b: 'y' }))

// 3.3 Filtrá el objeto: dejá solo scores >= 85. → { math: 90, science: 88 }
function filterObject(
  obj: Record<string, number>,
): Record<string, number> {
  // TODO  (entries → filter → fromEntries)
  return {}
}
// show('3.3 filterObject', filterObject(scores))

// ███ PATRÓN 4: pick / omit / merge █████████████████████████████████████

// 4.1 PICK: quedate solo con 'name' y 'role' de user. → { name: 'Ana', role: 'admin' }
function pick<T extends object>(obj: T, fields: (keyof T)[]): Partial<T> {
  // TODO  (reduce sobre fields)
  return {}
}
// show('4.1 pick', pick(user, ['name', 'role']))

// 4.2 OMIT: devolvé user SIN la clave 'age'.
function omitAge(obj: typeof user) {
  // TODO  (destructuring: const { age, ...rest } = obj)
  return {}
}
// show('4.2 omitAge', omitAge(user))

// 4.3 MERGE: combiná { a: 1, b: 2 } con { b: 3, c: 4 } → { a:1, b:3, c:4 }
function merge(a: object, b: object): object {
  // TODO  (spread)
  return {}
}
// show('4.3 merge', merge({ a: 1, b: 2 }, { b: 3, c: 4 }))

// ███ INTERMEDIOS ████████████████████████████████████████████████████████

// 5.1 De un array de users, armá un lookup { id: user }.
//     [{id:1,...},{id:2,...}] → { '1': {...}, '2': {...} }
function keyById(arr: { id: number; name: string }[]) {
  // TODO  (reduce)
  return {}
}
// show('5.1 keyById', keyById([{ id: 1, name: 'A' }, { id: 2, name: 'B' }]))

// 5.2 ¿Dos objetos son iguales (shallow)? Mismas claves y valores.
function shallowEqual(a: object, b: object): boolean {
  // TODO  (comparar keys.length + cada valor)
  return false
}
// show('5.2 shallowEqual', shallowEqual({ a: 1 }, { a: 1 }))  // true

// 5.3 Contá cuántas veces aparece cada valor en un objeto.
//     { a: 'x', b: 'y', c: 'x' } → { x: 2, y: 1 }
function countValues(obj: Record<string, string>): Record<string, number> {
  // TODO  (Object.values → reduce)
  return {}
}
// show('5.3 countValues', countValues({ a: 'x', b: 'y', c: 'x' }))

// ===========================================================================
// SOLUCIONES (tapá hasta intentar)
// ===========================================================================
/*
1.1 Object.keys(obj)
1.2 Object.values(obj)
1.3 Object.entries(obj)

2.1 Object.values(obj).reduce((a, n) => a + n, 0)
2.2 Object.entries(obj).reduce((top, [k, v]) => (v > obj[top] ? k : top), Object.keys(obj)[0])
    // o: Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0]
2.3 Object.values(obj).some((v) => v < 80)

3.1 Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v + 5]))
3.2 Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]))
3.3 Object.fromEntries(Object.entries(obj).filter(([, v]) => v >= 85))

4.1 fields.reduce((acc, f) => { acc[f] = obj[f]; return acc }, {} as Partial<T>)
4.2 const { age, ...rest } = obj; return rest
4.3 { ...a, ...b }   // b pisa a a en claves repetidas

5.1 arr.reduce((acc, u) => { acc[u.id] = u; return acc }, {} as Record<number, typeof arr[0]>)
5.2 const ka = Object.keys(a), kb = Object.keys(b)
    return ka.length === kb.length && ka.every((k) => a[k] === b[k])
5.3 Object.values(obj).reduce((acc, v) => { acc[v] = (acc[v] || 0) + 1; return acc }, {} as Record<string, number>)
*/

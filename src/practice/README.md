# Practice — Manual de ejercicios

Drills ejecutables para entrevistas frontend. Cada archivo se corre con:

```bash
pnpm tsx src/practice/<archivo>.ts
```

## Cómo usar (LA regla)

1. Leé el enunciado y el resultado esperado del comentario.
2. **Tapá la solución** (están colapsadas al final de cada archivo).
3. Resolvé el `// TODO`, descomentá su `show(...)`, corré.
4. **Narrá en voz alta** mientras resolvés — entrená el músculo de explicar.
5. Si te trabás: identificá el PATRÓN, no la sintaxis.

## Roadmap del manual

- [x] `methods-drills.ts` — **un bloque por método** (for, forEach, map, filter, reduce, some/every, find, sort). ⬅️ EMPEZÁ ACÁ
- [x] `arrays.ts` — métodos de array por patrón (fácil → intermedio)
- [x] `objects.ts` — keys/values/entries, transformar, merge, pick/omit
- [x] `strings.ts` — split/join, búsqueda, manipulación de caracteres
- [ ] hooks — custom hooks (useToggle, useDebounce, useLocalStorage)
- [ ] forms — de simples a complejos
- [ ] leetcode — easy → hard

## Orden sugerido de práctica

1. `methods-drills.ts` → dominá CADA método aislado (incluye for y forEach)
2. `arrays.ts` → ahora combinálos por patrón
3. `objects.ts` + `strings.ts` → los mismos patrones, otro tipo de dato

## Los patrones que se repiten (memorizá ESTOS, no los ejercicios)

| Patrón | Método estrella | Para qué |
| ------ | --------------- | -------- |
| Transformar cada item | `map` | renderizar, formatear |
| Quedarte con algunos | `filter` | búsqueda, filtros |
| Reducir a un valor | `reduce` | sumas, agrupar, contar, lookup |
| Encontrar uno | `find` / `findIndex` | buscar por id |
| Pregunta sí/no | `some` / `every` | validaciones |
| Ordenar | `toSorted` / `sort` | tablas, rankings |
| Sin duplicados | `new Set()` | valores únicos |
| Recorrer claves | `Object.entries` | iterar objetos |

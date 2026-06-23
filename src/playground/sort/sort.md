# sort

Ordena un array. ⚠️ **MUTA el original** → copiá antes con `[...arr]` o usá `toSorted`.

```ts
const nums = [3, 1, 2]
nums.toSorted((a, b) => a - b) // [1, 2, 3]  (NO muta)
[...nums].sort((a, b) => a - b) // igual, copiando manual
```

## El comparador: la clave de todo

`sort` te pide una función que compara DOS elementos (a, b) y devuelve un número:

| Devolvés | Significa |
| -------- | --------- |
| negativo (< 0) | `a` va antes que `b` |
| positivo (> 0) | `a` va después |
| 0 | igual |

## Las recetas que tenés que saber de memoria

```ts
// Números
arr.toSorted((a, b) => a - b) // ascendente
arr.toSorted((a, b) => b - a) // descendente

// Strings (¡localeCompare, no <!)
arr.toSorted((a, b) => a.localeCompare(b))

// Por un campo de objetos
users.toSorted((a, b) => a.age - b.age)        // número
users.toSorted((a, b) => a.name.localeCompare(b.name)) // texto
```

## ⚠️ Trampas

- `sort()` SIN comparador ordena como STRING: `[1,10,2].sort()` → `[1,10,2]` ¡mal!
- `sort` muta → en React SIEMPRE `toSorted` o `[...arr].sort`

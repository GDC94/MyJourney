# find / findIndex

Devuelven el **PRIMER** elemento (o su índice) que cumple una condición.

```ts
const users = [{ id: 1 }, { id: 2 }, { id: 3 }]
users.find((u) => u.id === 2)      // { id: 2 }   (el objeto)
users.findIndex((u) => u.id === 2) // 1           (la posición)
```

## Si no encuentra nada

- `find` → devuelve `undefined`
- `findIndex` → devuelve `-1`

## find vs filter (¡no los confundas!)

| | find | filter |
| --- | ---- | ------ |
| Devuelve | UN elemento (o undefined) | un ARRAY |
| Cuántos | el primero que cumple | todos los que cumplen |

```ts
users.find((u) => u.id === 2)    // { id: 2 }      ← objeto
users.filter((u) => u.id === 2)  // [{ id: 2 }]    ← array de 1
```

## Cuándo usarlo

- Buscar por id: `users.find((u) => u.id === targetId)`
- Saber la posición de algo: `findIndex`

## Regla mental

> find = "traeme EL primero que cumpla". filter = "traeme TODOS".

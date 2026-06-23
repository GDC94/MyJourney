# map

Transforma **cada** elemento de un array y devuelve un **array NUEVO del mismo largo**. No muta el original.

```ts
const nums = [1, 2, 3]
nums.map((n) => n * 2) // [2, 4, 6]
```

## Firma

```ts
array.map((item, index) => nuevoValor)
```

- `item` → el elemento actual
- `index` → su posición (opcional)
- devuelve → lo que el callback retorna, para cada item

## Cuándo usarlo

- Renderizar listas en React: `users.map((u) => <li>{u.name}</li>)`
- Formatear datos: `prices.map((p) => \`$${p}\`)`
- Extraer un campo: `users.map((u) => u.email)`

## Regla mental

> map = "transformá CADA uno". Entra un array de N → sale un array de N.

⚠️ Si NO devolvés nada en el callback, te llenás de `undefined`. map SIEMPRE returna.

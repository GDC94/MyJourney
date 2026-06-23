# Ciclos for

El loop clásico. Te da **control total**: índice, `break`, `continue`. Los métodos de array (map/filter) son más limpios, pero el `for` puede frenar a la mitad y los métodos no.

## `for` clásico (con índice)

```ts
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
```

## `for...of` (sin índice, más limpio)

```ts
for (const item of arr) {
  console.log(item)
}
```

## `for...in` (claves de un OBJETO — ojo)

```ts
for (const key in obj) {
  console.log(key, obj[key])
}
```

## Cuándo usar un for (y no map/filter)

- Necesitás **`break`** (frenar al encontrar algo)
- Necesitás **`continue`** (saltear)
- Performance extrema en arrays gigantes
- El entrevistador te dice "hacelo sin métodos de array"

## Regla mental

> for = control manual. map/filter/reduce = declarativo y más limpio.
> En el día a día preferís los métodos; el for es la herramienta de precisión.

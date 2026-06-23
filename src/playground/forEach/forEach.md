# forEach

Ejecuta una función por **cada** elemento. **NO devuelve nada** (`undefined`). Sirve para efectos secundarios, no para transformar.

```ts
const nums = [1, 2, 3]
nums.forEach((n) => console.log(n)) // imprime 1, 2, 3
```

## Firma

```ts
array.forEach((item, index) => { /* hago algo */ })
```

## Cuándo usarlo

- Ejecutar un efecto: loguear, llamar una función, pushear a algo externo
- Cuando NO necesitás un array de vuelta

## ⚠️ forEach vs map (la confusión clásica)

| | forEach | map |
| --- | ------- | --- |
| Devuelve | nada (undefined) | array nuevo |
| Para qué | efectos secundarios | transformar |
| `break`? | NO se puede | NO se puede |

> Si querés un array de vuelta → usá map, NO forEach con push.
> forEach es para "hacé algo por cada uno", no para "convertí cada uno".

Para frenar a la mitad (break) → usá un `for` o `some`.

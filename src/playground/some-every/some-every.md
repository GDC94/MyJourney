# some / every

Preguntan algo sobre el array y devuelven un **boolean**.

```ts
const nums = [1, 2, 3, 4]
nums.some((n) => n > 3)  // true  → ¿AL MENOS uno cumple?
nums.every((n) => n > 0) // true  → ¿TODOS cumplen?
```

## Firma

```ts
array.some((item) => condicion)  // ¿alguno? → true/false
array.every((item) => condicion) // ¿todos?  → true/false
```

## Cuándo usarlos

- `some` → validar que exista algo: "¿hay algún admin?", "¿algún campo inválido?"
- `every` → validar que TODO cumpla: "¿el form entero es válido?"

## Detalle de cortocircuito

- `some` para apenas encuentra UNO que cumple (no sigue)
- `every` para apenas encuentra UNO que NO cumple

## Regla mental

> some = "¿existe alguno?" · every = "¿son todos?"
> Para chequear "¿NO hay ninguno?" → `!array.some(...)`

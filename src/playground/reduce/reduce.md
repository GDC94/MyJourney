# reduce

"Reduce" un array a **UN solo valor** (número, string, objeto, array... lo que sea). El más potente y el que más asusta.

```ts
const nums = [1, 2, 3, 4]
nums.reduce((acc, n) => acc + n, 0) // 10
//          ^acc ^item        ^valor inicial
```

## Firma

```ts
array.reduce((acumulador, item) => nuevoAcumulador, valorInicial)
```

- `acumulador` → lo que se va "arrastrando" en cada vuelta
- `item` → el elemento actual
- `valorInicial` → con qué arranca el acumulador (¡no lo olvides!)
- lo que retornás → es el `acumulador` de la próxima iteración

## Mentalidad

> Imaginá una bola de nieve. `acc` arranca en el valor inicial y crece en cada
> vuelta. Cada return le pasa la bola a la siguiente iteración.

## Cuándo usarlo

- Sumar/multiplicar: `nums.reduce((a, n) => a + n, 0)`
- Contar/agrupar: acumulador = objeto `{}`
- Convertir array → objeto (lookup `{ id: item }`)
- Encontrar max/min sin Math

## El patrón estrella: reduce → objeto

```ts
words.reduce((acc, w) => {
  acc[w] = (acc[w] || 0) + 1 // contar ocurrencias
  return acc
}, {} as Record<string, number>)
```

# Playground — práctica por método

Cada carpeta es un método. Adentro: un `.md` con la explicación corta y un
archivo `.ts` por ejercicio.

## Cómo usar

1. Entrá a la carpeta del método (ej: `reduce/`)
2. Leé el `.md` (explicación + ejemplos + regla mental)
3. Abrí un ejercicio (`01-...ts`), resolvé el `// TODO`
4. Corré ese archivo:
   ```bash
   pnpm tsx src/playground/reduce/01-sum.ts
   ```
5. Compará con la solución comentada al final del archivo

## Métodos

| Carpeta | Método | Regla mental |
| ------- | ------ | ------------ |
| `map/` | map | transformá CADA uno → array nuevo |
| `filter/` | filter | quedate con los que cumplen |
| `reduce/` | reduce | acumulá a UN valor |
| `forEach/` | forEach | hacé algo por cada uno (no devuelve nada) |
| `for/` | for / for...of | control total (break, índice) |
| `some-every/` | some / every | ¿alguno? / ¿todos? → boolean |
| `find/` | find / findIndex | el PRIMERO que cumple |
| `sort/` | sort | ordenar (¡copiá antes, muta!) |

## Orden sugerido

map → filter → forEach → for → some-every → find → reduce → sort

(reduce y sort al final porque son los más densos.)

> Archivos sueltos (`arrays.ts`, `easy-problems.ts`, `array-problems-2.ts`) son
> de sesiones viejas. Podés archivarlos o borrarlos cuando quieras.

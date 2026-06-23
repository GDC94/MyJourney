# Challenges — Datos (agregaciones tipo dashboard)

Intermedios. Combinan métodos y usan `reduce` para agregar — lo que REALMENTE
hace un dashboard. Todos usan la data compartida de `data.ts`.

```bash
pnpm tsx src/playground/challenges-data/01-spend-by-supplier.ts
```

| # | Ejercicio | Patrón |
| - | --------- | ------ |
| 01 | Spend by supplier | reduce → objeto |
| 02 | Average amount | reduce + división |
| 03 | Top 3 ids | sort → slice → map |
| 04 | Delayed % | filter + length |
| 05 | Suppliers with delays | filter → map → Set |
| 06 | Top supplier | entries → sort |
| 07 | Key by id | reduce → lookup |
| 08 | Partition | filter x2 |
| 09 | Count by project & status | reduce anidado |
| 10 | To table rows | map + toLocaleString |

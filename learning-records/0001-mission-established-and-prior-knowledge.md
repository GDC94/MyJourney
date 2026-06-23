# Misión establecida + conocimiento previo de base

Se definió la misión: **readiness durable para entrevistas de Frontend Senior (~5 años)**,
sin fecha fija → enfoque en storage strength (espaciado/interleaving), no cram. Seis frentes
bajo un mismo "why" (ver [[MISSION.md]]); arrancamos por **estructuras de datos**.

## Conocimiento previo (establecido por evidencia en el repo, no demostrado en lección aún)
El usuario ya tiene construido en `src/`:
- Array methods completos (map/filter/reduce/some/every/find/sort) con drills.
- Data transforms tipo hash-map: group-by, key-by-id, count-by, partition.
- Fetch + React Query: 4 estados, paginación (`keepPreviousData`), búsqueda con debounce.

## Implicancia para la enseñanza
No re-enseñar técnica de iteración. El gap probable NO es la técnica sino el **vocabulario
de complejidad**: poder nombrar y defender Big-O en voz alta. Por eso la primera lección
le pone nombre y costo a lo que ya hace (doble loop O(n²) → hash map O(n)), en vez de
introducir algo nuevo. Evidencia de dominio real se confirma cuando complete el ejercicio
de la lección 0001 narrando la complejidad correctamente.

## Nota de evolución de misión
En el arranque la misión se planteó como "Kaya inminente (días)". El usuario la corrigió a
"prep continua, sin fecha" y amplió el alcance a 6 frentes. Si reaparece una entrevista con
fecha, se reabre la decisión de cram.

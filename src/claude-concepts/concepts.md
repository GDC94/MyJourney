## Claude.md

CLAUDE.md = memoria/instrucciones del proyecto para Claude.

Sirve para:

Dar contexto: qué es proyecto, dominio, arquitectura.
Fijar reglas: no build, commits convencionales, idioma, tono, patrones.

Guardar comandos: test, lint, dev, scripts importantes.
Explicar estructura: carpetas, módulos, boundaries.
Evitar repetición: no explicar todo cada sesión.
Alinear agentes: todos leen misma “constitución” del repo.
Diferencia clave:

CLAUDE.md = reglas + contexto.
Skills = workflows especializados reutilizables.
Hooks = comandos automáticos que Claude no puede saltear.


Tamaño:

Docs oficiales dicen: target < 200 líneas por CLAUDE.md; si crece, usar .claude/rules/, imports o skills.
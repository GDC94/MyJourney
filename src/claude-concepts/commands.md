# Comandos de Claude Code

Referencia rápida de slash commands y utilidades. Para contexto de proyecto, ver [concepts.md](./concepts.md).

---

## Sesión y memoria

### `/rename`

Asigna un nombre a la sesión actual. Si la cierras y la abres después:

```bash
claude --resume "nombre de la sesión pasada"
```

### `/resume`

Lista todas las conversaciones anteriores para retomar una.

### `/compact`

Compacta la sesión según el criterio de Claude (resume el historial para liberar contexto).

### `/recap`

Recapitulación de todo lo ocurrido en la sesión.

### `/rewind`

Vuelve el código o la conversación a un punto anterior. Similar a un `git revert` en el flujo de trabajo.

---

## Rendimiento y calidad de respuesta

### `/effort`

Aumenta el esfuerzo de razonamiento cuando Claude no logra resolver un problema.

### Thinking mode

Modo de razonamiento extendido. Útil en problemas complejos o cuando `/effort` no basta.

> Completar: cómo activarlo en tu setup (flag, setting o comando concreto).

### `/copy`

Copia la respuesta completa devuelta por Claude.

---

## Contexto y herramientas

### `/mcp`

Muestra los servidores MCP configurados.

**Tip:** deshabilita MCPs que no uses; consumen mucho contexto.

---

## Skills

Los skills son workflows reutilizables. Ver también la diferencia con `CLAUDE.md` en [concepts.md](./concepts.md).

### Instalar un skill

```bash
npx skills add https://github.com/juliusbrussee/caveman --skill caveman
```

### Caveman (comunicación comprimida)

Skill de comunicación ultra-comprimida: reduce ~75% de tokens de salida manteniendo la sustancia técnica.

| Comando         | Cuándo usarlo                         |
| --------------- | ------------------------------------- |
| `/caveman`      | Al inicio del trabajo                 |
| `/stop-caveman` | Cuando quieras volver al tono normal  |

---

## Automatización

### `/loop`

Repite una instrucción un número determinado de veces.

### `/schedule`

Agrega eventos al calendario desde Claude.

```text
/schedule add "Reunión con el equipo" "10:00" "11:00"
```

---

## Índice rápido

| Comando       | Propósito                         |
| ------------- | --------------------------------- |
| `/rename`     | Nombrar sesión                    |
| `/resume`     | Listar y retomar conversaciones   |
| `/compact`    | Comprimir historial               |
| `/recap`      | Resumen de la sesión              |
| `/rewind`     | Volver a un punto anterior        |
| `/effort`     | Más esfuerzo de razonamiento      |
| `/copy`       | Copiar respuesta                  |
| `/mcp`        | Ver servidores MCP                |
| `/caveman`    | Respuestas compactas (skill)      |
| `/loop`       | Repetir instrucciones             |
| `/schedule`   | Eventos en calendario             |

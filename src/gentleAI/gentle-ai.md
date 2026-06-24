# Gentle-AI — Manual del sistema

> Referencia completa del ecosistema [`gentle-ai`](https://github.com/Gentleman-Programming/gentle-ai):
> qué es cada herramienta, para qué sirve y cuándo usar cada una.
> (Release de referencia: v1.33.x — escrito en jun 2026.)

---

## El modelo mental

Gentle-AI **no es un instalador de agentes**. Es un **configurador de ecosistema**:
agarra el/los agentes de IA que ya usás (Claude Code, OpenCode, Codex, etc.) y los
potencia con memoria persistente, un workflow de Spec-Driven Development, skills
curadas, MCP servers, un switcher de proveedor de IA, una persona "teaching-oriented"
con permisos security-first, y asignación de modelo por fase.

```
ANTES:    "Instalé Claude Code, pero es un chatbot que escribe código."
DESPUÉS:  El agente tiene memoria, skills, workflow, MCP tools y una persona que te enseña.
```

Está escrito en Go, soporta **14 agentes** y se distribuye como binario (`gentle-ai`).

---

## Los 8 componentes del sistema

Cada componente se puede instalar/activar por separado. Estos son los building blocks:

| Componente | ID | Qué es | Para qué sirve |
|---|---|---|---|
| **Engram** | `engram` | Memoria persistente cross-session vía MCP | El agente recuerda decisiones, bugs y contexto entre sesiones. Auto-detecta el nombre del proyecto, full-text search, git sync |
| **SDD** | `sdd` | Workflow de Spec-Driven Development (10 fases) | Mete fases explícitas (explorar → diseñar → implementar → verificar) en vez de una sesión monolítica caótica |
| **Skills** | `skills` | Librería de skills de coding curadas | 20 skills embebidas en el binario, inyectadas en la config del agente |
| **Context7** | `context7` | MCP server de documentación en vivo | Le da al agente docs actualizadas de frameworks/librerías (no las alucina) |
| **Persona** | `persona` | Inyección de persona Gentleman/neutral | Le da un tono "teaching-oriented": te explica en vez de solo escupir código |
| **Permissions** | `permissions` | Defaults y guardrails security-first | Deny-list de paths sensibles (`~/.ssh/*`, `**/*.env*`, `~/.aws/credentials`, etc.). Aplica a Claude Code y OpenCode |
| **GGA** | `gga` | Gentleman Guardian Angel — switcher de proveedor de IA | Cambia entre proveedores de IA. Se instala global pero se activa por repo (`gga init && gga install`) |
| **Theme** | `theme` | Overlay del tema Gentleman Kanagawa | Estético, el theme del agente |

> **Engram y Context7 son MCP servers.** Persona, Permissions y Theme son overlays de
> configuración. SDD y Skills son los que te dan los comandos `/sdd-*` y las skills.

---

## El workflow SDD — las 10 fases

Esto es el corazón del sistema. SDD = Spec-Driven Development. La idea: en vez de
pedirle al agente "hacé X" y que improvise, lo guiás por fases con artefactos
explícitos (specs, design docs, tasks).

**Lo importante:** el agente maneja SDD **orgánicamente** cuando la tarea lo amerita, o
cuando vos se lo pedís. No necesitás memorizar los comandos — pero entender qué hace
cada fase te da control fino.

### Orden del flujo

```
sdd-init → sdd-explore → sdd-propose → sdd-spec → sdd-design
         → sdd-tasks → sdd-apply → sdd-verify → sdd-archive
                                                  (sdd-onboard = tour guiado)
```

| Fase | Comando | Qué hace | Cuándo la usás |
|---|---|---|---|
| **1. Init** | `/sdd-init` | Bootstrap del contexto SDD en el proyecto: detecta stack, capacidades de testing, activa Strict TDD Mode si puede | Primera vez en un repo nuevo, o cuando agregás/sacás un framework de testing |
| **2. Explore** | `/sdd-explore` | Investiga el codebase **antes** de comprometerse a un cambio | Antes de tocar algo que no conocés bien — entender el flujo primero |
| **3. Propose** | `/sdd-propose` | Crea una propuesta de cambio con intent, scope y approach | Cuando ya entendés el problema y querés proponer el "qué" y el "cómo" a alto nivel |
| **4. Spec** | `/sdd-spec` | Escribe las especificaciones: requirements y scenarios | Cuando necesitás clavar el comportamiento esperado antes de diseñar |
| **5. Design** | `/sdd-design` | Diseño técnico con decisiones de arquitectura | Para definir cómo se construye: módulos, patrones, trade-offs |
| **6. Tasks** | `/sdd-tasks` | Parte el cambio en tasks de implementación | Cuando el diseño está cerrado y querés un plan accionable paso a paso |
| **7. Apply** | `/sdd-apply` | Implementa las tasks siguiendo specs y design | La fase de escribir código de verdad, guiada por todo lo anterior |
| **8. Verify** | `/sdd-verify` | Valida que la implementación matchee las specs | Después de implementar, antes de dar por cerrado |
| **9. Archive** | `/sdd-archive` | Sincroniza las delta-specs a las specs principales y archiva | Al cerrar el cambio: consolidás lo aprendido en el spec maestro |
| **Tour** | `/sdd-onboard` | Walkthrough guiado end-to-end de SDD sobre tu codebase real | La primera vez que querés aprender el flujo completo con tu propio proyecto |

### Bonus: Judgment Day

| Skill | ID | Qué hace |
|---|---|---|
| **Judgment Day** | `judgment-day` | Review adversarial en paralelo — **dos jueces independientes** revisan el mismo target |

Útil para PRs, conflictos o incidentes donde querés una revisión dura con contexto
fresco. Es la pieza de "review adversarial" del sistema.

---

## Foundation Skills

Skills de soporte que se instalan junto con el ecosistema (presets `full-gentleman` y
`ecosystem-only`). No son SDD pero acompañan el flujo:

| Skill | ID | Para qué sirve |
|---|---|---|
| Go Testing | `go-testing` | Patrones de testing en Go, incluido testing de TUIs con Bubbletea |
| Skill Creator | `skill-creator` | Crear nuevas skills siguiendo la spec de Agent Skills |
| Branch & PR | `branch-pr` | Workflow de PRs con conventional commits, naming de branches, issue-first |
| Issue Creation | `issue-creation` | Filing de issues con templates de bug report y feature request |
| Skill Registry | `skill-registry` | Construye el índice de skills instaladas con triggers, scopes y paths a `SKILL.md` |
| Chained PR | `chained-pr` | Planear y crear PRs apilados/encadenados (stacked) |
| Cognitive Doc Design | `cognitive-doc-design` | Escribir docs que bajan la carga cognitiva de review y onboarding |
| Comment Writer | `comment-writer` | Redactar comentarios de colaboración y respuestas de review, cálidos y directos |
| Work Unit Commits | `work-unit-commits` | Partir la implementación en work units revisables |

> **Ojo:** las skills *framework-specific* (React 19, Angular, TS, Tailwind 4, Zod 4,
> Playwright, etc.) **NO** están acá — viven en el repo aparte
> [`Gentleman-Skills`](https://github.com/Gentleman-Programming/Gentleman-Skills) y se
> instalan por separado clonando el repo.

---

## CLI — comandos del binario

### `gentle-ai` (el configurador)

| Comando | Qué hace | Cuándo |
|---|---|---|
| `gentle-ai doctor` | Health check read-only del ecosistema (binarios, `state.json`, Engram, disco) | Cuando algo no anda o querés confirmar el estado |
| `gentle-ai sync` | Re-aplica skills, personas y MCP a tus agentes | Después de cambiar config o instalar componentes |
| `gentle-ai skill-registry refresh` | Escanea skills instaladas + convenciones del proyecto, arma el registry | Tras instalar/sacar skills, o primera vez en un repo |
| `gentle-ai update` | Actualiza el binario y resincroniza configs (con backup automático) | Para actualizar a la última release |
| `gentle-ai install --component <id>` | Instala un componente puntual (ej. `gga`) | Cuando querés sumar una pieza específica |

### Per-phase model routing (solo OpenCode / Kilo)

Asignás **modelos distintos por fase SDD**: uno potente para diseño, uno barato para
exploración. (Claude Code no usa esto — usa sub-agents y output styles.)

```bash
gentle-ai sync --profile cheap:openrouter/qwen/qwen3-30b-a3b:free
gentle-ai sync --profile-phase cheap:sdd-design:anthropic/claude-sonnet-4-20250514
```

En OpenCode, apretás **Tab** para cambiar entre `gentle-orchestrator` (default) y tus
profiles custom.

### `engram` (la memoria)

| Comando | Qué hace |
|---|---|
| `engram projects list` | Ver todos los proyectos con su conteo de memorias |
| `engram projects consolidate` | Arregla name drift (`my-app` vs `My-App`) |
| `engram search "auth bug"` | Buscar una decisión pasada desde la terminal |
| `engram tui` | Browser visual de memorias |
| `engram sync` | Compartir memoria entre máquinas (git sync) |

### `gga` (el switcher de proveedor)

```bash
gga init       # activar GGA en el repo actual
gga install    # instalar los hooks del proyecto
```

GGA se instala global pero **no** corre el setup por repo automáticamente — es una
decisión explícita por repositorio.

---

## Delegation Triggers — cuándo el sistema delega

Gentle-AI mantiene el thread del orquestador "fino". Cuando una tarea deja de ser
chica, **delegar o cruzar un límite de fase SDD es lo esperado**, no opcional:

| Trigger | Comportamiento esperado |
|---|---|
| Leer 4+ archivos para entender un flujo | Delegar exploración o correr una fase de exploración |
| Tocar 2+ archivos no triviales | Usar un solo writer o exigir review fresco antes de cerrar |
| Commit, push o PR después de cambios de código | Correr review fresco salvo que el diff sea trivial (docs/texto) |
| cwd equivocado, accidente de git/worktree, merge raro | Parar y correr una auditoría fresca antes de seguir |
| Sesión monolítica larga con complejidad acumulándose | Pausar y delegar, re-planear, o justificar por qué no |
| Review adversarial de diffs, conflictos, PRs o incidentes | Usar contexto fresco cuando el agente lo soporte |

> La meta no es ceremonia. Es evitar el caos accidental manteniendo **un orquestador
> responsable y un solo writer thread**.

---

## Presets — qué instala cada uno

| Preset | ID | Qué incluye |
|---|---|---|
| **Dev Stack + Polish** | `full-gentleman` | Todos los componentes (Engram + SDD + Skills + Context7 + GGA + Permissions + Theme) + todas las skills |
| **Dev Stack** | `ecosystem-only` | Componentes core (Engram + SDD + Skills + Context7 + GGA) + todas las skills |
| **Memory Only** | `minimal` | Solo Engram + skills SDD |
| **Custom** | `custom` | Elegís componentes y skills a mano, dejando persona/settings existentes sin tocar |

La persona se elige aparte, en su propia pantalla, independiente del preset.

---

## Backups — red de seguridad

Cada install, sync y upgrade **snapshotea tus configs automáticamente**. Los backups son:
comprimidos (tar.gz), deduplicados (configs idénticas no se re-backupean), y auto-podados
(guarda los 5 más recientes). Podés pinear backups importantes desde la TUI (tecla `p`)
para protegerlos del pruning.

---

## Resumen: cuándo usar cada cosa

```
Arrancar en un repo nuevo            → /sdd-init  +  gentle-ai skill-registry refresh
Entender código ajeno antes de tocar → /sdd-explore
Definir el "qué" de un cambio        → /sdd-propose → /sdd-spec
Definir el "cómo" técnico            → /sdd-design → /sdd-tasks
Escribir el código                   → /sdd-apply
Validar contra las specs             → /sdd-verify
Cerrar y consolidar                  → /sdd-archive
Aprender SDD con tu propio repo      → /sdd-onboard
Review dura de un PR/incidente       → judgment-day
Recuperar una decisión vieja         → engram search / engram tui
Confirmar que todo está sano         → gentle-ai doctor
Re-aplicar config tras un cambio     → gentle-ai sync
Actualizar el ecosistema             → gentle-ai update
Modelos distintos por fase (OpenCode)→ gentle-ai sync --profile-phase ...
```

---

## Tu setup (referencia)

Tenés instalado **todo el suite SDD** (`sdd-init`, `sdd-explore`, `sdd-propose`,
`sdd-spec`, `sdd-design`, `sdd-tasks`, `sdd-apply`, `sdd-verify`, `sdd-archive`,
`sdd-onboard`) más `judgment-day`, y varias foundation skills (`skill-registry`,
`skill-creator`, `branch-pr`, `issue-creation`, `go-testing`). O sea, el ecosistema
gentle-ai está completo de tu lado.

> **Recordatorio:** también tenés las skills de Matt Pocock instaladas (parcialmente).
> Son **otro orquestador**. Regla de oro: elegí una base de proceso por repo, no corras
> el flujo SDD de gentle-ai y el de Matt juntos en el mismo proyecto. (Ver el doc de
> workflow de Matt para las combinaciones recomendadas.)
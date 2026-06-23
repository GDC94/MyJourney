// ===========================================================================
// ANATOMÍA DE useEffect — todas sus partes explicadas
//
// ⚠️ PRIMERO, EL CONCEPTO MÁS IMPORTANTE:
//    useEffect NO es "código que corre al montar". ESO es un malentendido.
//    useEffect sirve para SINCRONIZAR tu componente con un sistema EXTERNO a
//    React: el DOM, el navegador, una suscripción, un timer, una API del SO.
//
//    Si lo que querés es traer datos → NO uses useEffect, usá React Query.
//    (Por eso antes te saltó el error 'react-hooks/set-state-in-effect'.)
//    useEffect es para: event listeners, timers, suscripciones, medir el DOM.
// ===========================================================================
import { useEffect, useState } from 'react'

export function UseEffectAnatomy() {
  const [width, setWidth] = useState(window.innerWidth)
  const [count, setCount] = useState(0)

  // ┌─────────────────────────────────────────────────────────────────────┐
  // │  LAS 3 PARTES DE TODO useEffect                                       │
  // └─────────────────────────────────────────────────────────────────────┘
  useEffect(() => {
    // ───────────────────────────────────────────────────────────────────
    // PARTE 1 — SETUP FUNCTION (el cuerpo del effect)
    // Es lo que React ejecuta para "conectar" con el sistema externo.
    // Acá: nos suscribimos al evento resize del navegador.
    // ───────────────────────────────────────────────────────────────────
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    console.log('✅ SETUP: listener conectado')

    // ───────────────────────────────────────────────────────────────────
    // PARTE 2 — CLEANUP FUNCTION (la función que RETORNÁS)
    // React la ejecuta para "desconectar" antes de:
    //   - re-correr el effect (si cambió una dependencia), o
    //   - desmontar el componente.
    // SIN cleanup → memory leak: el listener queda vivo para siempre.
    // ───────────────────────────────────────────────────────────────────
    return () => {
      window.removeEventListener('resize', handleResize)
      console.log('🧹 CLEANUP: listener desconectado')
    }

    // ───────────────────────────────────────────────────────────────────
    // PARTE 3 — DEPENDENCY ARRAY (el [] del final)
    // Le dice a React CUÁNDO re-ejecutar el effect.
    //   []            → solo al montar (y cleanup al desmontar)  ← este caso
    //   [count]       → al montar Y cada vez que 'count' cambie
    //   (sin array)   → en CADA render (casi siempre un bug)
    // Regla: TODO valor reactivo que usás adentro va en el array.
    // ───────────────────────────────────────────────────────────────────
  }, [])

  // ───────────────────────────────────────────────────────────────────────
  // SEGUNDO EFFECT — con dependencia, para que veas la diferencia.
  // Este corre al montar Y cada vez que 'count' cambia.
  // (Es solo demostrativo; en la vida real esto NO necesita un effect:
  //  podrías calcular el título directo en el render. "You might not need an
  //  effect" → sincronizar el <title> con el DOM SÍ es un uso válido.)
  // ───────────────────────────────────────────────────────────────────────
  useEffect(() => {
    document.title = `Count: ${count}`
    console.log(`🔄 effect de count corrió → count=${count}`)
  }, [count]) // ← cambia cuando 'count' cambia

  return (
    <div className="mx-auto max-w-md space-y-4 p-6">
      <h1 className="text-2xl font-semibold">useEffect anatomy</h1>

      {/* Cambiá el tamaño de la ventana y mirá cómo se actualiza (effect 1) */}
      <p className="text-sm text-muted-foreground">
        Window width: <span className="font-mono">{width}px</span>
      </p>

      {/* Cliqueá y mirá el <title> de la pestaña cambiar (effect 2) */}
      <button
        onClick={() => setCount((c) => c + 1)}
        className="rounded bg-foreground px-3 py-1.5 text-sm text-background"
      >
        Count: {count}
      </button>

      <p className="text-xs text-muted-foreground">
        Abrí la consola y la pestaña del navegador para ver los logs y el título.
      </p>
    </div>
  )
}

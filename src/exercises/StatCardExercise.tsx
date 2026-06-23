// ===========================================================================
// EJERCICIO 5 — DESIGN-TO-CODE (la habilidad HEADLINE de Kaya)
//
// No hay Figma, así que te doy un spec visual detallado. Tu trabajo:
// reproducirlo con Tailwind lo más PIXEL-ACCURATE posible. Esto es literal
// lo que la JD llama "translate design files into pixel-accurate implementations".
//
// ┌─────────────────────────────────────────────┐
// │  📦  Total Spend                    ▲ 12.5%  │   ← label gris arriba; badge verde a la derecha
// │                                              │
// │  $2,039,000                                  │   ← número grande, bold
// │                                              │
// │  Across 5 active purchase orders             │   ← subtítulo gris, chico
// └─────────────────────────────────────────────┘
//
// SPEC (seguilo como si fuera un diseño aprobado):
//   - Card: fondo blanco, borde gris fino, esquinas redondeadas (rounded-xl),
//     sombra sutil, padding interno generoso (~24px = p-6).
//   - Fila superior: label "Total Spend" a la izquierda (text-sm, gris,
//     font-medium) + un badge a la derecha. Usá justify-between.
//   - Badge "▲ 12.5%": texto verde, fondo verde muy claro, redondeado (rounded-full),
//     padding chico (px-2 py-0.5), text-xs, font-medium.
//   - Valor: "$2,039,000" — text-3xl, font-bold, con un poco de margen arriba.
//   - Subtítulo: text-sm, gris (text-muted-foreground), margen arriba chico.
//   - Ancho máximo ~320px (max-w-xs), centrado en la página.
//
// 🎯 Lo que se evalúa (esto ES el rol): spacing consistente, jerarquía
//    tipográfica (tamaños/pesos), uso correcto de flex, y que se vea PULIDO.
//
// Pista de tokens shadcn que ya tenés: text-muted-foreground, border, bg-card.
// Verde de Tailwind: text-green-700, bg-green-100.
// ===========================================================================

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function StatCardExercise() {
  // TODO: construí la card según el spec. Solo JSX + Tailwind, sin lógica.

  return (
    <div className="bg-muted/30 flex min-h-screen items-center justify-center">
      <Card className="min-w-xs">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Total Spend</CardTitle>
            <div className="rounded-sm border-1 border-gray-500/40 bg-green-200/50 px-1 py-0.5 font-mono text-xs">
              Boughts
            </div>
          </div>
          <CardDescription className="text-lg">
            Across 5 active purchase orders
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <div className="text-right text-3xl font-bold">$2,039,000</div>
        </CardContent>
      </Card>
    </div>
  )
}

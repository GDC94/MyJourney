import { atom } from 'jotai'
import type { OrderStatus, SimulateMode } from '@/lib/api'

// ---------------------------------------------------------------------------
// Jotai — estado global atómico (client state).
// Regla de oro para la entrevista: server state → React Query,
// client/UI state → Jotai. NO mezclar.
// ---------------------------------------------------------------------------

/** Filtro de estado activo en la tabla de órdenes */
export const statusFilterAtom = atom<OrderStatus | 'all'>('all')

/** Búsqueda por texto libre */
export const searchAtom = atom('')

/** Modo de simulación de la API mock (para practicar loading/error/empty) */
export const simulateModeAtom = atom<SimulateMode>('success')

/** Derived atom — ejemplo de estado computado (read-only) */
export const hasActiveFiltersAtom = atom(
  (get) => get(statusFilterAtom) !== 'all' || get(searchAtom).trim() !== '',
)

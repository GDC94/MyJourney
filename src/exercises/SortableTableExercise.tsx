// ===========================================================================
// EJERCICIO 4 — Tabla ordenable por columna (lo más "dashboard de Kaya")
//
// Endpoint: /users   (baseURL en ./api)  →  { id, name, email, ... }
// Vamos a mostrar: name | email | company.name   en una tabla.
//
// Consigna:
//   - Traé los usuarios con React Query (ya lo dominás)
//   - Renderizá una <table> con 3 columnas: Name, Email, Company
//   - Al clickear el header de una columna, ordená por esa columna
//   - Segundo click en la misma columna: invertí el orden (asc ⇄ desc)
//   - Mostrá una flecha (▲/▼) en la columna activa
//
// 🪤 LA TRAMPA: el sort hay que pensarlo como ESTADO.
//    ¿Qué necesitás guardar para saber cómo ordenar?
//      - QUÉ columna ('name' | 'email' | 'company')
//      - en qué DIRECCIÓN ('asc' | 'desc')
//    Pista: un solo objeto de estado { key, direction } suele ser lo más limpio.
//
// ⚠️ Regla de oro: NO mutes el array de React Query con .sort().
//    .sort() muta in-place → estarías tocando el cache. Copiá antes: [...users]
//
// Objetivo: < 12 min (este es más largo), narrando en voz alta.
// ===========================================================================
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Api } from './api'

interface User {
  id: number
  name: string
  email: string
  company: { name: string }
}

async function fetchUsers(): Promise<User[]> {
  const resp = await Api.get<User[]>('/users')
  return resp.data
}

// 👉 PISTA: te conviene un tipo para la columna y otro para el estado de sort.
type SortKey = 'name' | 'email' | 'company'
type SortState = { key: SortKey; direction: 'asc' | 'desc' }

export function SortableTableExercise() {
  const [sort, setSort] = useState<SortState>({ key: 'name', direction: 'asc' })


  // TODO 1: useQuery → users / isPending / isError
  const {
    data: users = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  // TODO 2: useState para el sort  → { key: 'name', direction: 'asc' }
  const getValue = (user: User, key: SortKey): string => {
    if (key === 'company') return user.company.name
    return user[key] // 'name' | 'email' → string directo
  }

  // TODO 3: estados de datos (loading / error / empty)
  if (isPending) {
    return <p>Loading</p>
  }
  if (isError) {
    return <p>Error</p>
  }
  if (users.length === 0) {
    return <p>No users</p>
  }

  // TODO 4: derivar la lista ordenada (¡COPIAR antes de .sort()!)
  const sorted = [...users].sort((a, b) => {
    const valA = getValue(a, sort.key)
    const valB = getValue(b, sort.key)
    const comparison = valA.localeCompare(valB)
    return sort.direction === 'asc' ? comparison : -comparison
  })

  // TODO 5: handler que recibe una columna:
  const handleSort = (key: SortKey) => {
    setSort((prev) => {
      if (prev.key === key) {
        // misma columna → invierto dirección
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
      }
      // columna nueva → empiezo en asc
      return { key, direction: 'asc' }
    })
  }

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-2xl font-semibold">Users Table</h1>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b">
            {(['name', 'email', 'company'] as SortKey[]).map((col) => (
              <th
                key={col}
                onClick={() => handleSort(col)}
                className="cursor-pointer p-2 capitalize select-none"
              >
                {col}{' '}
                {sort.key === col && (sort.direction === 'asc' ? '▲' : '▼')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

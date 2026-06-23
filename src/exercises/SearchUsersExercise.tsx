// ===========================================================================
// EJERCICIO 3 — Buscador que filtra una lista (React Query + client state)
//
// Endpoint: /users   (baseURL en ./api)  →  { id, name, email }
//
// Consigna:
//   - Traé los usuarios con React Query (ya lo sabés hacer)
//   - Agregá un <input> de búsqueda controlado
//   - Filtrá la lista por name o email mientras escribís
//   - Mostrá los 4 estados... PERO ojo con el empty (ver pista abajo)
//
// 🪤 LA TRAMPA: hay DOS estados "vacíos" distintos.
//    a) La API devolvió 0 usuarios        → "No users yet"
//    b) Hay usuarios pero el filtro no matchea → "No results for '...'"
//    Un junior los confunde. Un senior los separa. ¿Por qué importa?
//    Porque el usuario necesita saber si NO HAY datos o si SU BÚSQUEDA no encontró.
//
// Objetivo: < 10 min, narrando en voz alta.
// ===========================================================================
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Api } from './api'

interface User {
  id: number
  name: string
  email: string
}

async function fetchUsers(): Promise<User[]> {
  const resp = await Api.get<User[]>('/users')
  return resp.data
}

export function SearchUsersExercise() {
  // TODO 1: useState para el texto de búsqueda
  const [search, setSearch] = useState('')

  // TODO 2: useQuery para traer los users (isPending / isError / data)
  const {
    data: users = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })
  // TODO 3: estados: loading → error → empty (de la API)
  if (isPending) {
    return <p>Loading</p>
  }
  if (isError) {
    return <p>Error</p>
  }
  if (users.length === 0) {
    return <p>No users</p>
  }

  const filtered = users.filter((u) => {
    const userFiltered = search.toLowerCase()
    return (
      u.name.toLowerCase().includes(userFiltered) ||
      u.email.toLowerCase().includes(userFiltered)
    )
  })

  // TODO 4: filtrar la lista por name o email (case-insensitive)
  //         pista: const filtered = users.filter(u => ...)

  // TODO 5: empty de BÚSQUEDA (filtered.length === 0) ≠ empty de API

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-4 text-2xl font-semibold">Search Users</h1>
      {/* TODO 6: input controlado + render de la lista filtrada (key={user.id}) */}

      {/*
        Acá no hace falta, porque el filtrado es client-side: ya tengo todos los datos en memoria y 
        filtrar un array de 10 items es instantáneo. El debounce vale la 
        pena cuando cada tecla dispara una request al SERVIDOR — ahí sí querés esperar a 
        que el usuario deje de escribir. En este caso sería optimización prematura.
      */}
      <input
        type="text"
        placeholder="Search by name or email…"
        aria-label="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.length === 0 ? (
        <p>No users found for {search}</p>
      ) : (
        filtered.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  )
}

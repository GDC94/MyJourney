// ===========================================================================
// EJERCICIO 1c — Misma llamada, ahora con REACT QUERY (el patrón de Kaya)
//
// Endpoint: /users  (baseURL ya está en ./api)
//
// Objetivo: que DESAPAREZCA la plomería manual.
//   - NO useEffect
//   - NO useState para loading/error/data
//   - NO try/catch/finally
//   React Query maneja todo eso por vos.
//
// Recordá: el QueryClientProvider ya está montado en main.tsx, así que
// useQuery funciona directo.
// =========================================================================== //
import { useQuery } from '@tanstack/react-query'
import { Api } from './api'

interface User {
  id: number
  name: string
  email: string
  phone: string
  website: string
}

async function fetchUsers(): Promise<User[]> {
  const resp = await Api.get<User[]>('/users')
  return resp.data
}

export function UsersExerciseQuery() {
  const {
    data: users = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  if (isPending) {
    return <p>Loading</p>
  }

  if (isError) {
    return <p>Error</p>
  }

  if (users.length === 0) {
    return <p>No users</p>
  }

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-semibold">Users (React Query)</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      ))}
    </div>
  )
}

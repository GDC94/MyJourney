/* eslint-disable react-hooks/set-state-in-effect */
// ===========================================================================
// EJERCICIO 1b — Mismo ejercicio, ahora con AXIOS
//
// Endpoint: https://jsonplaceholder.typicode.com/users
//
// Objetivo: notar las DIFERENCIAS con la versión fetch. Cosas a demostrar:
//   - axios.get<User[]>(url) → la data tipada viene en response.data
//   - NO hace falta chequear response.ok (axios tira error en status no-2xx)
//   - NO hace falta el doble .then(res => res.json())
//   - cancelación: axios también respeta AbortController (signal)
//   - bonus: instancia con baseURL → const api = axios.create({ baseURL })
//
// Acordate de los 4 estados: loading / error / empty / success.
// ===========================================================================
import { useEffect, useState } from 'react'
import { Api } from './api'

interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}

export function UsersExerciseAxios() {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  const loadUsers = async () => {
    try {
      const resp = await Api.get<User[]>('/users')
      setUsers(resp.data)
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  if (loading) {
    return <p>Loading</p>
  }

  if (error) {
    return <p>there are an error</p>
  }

  if (users.length === 0) {
    return null
  }

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-semibold">Users (axios)</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  )
}

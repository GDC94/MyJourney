// ===========================================================================
// EJERCICIO 1 — Consumir un endpoint y mostrar la lista de usuarios
//
// Endpoint: https://jsonplaceholder.typicode.com/users
//
// Tu trabajo: completar este componente. Empezá por el PLAN (en voz alta),
// no por el código. Cuando termines, comparamos contra OrdersDashboard.tsx.
// ===========================================================================

import { useEffect, useState } from 'react'
interface User {
  id: number
  name: string
  email: string
  phone: string
  website: string
}

export function UsersExercise() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

  if (error) {
    return <h2>Sorry, we have an error fetching the data.</h2>
  }

  if (loading) {
    return <p>Loading data</p>
  }

  if(users.length === 0){
    return (
      <div>
        <p>We haven't users to show</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-semibold">Users</h1>
      {users.map((user, index) => (
          <div key={index}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
    </div>
  )
}


{/*

  Errores: 
  
  Using the index as a key breaks the reconciliation if the list is reordered or filtered
  USAR USER.ID siempre









*/}
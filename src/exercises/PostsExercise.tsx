// ===========================================================================
// EJERCICIO 2 — Lista de posts con React Query (mismo patrón, contra reloj)
//
// Endpoint: /posts   (baseURL ya está en ./api)
// Forma del dato: { userId, id, title, body }
//
// Objetivo: hacerlo SOLO, sin mirar UsersExerciseQuery.tsx, en < 8 min.
// Acordate: tipá el dato → queryFn → useQuery → los 4 estados → render con key.
// ===========================================================================
import { useQuery } from '@tanstack/react-query'
import { keepPreviousData } from '@tanstack/react-query'
import { Api } from './api'
import { useState } from 'react'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

async function fetchPosts(userId: number): Promise<Post[]> {
  const resp = await Api.get<Post[]>('/posts', {
    params: {
      userId: userId,
    },
  })
  return resp.data
}
export function PostsExercise() {
  const [userId, setUserId] = useState(1)

  const {
    data: posts = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ['posts', userId], // La query key puede ser cualquier cosa?
    queryFn: () => fetchPosts(userId), // que pasa si tengo que pasarle un parametro al endpoint? Como lo manejo?
    placeholderData: keepPreviousData, // sin keepPreviousData cambiás userId → key nueva → no hay cache → data es undefined → isPending = true → parpadeo.
    // `keepPreviousData` is simply that pre-built function, which says, “Use the data from the previous query as a placeholder.”
  })

  if (isPending) {
    return <p>Loading</p>
  }

  if (isError) {
    return <p>Error</p>
  }

  if (posts.length === 0) {
    return <p>No posts</p>
  }

  const handleNextUser = (): void => {
    setUserId(userId + 1)
  }

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-semibold">Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}

      <button onClick={handleNextUser} disabled={userId >= 10}>
        Next User
      </button>
    </div>
  )
}

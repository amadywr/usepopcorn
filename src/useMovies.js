import { useEffect, useState } from 'react'

const KEY = process.env.REACT_APP_API_KEY

export function useMovies(query) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    async function fetchMovies() {
      try {
        setIsLoading(true)
        setError('')

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        )

        if (!res.ok) {
          throw new Error('Something went wrong during fetching movies')
        }

        const data = await res.json()

        if (data.Response === 'False') {
          throw new Error('No movie found')
        }

        setMovies(data.Search)
        setError('')
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message)
        }
      } finally {
        setIsLoading(false)
      }
    }

    if (!query.length) {
      setMovies([])
      setError('')
      return
    }

    // handleCloseMovie();
    fetchMovies()

    return () => {
      controller.abort()
    }
  }, [query])

  return { movies, isLoading, error }
}

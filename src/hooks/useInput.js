import { useEffect, useState } from 'react'

export function useInput () {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!value) {
      setError("The task can't be empty")
    }

    if (value.length < 5) {
      setError('The task has to have more than 4 letters')
      return
    }

    if (value.length < 5) {
      setError('The task has to have more than 4 letters')
      return
    }

    setError(null)
  }, [value])

  return { value, setValue, error }
}

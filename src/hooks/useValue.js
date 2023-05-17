import { useEffect, useState } from 'react'
import { useTodos } from './useTodos'

const initialValue = {
  text: '',
  id: null
}

export function useValue () {
  const { handleValue } = useTodos()
  const [valueToEdit, setValueToEdit] = useState(null)

  useEffect(() => {
    handleValue(valueToEdit)
  }, [valueToEdit])

  useEffect(() => {
    handleValue(initialValue)
  }, [])

  return { setValueToEdit, valueToEdit }
}

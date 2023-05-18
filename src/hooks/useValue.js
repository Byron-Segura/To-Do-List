import { useEffect, useState } from 'react'
import { useStore } from './useStore'

const initialValue = {
  text: '',
  id: null
}

export function useValue () {
  const { handleValue } = useStore()
  const [valueToEdit, setValueToEdit] = useState(null)

  useEffect(() => {
    handleValue(valueToEdit)
  }, [valueToEdit])

  useEffect(() => {
    handleValue(initialValue)
  }, [])

  return { setValueToEdit, valueToEdit, initialValue }
}

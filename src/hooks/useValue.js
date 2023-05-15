import { useEffect, useState } from 'react'

const initialValue = {
  text: '',
  isDone: false,
  id: null
}

export function useValue () {
  const [value, setValue] = useState(initialValue)
  const [valueToEdit, setValueToEdit] = useState(null)

  useEffect(() => {
    if (valueToEdit === null) {
      setValue(initialValue)
    } else {
      setValue(valueToEdit)
    }
  }, [valueToEdit])

  return { value, setValue, initialValue, setValueToEdit, valueToEdit }
}

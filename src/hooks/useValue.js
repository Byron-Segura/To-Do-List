import { useEffect, useState } from 'react'

export function useValue (valueToEdit, initialValue) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    if (valueToEdit === null) {
      setValue(initialValue)
    } else {
      setValue(valueToEdit)
    }
  }, [valueToEdit])

  return { value, setValue }
}

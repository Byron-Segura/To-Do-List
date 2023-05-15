import { useEffect, useState } from 'react'
import { useTodos } from './useTodos'

const initialDelete = {
  confirmDelete: false,
  id: null
}

export function useDelete () {
  const { deleteTodo, resetTodos } = useTodos()
  const [valueToDelete, setValueToDelete] = useState(initialDelete)
  const { openModal } = useTodos()

  const handleDelete = (data) => {
    if (data) {
      openModal(true)
      const newToDelete = {
        ...valueToDelete,
        id: data
      }
      setValueToDelete(newToDelete)
    }
  }

  useEffect(() => {
    if (valueToDelete.id && valueToDelete.confirmDelete) {
      deleteTodo(valueToDelete.id)
      setValueToDelete(initialDelete)
    } else if (valueToDelete.confirmDelete) {
      resetTodos()
      setValueToDelete(initialDelete)
    }
  }, [valueToDelete])

  return { deleteTodo, resetTodos, handleDelete, valueToDelete, setValueToDelete }
}

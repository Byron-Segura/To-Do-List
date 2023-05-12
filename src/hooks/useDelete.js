import { useEffect, useState } from 'react'
import { useTodosStore } from './useTodos'
import { useModal } from './useModal'

const initialDelete = {
  confirmDelete: false,
  id: null
}

export function useDelete () {
  const { deleteTodos, reset } = useTodosStore()
  const { setOpenModal } = useModal()
  const [valueToDelete, setValueToDelete] = useState(initialDelete)

  const deleteTodo = (data) => {
    deleteTodos(data)
  }

  const resetTodos = () => {
    reset()
  }

  const handleDelete = (data) => {
    if (data) {
      setOpenModal(true)
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

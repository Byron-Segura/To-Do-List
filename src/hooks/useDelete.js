import { useStore } from './useStore'

export function useDelete () {
  const { deleteTodo, resetTodos, openModal } = useStore()

  const handleDelete = (data) => {
    if (data) {
      deleteTodo(data)
      openModal(false)
    } else {
      resetTodos()
      openModal(false)
    }
  }

  return { deleteTodo, resetTodos, handleDelete }
}

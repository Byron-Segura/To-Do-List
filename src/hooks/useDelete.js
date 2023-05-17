import { useTodos } from './useTodos'

export function useDelete () {
  const { deleteTodo, resetTodos, openModal } = useTodos()

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

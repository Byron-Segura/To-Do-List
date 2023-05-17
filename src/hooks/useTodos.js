import { useTodosStore } from '../store/todos'

export function useTodos () {
  const createTodo = useTodosStore(state => state.addTodo)
  const deleteTodo = useTodosStore(state => state.deleteTodo)
  const editTodo = useTodosStore(state => state.editTodo)
  const completeTodo = useTodosStore(state => state.completeTodo)
  const resetTodos = useTodosStore(state => state.resetTodos)
  const todos = useTodosStore(state => state.todos)
  const modal = useTodosStore(state => state.modal)
  const openModal = useTodosStore(state => state.openModal)
  const valueToDelete = useTodosStore(state => state.valueToDelete)

  return { createTodo, completeTodo, deleteTodo, todos, editTodo, resetTodos, modal, openModal, valueToDelete }
}

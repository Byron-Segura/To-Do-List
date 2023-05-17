import { useTodosStore } from '../store/todos'

export function useTodos () {
  const todos = useTodosStore(state => state.todos)
  const modal = useTodosStore(state => state.modal)
  const openModal = useTodosStore(state => state.openModal)
  const valueToDelete = useTodosStore(state => state.valueToDelete)
  const formValue = useTodosStore(state => state.formValue)
  const handleValue = useTodosStore(state => state.handleValue)
  const createTodo = useTodosStore(state => state.addTodo)
  const completeTodo = useTodosStore(state => state.completeTodo)
  const editTodo = useTodosStore(state => state.editTodo)
  const deleteTodo = useTodosStore(state => state.deleteTodo)
  const resetTodos = useTodosStore(state => state.resetTodos)

  return { todos, modal, openModal, valueToDelete, formValue, handleValue, createTodo, completeTodo, editTodo, deleteTodo, resetTodos }
}

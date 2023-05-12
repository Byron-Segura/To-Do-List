import { useTodosList } from '../store/todos'

export function useTodosStore () {
  const addTodo = useTodosList(state => state.addTodo)
  const deleteTodos = useTodosList(state => state.deleteTodo)
  const edit = useTodosList(state => state.editTodo)
  const complete = useTodosList(state => state.completeTodo)
  const reset = useTodosList(state => state.resetTodos)
  const todos = useTodosList(state => state.todos)

  const createToDo = (data) => {
    addTodo(data)
  }

  const deleteTodo = (data) => {
    deleteTodos(data)
  }

  const resetTodos = () => {
    reset()
  }

  const updateTodo = (data) => {
    edit(data)
  }

  const completeTodo = (data) => {
    complete(data)
  }
  return { createToDo, completeTodo, deleteTodo, todos, updateTodo, resetTodos }
}

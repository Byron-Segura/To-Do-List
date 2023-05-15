import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTodosStore = create(persist((set, get) => {
  return {
    todos: [],
    modal: false,

    addTodo: (data) => {
      const { todos } = get()

      data.id = Date.now()
      const newTodos = [...todos, data]
      set({ todos: newTodos })
    },

    deleteTodo: (data) => {
      const { todos } = get()

      const newTodos = todos.filter(el => el.id !== data)
      set({ todos: newTodos })
    },

    completeTodo: (data) => {
      const { deleteTodo } = get()

      setTimeout(() => {
        deleteTodo(data)
      }, 1000)
    },

    editTodo: (data) => {
      const { todos } = get()

      const updatedTodos = todos.map((el) => el.id === data.id ? data : el)

      set({ todos: updatedTodos })
    },

    openModal: (data) => {
      const newModal = data
      set({ modal: newModal })
    },

    resetTodos: () => {
      set({ todos: [] })
    }

  }
}, {
  name: 'todos'
}))

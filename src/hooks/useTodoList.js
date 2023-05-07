import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTodosList = create(persist((set, get) => { }, {
  name: 'todos'
}))

import { createContext, useState } from 'react'

const TodosContext = createContext()

const TodosContextProvider = ({ children }) => {
  const [todosContext, setTodosContext] = useState()
  return (
    <TodosContext.Provider value={{ todosContext, setTodosContext }}>
      {children}
    </TodosContext.Provider>
  )
}

export {
  TodosContext,
  TodosContextProvider
}

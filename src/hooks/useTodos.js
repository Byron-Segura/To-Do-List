import { useContext } from 'react'
import { TodosContext } from '../context/todos'

export function useTodos () {
  const todosContext = useContext(TodosContext)

  if (todosContext === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return todosContext
}

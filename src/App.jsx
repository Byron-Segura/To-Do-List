import { Header } from './components/Header'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import './App.css'
import { useTheme } from './hooks/useTheme'
import { useTodos } from './hooks/useTodos'
import { ModalDelete } from './components/ModalDelete'

function App () {
  const { theme } = useTheme()
  const { todos, modal } = useTodos()

  return (
    <div className={`app ${theme}`}>

      <Header />

      <TaskForm />

      {todos.length > 0 &&
        <TaskList />}

      {modal && <ModalDelete />}

    </div>
  )
}

export default App

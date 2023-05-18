import { Header } from './components/Header'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import './App.css'
import { useStore } from './hooks/useStore'
import { ModalDelete } from './components/ModalDelete'

function App () {
  const { todos, modal, theme } = useStore()

  return (
    <div className={`app ${theme}`}>
      <Header />
      <TaskForm />
      {todos.length > 0 ? <TaskList /> : <h2 className='no-todos'>No todos added</h2>}
      {modal && <ModalDelete />}
    </div>
  )
}

export default App

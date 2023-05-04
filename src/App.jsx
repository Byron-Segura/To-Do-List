import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import './App.css'
import { ModalDelete } from './components/ModalDelete'
import { TodosContext } from './context/todos'
import { useTodos } from './hooks/useTodos'
import { useTheme } from './hooks/useTheme'

const ls = window.localStorage
const initialDelete = {
  confirmDelete: false,
  id: null
}

function App () {
  const { theme } = useTheme()
  const { setTodosContext } = useTodos(TodosContext)
  const [todos, setTodos] = useState([])
  const [valueToEdit, setValueToEdit] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [valueToDelete, setValueToDelete] = useState(initialDelete)

  useEffect(() => {
    if (ls.getItem('todos') === null) {
      setTodosContext([])
    }
    if (ls.getItem('todos')) {
      const storedTodos = JSON.parse(ls.getItem('todos'))
      setTodos(storedTodos)
    }
  }, [])

  const updateLocalStorage = (context) => {
    const newData = JSON.stringify(context)
    ls.setItem('todos', newData)
  }

  const handleDelete = (data) => {
    if (data) {
      setOpenModal(true)
      const newToDelete = {
        ...valueToDelete,
        id: data
      }
      setValueToDelete(newToDelete)
    }
  }

  useEffect(() => {
    if (valueToDelete.confirmDelete) {
      resetTodos()
    }

    if (valueToDelete.id && valueToDelete.confirmDelete) {
      deleteTodo(valueToDelete.id)
    }
  }, [valueToDelete])

  const createToDo = (data) => {
    data.id = Date.now()
    const newTodos = [...todos, data]
    setTodos(newTodos)
    updateLocalStorage(todos)
    updateLocalStorage(newTodos)
  }

  const resetTodos = () => {
    setTodos([])
    setValueToEdit(null)
    setValueToDelete(initialDelete)
    setOpenModal(false)
    updateLocalStorage(todos)
    updateLocalStorage([])
  }

  const updateTodo = (data) => {
    const updatedTodos = todos.map((el) => el.id === data.id ? data : el)
    setTodos(updatedTodos)
    updateLocalStorage(updatedTodos)
  }

  const deleteTodo = (data) => {
    const newTodos = todos.filter(el => el.id !== data)
    setTodos(newTodos)
    setValueToDelete(initialDelete)
    setOpenModal(false)
    updateLocalStorage(newTodos)
  }

  const completeTodo = (data) => {
    setTimeout(() => {
      deleteTodo(data)
    }, 1000)
  }

  return (
    <div className={`app ${theme}`}>

      <Header />

      <TaskForm createToDo={createToDo} updateTodo={updateTodo} valueToEdit={valueToEdit} setValueToEdit={setValueToEdit} />

      {
        todos.length > 0 &&
          <TaskList todos={todos} handleDelete={handleDelete} setValueToEdit={setValueToEdit} setOpenModal={setOpenModal} completeTodo={completeTodo} />
      }

      {
        openModal &&
          <ModalDelete setOpenModal={setOpenModal} setValueToDelete={setValueToDelete} valueToDelete={valueToDelete} />
      }

    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import './App.css'
import { ModalDelete } from './components/ModalDelete'
import { useTheme } from './hooks/useTheme'
import { useTodosList } from './store/todos'

const initialDelete = {
  confirmDelete: false,
  id: null
}

function App () {
  const { theme } = useTheme()
  const [openModal, setOpenModal] = useState(false)
  const [valueToEdit, setValueToEdit] = useState(null)
  const [valueToDelete, setValueToDelete] = useState(initialDelete)

  const addTodo = useTodosList(state => state.addTodo)
  const deleteTodos = useTodosList(state => state.deleteTodo)
  const edit = useTodosList(state => state.editTodo)
  const complete = useTodosList(state => state.completeTodo)
  const reset = useTodosList(state => state.resetTodos)
  const todos = useTodosList(state => state.todos)

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
    if (valueToDelete.id && valueToDelete.confirmDelete) {
      deleteTodo(valueToDelete.id)
    } else if (valueToDelete.confirmDelete) {
      resetTodos()
    }
  }, [valueToDelete])

  const createToDo = (data) => {
    addTodo(data)
  }

  const resetTodos = () => {
    reset()
    setValueToEdit(null)
    setValueToDelete(initialDelete)
  }

  const updateTodo = (data) => {
    edit(data)
    setValueToEdit(null)
  }

  const deleteTodo = (data) => {
    deleteTodos(data)
    setValueToDelete(initialDelete)
  }

  const completeTodo = (data) => {
    complete(data)
  }

  return (
    <div className={`app ${theme}`}>

      <Header />

      <TaskForm createToDo={createToDo} updateTodo={updateTodo} valueToEdit={valueToEdit} setValueToEdit={setValueToEdit} />

      {todos.length > 0 &&
        <TaskList todos={todos} handleDelete={handleDelete} setValueToEdit={setValueToEdit} setOpenModal={setOpenModal} completeTodo={completeTodo} />}

      {openModal &&
        <ModalDelete setOpenModal={setOpenModal} setValueToDelete={setValueToDelete} valueToDelete={valueToDelete} />}

    </div>
  )
}

export default App

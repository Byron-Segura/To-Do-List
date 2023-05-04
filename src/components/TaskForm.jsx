import './TaskForm.css'
import { useEffect, useState } from 'react'

const initialValue = {
  text: '',
  isDone: false,
  id: null
}

export function TaskForm ({ createToDo, updateTodo, valueToEdit, setValueToEdit }) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    if (valueToEdit === null) {
      setValue(initialValue)
    } else {
      setValue(valueToEdit)
    }
  }, [valueToEdit])

  const handleInputChange = (e) => {
    const newValue = {
      ...value,
      text: e.target.value
    }
    setValue(newValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.text) return

    if (value.id === null) {
      createToDo(value)
    } else {
      updateTodo(value)
    }

    handleReset()
  }

  const handleReset = () => {
    setValue(initialValue)
    setValueToEdit(null)
  }

  return (
    <section className='form-container'>

      <form className='form-form' onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          className='form-input'
          value={value.text}
          type='text'
          placeholder='Clean the bedroom, Study science...'
        />
        <button className='form-add-button action-btn'>Add Task</button>
      </form>

    </section>
  )
}

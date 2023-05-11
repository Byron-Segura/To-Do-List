import './TaskForm.css'
import { useValue } from '../hooks/useValue'
import { formEventsHandler } from '../helper/FormEventsHelper'

const initialValue = {
  text: '',
  isDone: false,
  id: null
}

export function TaskForm ({ createToDo, updateTodo, valueToEdit, setValueToEdit }) {
  const { value, setValue } = useValue(valueToEdit, initialValue)
  const { handleChange, handleSubmit } = formEventsHandler(
    value,
    setValue,
    initialValue,
    createToDo,
    updateTodo,
    setValueToEdit
  )

  return (
    <section className='form-container'>

      <form className='form-form' onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
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

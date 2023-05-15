import './TaskForm.css'
import { useValue } from '../hooks/useValue'
import { formEventsHandler } from '../helper/FormEventsHelper'

export function TaskForm () {
  const { value, setValue, initialValue, setValueToEdit } = useValue()
  const { handleChange, handleSubmit } = formEventsHandler(
    value,
    setValue,
    setValueToEdit,
    initialValue
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

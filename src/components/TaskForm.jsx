import './TaskForm.css'
import { useValue } from '../hooks/useValue'
import { formEventsHandler } from '../helper/FormEventsHelper'
import { useTodos } from '../hooks/useTodos'

export function TaskForm () {
  const { setValueToEdit } = useValue()
  const { formValue } = useTodos()

  const { handleChange, handleSubmit } = formEventsHandler(
    setValueToEdit
  )

  return (
    <section className='form-container'>

      <form className='form-form' onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className='form-input'
          value={formValue.text === '' ? '' : formValue.text}
          type='text'
          placeholder='Clean the bedroom, Study science...'
        />
        <button className='form-add-button action-btn'>Add Task</button>
      </form>

    </section>
  )
}

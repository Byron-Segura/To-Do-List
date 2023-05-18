import './TaskForm.css'
import { useValue } from '../hooks/useValue'
import { helpFormEvents } from '../helper/helpFormEvents'
import { useStore } from '../hooks/useStore'

export function TaskForm () {
  const { setValueToEdit } = useValue()
  const { formValue } = useStore()
  const { handleChange, handleSubmit } = helpFormEvents(setValueToEdit)

  return (
    <section className='form-container'>
      <form className='form-form' onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className='form-input'
          value={formValue.text}
          type='text'
          placeholder='Clean the bedroom, Study science...'
        />
        <button className='form-add-button action-btn' type='submit'>Add</button>
      </form>
    </section>
  )
}

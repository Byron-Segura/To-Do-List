import { DeleteIcon, EditIcon } from './Icons'
import './Todo.css'

export function Todo ({ todo, setValueToEdit, completeTodo, openModal }) {
  const { id, text } = todo

  return (
    <article className='task'>
      <div>
        <input
          onClick={() => completeTodo(id)}
          className='check'
          type='checkbox'
        />
        <p className='task-text '>{text}</p>
      </div>
      <div>
        <button>
          <i
            className='icon task-delete'
            onClick={() => openModal(true, id)}
          >
            <DeleteIcon />
          </i>
        </button>
        <button onClick={() => setValueToEdit(todo)}>
          <i
            className='icon task-edit'
          >
            <EditIcon />
          </i>
        </button>
      </div>
    </article>
  )
}

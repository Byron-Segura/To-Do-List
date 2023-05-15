import { DeleteIcon, EditIcon } from './Icons'
import './Todo.css'

export function Todo ({ todo, setValueToEdit, handleDelete, completeTodo }) {
  const { id, text } = todo

  return (
    <article className='task'>

      <div>
        <input
          onClick={() => completeTodo(id)}
          className='task-check'
          type='checkbox'
        />
        <p className='task-text '>{text}</p>
      </div>

      <div>
        <button>
          <i
            className='icon task-delete'
            onClick={() => handleDelete(id)}
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

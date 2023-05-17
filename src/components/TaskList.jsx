import { useDelete } from '../hooks/useDelete'
import { useTodos } from '../hooks/useTodos'
import { useValue } from '../hooks/useValue'
import './TaskList.css'
import { Todo } from './Todo'

export function TaskList () {
  const { completeTodo, todos, openModal } = useTodos()
  const { handleDelete } = useDelete()
  const { setValueToEdit } = useValue()

  return (
    <section className='tasks-container'>

      <header className='tasks-header'>
        <h2>Tasks</h2>
        <button className='list-delete-all action-btn' onClick={() => openModal(true)}>Delete All</button>
      </header>

      {todos &&
        todos.map((todo) => (
          <Todo
            todo={todo}
            completeTodo={completeTodo}
            openModal={openModal}
            handleDelete={handleDelete}
            setValueToEdit={setValueToEdit}
            key={todo.id}
          />
        )
        )}

    </section>
  )
}

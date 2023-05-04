import './TaskList.css'
import { Todo } from './Todo'

export function TaskList ({ todos, handleDelete, setValueToEdit, setOpenModal, completeTodo }) {
  return (
    <section className='tasks-container'>

      <header className='tasks-header'>
        <h2>Tasks</h2>
        <button className='list-delete-all action-btn' onClick={() => setOpenModal(true)}>Delete All</button>
      </header>

      {todos &&
        todos.map((todo) => (
          <Todo
            todo={todo}
            handleDelete={handleDelete}
            completeTodo={completeTodo}
            setValueToEdit={setValueToEdit}
            key={todo.id}
          />
        )
        )}

    </section>
  )
}

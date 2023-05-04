import { DeleteIcon } from './Icons'
import './ModalDelete.css'

export function ModalDelete ({ setOpenModal, setValueToDelete, valueToDelete }) {
  const cancelDelete = () => setOpenModal(false)

  const deleteTodos = () => {
    const confirmDelete = {
      ...valueToDelete,
      confirmDelete: true
    }
    setValueToDelete(confirmDelete)
    setOpenModal(false)
  }

  return (
    <article className='modal'>
      <div className='modal-content'>
        <DeleteIcon className='icon' />
        <p>Are you sure you want to delete the task? This action is irreversible.</p>
        <button onClick={deleteTodos} className='modal-delete'>Delete</button>
        <button onClick={cancelDelete} className='modal-cancel'>Cancel</button>
      </div>
    </article>
  )
}

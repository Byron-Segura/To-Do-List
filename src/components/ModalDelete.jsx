/* import { useDelete } from '../hooks/useDelete' */
import { useDelete } from '../hooks/useDelete'
import { useStore } from '../hooks/useStore'
import { DeleteIcon } from './Icons'
import './ModalDelete.css'

export function ModalDelete () {
  const { openModal, valueToDelete } = useStore()
  const { handleDelete } = useDelete()

  const cancelDelete = () => openModal(false)

  const confirmDelete = () => {
    openModal(false)
    handleDelete(valueToDelete)
  }

  return (
    <article className='modal'>
      <div className='modal-content'>
        <DeleteIcon className='icon' />
        <p>Are you sure you want to delete the task? This action is irreversible.</p>
        <button onClick={confirmDelete} className='modal-delete'>Delete</button>
        <button onClick={cancelDelete} className='modal-cancel'>Cancel</button>
      </div>
    </article>
  )
}

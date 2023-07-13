import { useStore } from '../hooks/useStore'
import { useValue } from '../hooks/useValue'

export function helpFormEvents (
  setValueToEdit
) {
  const { createTodo, editTodo, formValue, handleValue } = useStore()
  const { initialValue } = useValue()

  const handleChange = (e) => {
    const newValue = {
      ...formValue,
      text: e.target.value
    }
    handleValue(newValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formValue.text) return

    if (formValue.id === null) {
      createTodo(formValue)
    } else {
      editTodo(formValue)
      setValueToEdit(null)
    }
    handleReset()
  }

  const handleReset = () => {
    handleValue(initialValue)
  }

  return { handleChange, handleSubmit }
}

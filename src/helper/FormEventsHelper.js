import { useTodos } from '../hooks/useTodos'

const initialValue = {
  text: '',
  id: null
}

export function formEventsHandler (
  setValueToEdit
) {
  const { createTodo, editTodo, formValue, handleValue } = useTodos()

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

import { useTodos } from '../hooks/useTodos'

export function formEventsHandler (
  value,
  setValue,
  setValueToEdit,
  initialValue
) {
  const { createTodo, editTodo } = useTodos()

  const handleChange = (e) => {
    const newValue = {
      ...value,
      text: e.target.value
    }
    setValue(newValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!value.text) return

    if (value.id === null) {
      createTodo(value)
    } else {
      editTodo(value)
      setValueToEdit(null)
    }

    handleReset()
  }

  const handleReset = () => {
    setValue(initialValue)
    setValueToEdit(null)
  }

  return { handleChange, handleSubmit }
}

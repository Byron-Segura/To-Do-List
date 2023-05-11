export function formEventsHandler (
  value,
  initialValue,
  setValue,
  createToDo,
  updateTodo,
  setValueToEdit
) {
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
      createToDo(value)
    } else {
      updateTodo(value)
    }

    handleReset()
  }

  const handleReset = () => {
    setValue(initialValue)
    setValueToEdit(null)
  }

  return { handleChange, handleSubmit }
}

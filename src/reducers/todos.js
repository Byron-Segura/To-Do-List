const ls = window.localStorage

export const todosInitialStorage = JSON.parse(ls.getItem('todos')) || []

export const TODOS_ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  EDIT_TODO: 'EDIT_TODO',
  CLEAR_TODOS: 'CLEAR_TODOS'
}

export const updateLocalStorage = (state) => {
  ls.setItem('todos', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [TODOS_ACTION_TYPES.ADD_TODO]: (state, action) => {},
  [TODOS_ACTION_TYPES.REMOVE_TODO]: (state, action) => {},
  [TODOS_ACTION_TYPES.EDIT_TODO]: (state, action) => {},
  [TODOS_ACTION_TYPES.CLEAR_TODOS]: (state, action) => {}
}

export const todoReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}

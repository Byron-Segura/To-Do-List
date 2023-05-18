import './Header.css'
import { useTheme } from '../hooks/useTheme'

export function Header () {
  const { handleThemeChange, iconTheme } = useTheme()

  return (
    <header className='header action-btn'>
      <h2>Todo List</h2>
      <button onClick={handleThemeChange} className='avatar'>{iconTheme}</button>
    </header>
  )
}

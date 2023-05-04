import { useEffect, useState } from 'react'
import './Header.css'
import { DarkModeIcon, LightModeIcon } from './Icons'
import { useTheme } from '../hooks/useTheme'
const ls = window.localStorage

export function Header () {
  const { theme, setTheme } = useTheme()
  const [iconTheme, setIconTheme] = useState()

  useEffect(() => {
    if (ls.getItem('theme') === null) {
      setTheme('dark')
      setIconTheme(LightModeIcon)
    }
    if (ls.getItem('theme') === 'light') {
      setTheme('light')
      setIconTheme(DarkModeIcon)
    } else {
      setTheme('dark')
      setIconTheme(LightModeIcon)
    }
  }, [])

  const handleThemeChange = () => {
    const currentTheme = theme

    if (currentTheme === 'dark') {
      setTheme('light')
      setIconTheme(DarkModeIcon)
      ls.setItem('theme', 'light')
    }

    if (currentTheme === 'light') {
      setTheme('dark')
      setIconTheme(LightModeIcon)
      ls.setItem('theme', 'dark')
    }
  }

  return (
    <header className='header action-btn'>
      <h2>Todo List</h2>
      <button onClick={handleThemeChange} className='avatar'>{iconTheme}</button>
    </header>
  )
}

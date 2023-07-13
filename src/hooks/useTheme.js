import { useEffect, useState } from 'react'
import { useStore } from './useStore'
import { DarkModeIcon, LightModeIcon } from '../components/Icons'

export function useTheme () {
  const { theme, changeTheme } = useStore()
  const [iconTheme, setIconTheme] = useState()

  useEffect(() => {
    if (theme === null) {
      changeTheme('dark')
      setIconTheme(LightModeIcon)
    } else if (theme === 'light') {
      setIconTheme(DarkModeIcon)
    } else {
      setIconTheme(LightModeIcon)
    }
  }, [])

  const handleThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    const newIconTheme = newTheme === 'dark' ? LightModeIcon : DarkModeIcon

    changeTheme(newTheme)
    setIconTheme(newIconTheme)
  }

  return { theme, changeTheme, handleThemeChange, iconTheme }
}

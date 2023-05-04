import { useContext } from 'react'
import { ThemeContext } from '../context/theme'

export function useTheme () {
  const themeContext = useContext(ThemeContext)

  if (themeContext === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return themeContext
}

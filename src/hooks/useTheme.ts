import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

function initialTheme(): Theme {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return [theme, toggle]
}

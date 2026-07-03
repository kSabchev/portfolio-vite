import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import type { Theme } from '../hooks/useTheme'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Nav({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Kaloyan<span className="text-indigo-600 dark:text-indigo-400">.dev</span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-6 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="ml-4 rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

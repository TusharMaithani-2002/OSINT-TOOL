import { useTheme, type Theme } from '../context/theme'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as Theme)}
      className="rounded border bg-white dark:bg-zinc-900 dark:text-white"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  )
}

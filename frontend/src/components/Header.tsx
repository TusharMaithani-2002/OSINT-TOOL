import { Link } from '@tanstack/react-router'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className='flex items-center justify-between'>
      <Link to='/' className='text-xl'>OSINT</Link>
      <div>
        <ThemeToggle />
      </div>
    </header>
  )
}

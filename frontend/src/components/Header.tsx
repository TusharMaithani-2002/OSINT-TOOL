import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <header className='flex items-center justify-between bg-bgDark p-2'>
      <Link to='/' className='text-xl text-primary font-semibold'>OSINT</Link>
      <div>
        {/* <ThemeToggle /> */}
      </div>
    </header>
  )
}

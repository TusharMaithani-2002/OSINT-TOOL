import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { CustomInput } from '../components/ui'

function HomePage() {
  const [url, setUrl] = useState<string>('')
  const navigate = useNavigate()
  const handleSubmit = () => {
    if (!url) return
    navigate({ to: '/scan', search: { url } })
  }
  return (
    <main className="flex justify-center items-center h-full w-full">
      <div className='flex flex-col justify-between h-1/2 bg-red-400'>
        <p>Enter the url you wish to check</p>

        <form action={handleSubmit} className="">
          <CustomInput value={url} onChange={setUrl} />
        </form>
        <div className="bg-bg text-text dark:bg-bgDark dark:text-textDark">
          Scan results
        </div>
      </div>
    </main>
  )
}

export default HomePage

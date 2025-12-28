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
    <main className="flex justify-center items-center h-full w-full bg-bgDark">
      <div className="flex flex-col gap-4 justify-between w-full lg:w-1/3 p-2 text-textDark">
        <p className="w-full text-textDark text-lg">Enter the url you wish to check</p>

        <form action={handleSubmit} className="w-full flex flex-col gap-4">
          <CustomInput
            value={url}
            onChange={setUrl}
            className="w-full outline-none px-4 py-2 text-textLight"
          />
          <button
            type="submit"
            className="w-full p-3 bg-primary text-textDark border animate-button-border"
          >
            Analyse URL
          </button>
        </form>
      </div>
    </main>
  )
}

export default HomePage

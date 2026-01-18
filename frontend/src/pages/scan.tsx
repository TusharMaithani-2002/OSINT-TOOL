import { Link, useSearch } from '@tanstack/react-router'

type QueryParameter = {
  url: string
}

function ScanPage() {
  const { url } = useSearch({ from: '/scan' }) as QueryParameter

  if (!url)
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Link to="/" className="font-bold text-dark">
          Url not found! Move to home page.
        </Link>
      </div>
    )
  return <div>This is scan page component {url}</div>
}

export default ScanPage

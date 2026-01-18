import { useSearch } from '@tanstack/react-router'
import { scanUrl } from '../../api/scan.api'
import { useQuery } from '@tanstack/react-query'

function ScanContainer() {
  const { url } = useSearch({ from: '/scan' })
  // make scan call for url
  const { data, isLoading, error } = useQuery({
    queryKey: ['scan', url],
    queryFn: () => scanUrl(url),
    enabled: !!url
  })

  if (isLoading) return <div>Making request to the url...</div>
  if (error) return <div>Failed to scan</div>
  return <div>This is scan container {url}</div>
}

export default ScanContainer

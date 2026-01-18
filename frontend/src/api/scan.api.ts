export const scanUrl = async (url: string) => {
  const res = await fetch(`/api/scan?url=${encodeURIComponent(url)}`)

  if (!res.ok) {
    throw new Error('Failed to scan url')
  }

  return res.json()
}

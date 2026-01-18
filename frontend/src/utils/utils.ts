export const sanitizeUrl = (url: string) => {
  let sanitizedUrl = url
  if (!url.startsWith('http')) {
    sanitizedUrl = 'https://' + sanitizedUrl
  }
  return sanitizedUrl
}

export function extractDomain(url: string) {
  return url.replace(/.*\/\/|www\.|\/.*/g, '')
}
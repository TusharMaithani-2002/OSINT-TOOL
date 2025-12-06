type ServerLocation = {
  city: string
  country: string
  postal: string
  longitude: number
  latitude: number
  timezone: string
  currency: string
  currency_name: string
  languages: string
  [key: string]: string | number
}

export async function getServerLocation(
  ip: string
): Promise<ServerLocation | {}> {
  const url = `https://ipapi.co/${ip}/json/`

  const response = await fetch(url)

  if (!response.ok) return {}

  const data = (await response.json()) as ServerLocation

  if (!data) return {}

  return {
    city: data.city,
    country: data.country,
    postal: data.postal,
    longitude: data.longitude,
    latitude: data.latitude,
    timezone: data.timezone,
    currencyName: data.currency_name,
    currency: data.currency,
    languages: data.languages
  }
}

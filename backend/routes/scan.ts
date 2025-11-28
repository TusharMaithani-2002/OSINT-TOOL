import { Hono } from 'hono'
import {
  getDnsInfo,
  getHttpInfo,
  getServerLocation,
  getSslInfo,
  getWhois
} from '../services'

export const scanRoute = new Hono()

scanRoute.post('/', async (c) => {
  const body = (await c.req.json()) as { url: string }

  const url = body.url

  if (!url) {
    return c.json({ error: 'URL missing' }, 400)
  }

  const target = url.startsWith('http') ? url : `https://${url}`

  const [dns, http, ssl, whois] = await Promise.all([
    getDnsInfo(target),
    getHttpInfo(target),
    getSslInfo(target),
    getWhois(target)
  ])

  const ip = dns.A?.[0]

  const [serverLocation] = ip
    ? await Promise.all([getServerLocation(ip)])
    : [null]
  console.log({
    url: target,
    dns,
    http,
    ssl,
    whois,
    serverLocation
  })

  return c.json({
    url: target,
    dns,
    http,
    ssl
  })
})

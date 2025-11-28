import dns from 'node:dns/promises'

export async function getDnsInfo(url: string) {
  try {
    const { hostname } = new URL(url)

    const A = await dns.resolve4(hostname).catch(() => [])
    const AAAA = await dns.resolve6(hostname).catch(() => [])
    const MX = await dns.resolveMx(hostname).catch(() => [])
    const TXT = await dns.resolveTxt(hostname).catch(() => [])
    const NS = await dns.resolveNs(hostname).catch(() => [])
    const CNAME = await dns.resolveCname(hostname).catch(() => [])

    return { A, AAAA, MX, TXT, NS, CNAME }
  } catch (error: any) {
    console.log(error.message + ' in dns')
    return { error: error.message }
  }
}

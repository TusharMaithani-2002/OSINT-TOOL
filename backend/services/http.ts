export async function getHttpInfo(url: string) {
  try {
    const res = await fetch(url)
    const cookies = res.headers.getSetCookie()
    const headers = res.headers.toJSON()
    // removing cookies from header
    res.headers.delete('set-cookie')
    return {
      status: res.status,
      headers,
      httpSecurity: validateSecurityHeaders(headers),
      finalUrl: res.url,
      cookies
    }
  } catch (error: any) {
    console.log(error.message + ' in http')
    return { error: error.message }
  }
}

const validateSecurityHeaders = (headers: Record<string, string>) => {
  const out = {
    contentSecurityPolicy: false,
    strictTransportSecurity: false,
    xContentTypeOptions: false,
    xFrameOptions: false,
    xXssProtection: false
  }

  const get = (h: string) => headers[h.toLowerCase()] || ''

  const csp = get('content-security-policy')
  out.contentSecurityPolicy =
    !!csp && !csp.includes('*') && !csp.includes('unsafe-inline')

  const hsts = get('strict-transport-security')
  out.strictTransportSecurity = !!hsts && /max-age=\d+/.test(hsts)

  out.xContentTypeOptions = get('x-content-type-options') === 'nosniff'

  const xfo = get('x-frame-options')
  out.xFrameOptions = xfo == 'deny' || xfo == 'sameorigin'

  out.xXssProtection = get('x-xss-protection') === '1; mode=block'

  return out
}

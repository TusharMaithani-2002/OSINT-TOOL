export async function getHttpInfo(url: string) {
  try {
    const res = await fetch(url)
    const cookies = res.headers.getSetCookie()
    // removing cookies from header
    res.headers.delete('set-cookie')
    return {
      status: res.status,
      headers: res.headers.toJSON(),
      finalUrl: res.url,
      cookies
    }
  } catch (error: any) {
    console.log(error.message + ' in http')
    return { error: error.message }
  }
}

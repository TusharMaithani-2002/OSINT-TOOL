export async function getServerStatus(url: string) {
  const start = performance.now()
  try {
    const res = await fetch(url)

    const end = performance.now()
    const duration = Math.round(end - start)
    return {
      up: true,
      statusCode: res.status,
      responseTime: duration
    }
  } catch (error: any) {
    const end = performance.now()
    const duration = Math.round(end - start)
    console.error(error.message)
    return {
      up: false,
      statusCode: null,
      responseTime: duration,
      error: error.message
    }
  }
}

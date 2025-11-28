export async function getServerLocation(ip: string) {
    const token = process.env.IP_INFO_TOKEN
    if (!token) {
        console.error('IP_INFO_TOKEN is empty or missing')
        return null
    }
    const response = await fetch(
        `http://api.ipinfo.io/lite/${ip}?token=${token}`
    )

    return await response.json()
}

import tls from 'tls'

export async function getSslInfo(url: string) {
  try {
    const { hostname } = new URL(url)

    return new Promise((resolve) => {
      const socket = tls.connect(
        443,
        hostname,
        { servername: hostname },
        () => {
          const cert = socket.getPeerCertificate(true)
        
          resolve({
            valid_from: cert.valid_from,
            valid_to: cert.valid_to,
            isuser: cert.issuer.O,
            subject: cert.subject.CN,
            asn1Curve: cert.asn1Curve,
            nistCurve: cert.nistCurve,
            serialNumber: cert.serialNumber,
            fingerprint: cert.fingerprint
          })

          socket.end()
        }
      )

      socket.on('error', (error: any) => {
        resolve({ error: error.message })
      })
    })
  } catch (error: any) {
    console.log(error.message + ' in ssl')
    return { error: error.message }
  }
}

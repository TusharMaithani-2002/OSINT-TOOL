import whois from 'whois-json'
import { extractDomain } from '../utils'

export async function getWhois(domain: string) {
  try {
    if (!domain) return {}
    domain = extractDomain(domain)
    const data = (await whois(domain)) as Record<string, string>

    const properties = [
      'domainName',
      'registryDomainId',
      'registrarWhoisServer',
      'updatedDate',
      'creationDate',
      'registrarRegistrationExpirationDate',
      'registrar',
      'registrarIanaId'
    ] as const

    const output: Record<string, string | undefined> = {}

    for (const key of properties) {
      output[key] = data[key]
    }

    return output
  } catch (error: any) {
    return { error: error.message }
  }
}

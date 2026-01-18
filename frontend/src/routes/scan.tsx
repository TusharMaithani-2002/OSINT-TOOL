import { createFileRoute } from '@tanstack/react-router'
import ScanContainer from '../components/containers/ScanContainer'
import { z } from 'zod'
import { ScanError } from '../components/errors/ScanError'

export const Route = createFileRoute('/scan')({
  component: ScanContainer,
  errorComponent: ScanError,
  validateSearch: z.object({
    url: z
      .string()
      .url()
      .refine(
        (val) => {
          const host = new URL(val).hostname
          return host.includes('.')
        },
        { message: 'Please enter a valid public url' }
      )
  })
})

import { type ErrorComponentProps } from '@tanstack/react-router'
import { ZodError } from 'zod'

export function ScanError({ error }: ErrorComponentProps) {
  if (error instanceof ZodError)
    return <div>{error?.cause.issues[0]?.message}</div>
}

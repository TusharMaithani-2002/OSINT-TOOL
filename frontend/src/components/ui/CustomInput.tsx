import type { Dispatch, SetStateAction } from 'react'

type CustomInputProps = {
  value: string
  onChange: Dispatch<SetStateAction<string>>
  className?: string
}

const CustomInput = ({ value, onChange, className }: CustomInputProps) => {
  return (
    <input
      className={className}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default CustomInput

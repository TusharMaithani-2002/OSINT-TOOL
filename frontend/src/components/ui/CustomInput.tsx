import clsx from "clsx"
import type { Dispatch, SetStateAction } from "react"

type CustomInputProps = {
  value: string
  onChange: Dispatch<SetStateAction<string>>
  className?:string
}

const CustomInput = ({ value, onChange, className }: CustomInputProps) => {
  return <input className={clsx(className, 'border-2 border-green-500 rounded-xl')} value={value} onChange={e => onChange(e.target.value)}/>
}

export default CustomInput

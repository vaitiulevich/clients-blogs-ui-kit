import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form'

interface SelectProps {
  options: { value: string; label: string }[]
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  placeholder?: string
  disabled?: boolean
  error?: string
  register?: UseFormRegisterReturn
}

export const Select = ({
  options,
  value,
  onChange,
  placeholder,
  disabled,
  error,
  register,
}: SelectProps) => {
  return (
    <div className='flex flex-col min-h-16'>
      <select
        value={value}
        {...register}
        onChange={onChange}
        disabled={disabled}
        className={`border-[0.5px] bg-transparent ${error ? 'border-red-500' : 'border-gray-300'} py-2 px-3 outline-none cursor-pointer`}
      >
        {placeholder && <option value=''>{placeholder}</option>}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className='text-red-500 text-xs'>{error}</span>}
    </div>
  )
}

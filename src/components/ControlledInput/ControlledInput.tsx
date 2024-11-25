import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form'

export interface ControlledInputProps {
  type?: string
  placeholder?: string
  disabled?: boolean
  color?: 'dark' | 'light'
  error?: string
  register: UseFormRegisterReturn
  styles?: string
}

export const ControlledInput = ({
  type = 'text',
  placeholder,
  disabled = false,
  color = 'dark',
  error,
  register,
  styles,
}: ControlledInputProps) => {
  const colorVariants: { [key: string]: string } = {
    dark: 'border-gray-300 text-borderColor',
    light: 'border-light text-light',
  }

  const inputClasses = `${styles} border-[0.5px] bg-transparent ${colorVariants[color]} py-2 px-3 focus:outline-none ${
    error ? 'border-red-500' : ''
  }`

  return (
    <div className='flex flex-col min-h-16'>
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClasses}
      />
      {error && <span className='text-red-500 text-xs'>{error}</span>}
    </div>
  )
}

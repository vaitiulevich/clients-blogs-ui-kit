import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form'

interface TextAreaProps {
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  disabled?: boolean
  error?: string
  name?: string
  register?: UseFormRegisterReturn
  styles?: string
  maxH?: string
}

export const TextArea = ({
  value,
  onChange,
  placeholder,
  disabled,
  error,
  register,
  maxH,
}: TextAreaProps) => {
  const maxHStyle = `max-h-[${maxH}]`
  return (
    <div className='flex flex-col min-h-16 mb-4'>
      <textarea
        value={value}
        className={`${maxHStyle} border-[0.5px] bg-transparent ${error ? 'border-red-500' : 'border-gray-300'} py-2 px-3 outline-none cursor-pointer`}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
      />
      {/* <TextArea
        value={value}
        {...register}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={` border-[0.5px] bg-transparent ${error ? 'border-red-500' : 'border-gray-300'} py-2 px-3 outline-none cursor-pointer`}
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
      </TextArea> */}
      {error && <span className='text-red-500 text-xs'>{error}</span>}
    </div>
  )
}

import React from 'react';
import { useState } from 'react'

export interface Locale {
  code: string
  label: string
}

export interface LocaleSwitcherProps {
  locales: Locale[]
  onLocaleChange?: (locale: string) => void
  current: string
}

export const LocaleSwitcher = ({ locales, onLocaleChange, current }: LocaleSwitcherProps) => {
  const [currentLocale, setCurrentLocale] = useState(current)

  const handleLocaleChange = (locale: string) => {
    setCurrentLocale(locale)
    onLocaleChange && onLocaleChange(locale)
  }

  return (
    <div className='relative'>
      <select
        value={currentLocale}
        onChange={(e) => handleLocaleChange(e.target.value)}
        className='text-light cursor-pointer bg-darkBG border border-light rounded p-1'
      >
        {locales &&
          locales.map((locale) => (
            <option
              key={locale.code}
              className='cursor-pointe'
              value={locale.code}
            >
              {locale.label}
            </option>
          ))}
      </select>
    </div>
  )
}

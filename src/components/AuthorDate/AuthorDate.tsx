import React from 'react';
export interface AuthorDateProps {
  author: string
  date: Date
  mode?: 'light' | 'dark'
}

export const AuthorDate = ({ author, date, mode = 'light' }: AuthorDateProps) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  const formattedDate = date.toLocaleDateString('en-US', options)

  const isLightMode = mode && mode === 'light'
  const linkColor = isLightMode ? `text-purpure` : `text-yellow`
  const textColor = isLightMode ? `text-dark` : `text-light`
  return (
    <div className={`${textColor} flex items-center text-sm`}>
      <span>
        By <span className={`${linkColor} hover:underline`}>{author}</span>
      </span>
      <span className='ml-[15px] mr-[7px]'>|</span>
      <span className='ml-2'>{formattedDate}</span>
    </div>
  )
}

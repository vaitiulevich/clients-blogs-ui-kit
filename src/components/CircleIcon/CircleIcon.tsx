import React from 'react';

export interface CircleIconProps {
  src: string
  alt: string
  className?: string
}

export const CircleIcon = ({ src, alt, className }: CircleIconProps) => {
  return (
    <div className='rounded-full w-24 h-24 overflow-hidden '>
      <img
        src={src}
        alt={alt}
        className={`w-24 h-24 object-cover ${className}`}
      />
    </div>
  )
}

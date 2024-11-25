import React from 'react';
import arrow from '@assets/arrow.svg';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'full';
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  icon?: { src: string; alt: string };
  disabled?: boolean;
  isNavigate?: boolean;
}

export const Button = ({
  size = 'medium',
  backgroundColor = 'bg-yellow',
  label,
  isNavigate = false,
  type = 'button',
  disabled = false,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    full: 'py-2 px-4 text-base w-full',
  };

  const defStyle = `${backgroundColor} ${sizeClasses[size]} text-dark transition duration-300 hover:bg-yellowHover`;

  let mode = defStyle;

  if (isNavigate) {
    mode = 'flex items-center ' + defStyle;
  }

  return (
    <button
      className={`storybook-button font-sen font-bold ${sizeClasses[size]} ${mode} outline-none focus:outline-none`}
      disabled={disabled}
      type={type}
      {...props}
    >
      {label}
      {isNavigate && (
        <span className="ml-2">
          <img src={arrow} alt="navigate" />
        </span>
      )}
    </button>
  );
};

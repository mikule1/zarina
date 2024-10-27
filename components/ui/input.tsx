import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        className={`w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600
        bg-white dark:bg-gray-800
        text-gray-900 dark:text-gray-100
        placeholder:text-gray-500 dark:placeholder:text-gray-400
        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent
        transition-all duration-200
        ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

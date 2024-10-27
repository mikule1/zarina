import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <button
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 
        bg-purple-600 text-white hover:bg-purple-700 
        px-4 py-2 shadow-lg hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 
        disabled:opacity-50 disabled:pointer-events-none 
        ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

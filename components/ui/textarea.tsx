import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <textarea
        className={`w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600
        bg-white dark:bg-gray-800
        text-gray-900 dark:text-gray-100
        placeholder:text-gray-500 dark:placeholder:text-gray-400
        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent
        transition-all duration-200 resize-none
        ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'

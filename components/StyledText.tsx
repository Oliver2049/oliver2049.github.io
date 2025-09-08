import React from 'react'

interface StyledTextProps {
  children: React.ReactNode
  color?: string
  className?: string
}

// Colored Text Component
export const ColoredText = ({ children, color = 'red', className = '' }: StyledTextProps) => {
  const colorClasses = {
    red: 'text-red-600',
    blue: 'text-blue-600', 
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600',
    pink: 'text-pink-600',
    gray: 'text-gray-600'
  }
  
  const colorClass = colorClasses[color as keyof typeof colorClasses] || 'text-red-600'
  
  return (
    <span className={`${colorClass} ${className}`}>
      {children}
    </span>
  )
}

// Highlight Component
export const Highlight = ({ children, className = '' }: StyledTextProps) => {
  return (
    <mark className={`bg-yellow-200 px-1 rounded ${className}`}>
      {children}
    </mark>
  )
}

// Badge Component
export const Badge = ({ children, className = '' }: StyledTextProps) => {
  return (
    <span className={`inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium ${className}`}>
      {children}
    </span>
  )
}

// Alert Box Component
interface AlertProps {
  children: React.ReactNode
  type?: 'info' | 'warning' | 'error' | 'success'
  className?: string
}

export const Alert = ({ children, type = 'info', className = '' }: AlertProps) => {
  const typeStyles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800', 
    error: 'bg-red-50 border-red-200 text-red-800',
    success: 'bg-green-50 border-green-200 text-green-800'
  }

  return (
    <div className={`p-4 mb-4 border-l-4 rounded-r ${typeStyles[type]} ${className}`}>
      {children}
    </div>
  )
}

// Code Inline Component with custom styling
export const InlineCode = ({ children, className = '' }: StyledTextProps) => {
  return (
    <code className={`bg-gray-100 text-green-600 px-1 py-0.5 rounded text-sm font-mono ${className}`}>
      {children}
    </code>
  )
}

// Custom Box Component
export const Box = ({ children, className = '' }: StyledTextProps) => {
  return (
    <div className={`p-4 border border-gray-200 rounded-lg bg-gray-50 my-4 ${className}`}>
      {children}
    </div>
  )
}

import React from 'react'

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`medieval-input min-h-[80px] ${className}`}
      {...props}
    />
  )
}


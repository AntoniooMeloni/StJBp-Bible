import React from 'react'

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`medieval-input ${className}`}
      {...props}
    />
  )
}


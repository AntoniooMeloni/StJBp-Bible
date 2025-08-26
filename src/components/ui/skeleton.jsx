import React from 'react'

export function Skeleton({ className = '', ...props }) {
  return (
    <div
      className={`animate-pulse bg-medieval-blue/30 rounded ${className}`}
      {...props}
    />
  )
}


import React from 'react'

export function Card({ className, ...props }) {
  return (
    <div
      className={`medieval-container ${className || ''}`}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }) {
  return (
    <div className={`px-6 py-4 border-b-2 border-medieval-gold ${className || ''}`} {...props} />
  )
}

export function CardTitle({ className, ...props }) {
  return (
    <h3 className={`text-lg font-semibold ${className || ''}`} {...props} />
  )
}

export function CardContent({ className, ...props }) {
  return (
    <div className={`px-6 py-4 ${className || ''}`} {...props} />
  )
}

export function CardFooter({ className, ...props }) {
  return (
    <div className={`px-6 py-4 border-t-2 border-medieval-gold ${className || ''}`} {...props} />
  )
}


import React from 'react'

export function Select({ children, className = '', ...props }) {
  return (
    <select
      className={`medieval-select ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}

export function SelectTrigger({ children, className = '', ...props }) {
  return (
    <div
      className={`flex h-10 w-full items-center justify-between medieval-select ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function SelectValue({ placeholder, ...props }) {
  return (
            <span className="text-medieval-black" {...props}>
      {placeholder || 'Selecione uma opção'}
    </span>
  )
}

export function SelectContent({ children, className = '', ...props }) {
  return (
    <div className={`absolute z-50 w-full bg-medieval-white border-2 border-medieval-gold rounded-md shadow-lg ${className}`} {...props}>
      {children}
    </div>
  )
}

export function SelectItem({ children, value, ...props }) {
  return (
    <div
                      className="px-3 py-2 text-sm hover:bg-medieval-cream cursor-pointer text-medieval-black"
      data-value={value}
      {...props}
    >
      {children}
    </div>
  )
}


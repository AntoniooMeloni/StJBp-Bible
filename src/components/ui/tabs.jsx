import React, { useState } from 'react'

export function Tabs({ defaultValue, children, className = '' }) {
  const [value, setValue] = useState(defaultValue)
  
  return (
    <div className={className}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value, setValue })
        }
        return child
      })}
    </div>
  )
}

export function TabsList({ children, className = '', ...props }) {
  return (
    <div className={`flex border-b-2 border-medieval-gold ${className}`} {...props}>
      {children}
    </div>
  )
}

export function TabsTrigger({ children, value, setValue, ...props }) {
  return (
    <button
              className="px-4 py-2 text-sm font-medium text-medieval-black border-b-2 border-transparent hover:text-medieval-red hover:border-medieval-red focus:outline-none focus:ring-2 focus:ring-medieval-gold focus:ring-offset-2 transition-all duration-300"
      onClick={() => setValue(value)}
      {...props}
    >
      {children}
    </button>
  )
}

export function TabsContent({ children, value, tabValue, ...props }) {
  if (value !== tabValue) return null
  
  return (
    <div {...props}>
      {children}
    </div>
  )
}


import React, { createContext, useContext, useState } from 'react'

const SidebarContext = createContext()

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

export function Sidebar({ children, className = '' }) {
  const { isOpen, setIsOpen } = useSidebar()
  
  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar - condicional em mobile, sempre visível em desktop */}
      <aside className={`fixed left-0 top-0 z-40 h-screen w-64 min-w-64 max-w-64 transform bg-stained-glass shadow-lg transition-transform duration-300 ease-in-out md:translate-x-0 md:relative ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} ${className} ${isOpen ? 'block' : 'hidden md:block'}`}>
        {children}
      </aside>
    </>
  )
}

export function SidebarHeader({ children, className = '' }) {
  const { setIsOpen } = useSidebar()
  
  return (
    <div className={`flex h-16 items-center justify-between border-b-2 border-medieval-gold px-4 w-full ${className}`}>
      <div className="flex-1 min-w-0">
        {children}
      </div>
      <button
        onClick={() => setIsOpen(false)}
        className="md:hidden p-2 rounded-full transition-all duration-200 text-medieval-white hover:bg-medieval-red/30 hover:text-medieval-red border-2 border-medieval-gold/50 hover:border-medieval-red/70 hover:scale-110 shadow-lg flex-shrink-0"
        title="Fechar menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

export function SidebarContent({ children, className = '' }) {
  return (
    <div className={`flex-1 overflow-y-auto px-4 py-6 ${className}`}>
      {children}
    </div>
  )
}

export function SidebarGroup({ children, className = '' }) {
  return (
    <div className={`mb-6 ${className}`}>
      {children}
    </div>
  )
}

export function SidebarGroupLabel({ children, className = '' }) {
  return (
    <h3 className={`mb-2 text-xs font-semibold uppercase tracking-wide medieval-subtitle-on-dark ${className}`}>
      {children}
    </h3>
  )
}

export function SidebarGroupContent({ children, className = '' }) {
  return (
    <div className={`space-y-1 ${className}`}>
      {children}
    </div>
  )
}

export function SidebarMenu({ children, className = '' }) {
  return (
    <nav className={`space-y-1 ${className}`}>
      {children}
    </nav>
  )
}

export function SidebarMenuItem({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export function SidebarMenuButton({ children, className = '', ...props }) {
  return (
    <div
      className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-medieval-white hover:bg-medieval-blue/20 hover:text-medieval-gold ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function SidebarFooter({ children, className = '' }) {
  return (
    <div className={`border-t-2 border-medieval-gold px-4 py-4 ${className}`}>
      {children}
    </div>
  )
}

export function SidebarTrigger({ children, className = '', ...props }) {
  const { setIsOpen } = useSidebar()
  
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md p-2 text-medieval-white hover:bg-medieval-blue/20 hover:text-medieval-gold ${className}`}
      onClick={() => setIsOpen(true)}
      {...props}
    >
      {children}
    </button>
  )
}

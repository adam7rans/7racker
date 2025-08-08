"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { LightModeIcon } from "./icons/lightmode-icon"
import { DarkModeIcon } from "./icons/darkmode-icon"
import { SystemIcon } from "./icons/system-icon"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [opacity, setOpacity] = React.useState(1)
  const [forceVisible, setForceVisible] = React.useState(false)
  const lastYRef = React.useRef(0)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      const lastY = lastYRef.current
      const delta = y - lastY

      if (delta < 0) {
        setForceVisible(true)
        setOpacity(1)
      } else if (delta > 0) {
        if (forceVisible) setForceVisible(false)
        const next = Math.max(0, Math.min(1, 1 - y / 500))
        setOpacity(next)
      } else if (!forceVisible) {
        const next = Math.max(0, Math.min(1, 1 - y / 500))
        setOpacity(next)
      }

      lastYRef.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [forceVisible])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      // Check if click is outside both the toggle button and menu
      if (!target.closest('.theme-toggle-container') && !target.closest('.theme-menu')) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 animate-pulse" />
    )
  }

  return (
    <>
      {/* Hover area and toggle button */}
      <div 
        className="fixed left-0 top-0 w-20 h-20 z-[9999] cursor-pointer group theme-toggle-container"
        style={{ overflow: 'visible' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Single circle that scales from small dot to large background */}
        <div 
          className={`absolute rounded-full transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center
            ${isOpen ? 'w-[30rem] h-[30rem]' : 'w-3 h-3'}
            ${!isOpen ? 'group-hover:!w-6 group-hover:!h-6 group-active:!w-8 group-active:!h-8' : ''}
            ${isOpen ? 'shadow-2xl' : 'shadow-lg'}`}
          style={{
            position: 'fixed',
            left: '40px',
            top: '40px',
            transform: 'translate(-50%, -50%)',
            transformOrigin: 'center center',
            willChange: 'width, height',
            overflow: 'visible',
            pointerEvents: isOpen ? 'none' : 'auto',
            minWidth: '12px',
            minHeight: '12px',
            backgroundColor: isOpen
              ? (resolvedTheme === 'dark' ? '#0a0a0a' : '#ffffff')
              : (resolvedTheme === 'dark' ? '#ffffff' : '#000000'),
            border: isOpen ? `1px solid ${resolvedTheme === 'dark' ? '#ffffff' : '#000000'}` : 'none',
            opacity
          }}
        />
      </div>

      {/* Menu Items - Separate from circle */}
      {isOpen && (
        <div className="fixed p-8 z-[10001] theme-menu">
          <div className="flex flex-col space-y-2">
            {/* Light Mode */}
            <button
              type="button"
              onClick={(e) => {
                console.log('Light theme clicked')
                e.stopPropagation()
                setTheme('light')
                setIsOpen(false)
              }}
              className="flex items-center space-x-3 text-sm text-foreground transition-all duration-200 hover:text-blue-400 hover:bg-foreground/10 px-3 py-2 rounded-md cursor-pointer"
            >
              <LightModeIcon size={40} className="flex-shrink-0" />
              <span>Light</span>
            </button>

            {/* Dark Mode */}
            <button
              type="button"
              onClick={(e) => {
                console.log('Dark theme clicked')
                e.stopPropagation()
                setTheme('dark')
                setIsOpen(false)
              }}
              className="flex items-center space-x-3 text-sm text-foreground transition-all duration-200 hover:text-blue-400 hover:bg-foreground/10 px-3 py-2 rounded-md cursor-pointer"
            >
              <DarkModeIcon size={40} className="flex-shrink-0" />
              <span>Dark</span>
            </button>

            {/* System Mode */}
            <button
              type="button"
              onClick={(e) => {
                console.log('System theme clicked')
                e.stopPropagation()
                setTheme('system')
                setIsOpen(false)
              }}
              className="flex items-center space-x-3 text-sm text-foreground transition-all duration-200 hover:text-blue-400 hover:bg-foreground/10 px-3 py-2 rounded-md cursor-pointer"
            >
              <SystemIcon size={40} className="flex-shrink-0" />
              <span>System</span>
            </button>

            {/* X Account */}
            <button
              type="button"
              onClick={(e) => {
                console.log('X link clicked')
                e.stopPropagation()
                window.open('https://x.com/7racker', '_blank', 'noopener,noreferrer')
                setIsOpen(false)
              }}
              className="flex items-center space-x-3 text-sm text-foreground transition-all duration-200 hover:text-blue-400 hover:bg-foreground/10 px-3 py-2 rounded-md cursor-pointer"
            >
              <Image 
                src="/icons/x-logo.svg" 
                alt="X" 
                width={20} 
                height={20} 
                className="flex-shrink-0" 
              />
              <span>@7racker</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

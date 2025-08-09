"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { LightModeIcon } from "./icons/lightmode-icon"
import { DarkModeIcon } from "./icons/darkmode-icon"
import { SystemIcon } from "./icons/system-icon"
import { XLogoIcon } from "./icons/x-logo"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [opacity, setOpacity] = React.useState(1)
  const [forceVisible, setForceVisible] = React.useState(false)
  const [menuMounted, setMenuMounted] = React.useState(false)
  const lastYRef = React.useRef(0)
  const [startDeg, setStartDeg] = React.useState(0)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const onScroll = () => {
      // When menu is open, keep the dot fully visible and ignore scroll fade
      if (isOpen) {
        setOpacity(1)
        lastYRef.current = window.scrollY || 0
        return
      }

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
  }, [forceVisible, isOpen])

  // When opening the big dot, choose a random starting rotation for the gradient
  React.useEffect(() => {
    if (isOpen) {
      setStartDeg(Math.floor(Math.random() * 360))
    }
  }, [isOpen])

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
        onClick={() => {
          setIsOpen((prev) => {
            const next = !prev
            if (next) setMenuMounted(true)
            return next
          })
        }}
      >
        {/* Single circle that scales from small dot to large background */}
        <div 
          className={`absolute rounded-full transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center group
            ${isOpen ? 'w-[42.5rem] h-[42.5rem]' : 'w-3 h-3'}
            ${!isOpen ? 'group-hover:!w-6 group-hover:!h-6 group-active:!w-8 group-active:!h-8' : ''}
            ${isOpen ? 'shadow-none' : 'shadow-lg'}`}
          style={{
            position: 'fixed',
            left: '40px',
            top: '40px',
            transform: 'translate(-50%, -50%)',
            transformOrigin: 'center center',
            willChange: 'width, height',
            overflow: 'visible',
            // enable hover over the big dot when open so gradient can rotate
            pointerEvents: 'auto',
            minWidth: '12px',
            minHeight: '12px',
            backgroundColor: isOpen
              ? (resolvedTheme === 'dark' ? '#0a0a0a' : '#ffffff')
              : (resolvedTheme === 'dark' ? '#ffffff' : '#000000'),
            // Remove plain border when open; we'll draw it via SVG overlay
            border: isOpen ? 'none' : 'none',
            opacity: isOpen ? 1 : opacity
          }}
        >
          {/* Gradient + white overlay border when open */}
          {isOpen && (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
            >
              {/* Gradient stroke */}
              <circle cx="50" cy="50" r="49.5" stroke="url(#gradStrokeBigDot)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
              {/* Semi-transparent white overlay stroke */}
              <circle cx="50" cy="50" r="49.5" stroke="white" strokeOpacity="0.53" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
              <defs>
                <pattern id="gradStrokeBigDot" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                  <g transform={`rotate(${startDeg} 50 50)`}>
                    <rect
                      x="0"
                      y="0"
                      width="100"
                      height="100"
                      fill="url(#paint0_linear_bigdot)"
                      className="origin-center animate-[spin_60s_linear_infinite]"
                      style={{ transformBox: 'fill-box' as any }}
                    />
                  </g>
                </pattern>
                {/* Compress and aim the gradient so all colors appear around the bottom-left arc */}
                <linearGradient id="paint0_linear_bigdot" x1="20" y1="100" x2="35" y2="60" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5200FF" />
                  <stop offset="0.117334" stopColor="#FF008A" />
                  <stop offset="0.336875" stopColor="#FEFFC5" />
                  <stop offset="0.585774" stopColor="#FEFFC5" />
                  <stop offset="1" stopColor="#001AFF" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>
      </div>

      {/* Menu Items - Separate from circle with fade in/out */}
      {menuMounted && (
        <div
          className={`fixed p-8 z-[10001] theme-menu transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onTransitionEnd={() => {
            if (!isOpen) setMenuMounted(false)
          }}
        >
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
              className="group flex items-center space-x-3 text-sm text-foreground transition-colors duration-200 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 px-3 py-2 pr-6 rounded-[32px] cursor-pointer"
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
              className="group flex items-center space-x-3 text-sm text-foreground transition-colors duration-200 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 px-3 py-2 pr-6 rounded-[32px] cursor-pointer"
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
              className="group flex items-center space-x-3 text-sm text-foreground transition-colors duration-200 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 px-3 py-2 pr-6 rounded-[32px] cursor-pointer"
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
              className="group flex items-center space-x-3 text-sm text-foreground transition-colors duration-200 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 px-3 py-2 pr-6 rounded-[32px] cursor-pointer"
            >
              <XLogoIcon size={40} className="flex-shrink-0" />
              <span>@7racker</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

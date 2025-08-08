"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Logo } from "@/components/ui/logo"

export function TopRightLogo() {
  const pathname = usePathname()
  const router = useRouter()
  const [opacity, setOpacity] = useState(1)
  const [forceVisible, setForceVisible] = useState(false)
  const lastYRef = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      const lastY = lastYRef.current
      const delta = y - lastY

      // If any upward scroll is detected, show fully
      if (delta < 0) {
        setForceVisible(true)
        setOpacity(1)
      } else if (delta > 0) {
        // Scrolling down resumes -> revert to position-based opacity
        if (forceVisible) setForceVisible(false)
        const next = Math.max(0, Math.min(1, 1 - y / 500))
        setOpacity(next)
      } else if (!forceVisible) {
        // Small movements or initial set without force
        const next = Math.max(0, Math.min(1, 1 - y / 500))
        setOpacity(next)
      }

      lastYRef.current = y
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [forceVisible])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      e.preventDefault()
      router.push("/")
    }
  }

  return (
    <div className="fixed right-0 top-0 z-[9999] hidden sm:block">
      <Link
        href="/"
        onClick={handleClick}
        aria-label="Go to homepage"
        className={"block p-2 transition-opacity duration-300 ease-in-out"}
        style={{ opacity }}
      >
        <Logo />
      </Link>
    </div>
  )
}

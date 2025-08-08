"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Logo } from "@/components/ui/logo"

export function TopRightLogo() {
  const pathname = usePathname()
  const router = useRouter()
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      const next = Math.max(0, Math.min(1, 1 - y / 500))
      setOpacity(next)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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
        className={"block p-2"}
        style={{ opacity, transition: "opacity 150ms linear" }}
      >
        <Logo />
      </Link>
    </div>
  )
}

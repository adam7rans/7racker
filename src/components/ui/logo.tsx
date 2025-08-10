"use client"

import { useTheme } from "next-themes"
import Image from "next/image"

export const Logo = () => {
  const { theme } = useTheme()
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''

  return (
    <div className="relative w-[249.06px] h-[54.92px]">
      {theme === 'dark' ? (
        <Image
          src={`${base}/logo/logo-darkmode.svg`}
          alt="7racker Logo"
          fill
          className="object-contain"
          priority
        />
      ) : (
        <Image
          src={`${base}/logo/logo-lightmode.svg`}
          alt="7racker Logo"
          fill
          className="object-contain"
          priority
        />
      )}
    </div>
  )
}

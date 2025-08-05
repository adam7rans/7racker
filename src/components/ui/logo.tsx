"use client"

import { useTheme } from "next-themes"
import Image from "next/image"

export const Logo = () => {
  const { theme } = useTheme()

  return (
    <div className="relative w-[249.06px] h-[54.92px]">
      {theme === 'dark' ? (
        <Image
          src="/logo/logo-darkmode.svg"
          alt="7racker Logo"
          fill
          className="object-contain"
          priority
        />
      ) : (
        <Image
          src="/logo/logo-lightmode.svg"
          alt="7racker Logo"
          fill
          className="object-contain"
          priority
        />
      )}
    </div>
  )
}

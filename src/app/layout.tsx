import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "7racker",
  description: "A modern blog built with Next.js and shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ThemeToggle />
          {/* Logo positioned snug in top-right corner */}
          <div className="fixed right-0 top-0 z-[9999] hidden sm:block">
            <div className="relative w-[249.06px] h-[54.92px]">
              <Image 
                src="/logo/logo-lightmode.svg" 
                alt="7racker Logo" 
                fill 
                className="object-contain dark:hidden" 
                priority 
              />
              <Image 
                src="/logo/logo-darkmode.svg" 
                alt="7racker Logo" 
                fill 
                className="object-contain hidden dark:block" 
                priority 
              />
            </div>
          </div>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="h-16" /> {/* Spacer to maintain layout */}
            </header>
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

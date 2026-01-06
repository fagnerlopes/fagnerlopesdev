"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl flex h-20 items-center justify-between px-6 md:px-8">
        <div className="flex items-center">
          <Link href="/" className="group relative text-2xl font-bold transition-all font-mono tracking-tight">
            <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300">
              fagnerlopes
            </span>
            <span className="relative ml-0.5">
              <span className="absolute -inset-1 rounded bg-purple-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-purple-600 dark:text-purple-400 font-extrabold group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors">
                .dev
              </span>
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}


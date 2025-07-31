"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Instagram } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/mission", label: "OUR MISSION" },
    { href: "/what-we-do", label: "WHAT WE DO" },
    { href: "/about", label: "ABOUT US" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/contact", label: "CONTACT US" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 transform group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/swas_logo_only.png"
                alt="Swasthya Saathi Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-white leading-tight">
                <div>Swasthya</div>
                <div>Saathi</div>
              </h1>
              <p className="text-xs text-blue-100 -mt-1">A credible health buddy</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-blue-200 ${
                  isActive(item.href) ? "text-blue-200" : "text-white"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-300 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex space-x-3">
              <a
                href="https://www.instagram.com/swasthya_saathi/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200 cursor-pointer backdrop-blur-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gradient-to-b from-purple-500 to-pink-500 text-white border-purple-400">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors duration-200 hover:text-blue-200 ${
                        isActive(item.href) ? "text-blue-200" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a
                    href="https://www.instagram.com/swasthya_saathi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-lg font-medium transition-colors duration-200 hover:text-blue-200"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Follow us on Instagram</span>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

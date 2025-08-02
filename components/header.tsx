"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Instagram } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "OUR MISSION", href: "/mission" },
    { name: "WHAT WE DO", href: "/what-we-do" },
    { name: "ABOUT US", href: "/about" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT US", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 glossy-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover-scale">
            <Image
              src="/images/swasthya-logo-icon.png"
              alt="SwasthyaSaathi Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">SwasthyaSaathi</span>
              <span className="text-xs text-blue-100">A Credible Health Buddy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-100 hover:scale-105 ${
                  pathname === item.href ? "text-white border-b-2 border-white pb-1" : "text-blue-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Media & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://www.instagram.com/swasthya_saathi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-100 transition-colors hover-scale"
            >
              <Instagram className="h-5 w-5" />
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:text-blue-100 hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-100 ${
                    pathname === item.href ? "text-white" : "text-blue-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

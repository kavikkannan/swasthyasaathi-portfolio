"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Instagram } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

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
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative transform group-hover:scale-105 transition-transform duration-200">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg"></div>
              <div className="absolute -top-1 -left-1 w-5 h-5 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-md"></div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-md"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-1.5 bg-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-7 bg-white rounded-full"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                SwasthyaSaathi
              </h1>
              <p className="text-xs text-blue-200 -mt-1">Healthcare Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-orange-300 ${
                  isActive(item.href) ? "text-orange-300" : "text-white"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-400 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden sm:flex bg-white text-blue-600 border-white hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 shadow-md"
            >
              LOGIN
            </Button>
            <div className="hidden sm:flex space-x-3">
              <div className="p-2 hover:bg-blue-500 rounded-full transition-colors duration-200 cursor-pointer">
                <X className="w-5 h-5" />
              </div>
              <div className="p-2 hover:bg-blue-500 rounded-full transition-colors duration-200 cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-blue-500">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-blue-600 text-white border-blue-500">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors duration-200 hover:text-orange-300 ${
                        isActive(item.href) ? "text-orange-300" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-6">LOGIN</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

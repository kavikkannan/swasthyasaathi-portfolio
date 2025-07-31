import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Mail, Phone, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/swas_logo_only.png"
                  alt="Swasthya Saathi Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  <div>Swasthya</div>
                  <div>Saathi</div>
                </h3>
                <p className="text-sm text-blue-100">A credible health buddy</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Initiative by AIIMS alumnus dedicated to transforming healthcare accessibility and quality across
              communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-200">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/mission", label: "Our Mission" },
                { href: "/what-we-do", label: "What We Do" },
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-200">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 mt-1 text-blue-300 group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    159A Yusuf Sarai, Gautam Nagar
                    <br />
                    New Delhi - 110049
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-blue-300 group-hover:scale-110 transition-transform duration-200" />
                <p className="text-sm text-blue-100">swasthyasaathi@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-blue-300 group-hover:scale-110 transition-transform duration-200" />
                <p className="text-sm text-blue-100">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Clock className="w-5 h-5 text-blue-300 group-hover:scale-110 transition-transform duration-200" />
                <p className="text-sm text-blue-100">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-200">Stay Updated</h3>
            <p className="text-blue-100 text-sm mb-4">Subscribe to our newsletter for health tips and updates.</p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-blue-100 focus:border-blue-300 focus:ring-blue-300/20"
              />
              <Button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white shadow-lg transform hover:scale-105 transition-all duration-200 border border-white/30">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">© 2024 SwasthyaSaathi. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

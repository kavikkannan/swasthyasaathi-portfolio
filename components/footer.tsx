import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Mail, Phone, Clock } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg"></div>
                <div className="absolute -top-1 -left-1 w-5 h-5 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-md"></div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-md"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-1.5 bg-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-7 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">SwasthyaSaathi</h3>
                <p className="text-sm text-blue-200">Healthcare Excellence</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Initiative by AIIMS alumnus dedicated to transforming healthcare accessibility and quality across
              communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-300">Quick Links</h3>
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
                    className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-300">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 mt-1 text-orange-400 group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <p className="text-sm text-blue-200 leading-relaxed">
                    159A Yusuf Sarai, Gautam Nagar
                    <br />
                    New Delhi - 110049
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform duration-200" />
                <p className="text-sm text-blue-200">swasthyasaathi@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform duration-200" />
                <p className="text-sm text-blue-200">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Clock className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform duration-200" />
                <p className="text-sm text-blue-200">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-300">Stay Updated</h3>
            <p className="text-blue-200 text-sm mb-4">Subscribe to our newsletter for health tips and updates.</p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-blue-500/30 border-blue-400 text-white placeholder:text-blue-200 focus:border-orange-400 focus:ring-orange-400/20"
              />
              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">© 2024 SwasthyaSaathi. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-blue-200 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-200 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

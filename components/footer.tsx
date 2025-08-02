import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart, Users, Shield, Award } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
  ]

  const services = [
    { name: "Growth Parameters", href: "/services#growth" },
    { name: "Medical Checkups", href: "/services#medical" },
    { name: "Eye Examination", href: "/services#eye" },
    { name: "ENT Check", href: "/services#ent" },
    { name: "Audiometry", href: "/services#audio" },
    { name: "Dental Screening", href: "/services#dental" },
    { name: "Mental Health", href: "/services#mental" },
  ]

  const stats = [
    { icon: Users, number: "3,000+", label: "Students Screened" },
    { icon: Shield, number: "50+", label: "Partner Schools" },
    { icon: Heart, number: "7", label: "Health Domains" },
    { icon: Award, number: "100%", label: "Digital Reports" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="content-container section-padding">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/swasthya-logo-icon.png"
                alt="SwasthyaSaathi Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-white">SwasthyaSaathi</span>
                <span className="text-xs text-gray-400">A Credible Health Buddy</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in preventive healthcare for school children. We bring expert-led health screenings
              and comprehensive health education directly to your school campus.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91-7470756065</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">swasthyasaathihealthcare@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Based in Chhattisgarh and Rajasthan, serving schools across India
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            {/* <div>
              <h4 className="font-medium mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div> */}
          </div>
        </div>

        <Separator className="my-12 bg-gray-700" />

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 SwasthyaSaathi. All rights reserved. | Privacy Policy | Terms of Service
          </div>
          <div className="text-gray-400 text-sm">
            Made with <Heart className="h-4 w-4 text-red-500 inline mx-1" /> for healthier children
          </div>
        </div>
      </div>
    </footer>
  )
}

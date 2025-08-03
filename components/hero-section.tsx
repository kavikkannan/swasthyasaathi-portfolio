import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Shield, Users } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  buttonLink?: string
  showStats?: boolean
}

export default function HeroSection({
  title,
  subtitle,
  description,
  buttonLink = "#",
  showStats = false,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center glossy-blue overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl floating"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl floating"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-blue-100 text-sm md:text-base font-medium mb-4 tracking-wide uppercase">{subtitle}</p>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{title}</h1>

          {/* Description */}
          <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">{description}</p>

          {/* CTA Button */}
          
          {/* Stats Section */}
          {showStats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center glass-effect rounded-lg p-6 hover-scale">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">10,000+</h3>
                <p className="text-blue-100 text-sm">Students Screened</p>
              </div>
              <div className="text-center glass-effect rounded-lg p-6 hover-scale">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
                <p className="text-blue-100 text-sm">Schools Partnered</p>
              </div>
              <div className="text-center glass-effect rounded-lg p-6 hover-scale">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                <p className="text-blue-100 text-sm">Expert Doctors</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

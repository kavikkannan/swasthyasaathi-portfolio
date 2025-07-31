import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  showCTA?: boolean
  backgroundImage?: string
}

export default function HeroSection({
  title,
  subtitle,
  description,
  showCTA = false,
  backgroundImage = "/placeholder.svg?height=600&width=1200",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-orange-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-yellow-400/20 rounded-full blur-lg"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-orange-200 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-300">{subtitle}</h2>
          {description && (
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">{description}</p>
          )}
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-xl transform hover:scale-105 transition-all duration-200 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

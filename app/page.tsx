import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Award, Shield, ArrowRight } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Providing healthcare with empathy and understanding for every patient's unique needs.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Led by AIIMS alumni with years of experience in healthcare excellence and innovation.",
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Committed to delivering the highest standards of medical care and patient satisfaction.",
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "Building long-term relationships based on trust, reliability, and consistent results.",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Patients Served" },
    { number: "50+", label: "Healthcare Programs" },
    { number: "25+", label: "Partner Institutions" },
    { number: "98%", label: "Satisfaction Rate" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSection
        title="SwasthyaSaathi"
        subtitle="Your Trusted Healthcare Companion"
        description="Transforming healthcare accessibility with compassionate care, expert guidance, and innovative solutions for healthier communities."
        showCTA={true}
      />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose SwasthyaSaathi?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine medical expertise with compassionate care to deliver exceptional healthcare experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-blue-100">Making a difference in healthcare, one patient at a time.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                                     <h3 className="text-4xl font-bold text-blue-300 mb-2">{stat.number}</h3>
                  <p className="text-blue-100 text-lg">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed to meet diverse community needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Health Screenings",
                description: "Regular health check-ups and preventive screenings to maintain optimal health.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Community Outreach",
                description: "Bringing healthcare services directly to underserved communities.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Health Education",
                description: "Empowering individuals with knowledge for better health decisions.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Health Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust SwasthyaSaathi for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-xl transform hover:scale-105 transition-all duration-200 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

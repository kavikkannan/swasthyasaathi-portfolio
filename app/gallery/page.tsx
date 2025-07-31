import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Play } from "lucide-react"

export default function GalleryPage() {
  const galleryItems = [
    {
      type: "image",
      title: "Mobile Health Camp - Rural Delhi",
      description: "Our mobile health unit providing free medical check-ups in rural communities.",
      date: "March 2024",
      location: "Gurgaon Villages",
      participants: "200+ patients",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      type: "image",
      title: "Health Education Workshop",
      description: "Community health education session focusing on preventive care and hygiene.",
      date: "February 2024",
      location: "Community Center, Noida",
      participants: "150+ attendees",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      type: "video",
      title: "SwasthyaSaathi Impact Story",
      description: "Documentary showcasing our impact on community health over the past year.",
      date: "January 2024",
      location: "Multiple Locations",
      participants: "25,000+ beneficiaries",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      type: "image",
      title: "Vaccination Drive",
      description: "Large-scale vaccination campaign in partnership with local government.",
      date: "December 2023",
      location: "Delhi NCR",
      participants: "5,000+ vaccinated",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      type: "image",
      title: "Maternal Health Program",
      description: "Specialized care program for expecting mothers in underserved areas.",
      date: "November 2023",
      location: "Rural Haryana",
      participants: "300+ mothers",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      type: "image",
      title: "Team Training Session",
      description: "Continuous education program for our healthcare professionals.",
      date: "October 2023",
      location: "SwasthyaSaathi HQ",
      participants: "50+ staff members",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      type: "video",
      title: "Community Testimonials",
      description: "Heartwarming stories from community members about their healthcare journey.",
      date: "September 2023",
      location: "Various Communities",
      participants: "100+ testimonials",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      type: "image",
      title: "Health Screening Camp",
      description: "Comprehensive health screening for early detection of diseases.",
      date: "August 2023",
      location: "Faridabad",
      participants: "400+ screened",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      type: "image",
      title: "Children's Health Day",
      description: "Special health program focused on child nutrition and immunization.",
      date: "July 2023",
      location: "Local Schools",
      participants: "800+ children",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const stats = [
    { number: "500+", label: "Health Camps Organized" },
    { number: "25,000+", label: "Patients Served" },
    { number: "150+", label: "Communities Reached" },
    { number: "1,000+", label: "Photos & Videos" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSection
        title="Gallery"
        subtitle="Moments That Matter"
        description="Explore our journey through images and stories that capture the impact of our healthcare initiatives across communities."
      />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-orange-300 mb-2">{stat.number}</h3>
                  <p className="text-blue-100">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact in Pictures</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every image tells a story of hope, healing, and community transformation through accessible healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-orange-100 overflow-hidden">
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`${item.type === "video" ? "bg-red-500" : "bg-blue-500"} text-white`}>
                      {item.type === "video" ? "Video" : "Photo"}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-orange-500" />
                      <span>{item.participants}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Want to Be Part of Our Story?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in our mission to transform healthcare accessibility. Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Volunteer With Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white shadow-xl transform hover:scale-105 transition-all duration-200 bg-transparent"
            >
              Support Our Cause
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

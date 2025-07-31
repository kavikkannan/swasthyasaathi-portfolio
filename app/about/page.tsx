import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Calendar, MapPin, GraduationCap, Heart, Star, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & Chief Medical Officer",
      education: "MBBS, MD - AIIMS New Delhi",
      experience: "15+ years",
      specialization: "Community Medicine & Public Health",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Director of Operations",
      education: "MBBS, MPH - AIIMS New Delhi",
      experience: "12+ years",
      specialization: "Healthcare Management & Policy",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Amit Patel",
      role: "Head of Community Programs",
      education: "MBBS, DPH - AIIMS New Delhi",
      experience: "10+ years",
      specialization: "Preventive Medicine & Epidemiology",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description: "SwasthyaSaathi was founded by AIIMS alumni with a vision to transform healthcare accessibility.",
    },
    {
      year: "2019",
      title: "First Community Program",
      description: "Launched our first mobile health unit serving rural communities in Delhi NCR.",
    },
    {
      year: "2020",
      title: "COVID-19 Response",
      description: "Provided critical healthcare support during the pandemic, serving 10,000+ individuals.",
    },
    {
      year: "2021",
      title: "Digital Health Initiative",
      description: "Introduced telemedicine and digital health education programs.",
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Extended services to 50+ communities across North India.",
    },
    {
      year: "2024",
      title: "Recognition",
      description: "Received National Healthcare Excellence Award for community service.",
    },
  ]

  const achievements = [
    { icon: Users, number: "25,000+", label: "Lives Impacted" },
    { icon: MapPin, number: "150+", label: "Communities Served" },
    { icon: Calendar, number: "6+", label: "Years of Service" },
    { icon: Award, number: "15+", label: "Awards Received" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSection
        title="About Us"
        subtitle="Pioneering Healthcare Excellence"
        description="Founded by AIIMS alumni, SwasthyaSaathi is dedicated to making quality healthcare accessible to all through innovation, compassion, and community-centered care."
      />

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  SwasthyaSaathi was born from a simple yet powerful vision: to bridge the gap between world-class
                  medical expertise and community healthcare needs. Founded in 2018 by a group of passionate AIIMS
                  alumni, we recognized the urgent need for accessible, quality healthcare in underserved communities.
                </p>
                <p>
                  Our journey began with a single mobile health unit serving rural areas around Delhi. Today, we've
                  grown into a comprehensive healthcare organization that combines traditional medical practices with
                  innovative approaches to reach those who need care the most.
                </p>
                <p>
                  What sets us apart is our commitment to not just treating illness, but preventing it through
                  education, early intervention, and community empowerment. We believe that healthcare is not just about
                  medicine—it's about building healthier, stronger communities.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-1">{achievement.number}</h3>
                    <p className="text-gray-600 text-sm">{achievement.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experienced healthcare professionals leading SwasthyaSaathi's mission to transform community
              health.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              >
                <div className="h-64 bg-gradient-to-br from-blue-100 to-orange-100 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2 text-orange-500" />
                      <span>{member.education}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                      <span>{member.experience} Experience</span>
                    </div>
                    <div className="flex items-start">
                      <Heart className="w-4 h-4 mr-2 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>{member.specialization}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our mission to transform healthcare accessibility and quality.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-orange-500 rounded-full"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <Badge className="bg-gradient-to-r from-blue-500 to-orange-500 text-white mb-3">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values & Recognition */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Recognition & Awards</h2>
              <div className="space-y-6">
                {[
                  "National Healthcare Excellence Award 2024",
                  "Community Service Recognition by Delhi Government",
                  "Best Healthcare Initiative - NGO Awards 2023",
                  "Innovation in Rural Healthcare - Medical Council",
                  "Outstanding Contribution to Public Health - AIIMS",
                ].map((award, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Star className="w-6 h-6 text-orange-300 flex-shrink-0" />
                    <span className="text-blue-100">{award}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8">Our Commitments</h2>
              <div className="space-y-6">
                {[
                  "100% transparency in operations and funding",
                  "Evidence-based healthcare practices",
                  "Continuous professional development",
                  "Sustainable and eco-friendly operations",
                  "Community-driven program development",
                ].map((commitment, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0" />
                    <span className="text-blue-100">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

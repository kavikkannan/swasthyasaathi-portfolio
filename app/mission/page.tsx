import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Globe, Lightbulb } from "lucide-react"

export default function MissionPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We approach every patient interaction with empathy, understanding, and genuine care for their wellbeing.",
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Making quality healthcare accessible to all, regardless of economic or social barriers.",
    },
    {
      icon: Globe,
      title: "Community Focus",
      description: "Building stronger, healthier communities through collaborative healthcare initiatives.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing new technologies and methodologies to improve healthcare delivery and outcomes.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSection
        title="Our Mission"
        subtitle="Transforming Healthcare for All"
        description="Dedicated to making quality healthcare accessible, affordable, and compassionate for every individual in our community."
      />

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-12 shadow-lg">
              <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission Statement</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At SwasthyaSaathi, we are committed to revolutionizing healthcare delivery by bridging the gap between
                medical expertise and community needs. Founded by AIIMS alumni, we strive to create a healthcare
                ecosystem that prioritizes patient-centered care, preventive medicine, and health education.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Our Core Commitment</h3>
                <p className="text-gray-600 italic">
                  "To ensure that every individual, regardless of their background or circumstances, has access to
                  quality healthcare services that promote not just treatment, but overall wellness and prevention."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eye className="w-16 h-16 text-orange-500 mb-6" />
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We envision a future where healthcare is not a privilege but a fundamental right accessible to all. Our
                vision extends beyond traditional medical care to encompass:
              </p>
              <ul className="space-y-4">
                {[
                  "Universal access to quality healthcare services",
                  "Preventive care as the foundation of health",
                  "Community-driven health initiatives",
                  "Technology-enabled healthcare solutions",
                  "Sustainable and affordable healthcare models",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Eye className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">2030 Vision</h3>
                <p className="text-gray-600 mt-2">Healthier Communities, Brighter Future</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact Goals</h2>
            <p className="text-xl text-blue-100">Measurable commitments to community health improvement</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                goal: "50,000+",
                description: "Students reached through health programs by 2026",
                icon: Users,
              },
              {
                goal: "100+",
                description: " Schools approached",
                icon: Globe,
              },
              {
                goal: "100%",
                description: "Follow up of red and yellow patients",
                icon: Heart,
              },
            ].map((goal, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                  <goal.icon className="w-12 h-12 text-orange-300 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-orange-300 mb-2">{goal.goal}</h3>
                  <p className="text-blue-100">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

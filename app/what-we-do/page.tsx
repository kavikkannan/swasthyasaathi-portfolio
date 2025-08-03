import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DownloadButton } from "@/components/DownloadButton"
import {
  Activity,
  UserCheck,
  BookOpen,
  Ambulance,
  ArrowRight,
  Eye,
  Ear,
  GraduationCap,
  HeartPulse,
  Stethoscope
} from "lucide-react"

export default function WhatWeDoPage() {
  const services = [
    {
      icon: Activity,
      title: "Anthropometric Examination",
      description: "Assessing growth and nutrition status through comprehensive measurements and tests.",
      features: [
        "Growth assessment using weight and height measurements",
        "Nutrition status evaluation",
        "Hand grip strength testing",
        "Body Mass Index (BMI) analysis"
      ],
    },
    {
      icon: Eye,
      title: "Vision Screening",
      description: "Early detection and prevention of vision problems in children.",
      features: [
        "Comprehensive eye examinations",
        "Color vision testing",
        "Refractive error detection",
        "Vitamin A deficiency screening"
      ],
    },
    {
      icon: Ear,
      title: "Hearing Screening",
      description: "Early identification of hearing impairments in children.",
      features: [
        "Pure Tone Audiometry",
        "Otoscopy examination",
        "Speech development assessment",
        "Academic impact evaluation"
      ],
    },
    {
      icon: Stethoscope,
      title: "Dental Examination",
      description: "Comprehensive oral health assessment and care.",
      features: [
        "Dental health evaluation",
        "Oral hygiene assessment",
        "Preventive dental care",
        "Impact on quality of life assessment"
      ],
    },
    {
      icon: HeartPulse,
      title: "Mental Health & Wellbeing",
      description: "Supporting emotional and psychological health.",
      features: [
        "Mental health assessment",
        "Emotional wellbeing evaluation",
        "Daily activity impact analysis",
        "Sleep quality assessment"
      ],
    },
    {
      icon: GraduationCap,
      title: "Health Education",
      description: "Comprehensive health education for disease prevention and healthy living.",
      features: [
        "Hand hygiene practices",
        "Nutrition and diet education",
        "Physical activity guidance",
        "First aid and safety training"
      ],
    }
  ]

  const programs = [
    {
      icon: UserCheck,
      title: "SwasthyaSeva Program",
      description: "Comprehensive healthcare delivery program for rural and semi-urban communities.",
      impact: "25,000+ beneficiaries",
    },
    {
      icon: BookOpen,
      title: "Health Literacy Initiative",
      description: "Educational program focusing on health awareness and disease prevention.",
      impact: "500+ workshops conducted",
    },
    {
      icon: Ambulance,
      title: "Mobile Health Units",
      description: "Fully equipped mobile clinics serving remote areas with limited healthcare access.",
      impact: "150+ villages covered",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSection
        title="What We Do"
        subtitle="Comprehensive Healthcare Solutions"
        description="From primary care to community outreach, we provide holistic healthcare services designed to meet diverse community needs."
      />

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Healthcare Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of healthcare services designed to address the complete spectrum of
              community health needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg h-full"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized initiatives making a significant impact in community health and wellness.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white">
                  <program.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-blue-100 text-sm">{program.description}</p>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Program Impact</p>
                      <p className="text-lg font-semibold text-orange-600">{program.impact}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to healthcare delivery that ensures quality, accessibility, and sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Comprehensive community health needs assessment and planning.",
              },
              {
                step: "02",
                title: "Implementation",
                description: "Deployment of targeted healthcare services and programs.",
              },
              {
                step: "03",
                title: "Monitoring",
                description: "Continuous monitoring and evaluation of program effectiveness.",
              },
              {
                step: "04",
                title: "Improvement",
                description: "Data-driven improvements and program optimization.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Access Our Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you need immediate care or want to learn about our programs, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Book Consultation
            </Button>
            <DownloadButton />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

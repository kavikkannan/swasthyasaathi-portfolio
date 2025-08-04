"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSection
        title="Contact Us"
        subtitle="Get in Touch"
        description="Have questions about our services or want to get involved? We'd love to hear from you. Reach out to us anytime."
      />

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex gap-12">
            {/* Contact Information */}
            <div className="space-y-8 ">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Connect</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Whether you need medical assistance, want to volunteer, or have questions about our programs, our team
                  is here to help. We believe in building strong relationships with our community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Our Office</h3>
                        <p className="text-gray-600">
                          Mandi Rd, Near Ganj Mandi, Pandri,
                          <br />
                          behind sector 5, Devendra Nagar,
                          <br />
                          Raipur, Chhattisgarh 492001
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
                        <p className="text-gray-600">
                          General Inquiries: info@swasthyasathi.com
                          <br />
                          Website: www.swasthyasathi.com

                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
                        <p className="text-gray-600">
                          Main Office: <br/> +91 7488379217
                      
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Office Hours</h3>
                        <p className="text-gray-600">
                          Monday - Sunday: <br /> 9:00 AM - 6:00 PM
                       
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Chhattisgarh, easily accessible by public transport.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.6303903999997!2d81.6471458!3d21.2630399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd7f2406a287%3A0xe2b4dcc9e85b22a8!2sShree%20Narayana%20Hospital!5e0!3m2!1sen!2sin!8m2!3d21.2630399!4d81.6497207!16s%2Fg%2F119w6j9ng?entry=ttu"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      {/* <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Medical Emergency?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            For immediate medical assistance, please call our emergency hotline. We're available 24/7 for urgent
            healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency: +91 98765 43211
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}

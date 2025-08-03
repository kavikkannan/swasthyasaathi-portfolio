import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Heart, 
  Users, 
  Award, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  BookOpen, 
  MapPin, 
  Star, 
  TrendingUp, 
  BrainCircuit, 
  Baby, 
  Bone, 
  Ambulance, 
  X, 
  Apple, 
  FileText,
  Ruler,
  Eye,
  Ear,
  Brain,
  Activity,
  Smile,
  Stethoscope,
  Phone
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import SpecialistCards from "@/components/SpecialistCards"

export default function HomePage() {
  const features = [
    {
      icon: Heart,
      title: "Preventive Healthcare",
      description:
        "India's first of its kind preventive healthcare expert focusing on early detection and intervention.",
    },
    {
      icon: Users,
      title: "AIIMS Alumni Team",
      description: "Led by specialists and super specialists trained at AIIMS, ensuring world-class healthcare.",
    },
    {
      icon: Award,
      title: "Comprehensive Screening",
      description: "All checkups based on WHO, AAP, and IAP guidelines with state-of-the-art equipment.",
    },
    {
      icon: Shield,
      title: "School Integration",
      description: "Seamlessly integrated into school communities with no loss of school days for students.",
    },
  ]

  
  const stats = [
    { number: "3,000+", label: "Students Successfully Screened", icon: Users },
    { number: "50+", label: "Partner Schools", icon: Shield },
    { number: "7", label: "Medical Specialties", icon: Heart },
    { number: "100%", label: "Digital Health Reports", icon: Award },
  ]

  const workflow = [
    { step: "01", title: "School Partnership", description: "Tie up with School Swasthya Saathi program" },
    { step: "02", title: "Parental Consent", description: "Obtain proper consent from parents for screening" },
    { step: "03", title: "Equipment Setup", description: "Mini hospital-like setup established at school campus" },
    { step: "04", title: "Expert Gathering", description: "All specialists under one roof led by AIIMS alumni" },
    {
      step: "05",
      title: "Screening Process",
      description: "Non-invasive, painless screening without class interruption",
    },
    { step: "06", title: "Report & Follow-up", description: "Comprehensive report with 6-month follow-ups" },
  ]
  const taglines = [
    "Your credible healthcare buddy",
    "Initiative by AIIMS Alumni doctors",
    "We come to you so that you don't have to come to us",
    "India's first of its kind preventive healthcare expert",
  ]

  const trustIndicators = [
    "Backed by AIIMS-alumni doctors",
    "Trusted by schools, loved by children",
    "End-to-end preventive care camps at your school",
  ]
  const services = [
    {
      icon: Eye,
      title: "Vision Screening",
      description:
        "Annual vision examination using vision charts and retinoscopy to detect myopia and refractive errors early.",
      details: "Includes color blindness testing using Ishihara charts for career guidance.",
    },
    {
      icon: Ear,
      title: "Hearing Assessment",
      description: "Pure Tone Audiometry (PTA) - the gold standard test to assess hearing performed at school campus.",
      details: "Video otoscopes examine external, middle, and internal ear including ear drum.",
    },
    {
      icon: Activity,
      title: "Health Vitals",
      description: "Comprehensive vital signs monitoring including pulse, BP, and SpO2 measurements.",
      details: "Early detection of childhood hypertension and respiratory conditions.",
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Supportive screening and awareness for emotional and psychological well-being.",
      details: "Focuses on early identification of anxiety, stress, depression, and behavioral issues with referral pathways.",
    },
    {
      icon: Stethoscope,
      title: "Dental Health",
      description: "Painless dental screening using intra-oral cameras right at the school campus.",
      details: "Includes malocclusion detection, dental sealant, and fluoride varnish application.",
    },
    {
      icon: BookOpen,
      title: "Health Education",
      description: "Comprehensive health education covering hygiene, nutrition, mental health, and safety.",
      details: "Includes CPR training Road Safety  substance abuse awareness, menstrual hygiene, adolescent health, and first aid.",
    },
    {
      icon: Ruler, // e.g., from lucide-react or any icon set you're using
      title: "Anthropometry",
      description: "Measurement of physical dimensions to assess growth and development in children.",
      details: "Includes height, weight, BMI, and head circumference to monitor nutritional and developmental status.",
    },
    {
      icon: Stethoscope,
      title: "Detailed Medical Examination",
      description: "Comprehensive check-up to detect existing health conditions and ensure early intervention.",
      details: "Covers vision, hearing, dental, cardiac, respiratory, and musculoskeletal evaluations.",
    },
  ]
  /* 
  const services = [
    {
      icon: "📏",
      title: "Growth Parameters",
      description: "Comprehensive height, weight, and BMI assessment with growth tracking",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "🩺",
      title: "Medical Checkups",
      description: "Thorough physical examination by experienced pediatricians",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "👁️",
      title: "Eye Examination",
      description: "Complete vision screening and comprehensive eye health assessment",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "👂",
      title: "ENT Examination",
      description: "Detailed ear, nose, and throat examination by specialists",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: "🔊",
      title: "Audiometry Testing",
      description: "Professional hearing assessment and audiological evaluation",
      color: "from-red-500 to-red-600",
    },
    {
      icon: "😁",
      title: "Dental Screening",
      description: "Complete oral health checkup with preventive dental care guidance",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: "🧠",
      title: "Mental Health Assessment",
      description: "Professional psychological screening and counseling support",
      color: "from-indigo-500 to-indigo-600",
    },
  ]
 */
  const howItWorks = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Connect with our team to discuss your school's specific healthcare needs and requirements",
      icon: Phone,
    },
    {
      step: "02",
      title: "On-Campus Setup",
      description: "Our medical team arrives with state-of-the-art equipment and establishes a temporary clinic",
      icon: Users,
    },
    {
      step: "03",
      title: "Comprehensive Screening",
      description: "Each student receives thorough health screening across all seven medical domains",
      icon: Stethoscope,
    },
    {
      step: "04",
      title: "Detailed Reporting",
      description: "Comprehensive health reports are generated and shared with parents and school administration",
      icon: Award,
    },
    {
      step: "05",
      title: "Follow-up Support",
      description: "Ongoing consultation and guidance for any health concerns identified during screening",
      icon: Heart,
    },
  ]

  const whyChooseUs = [
    "No travel required – We bring healthcare to your school",
    "Minimal disruption to academic schedule",
    "State-of-the-art portable medical equipment",
    "Comprehensive digital reporting and analytics",
  ]



  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-subtleFloat"></div>
          <div
            className="absolute bottom-20 left-20 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-subtleFloat"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="content-container py-20 relative z-10">
          <div className="text-container text-center">
            {/* Professional Taglines */}
            {/* <div className="mb-12 space-y-4 animate-fadeInUp">
              {taglines.map((tagline, index) => (
                <div key={index} className="inline-block mx-2 mb-3" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Badge className="bg-white/15 text-white border-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                    {tagline}
                  </Badge>
                </div>
              ))}
            </div> */}

            {/* Main Title */}
            <h1 className="heading-xl text-white mb-8 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
              Welcome to{" "}
              <span className="relative">
                <span className="text-yellow-300">SwasthyaSaathi</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-300/50 rounded-full"></div>
              </span>
            </h1>

            {/* Professional Description */}
            <p
              className="text-body text-blue-100 mb-12 max-w-3xl mx-auto animate-fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              Your trusted partner in preventive healthcare for school children. We deliver expert-led health screenings
              and comprehensive health education directly to your school campus, ensuring the highest standards of
              medical care.
            </p>

            {/* Achievement Badge */}
            <div className="mb-12 animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
              <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-100 border border-green-300/30 px-6 py-3 rounded-full backdrop-blur-sm">
                <Star className="h-5 w-5" />
                <span className="font-semibold">Over 3,000 students successfully screened across India</span>
              </div>
            </div>

            {/* Professional Stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fadeInUp"
              style={{ animationDelay: "1s" }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center glass-card p-6 hover-lift">
                  <stat.icon className="h-8 w-8 text-white mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-2">{stat.number}</h3>
                  <p className="text-blue-100 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Professional CTA */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fadeInUp"
              style={{ animationDelay: "1.2s" }}
            >
              <Button size="lg" className="btn-secondary group">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 rounded-lg bg-transparent backdrop-blur-sm"
              >
                Learn More About Our Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className="flex flex-wrap justify-center items-center gap-6 animate-fadeInUp"
              style={{ animationDelay: "1.4s" }}
            >
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-2 glass-card rounded-full px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-green-300" />
                  <span className="text-blue-100 text-sm font-medium">{indicator}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              At School Swasthya Saathi, we believe that healthy children are the foundation of a thriving future.
              Guided by a team of visionary doctors led by specialists and super specialists trained at AIIMS, we have
              reimagined school healthcare to empower every child to grow, learn, and excel in a nurturing environment.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Why We Started</h3>
              <p className="text-gray-600 leading-relaxed">
                While working in tertiary healthcare centers, our founders came across many cases in children which
                would have had better prognosis if diagnosed early. The numbers kept increasing over time, leading us to
                brainstorm solutions. That's when the brilliant idea emerged: Why should you come to us? Let us take
                healthcare experts and state-of-the-art equipment to the schools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Why Choose SwasthyaSaathi?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Providing high quality and affordable preventive healthcare services right at the school campus.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 lg:p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white drop-shadow-lg" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 lg:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">What We Do?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive preventive health screening with all experts under one roof, bringing state-of-the-art
              equipment and mini hospital-like setup to your school campus.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">{service.description}</p>
                  <p className="text-blue-600 text-xs font-medium">{service.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/95 via-blue-500/95 to-blue-600/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.08),transparent_50%)]"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-100 bg-clip-text text-transparent drop-shadow-lg">
              Did You Know?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-50 drop-shadow-md">
              Important health statistics that drive our mission for preventive care.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500 border border-white/20 shadow-xl">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent mb-2 drop-shadow-lg group-hover:scale-125 transition-transform duration-300">
                    {stat.number}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-blue-50 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Work Flow</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring seamless integration with school activities and comprehensive healthcare
              delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {workflow.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Painless and Non-invasive</h3>
                    <p className="text-gray-600 text-sm">
                      All procedures are completely painless ensuring comfort for children.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">No Loss of School Days</h3>
                    <p className="text-gray-600 text-sm">Screening conducted at school without disrupting education.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Health Promoting School</h3>
                    <p className="text-gray-600 text-sm">
                      Creating an environment that promotes overall health and wellness.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Detailed Health Report</h3>
                    <p className="text-gray-600 text-sm">
                      Comprehensive 12-page report for each child with actionable insights.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">No Commercial Bias</h3>
                    <p className="text-gray-600 text-sm">
                      Patients free to choose further point of treatment with complete transparency.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Regular Follow-ups</h3>
                    <p className="text-gray-600 text-sm">Follow-ups after 6 months with regular data monitoring.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Team Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="content-container">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="heading-md text-gray-900 mb-6">Our Medical Team</h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary team comprises experienced medical professionals including pediatricians, pediatric
              surgeons, ENT specialists, ophthalmologists, dentists, nutritionists, psychiatrists, and certified child
              counselors.
            </p>
          </div>

          <SpecialistCards />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your School's Healthcare?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
            Join us in creating healthier, brighter futures for children. Our dedicated team is available every day,
            including Sundays and holidays, ensuring your classes are never missed!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Partner With Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 shadow-xl transform hover:scale-105 transition-all duration-200 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
      {/* Professional Contact Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="content-container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-slideInLeft">
              <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-gray-300">+91-7470756065</p>
            </div>
            <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              <MapPin className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Service Coverage</h3>
              <p className="text-gray-300">
                Based in Chhattisgarh and Rajasthan, serving educational institutions across India
              </p>
            </div>
            <div className="animate-slideInRight" style={{ animationDelay: "0.4s" }}>
              <Award className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Communication</h3>
              <p className="text-gray-300">swasthyasaathihealthcare@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Coffee, Heart, Globe, Rocket, Users, Target, Award } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GlassCard from '../components/common/GlassCard'
import GradientButton from '../components/common/GradientButton'
import AnimatedText from '../components/common/AnimatedText'

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / Jaipur",
      type: "Full-time",
      description: "Build and scale our platform using React, Node.js, and cloud technologies",
      requirements: ["5+ years experience", "React & Node.js expertise", "Cloud architecture knowledge"]
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create beautiful, intuitive experiences for our users across all platforms",
      requirements: ["3+ years experience", "Figma proficiency", "User research skills"]
    },
    {
      title: "Community Manager",
      department: "Growth",
      location: "Jaipur",
      type: "Full-time",
      description: "Build and nurture our vibrant community of builders and dreamers",
      requirements: ["2+ years experience", "Social media expertise", "Event management skills"]
    },
    {
      title: "Business Development Executive",
      department: "Sales",
      location: "Remote / Jaipur",
      type: "Full-time",
      description: "Drive partnerships and expand our reach to new markets",
      requirements: ["3+ years B2B sales", "EdTech experience preferred", "Strong network"]
    }
  ]

  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Remote-First Culture",
      description: "Work from anywhere in the world"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance for you and family"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Growth Opportunities",
      description: "Continuous learning and career development"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "Work when you're most productive"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Equity Options",
      description: "Own a piece of what you're building"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Amazing Team",
      description: "Work with passionate, talented people"
    }
  ]

  const values = [
    { emoji: "🚀", title: "Innovation First", description: "We push boundaries and think differently" },
    { emoji: "🤝", title: "Collaboration", description: "Together we achieve more" },
    { emoji: "💡", title: "Learning Culture", description: "Every day is an opportunity to grow" },
    { emoji: "🎯", title: "Impact Driven", description: "We measure success by lives transformed" }
  ]

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-padding relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl" />
        </div>

        <div className="max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Zap className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm font-medium">We're Hiring!</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-space font-bold mb-6">
              <AnimatedText text="Join the" className="text-white mb-2" />
              <AnimatedText text="EntreShip Team" className="gradient-text" gradient={true} delay={0.2} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Help us build the future of professional growth and entrepreneurial success
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-4"
            >
              <GradientButton href="#positions" size="lg">
                View Open Positions
              </GradientButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 section-padding">
        <div className="max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
              <span className="text-white">Why</span>{' '}
              <span className="gradient-text">EntreShip?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Be part of something bigger than just a job
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary-600 to-primary-500">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Company Culture */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-semibold mb-8 text-center">Our Culture</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">{value.emoji}</div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 section-padding">
        <div className="max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
              <span className="text-white">Open</span>{' '}
              <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Find your perfect role and start making an impact today
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="group hover:scale-[1.02] transition-transform">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-semibold">{position.title}</h3>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary-600 to-primary-500">
                          {position.department}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{position.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          Experience Required
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req, i) => (
                          <span key={i} className="px-3 py-1 rounded-lg bg-white/5 text-xs">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-white font-semibold group-hover:shadow-lg group-hover:shadow-primary-500/50 transition-shadow"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Can't find the right role? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <GlassCard className="inline-block">
              <div className="flex flex-col items-center">
                <Target className="w-12 h-12 text-accent-cyan mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Don't see the right role?</h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  We're always looking for exceptional talent. Send us your resume and we'll 
                  keep you in mind for future opportunities.
                </p>
                <GradientButton
                  href="mailto:careers@entreship.com"
                  variant="secondary"
                >
                  Send Your Resume
                </GradientButton>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 section-padding">
        <div className="max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
              <span className="text-white">Our Hiring</span>{' '}
              <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Simple, transparent, and designed to help you succeed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Application", description: "Submit your application online", icon: "📝" },
              { step: "2", title: "Initial Call", description: "Quick chat with our team", icon: "📞" },
              { step: "3", title: "Technical Round", description: "Showcase your skills", icon: "💻" },
              { step: "4", title: "Culture Fit", description: "Meet the team", icon: "🤝" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center h-full">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-primary-500 mb-4">
                    <span className="font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Careers
import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Users, Heart, Award, TrendingUp, Globe, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GlassCard from '../components/common/GlassCard'
import AnimatedText from '../components/common/AnimatedText'

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion-Driven",
      description: "We believe in the power of passion to transform ideas into reality",
      color: "from-primary-600 to-primary-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community First",
      description: "Building a supportive ecosystem where everyone thrives together",
      color: "from-accent-cyan to-accent-blue"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Committed to delivering exceptional experiences and outcomes",
      color: "from-accent-yellow to-accent-mint"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      description: "Creating opportunities that transcend geographical boundaries",
      color: "from-primary-400 to-primary-500"
    }
  ]

  const milestones = [
    { year: "2021", event: "EntreShip Founded", description: "Started with a vision to revolutionize career building" },
    { year: "2022", event: "1000+ Users", description: "Reached our first major milestone" },
    { year: "2023", event: "Platform Expansion", description: "Launched all 4 verticals of our ecosystem" },
    { year: "2024", event: "10,000+ Community", description: "Building the future of work together" },
    { year: "2025", event: "Global Expansion", description: "Scaling internationally with 50+ partner companies and AI-powered features" }
  ]

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-padding">
        <div className="max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-space font-bold mb-6">
              <AnimatedText text="About" className="text-white mb-2" />
              <AnimatedText text="EntreShip" className="gradient-text" gradient={true} delay={0.2} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Building the bridge between ambition and achievement, one connection at a time
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 section-padding">
        <div className="max-width">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary-600 to-primary-500">
                    <Target className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-semibold">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To democratize access to opportunities by creating a comprehensive ecosystem 
                  where founders find co-founders, students gain real experience, and employers 
                  discover exceptional talent - all in one unified platform.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-semibold">Our Vision</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To become the world's leading platform for professional growth and 
                  entrepreneurial success, where every individual has the tools, connections, 
                  and opportunities to turn their dreams into reality.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 section-padding">
        <div className="max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
              <span className="text-white">Our</span>{' '}
              <span className="gradient-text">Story</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-12"
          >
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="mb-6">
                EntreShip was born from a simple observation: talented individuals often struggle 
                to find the right opportunities, while organizations struggle to find the right talent. 
                We saw founders with brilliant ideas unable to find co-founders, students eager to learn 
                but lacking real-world experience, and companies searching for skilled professionals 
                in all the wrong places.
              </p>
              <p className="mb-6">
                Founded in Jaipur in 2021, we started as a small team with a big vision. We believed 
                that by creating a unified ecosystem where all these stakeholders could connect and 
                collaborate, we could solve multiple problems at once.
              </p>
              <p>
                Today, EntreShip is more than just a platform - it's a thriving community of over 
                10,000 builders, dreamers, and achievers who are reshaping their careers and building 
                the future together. From our base in Mansarovar, Jaipur, we're connecting talent 
                and opportunities across the globe.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 section-padding">
        <div className="max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
              <span className="text-white">Our</span>{' '}
              <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full text-center">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${value.color} mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 section-padding">
        <div className="max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
              <span className="text-white">Our</span>{' '}
              <span className="gradient-text">Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-600 to-primary-500" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary-600 to-primary-500 z-10" />
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <GlassCard>
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-accent-cyan" />
                      <span className="text-2xl font-bold gradient-text">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 section-padding">
        <div className="max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
              <span className="text-white">Built by</span>{' '}
              <span className="gradient-text">Dreamers</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
              A passionate team dedicated to transforming how people build their careers
            </p>

            <GlassCard className="inline-block">
              <div className="flex items-center gap-4">
                <Sparkles className="w-8 h-8 text-accent-cyan" />
                <div className="text-left">
                  <p className="text-2xl font-bold">50+ Team Members</p>
                  <p className="text-gray-400">Working remotely across the globe</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutUs
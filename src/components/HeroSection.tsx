import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Rocket, Users, Briefcase, Award } from 'lucide-react'
import GradientButton from './common/GradientButton'
import AnimatedText from './common/AnimatedText'

const HeroSection: React.FC = () => {
  const floatingCards = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Find Co-founders",
      description: "Match with builders",
      color: "from-primary-600 to-primary-500",
      delay: 0
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Get Internships",
      description: "Work on real projects",
      color: "from-accent-cyan to-accent-blue",
      delay: 0.2
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Build Portfolio",
      description: "Showcase your journey",
      color: "from-accent-yellow to-accent-mint",
      delay: 0.4
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Land Jobs",
      description: "Get discovered by employers",
      color: "from-primary-400 to-primary-500",
      delay: 0.6
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-accent-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delay" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      </div>

      <div className="max-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
              </span>
              <span className="text-sm font-medium">10,000+ Active Builders</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-space font-bold mb-6">
              <AnimatedText 
                text="The Complete Ecosystem for" 
                className="text-white mb-2"
              />
              <AnimatedText 
                text="Builders, Dreamers & Achievers" 
                className="gradient-text"
                gradient={true}
                delay={0.3}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              From finding co-founders to landing dream jobs - build, collaborate, 
              and grow your career in one unified platform
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <GradientButton
                href="#ecosystem"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Join 10,000+ Builders
              </GradientButton>
              <GradientButton
                href="#how-it-works"
                variant="outline"
                size="lg"
              >
                See How It Works
              </GradientButton>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
            >
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">500+</p>
                <p className="text-sm text-gray-400">Successful Matches</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">2000+</p>
                <p className="text-sm text-gray-400">Active Projects</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">85%</p>
                <p className="text-sm text-gray-400">Placement Rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Floating cards */}
          <div className="relative h-[600px] hidden lg:block">
            {floatingCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 0.8,
                  delay: card.delay,
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: card.delay
                  }
                }}
                className={`absolute ${
                  index === 0 ? 'top-0 left-0' :
                  index === 1 ? 'top-0 right-0' :
                  index === 2 ? 'bottom-0 left-0' :
                  'bottom-0 right-0'
                }`}
              >
                <div className="floating-card group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${card.color} mb-4`}>
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-400">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Center connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.line
                x1="50%" y1="25%" x2="50%" y2="75%"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.line
                x1="25%" y1="50%" x2="75%" y2="50%"
                stroke="url(#gradient2)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#667EEA" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#F093FB" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#0099FF" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5 rotate-90 text-gray-400" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
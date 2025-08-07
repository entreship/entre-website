import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Rocket, Code, Briefcase } from 'lucide-react'
import GradientButton from './common/GradientButton'

const CTASection: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<'founder' | 'student' | 'employer' | null>(null)

  const paths = [
    {
      id: 'founder',
      icon: <Rocket className="w-8 h-8" />,
      title: "I'm a Founder",
      description: "Find co-founders and build your dream",
      color: 'from-primary-600 to-primary-500',
      benefits: ['AI-powered matching', 'Verified profiles', 'Investor connections']
    },
    {
      id: 'student',
      icon: <Code className="w-8 h-8" />,
      title: "I'm a Student/Professional",
      description: "Build skills and land your dream job",
      color: 'from-accent-cyan to-accent-blue',
      benefits: ['Real projects', 'Portfolio builder', 'Job opportunities']
    },
    {
      id: 'employer',
      icon: <Briefcase className="w-8 h-8" />,
      title: "I'm an Employer",
      description: "Find pre-vetted talent with real experience",
      color: 'from-accent-yellow to-accent-mint',
      benefits: ['Verified skills', 'Live portfolios', 'Direct hiring']
    }
  ]

  return (
    <section id="cta" className="py-20 section-padding relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-cyan/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="max-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold mb-6">
            <span className="gradient-text">Your Journey</span>{' '}
            <span className="text-white">Starts Here</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your path and transform your career in weeks, not years
          </p>
        </motion.div>

        {/* Path Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {paths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedPath(path.id as any)}
              className={`relative cursor-pointer transition-all duration-300 ${
                selectedPath === path.id ? 'scale-105' : 'hover:scale-102'
              }`}
            >
              <div className={`glass rounded-2xl p-8 h-full ${
                selectedPath === path.id ? 'ring-2 ring-white/50 shadow-2xl' : ''
              }`}>
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${path.color} mb-6`}>
                  {path.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-3">{path.title}</h3>
                <p className="text-gray-400 mb-6">{path.description}</p>

                {/* Benefits */}
                <ul className="space-y-2">
                  {path.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Selection indicator */}
                {selectedPath === path.id && (
                  <motion.div
                    layoutId="selection"
                    className="absolute -top-2 -right-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue flex items-center justify-center">
                      <span className="text-white text-lg">✓</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-6">
            <GradientButton
              size="lg"
              onClick={() => {
                if (selectedPath) {
                  console.log(`Starting journey as ${selectedPath}`)
                }
              }}
              className={`${!selectedPath ? 'opacity-50 cursor-not-allowed' : ''}`}
              icon={<ArrowRight className="w-5 h-5" />}
            >
              {selectedPath ? `Explore ${selectedPath === 'founder' ? 'Founder' : selectedPath === 'student' ? 'Student' : 'Employer'} Platform` : 'Select Your Path First'}
            </GradientButton>

            {/* Trust indicators */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  10,000+ active users
                </span>
                <span>•</span>
                <span className="text-accent-cyan">Growing daily</span>
                <span>•</span>
                <span>Join the ecosystem</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-5xl mb-4">🚀</p>
          <p className="text-lg text-gray-400">
            Join <span className="gradient-text font-semibold">10,000+</span> builders already transforming their careers
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
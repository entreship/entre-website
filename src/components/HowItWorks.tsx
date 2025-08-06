import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { UserCheck, Search, Briefcase, TrendingUp, Code, Users, Trophy } from 'lucide-react'

const HowItWorks: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const founderSteps = [
    { icon: <Search className="w-5 h-5" />, text: "Post your idea" },
    { icon: <UserCheck className="w-5 h-5" />, text: "Get matched" },
    { icon: <Users className="w-5 h-5" />, text: "Build team" },
    { icon: <Briefcase className="w-5 h-5" />, text: "Hire interns" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Scale" }
  ]

  const studentSteps = [
    { icon: <UserCheck className="w-5 h-5" />, text: "Create profile" },
    { icon: <Search className="w-5 h-5" />, text: "Apply/Join projects" },
    { icon: <Code className="w-5 h-5" />, text: "Build portfolio" },
    { icon: <Trophy className="w-5 h-5" />, text: "Get hired" }
  ]

  const TimelineStep = ({ step, index, total }: { step: any, index: number, total: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-center relative"
    >
      <div className="glass p-4 rounded-full mb-3 group hover:scale-110 transition-transform">
        <div className="text-accent-cyan group-hover:text-white transition-colors">
          {step.icon}
        </div>
      </div>
      <p className="text-sm text-gray-300 text-center">{step.text}</p>
      {index < total - 1 && (
        <div className="absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-primary-600 to-primary-500 hidden md:block" />
      )}
    </motion.div>
  )

  return (
    <section id="how-it-works" className="py-20 section-padding" ref={ref}>
      <div className="max-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="gradient-text">One Platform,</span>{' '}
            <span className="text-white">Infinite Possibilities</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Different paths, same destination - Success
          </p>
        </motion.div>

        {/* For Founders */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="inline-flex p-2 rounded-lg bg-gradient-to-br from-primary-600 to-primary-500">
                <Briefcase className="w-5 h-5" />
              </span>
              For Founders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {founderSteps.map((step, index) => (
                <TimelineStep key={index} step={step} index={index} total={founderSteps.length} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* For Students/Professionals */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="inline-flex p-2 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue">
                <Code className="w-5 h-5" />
              </span>
              For Students & Professionals
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {studentSteps.map((step, index) => (
                <TimelineStep key={index} step={step} index={index} total={studentSteps.length} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* For Employers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="glass rounded-2xl p-8 bg-gradient-to-br from-accent-yellow/5 to-accent-mint/5">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="inline-flex p-2 rounded-lg bg-gradient-to-br from-accent-yellow to-accent-mint">
                <Trophy className="w-5 h-5 text-dark" />
              </span>
              For Employers
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="text-4xl mb-3">🔍</div>
                <h4 className="font-semibold mb-2">Browse Talent</h4>
                <p className="text-sm text-gray-400">Access verified profiles with real project experience</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="text-4xl mb-3">📊</div>
                <h4 className="font-semibold mb-2">View Live Portfolios</h4>
                <p className="text-sm text-gray-400">See actual work and contributions in real-time</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">Direct Hire</h4>
                <p className="text-sm text-gray-400">Connect instantly with pre-vetted candidates</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
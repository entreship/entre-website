import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Rocket, Briefcase, Award, Users, ArrowRight, Activity, MessageSquare, Globe } from 'lucide-react'
import GlassCard from './common/GlassCard'

const EcosystemShowcase: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const ecosystemCards = [
    {
      id: 0,
      title: "Co-founder Matching",
      subtitle: "Find Your Perfect Match",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-primary-600 to-primary-500",
      stats: "500+ successful matches",
      features: [
        { icon: <Activity className="w-4 h-4" />, text: "AI-powered matching algorithm" },
        { icon: <MessageSquare className="w-4 h-4" />, text: "Live social feed & discussions" },
        { icon: <Users className="w-4 h-4" />, text: "Verified founder profiles" }
      ],
      preview: (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-primary-500" />
            <div className="flex-1">
              <div className="h-2 bg-white/20 rounded w-3/4 mb-2" />
              <div className="h-2 bg-white/10 rounded w-1/2" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue" />
            <div className="flex-1">
              <div className="h-2 bg-white/20 rounded w-2/3 mb-2" />
              <div className="h-2 bg-white/10 rounded w-3/4" />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-xs">
              Match Found!
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Internship Portal",
      subtitle: "Real Projects, Real Experience",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-accent-cyan to-accent-blue",
      stats: "2000+ active projects",
      features: [
        { icon: <Globe className="w-4 h-4" />, text: "Global project opportunities" },
        { icon: <Award className="w-4 h-4" />, text: "Skill-based matching" },
        { icon: <Activity className="w-4 h-4" />, text: "Real-time application tracking" }
      ],
      preview: (
        <div className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass rounded-lg p-3">
              <div className="h-2 bg-white/20 rounded mb-2" />
              <div className="h-1.5 bg-white/10 rounded w-3/4 mb-1" />
              <div className="h-1.5 bg-white/10 rounded w-1/2" />
            </div>
          ))}
        </div>
      )
    },
    {
      id: 2,
      title: "Portfolio Builder",
      subtitle: "Showcase Your Journey",
      icon: <Award className="w-6 h-6" />,
      color: "from-accent-yellow to-accent-mint",
      stats: "portfolio.entreship.in/you",
      features: [
        { icon: <Globe className="w-4 h-4" />, text: "Custom domain for everyone" },
        { icon: <Award className="w-4 h-4" />, text: "Achievement badges & certificates" },
        { icon: <Activity className="w-4 h-4" />, text: "Project showcases with metrics" }
      ],
      preview: (
        <div className="space-y-3">
          <div className="glass rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-yellow to-accent-mint" />
              <div>
                <div className="h-2 bg-white/20 rounded w-20 mb-1" />
                <div className="h-1.5 bg-white/10 rounded w-16" />
              </div>
            </div>
            <div className="flex gap-1 mt-3">
              {['🏆', '⭐', '🚀', '💎'].map((emoji, i) => (
                <span key={i} className="text-lg">{emoji}</span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Talent Portal",
      subtitle: "Get Discovered by Top Companies",
      icon: <Users className="w-6 h-6" />,
      color: "from-primary-400 to-primary-500",
      stats: "Hired by Google, Microsoft, startups",
      features: [
        { icon: <Users className="w-4 h-4" />, text: "Direct employer connections" },
        { icon: <Activity className="w-4 h-4" />, text: "Skills-first hiring approach" },
        { icon: <Award className="w-4 h-4" />, text: "Verified work experience" }
      ],
      preview: (
        <div className="space-y-2">
          <div className="flex items-center justify-between glass rounded-lg p-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-blue-600" />
              <div className="h-2 bg-white/20 rounded w-16" />
            </div>
            <span className="text-xs text-accent-cyan">View →</span>
          </div>
          <div className="flex items-center justify-between glass rounded-lg p-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-red-500 to-orange-600" />
              <div className="h-2 bg-white/20 rounded w-20" />
            </div>
            <span className="text-xs text-accent-cyan">View →</span>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="ecosystem" className="py-20 section-padding" ref={ref}>
      <div className="max-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="text-white">The Complete</span>{' '}
            <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Four powerful verticals working together to accelerate your journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {ecosystemCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCard(card.id)}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeCard === card.id ? 'scale-105 z-10' : 'hover:scale-102'
                }`}
              >
                <GlassCard
                  className={`h-full ${
                    activeCard === card.id ? 'ring-2 ring-white/30 shadow-2xl' : ''
                  }`}
                  hover={false}
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${card.color} mb-4`}>
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{card.subtitle}</p>
                  <div className="text-xs font-jetbrains text-accent-cyan">
                    {card.stats}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Detail View */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {ecosystemCards[activeCard].title}
                  </h3>
                  <p className="text-gray-400">
                    {ecosystemCards[activeCard].subtitle}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-br ${ecosystemCards[activeCard].color}`}>
                  {ecosystemCards[activeCard].icon}
                </div>
              </div>

              {/* Preview */}
              <div className="glass rounded-xl p-6 mb-6">
                {ecosystemCards[activeCard].preview}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {ecosystemCards[activeCard].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-white/5">
                      {feature.icon}
                    </div>
                    <span className="text-sm text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-accent-cyan hover:text-white transition-colors"
              >
                <span>Explore {ecosystemCards[activeCard].title}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Connection Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass">
            <div className="flex -space-x-2">
              {ecosystemCards.map((card, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${card.color} border-2 border-dark`}
                />
              ))}
            </div>
            <span className="text-sm font-medium ml-2">
              All verticals connected & working together
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EcosystemShowcase
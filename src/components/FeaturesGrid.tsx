import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Brain, Shield, MessageSquare, Globe, Award, Activity, 
  Users, Zap, Lock, Sparkles, Target, TrendingUp 
} from 'lucide-react'

const FeaturesGrid: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Smart Matching Algorithm",
      description: "AI-powered system that finds your perfect co-founder or project match",
      size: 'large',
      gradient: 'from-primary-600 to-primary-500'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Profiles",
      description: "Every user verified for authenticity",
      size: 'small',
      gradient: 'from-accent-cyan to-accent-blue'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Real-time Collaboration",
      description: "Chat, video calls, and project management tools",
      size: 'medium',
      gradient: 'from-accent-yellow to-accent-mint'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Connect with talent worldwide",
      size: 'small',
      gradient: 'from-primary-400 to-primary-500'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Achievement System",
      description: "Earn badges and certifications as you grow",
      size: 'medium',
      gradient: 'from-accent-cyan to-primary-500'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Live Analytics",
      description: "Track your progress with detailed insights and metrics",
      size: 'large',
      gradient: 'from-primary-600 to-accent-cyan'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Events",
      description: "Hackathons, workshops, and networking",
      size: 'small',
      gradient: 'from-accent-yellow to-primary-400'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Onboarding",
      description: "Get started in under 2 minutes",
      size: 'small',
      gradient: 'from-accent-mint to-accent-yellow'
    }
  ]

  const getSizeClasses = (size: string) => {
    switch(size) {
      case 'large':
        return 'col-span-1 md:col-span-2 row-span-1 md:row-span-2'
      case 'medium':
        return 'col-span-1 md:col-span-2 row-span-1'
      default:
        return 'col-span-1 row-span-1'
    }
  }

  return (
    <section className="py-20 section-padding" ref={ref}>
      <div className="max-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="text-white">Everything You Need to</span>{' '}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Powerful features designed to accelerate your journey
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05 }}
              className={`${getSizeClasses(feature.size)}`}
            >
              <div className="bento-card h-full flex flex-col justify-between group relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Sparkle effect */}
                <motion.div
                  className="absolute top-2 right-2"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Sparkles className="w-4 h-4 text-white/20" />
                </motion.div>

                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>

                {/* Interactive hover effect */}
                {feature.size === 'large' && (
                  <div className="mt-auto pt-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Activity className="w-3 h-3" />
                      <span>Most Popular Feature</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional features list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">And Much More...</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Lock />, text: "End-to-end encryption" },
              { icon: <Target />, text: "Goal tracking" },
              { icon: <TrendingUp />, text: "Growth insights" },
              { icon: <Users />, text: "Team collaboration" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05 }}
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                <span className="w-4 h-4 text-accent-cyan">{item.icon}</span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesGrid
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Globe, Users, Zap, Clock, Target } from 'lucide-react'

const WhyNow: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const marketFactors = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "68% Rise in Startup Funding",
      description: "2024 saw record-breaking investments in early-stage startups, creating unprecedented opportunities",
      stat: "+$45B invested"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Remote Work Revolution",
      description: "87% of companies now hire globally, breaking geographical barriers for talent and co-founders",
      stat: "5x more opportunities"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Great Resignation 2.0",
      description: "4.3 million professionals left jobs to start their own ventures in the last 12 months",
      stat: "43% career shifters"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Matching Era",
      description: "New AI algorithms achieve 94% accuracy in co-founder compatibility, reducing failure rates",
      stat: "94% match accuracy"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Speed is Everything",
      description: "Average time to market dropped 65% - first movers are winning bigger than ever",
      stat: "6 months to launch"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Skills Gap Crisis",
      description: "Companies desperately need verified talent - 73% of roles remain unfilled for 3+ months",
      stat: "2M+ open positions"
    }
  ]

  return (
    <section className="py-20 section-padding relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <div className="max-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
            </span>
            <span className="text-sm font-medium">The Perfect Time is Now</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            Why <span className="gradient-text">2025</span> is Your Year
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Market conditions have never been more favorable. The convergence of technology, 
            talent, and opportunity creates a once-in-a-decade window.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary-600 to-primary-500">
                  {factor.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{factor.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{factor.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary-600/20 to-primary-500/20 border border-primary-500/30">
                    <span className="text-xs font-medium gradient-text">{factor.stat}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto bg-gradient-to-br from-primary-600/10 to-primary-500/10">
            <h3 className="text-2xl font-semibold mb-4">
              The Ecosystem Advantage is Real
            </h3>
            <p className="text-gray-300 mb-6">
              Our integrated approach means every connection, project, and opportunity strengthens 
              the entire network. Users leveraging multiple platforms see exponentially better outcomes - 
              from faster co-founder matches to higher placement rates and larger funding rounds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#ecosystem"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300"
              >
                Discover Our Platforms
              </motion.a>
              <motion.div
                className="flex items-center justify-center gap-2 text-sm text-gray-400"
              >
                <Users className="w-4 h-4" />
                <span>Join 10,000+ builders worldwide</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyNow
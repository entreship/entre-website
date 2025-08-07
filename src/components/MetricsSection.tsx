import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const MetricsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const metrics = [
    {
      value: 10000,
      suffix: '+',
      label: 'Active Builders',
      description: '3x more likely to succeed than solo founders',
      color: 'from-primary-600 to-primary-500'
    },
    {
      value: 85,
      suffix: '%',
      label: 'Get Hired in 30 Days',
      description: 'vs 12% on traditional job boards',
      color: 'from-accent-cyan to-accent-blue'
    },
    {
      value: 500,
      suffix: 'K',
      label: 'Average Funding Raised',
      description: 'Within 6 months of matching',
      color: 'from-accent-yellow to-accent-mint'
    },
    {
      value: 40,
      suffix: '%',
      label: 'Higher Starting Salaries',
      description: 'Thanks to verified project experience',
      color: 'from-primary-400 to-primary-500'
    }
  ]

  return (
    <section className="py-20 section-padding relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-500/20 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="max-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="text-white">Numbers That</span>{' '}
            <span className="gradient-text">Speak Volumes</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands who are already transforming their careers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <div className="glass rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                
                {/* Number */}
                <div className="relative">
                  <div className={`text-5xl md:text-6xl font-bold font-jetbrains mb-2 bg-gradient-to-br ${metric.color} bg-clip-text text-transparent`}>
                    {inView && (
                      <CountUp
                        start={0}
                        end={metric.value}
                        duration={2.5}
                        separator=","
                        suffix={metric.suffix}
                      />
                    )}
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-lg font-semibold mb-1">{metric.label}</h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400">{metric.description}</p>
                </div>

                {/* Animated ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: [0, 1, 0] } : {}}
                  transition={{
                    delay: index * 0.1 + 0.5,
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                >
                  <div className={`absolute inset-0 rounded-2xl ring-2 ring-white/20`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Trusted by students and companies from</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {['IIT', 'NIT', 'BITS', 'VIT', 'MIT', 'Stanford'].map((institute, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05 }}
                className="text-2xl font-space font-bold text-gray-500"
              >
                {institute}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MetricsSection
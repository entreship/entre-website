import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  hover = true,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={hover ? { scale: 1.02 } : {}}
      className={cn(
        "glass rounded-2xl p-6",
        hover && "glass-hover cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface AnimatedTextProps {
  text: string
  className?: string
  gradient?: boolean
  delay?: number
  stagger?: number
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  gradient = false,
  delay = 0,
  stagger = 0.05
}) => {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay }
    }
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      className={cn(
        "flex flex-wrap",
        gradient && "gradient-text",
        className
      )}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedText
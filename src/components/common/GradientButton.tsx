import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface GradientButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  icon?: React.ReactNode
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className,
  icon
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const variantClasses = {
    primary: 'bg-gradient-primary text-white hover:shadow-2xl hover:shadow-primary-500/50',
    secondary: 'bg-gradient-secondary text-dark hover:shadow-2xl hover:shadow-accent-yellow/50',
    outline: 'border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm'
  }

  const buttonClass = cn(
    'rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2',
    'hover:scale-105',
    sizeClasses[size],
    variantClasses[variant],
    className
  )

  const content = (
    <>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClass}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClass}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  )
}

export default GradientButton
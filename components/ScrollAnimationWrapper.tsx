"use client"

import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface ScrollAnimationWrapperProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function ScrollAnimationWrapper({ children, delay = 0, className }: ScrollAnimationWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

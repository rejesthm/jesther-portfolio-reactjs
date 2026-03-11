import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { inViewOptions } from '../utils/animations'

/**
 * Wraps content with scroll-triggered reveal animation.
 * Uses whileInView for consistent section entrance.
 * Forwards ref to the root element for useInView in child content.
 */
const SectionReveal = forwardRef(function SectionReveal(
  { children, className = '', delay = 0, as: Component = 'section', ...props },
  ref
) {
  return (
    <Component ref={ref} className={className} {...props}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewOptions}
        transition={{ duration: 0.5, ease: 'easeOut', delay }}
      >
        {children}
      </motion.div>
    </Component>
  )
})

export default SectionReveal

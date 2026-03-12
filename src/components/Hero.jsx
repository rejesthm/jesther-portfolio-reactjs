import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'
import FloatingElements from './FloatingElements'
import { staggerContainer, staggerItem } from '../utils/animations'
import { useMediaQuery } from '../hooks/useMediaQuery'

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const shouldReduceMotion = useReducedMotion()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const orbY = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, shouldReduceMotion || isMobile ? 0 : 80]
  )
  const orbOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 0.2])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Parallax background orb */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 md:w-96 md:h-96 rounded-full bg-indigo-500/20 blur-[100px] pointer-events-none"
        style={{ y: orbY, opacity: orbOpacity }}
        aria-hidden
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          className="order-2 lg:order-1"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={staggerItem}
            className="gradient-text font-medium mb-2"
          >
            Hi, I&apos;m
          </motion.p>
          <motion.h1
            variants={staggerItem}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            Jesther Jordan Minor
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl gradient-text font-semibold mb-4"
          >
            AI Fullstack Software Engineer
          </motion.p>
          <motion.p
            variants={staggerItem}
            className="text-zinc-400 text-lg mb-8 max-w-lg"
          >
            I build exceptional digital experiences that live on the web. Specializing in
            creating responsive, performant applications with modern technologies.
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 rounded-lg gradient-primary text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-lg gradient-border text-white font-medium hover:opacity-90 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: Floating elements */}
        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FloatingElements />
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import FloatingElements from './FloatingElements'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
}

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          className="order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="gradient-text font-medium mb-2"
          >
            Hi, I&apos;m
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            Your Name
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl gradient-text font-semibold mb-4"
          >
            Software Engineer
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-zinc-400 text-lg mb-8 max-w-lg"
          >
            I build exceptional digital experiences that live on the web. Specializing in
            creating responsive, performant applications with modern technologies.
          </motion.p>
          <motion.div
            variants={itemVariants}
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

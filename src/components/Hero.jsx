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
    transition: { duration: 0.5 },
  },
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Your Name
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-xl sm:text-2xl font-semibold text-gray-700"
            >
              Software Engineer
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl"
            >
              I build scalable web applications and delightful user experiences with modern technologies.
              Let&apos;s create something amazing together.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Floating elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <FloatingElements />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <SiGithub className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </motion.a>
        </div>
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          Back to top
        </motion.button>
      </div>
    </footer>
  )
}

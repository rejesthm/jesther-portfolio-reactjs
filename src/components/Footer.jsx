import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionReveal from './SectionReveal'

export default function Footer() {
  return (
    <SectionReveal
      as="footer"
      className="py-12 px-6 md:px-12 lg:px-24 border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex gap-6">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center min-w-[44px] min-h-[44px] text-zinc-400 hover-gradient-text transition-colors"
            aria-label="GitHub"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={22} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center min-w-[44px] min-h-[44px] text-zinc-400 hover-gradient-text transition-colors"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin size={22} />
          </motion.a>
        </div>
      </div>
    </SectionReveal>
  )
}

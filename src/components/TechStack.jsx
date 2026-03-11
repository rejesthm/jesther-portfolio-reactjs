import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaAws,
} from 'react-icons/fa'
import { SiFlutter, SiFirebase } from 'react-icons/si'

const technologies = [
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-amber-400' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
  { name: 'AWS', icon: FaAws, color: 'text-orange-600' },
  { name: 'Python', icon: FaPython, color: 'text-yellow-400' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
}

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="tech"
      ref={ref}
      className="py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h2>
        <motion.p
          className="text-zinc-400 mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Technologies I work with to build modern applications.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="flex flex-col items-center p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-indigo-500/30 hover:bg-zinc-800/80 transition-colors"
              whileHover={{ y: -6, scale: 1.05, transition: { duration: 0.2 } }}
            >
              <tech.icon className={`text-4xl mb-2 ${tech.color}`} />
              <span className="text-sm font-medium text-zinc-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

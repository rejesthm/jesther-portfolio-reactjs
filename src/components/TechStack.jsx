import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact,
  SiFlutter,
  SiNodedotjs,
  SiFirebase,
  SiDocker,
  SiPython,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'

const technologies = [
  { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
  { name: 'Flutter', icon: SiFlutter, color: 'text-[#02569B]' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-[#FFCA28]' },
  { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
  { name: 'AWS', icon: FaAws, color: 'text-[#FF9900]' },
  { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
}

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Tech Stack</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-6"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 min-w-[120px]"
            >
              <tech.icon className={`w-12 h-12 ${tech.color}`} />
              <span className="font-medium text-gray-700">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

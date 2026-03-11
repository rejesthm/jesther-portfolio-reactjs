import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SectionReveal from './SectionReveal'
import { inViewOptions } from '../utils/animations'
import { FaReact, FaNodeJs, FaPython, FaAws } from 'react-icons/fa'
import {
  SiFlutter,
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiLaravel,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiTensorflow,
  SiOpenai,
  SiPostgresql,
  SiMysql,
  SiVuedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiPytorch,
  SiScikitlearn,
} from 'react-icons/si'

const technologies = [
  { name: 'React', icon: FaReact, color: 'text-cyan-400', category: 'Frontend' },
  { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400', category: 'Frontend' },
  { name: 'Vue.js', icon: SiVuedotjs, color: 'text-emerald-400', category: 'Frontend' },
  { name: 'Angular', icon: SiAngular, color: 'text-red-500', category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300', category: 'Frontend' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', category: 'Backend' },
  { name: 'Python', icon: FaPython, color: 'text-yellow-400', category: 'Backend' },
  { name: 'Laravel', icon: SiLaravel, color: 'text-red-500', category: 'Backend' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', category: 'Database' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600', category: 'Database' },
  { name: 'MySQL', icon: SiMysql, color: 'text-orange-500', category: 'Database' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-amber-400', category: 'Database' },
  { name: 'AWS', icon: FaAws, color: 'text-orange-600', category: 'Cloud' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500', category: 'Cloud' },
  { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500', category: 'AI/ML' },
  { name: 'PyTorch', icon: SiPytorch, color: 'text-red-500', category: 'AI/ML' },
  { name: 'scikit-learn', icon: SiScikitlearn, color: 'text-amber-500', category: 'AI/ML' },
  { name: 'OpenAI', icon: SiOpenai, color: 'text-emerald-400', category: 'AI/ML' },
]

const categories = ['Frontend', 'Backend', 'Database', 'Cloud', 'AI/ML']

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, inViewOptions)
  const [activeCategory, setActiveCategory] = useState('Frontend')

  const activeTech = technologies.filter((t) => t.category === activeCategory)

  return (
    <SectionReveal
      id="tech"
      ref={ref}
      className="py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Tech Stack
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Technologies and frameworks I work with to build modern applications.
          </p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'text-white'
                  : 'text-zinc-400 hover:text-zinc-300'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="techTab"
                  className="absolute inset-0 rounded-xl bg-violet-500/20 border border-violet-500/40"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tech grid */}
        <div className="min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {activeTech.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03, duration: 0.2 }}
                  className="group"
                >
                  <motion.div
                    className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-zinc-700/50 bg-zinc-800/30 hover:border-violet-500/40 hover:bg-zinc-800/50 transition-all"
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center group-hover:border-violet-500/30 transition-colors">
                      <tech.icon className={`text-2xl ${tech.color}`} />
                    </div>
                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionReveal>
  )
}

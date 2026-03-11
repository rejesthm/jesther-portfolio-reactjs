import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
  // Frontend
  { name: 'React', icon: FaReact, color: 'text-cyan-400', category: 'Frontend' },
  { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400', category: 'Frontend' },
  { name: 'Vue.js', icon: SiVuedotjs, color: 'text-emerald-400', category: 'Frontend' },
  { name: 'Angular', icon: SiAngular, color: 'text-red-500', category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300', category: 'Frontend' },
  // Backend
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', category: 'Backend' },
  { name: 'Python', icon: FaPython, color: 'text-yellow-400', category: 'Backend' },
  { name: 'Laravel', icon: SiLaravel, color: 'text-red-500', category: 'Backend' },
  // Databases
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', category: 'Database' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600', category: 'Database' },
  { name: 'MySQL', icon: SiMysql, color: 'text-orange-500', category: 'Database' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-amber-400', category: 'Database' },
  // Cloud & DevOps
  { name: 'AWS', icon: FaAws, color: 'text-orange-600', category: 'Cloud' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500', category: 'Cloud' },
  // AI & ML
  { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500', category: 'AI/ML' },
  { name: 'PyTorch', icon: SiPytorch, color: 'text-red-500', category: 'AI/ML' },
  { name: 'scikit-learn', icon: SiScikitlearn, color: 'text-amber-500', category: 'AI/ML' },
  { name: 'OpenAI', icon: SiOpenai, color: 'text-emerald-400', category: 'AI/ML' },
]

const categories = ['Frontend', 'Backend', 'Database', 'Cloud', 'AI/ML']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
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
          Technologies and frameworks I work with to build modern applications, from frontend to AI/ML.
        </motion.p>

        {categories.map((category) => (
          <motion.div
            key={category}
            className="mb-12 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold gradient-text uppercase tracking-wider mb-6">
              {category}
            </h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {technologies
                .filter((tech) => tech.category === category)
                .map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-violet-500/50 hover:bg-zinc-800/80 transition-all group"
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg bg-zinc-900/50 group-hover:bg-violet-500/20 transition-colors">
                      <tech.icon className={`text-2xl ${tech.color}`} />
                    </div>
                    <span className="text-sm font-medium text-zinc-300 truncate">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

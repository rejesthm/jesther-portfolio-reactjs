import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import LazyImage from './LazyImage'
import SectionReveal from './SectionReveal'
import { staggerContainer, staggerItem, inViewOptions } from '../utils/animations'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard.',
    image: 'https://placehold.co/600x400/1e1b4b/6366f1?text=Project+1',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates, drag-and-drop, and team workspaces.',
    image: 'https://placehold.co/600x400/1e1b4b/6366f1?text=Project+2',
    tech: ['React', 'Firebase', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard with customizable widgets, export features, and real-time metrics.',
    image: 'https://placehold.co/600x400/1e1b4b/6366f1?text=Project+3',
    tech: ['React', 'D3.js', 'AWS'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, inViewOptions)

  return (
    <SectionReveal
      id="projects"
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
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-zinc-400 mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A selection of projects I&apos;ve worked on recently.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={staggerItem}
              className="group rounded-xl overflow-hidden bg-zinc-800/50 border border-zinc-700/50 hover:border-violet-500/50 transition-colors"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="relative overflow-hidden aspect-video">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="group-hover:scale-105 transition-transform duration-500"
                  fetchPriority="low"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs bg-gradient-to-r from-indigo-500/20 to-violet-500/20 text-violet-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover-gradient-text transition-colors text-sm"
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub size={18} />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover-gradient-text transition-colors text-sm"
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management with drag-and-drop, real-time updates, and team workspaces.',
    tech: ['React', 'Firebase', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization, charts, and export capabilities.',
    tech: ['React', 'Python', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 4,
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking app with workout plans, progress tracking, and social features.',
    tech: ['Flutter', 'Firebase', 'Dart'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Projects</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A selection of projects I&apos;ve built. Each one showcases different skills and technologies.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

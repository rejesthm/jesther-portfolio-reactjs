import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import ProjectImageCarousel from './ProjectImageCarousel'
import ProjectModal from './ProjectModal'
import SectionReveal from './SectionReveal'
import { projects } from '../data/projects'
import { staggerContainer, staggerItem, inViewOptions } from '../utils/animations'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, inViewOptions)
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
    <SectionReveal
      id="projects"
      ref={ref}
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-zinc-900/40"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent pointer-events-none" aria-hidden />
      <div className="relative z-10 max-w-7xl mx-auto">
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={staggerItem}
              className="group rounded-lg overflow-hidden bg-zinc-800/50 border border-zinc-700/50 hover:border-violet-500/50 transition-colors cursor-pointer"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <ProjectImageCarousel
                  images={project.images}
                  title={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-t-lg" />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-[10px] leading-tight line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </SectionReveal>

    <AnimatePresence mode="wait">
      {selectedProject && (
        <ProjectModal
          key={selectedProject.title}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </AnimatePresence>
    </>
  )
}

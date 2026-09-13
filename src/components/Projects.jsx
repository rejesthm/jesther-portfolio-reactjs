import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import ProjectModal from './ProjectModal'
import { BrowserPreview, PhonePreview } from './ProjectPreviewFrames'
import { projects } from '../data/projects'
import { getProjectCategories } from '../utils/projectMetadata'

const filters = ['All', 'Mobile', 'Website', 'Automation']

function getProjectSummary(description) {
  return description.length > 148 ? `${description.slice(0, 148).trim()}...` : description
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => getProjectCategories(project).includes(activeFilter))
  }, [activeFilter])

  return (
    <>
      <section>
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-sm leading-6 text-[var(--color-light-gray)]">
            A complete gallery of mobile-first products, production apps, and platform work I&apos;ve helped ship.
          </p>
          <p className="shrink-0 rounded-xl border border-[var(--color-border)] bg-[rgba(43,43,45,0.58)] px-3 py-2 text-xs font-medium text-[var(--color-accent)]">
            Showing {visibleProjects.length} of {projects.length}
          </p>
        </div>

        <div className="portfolio-filter-bar mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-pill ${activeFilter === filter ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onInspect={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

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

function ProjectCard({ project, onInspect }) {
  const categories = getProjectCategories(project)
  const usesWidePreview = categories.some((category) => ['Website', 'Automation'].includes(category))

  return (
    <motion.article
      layout
      className={`project-card project-device-card group ${usesWidePreview ? 'project-website-card' : ''}`}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`project-device-stage ${usesWidePreview ? 'project-browser-stage' : ''}`}>
        <div className="project-card-glow" aria-hidden />
        {usesWidePreview ? (
          <BrowserPreview project={project} />
        ) : (
          <PhonePreview project={project} />
        )}
      </div>

      <div className="project-card-body">
        <h2 className="mb-4 text-xl font-semibold leading-tight text-neutral-50">
          {project.title}
        </h2>

        <p className="project-summary">{getProjectSummary(project.description)}</p>

        <button
          type="button"
          className="project-open-button"
          onClick={onInspect}
          aria-label={`View ${project.title} details`}
        >
          Inspect project
          <FaArrowRight aria-hidden />
        </button>
      </div>
    </motion.article>
  )
}

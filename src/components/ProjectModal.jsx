import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaDesktop, FaImages, FaMobileAlt, FaProjectDiagram, FaTimes } from 'react-icons/fa'
import { BrowserPreview, PhonePreview } from './ProjectPreviewFrames'
import { getProjectCategories, getProjectMediaCount } from '../utils/projectMetadata'

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const previousFocus = document.activeElement

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    const handleTab = (event) => {
      if (event.key !== 'Tab' || !modalRef.current) return
      const focusable = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('keydown', handleTab)
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleTab)
      document.body.style.overflow = ''
      if (previousFocus instanceof HTMLElement) previousFocus.focus()
    }
  }, [onClose])

  if (!project) return null

  const categories = getProjectCategories(project)
  const usesWidePreview = categories.some((category) => ['Website', 'Automation'].includes(category))

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[20px] border border-[var(--color-border)] bg-[var(--color-eerie-2)] shadow-[var(--shadow-deep)] lg:overflow-hidden"
        initial={{ opacity: 0, scale: 0.97, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 24 }}
        transition={{ type: 'spring', damping: 26, stiffness: 300 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute left-0 right-0 top-0 h-1 bg-[var(--gradient-accent)]" />

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-onyx)] text-[var(--color-light-gray)] transition-colors hover:text-[var(--color-accent)]"
          aria-label="Close modal"
        >
          <FaTimes aria-hidden />
        </button>

        <div className="grid lg:max-h-[90vh] lg:grid-cols-[0.48fr_0.52fr]">
          <div
            className={`modal-device-stage border-b border-[var(--color-border)] p-6 lg:border-b-0 lg:border-r lg:p-8 ${
              usesWidePreview ? 'project-browser-stage' : ''
            }`}
          >
            <div className="project-card-glow" aria-hidden />
            {usesWidePreview ? (
              <BrowserPreview project={project} modal />
            ) : (
              <PhonePreview project={project} modal />
            )}
          </div>

          <div className="scrollbar-theme min-h-0 overflow-y-auto p-6 sm:p-8">
            <h2
              id="project-modal-title"
              className="mb-5 pr-12 text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl"
            >
              {project.title}
            </h2>

            <div className="mb-7">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Project Details
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const CategoryIcon =
                    category === 'Website'
                      ? FaDesktop
                      : category === 'Automation'
                        ? FaProjectDiagram
                        : FaMobileAlt

                  return (
                    <span key={category} className="project-category-chip">
                      <CategoryIcon aria-hidden />
                      {category}
                    </span>
                  )
                })}
                <span className="project-shot-count" aria-label={`${getProjectMediaCount(project)} media items`}>
                  <FaImages aria-hidden />
                  {getProjectMediaCount(project)}
                </span>
              </div>
            </div>

            {project.roles?.length > 0 && (
              <div className="mb-7">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Automation Roles
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.roles.map((role) => (
                    <span key={role} className="tech-badge">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.tech?.length > 0 && (
              <div className="mb-7">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                About
              </p>
              <p className="text-sm leading-7 text-[var(--color-light-gray)] sm:text-base">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectImageCarousel from './ProjectImageCarousel'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-zinc-900/95 border border-zinc-700/80 shadow-2xl shadow-black/50"
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 24 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar with gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-xl bg-zinc-800/90 hover:bg-zinc-700 border border-zinc-600/50 hover:border-zinc-500 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row max-h-[90vh]">
          {/* Image carousel - fixed, does not scroll */}
          <div className="lg:w-[45%] shrink-0 bg-zinc-950/50 border-b lg:border-b-0 lg:border-r border-zinc-700/50 flex items-center justify-center py-6 lg:py-8">
            <div className="max-w-[240px] w-full mx-auto">
              <ProjectImageCarousel
                images={project.images}
                title={project.title}
              />
            </div>
          </div>

          {/* Content - scrollable */}
          <div className="lg:w-[55%] overflow-y-auto min-h-0 flex flex-col scrollbar-theme">
            <div className="p-6 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">
                  {project.title}
                </h2>

                {/* Tech badges */}
                {project.tech?.length > 0 && (
                  <div className="mb-6">
                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-600/50 hover:border-violet-500/40 hover:text-violet-300 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                <div>
                  <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
                    About
                  </p>
                  <p className="text-zinc-400 text-sm lg:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

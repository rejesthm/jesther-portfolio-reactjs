import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { techCategories, technologies } from '../data/profile'

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('Frontend')
  const activeTech = technologies.filter((tech) => tech.category === activeCategory)

  return (
    <section>
      <h2 className="section-heading">Skills</h2>
      <p className="mb-6 max-w-[65ch] text-sm leading-6 text-[var(--color-light-gray)]">
        Technologies and frameworks I work with to build modern applications.
      </p>

      <div className="mb-7 flex flex-wrap gap-2">
        {techCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-pill ${activeCategory === category ? 'is-active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid gap-4 md:grid-cols-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
        >
          {activeTech.map((tech, index) => (
            <motion.article
              key={tech.name}
              className="skill-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
            >
              <div className="flex items-center gap-4">
                <span className="icon-box text-lg">
                  <tech.icon className={tech.color} aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <h3 className="truncate text-sm font-medium text-neutral-50">{tech.name}</h3>
                    <span className="text-xs text-[var(--color-muted)]">{tech.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-[var(--color-jet)]">
                    <div
                      className="h-full rounded-full bg-[var(--gradient-accent)]"
                      style={{ width: `${tech.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

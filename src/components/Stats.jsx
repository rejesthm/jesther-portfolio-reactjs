import { motion } from 'framer-motion'
import { stats } from '../data/profile'

export default function Stats() {
  return (
    <section className="pt-2">
      <h3 className="section-heading">Experience Snapshot</h3>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.article
            key={stat.label}
            className="metric-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.04 }}
          >
            <span className="icon-box mx-auto mb-4 text-base">
              <stat.icon aria-hidden />
            </span>
            <p className="text-3xl font-semibold text-[var(--color-accent)]">
              {stat.value}
              {stat.suffix}
            </p>
            <p className="mt-1 text-sm leading-5 text-[var(--color-light-gray)]">{stat.label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

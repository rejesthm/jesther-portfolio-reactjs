import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import { experiences } from '../data/profile'

const splitIndex = Math.ceil(experiences.length / 2)
const timelineLanes = [
  { id: 'latest', label: 'Timeline', items: experiences.slice(0, splitIndex) },
  { id: 'earlier', label: 'Earlier', items: experiences.slice(splitIndex) },
]

export default function Experience() {
  return (
    <section>
      <p className="mb-8 max-w-[65ch] text-sm leading-6 text-[var(--color-light-gray)]">
        Where I&apos;ve built and shipped software across startups and scale-ups.
      </p>

      <div className="timeline">
        <div className="mb-6 flex items-center gap-4">
          <span className="icon-box text-base">
            <FaBriefcase aria-hidden />
          </span>
          <h2 className="text-lg font-medium text-neutral-50">Timeline</h2>
        </div>

        <div className="timeline-lanes">
          {timelineLanes.map((lane, laneIndex) => (
            <div key={lane.id} className="timeline-lane">
              <p className="timeline-lane-label">{lane.label}</p>
              <ol className="timeline-list">
                {lane.items.map((experience, itemIndex) => {
                  const animationIndex = laneIndex * splitIndex + itemIndex

                  return (
                    <motion.li
                      key={`${experience.role}-${experience.company}`}
                      className="timeline-item"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.24, delay: animationIndex * 0.04 }}
                    >
                      <span className="timeline-date">{experience.date}</span>
                      <h3 className="mt-2 text-base font-medium leading-snug text-neutral-50">
                        {experience.role}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-light-gray)]">
                        {experience.company}
                      </p>
                    </motion.li>
                  )
                })}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

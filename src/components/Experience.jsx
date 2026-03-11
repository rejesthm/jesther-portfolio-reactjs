import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import SectionReveal from './SectionReveal'
import { staggerContainer, staggerItem, inViewOptions } from '../utils/animations'

const experiences = [
  { date: '2025', role: 'Freelance Software Engineer', company: 'Cardan Marketing', sortEnd: 2025 },
  { date: '2024 – 2025', role: 'Software Engineer', company: 'Dorset Tech', sortEnd: 2025 },
  { date: '2024', role: 'Fullstack Software Engineer', company: 'SignTracker', sortEnd: 2024 },
  { date: '2023 – 2024', role: 'Fullstack Software Engineer', company: 'Articulacy', sortEnd: 2024 },
  { date: '2021 – 2022', role: 'Fullstack Software Engineer', company: 'LVNDR — Healthcare', sortEnd: 2022 },
  { date: '2021 – 2022', role: 'Mobile Software Engineer', company: 'Milkomeda', sortEnd: 2022 },
  { date: '2021 – 2022', role: 'MERN Stack Developer', company: 'Creative Interlace', sortEnd: 2022 },
  { date: '2020 – 2021', role: 'Fullstack Developer', company: 'Travelpud', sortEnd: 2021 },
  { date: '2018 – 2019', role: 'Fullstack Developer', company: 'Segworks', sortEnd: 2019 },
].sort((a, b) => b.sortEnd - a.sortEnd)

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, inViewOptions)

  return (
    <SectionReveal
      id="experience"
      ref={ref}
      className="py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Experience
          </h2>
          <p className="text-zinc-400 max-w-xl">
            Where I&apos;ve built and shipped software across startups and scale-ups.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {[
            experiences.slice(0, 5),
            experiences.slice(5, 9),
          ].map((columnExps, colIndex) => (
            <div key={colIndex} className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-[11px] md:left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-zinc-600/50 to-transparent"
                aria-hidden
              />
              <div className="space-y-0">
                {columnExps.map((exp) => (
                  <motion.div
                    key={exp.role + exp.company}
                    variants={staggerItem}
                    className="relative flex gap-4 md:gap-5 pb-10 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0 flex flex-col items-center pt-1">
                      <motion.div
                        className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-violet-500/60 bg-zinc-900 flex items-center justify-center"
                        whileHover={{ scale: 1.15, borderColor: 'rgba(139, 92, 246, 1)' }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaBriefcase className="text-violet-400/80 text-[10px] md:text-xs" />
                      </motion.div>
                    </div>

                    {/* Content card */}
                    <motion.article
                      className="flex-1 min-w-0 group"
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    >
                      <div className="relative rounded-xl border border-zinc-700/50 bg-zinc-800/30 p-4 md:p-5 transition-all duration-300 hover:border-violet-500/40 hover:bg-zinc-800/50 overflow-hidden">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <div className="relative flex flex-col gap-2">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="text-sm md:text-base font-semibold text-white">
                              {exp.role}
                            </h3>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-500/20 text-violet-300 border border-violet-500/30 w-fit">
                              {exp.date}
                            </span>
                          </div>
                          <p className="relative text-violet-400 font-medium text-sm">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  )
}

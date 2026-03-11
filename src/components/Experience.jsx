import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    date: '2022 – Present',
    role: 'Senior Software Engineer',
    company: 'Tech Company Inc.',
    description: 'Leading development of customer-facing web applications. Mentoring junior developers and implementing best practices for CI/CD pipelines.',
  },
  {
    date: '2020 – 2022',
    role: 'Software Engineer',
    company: 'Startup XYZ',
    description: 'Built and maintained React applications with Firebase backend. Implemented real-time features and optimized performance for mobile users.',
  },
  {
    date: '2018 – 2020',
    role: 'Junior Developer',
    company: 'Agency ABC',
    description: 'Developed responsive websites and landing pages. Collaborated with designers to implement pixel-perfect UI components.',
  },
]

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  }),
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
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
          Experience
        </motion.h2>
        <motion.p
          className="text-zinc-400 mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My professional journey in software development.
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-zinc-700" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-2 md:left-6 top-1 w-4 h-4 rounded-full gradient-primary border-4 border-zinc-900" />

                <motion.div
                  className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-violet-500/50 transition-colors"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <span className="gradient-text text-sm font-medium">
                    {exp.date}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-1 mb-2">
                    {exp.role}
                  </h3>
                  <p className="gradient-text font-medium mb-3">{exp.company}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    id: 1,
    date: '2022 – Present',
    role: 'Senior Software Engineer',
    company: 'Tech Company Inc.',
    description: 'Leading frontend architecture and mentoring junior developers. Built scalable React applications serving 1M+ users.',
  },
  {
    id: 2,
    date: '2020 – 2022',
    role: 'Software Engineer',
    company: 'Startup XYZ',
    description: 'Developed full-stack features using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and improved deployment workflows.',
  },
  {
    id: 3,
    date: '2018 – 2020',
    role: 'Junior Developer',
    company: 'Agency ABC',
    description: 'Built client websites and web applications. Collaborated with designers to deliver pixel-perfect implementations.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = (direction) => ({
  hidden: { opacity: 0, x: direction * 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
})

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Experience</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative pl-8 md:pl-0"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants(index % 2 === 0 ? -1 : 1)}
              className="relative flex gap-4 md:gap-8 mb-12 last:mb-0"
            >
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-indigo-500 md:-translate-x-1/2 mt-1.5 z-10 flex-shrink-0" />
              <div className="ml-4 md:ml-0 flex-1 md:flex md:justify-center md:gap-8">
                {index % 2 === 1 && <div className="hidden md:block flex-1" />}
                <div
                  className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${
                    index % 2 === 0 ? 'md:mr-auto md:max-w-[calc(50%-2rem)]' : 'md:ml-auto md:max-w-[calc(50%-2rem)]'
                  }`}
                >
                  <span className="text-sm font-medium text-indigo-600">{exp.date}</span>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-gray-600 font-medium">{exp.company}</p>
                  <p className="mt-3 text-gray-600">{exp.description}</p>
                </div>
                {index % 2 === 0 && <div className="hidden md:block flex-1" />}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

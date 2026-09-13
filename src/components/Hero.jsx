import { motion } from 'framer-motion'
import { FaArrowRight, FaEnvelope } from 'react-icons/fa'
import { profile, services } from '../data/profile'

export default function Hero() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <motion.p
          className="text-sm font-medium text-[var(--color-accent)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {profile.intro}
        </motion.p>
        <motion.div
          className="max-w-[65ch] space-y-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.05 }}
        >
          <h2 className="text-3xl font-semibold leading-tight text-neutral-50 sm:text-4xl">
            {profile.name}
          </h2>
          <p className="text-lg font-medium text-neutral-100">{profile.role}</p>
          <p className="text-[15px] leading-7 text-[var(--color-light-gray)]">
            {profile.summary}
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.1 }}
        >
          <a href={`mailto:${profile.email}`} className="primary-action">
            <FaEnvelope aria-hidden />
            Contact Me
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="secondary-action">
            View GitHub
            <FaArrowRight aria-hidden />
          </a>
        </motion.div>
      </section>

      <section>
        <h3 className="section-heading">What I&apos;m doing</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="content-card"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: index * 0.05 }}
            >
              <span className="icon-box text-lg">
                <service.icon aria-hidden />
              </span>
              <div>
                <h4 className="mb-2 text-base font-medium text-neutral-50">{service.title}</h4>
                <p className="text-sm leading-6 text-[var(--color-light-gray)]">{service.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}

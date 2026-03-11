import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import SectionReveal from './SectionReveal'
import { inViewOptions } from '../utils/animations'

const links = [
  { icon: FaEnvelope, label: 'Email', href: 'mailto:rejesthm@gmail.com', value: 'rejesthm@gmail.com' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/rejesthm', value: 'github.com/rejesthm' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jesther-jordan-minor-73234813a/', value: 'linkedin.com/in/jesther-jordan-minor' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, inViewOptions)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formState.name.trim()) newErrors.name = 'Name is required'
    if (!formState.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formState.email)) newErrors.email = 'Invalid email'
    if (!formState.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    // Placeholder - would integrate with backend
    console.log('Form submitted:', formState)
    setFormState({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  return (
    <SectionReveal
      id="contact"
      ref={ref}
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-zinc-900/40"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent pointer-events-none" aria-hidden />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-zinc-400 mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Have a project in mind or want to connect? I&apos;d love to hear from you.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect with me
            </h3>
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-violet-500/50 hover:bg-zinc-800/80 transition-colors group"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <link.icon className="text-2xl gradient-text group-hover:scale-110 transition-transform" />
                <div>
                  <div className="flex font-medium text-white">{link.label}</div>
                  <div className="text-sm text-zinc-400">{link.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Send a message
            </h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-white placeholder-zinc-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 outline-none transition-colors"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-white placeholder-zinc-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 outline-none transition-colors"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-white placeholder-zinc-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>
            <motion.button
              type="submit"
              className="px-6 py-3 rounded-lg gradient-primary text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </SectionReveal>
  )
}

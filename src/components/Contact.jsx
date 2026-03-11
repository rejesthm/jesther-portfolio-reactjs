import { useState } from 'react'
import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import { HiMail } from 'react-icons/hi'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    setErrors({})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const links = [
    { href: 'mailto:your.email@example.com', icon: HiMail, label: 'your.email@example.com' },
    { href: 'https://github.com', icon: SiGithub, label: 'GitHub' },
    { href: 'https://linkedin.com', icon: FaLinkedin, label: 'LinkedIn' },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to connect? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900">Contact Info</h3>
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <link.icon className="w-6 h-6 flex-shrink-0" />
                <span>{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  } focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  } focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  } focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none`}
                  placeholder="Your message..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

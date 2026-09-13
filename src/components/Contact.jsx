import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane } from 'react-icons/fa'
import { contacts } from '../data/profile'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const nextErrors = {}
    if (!formState.name.trim()) nextErrors.name = 'Name is required'
    if (!formState.email.trim()) nextErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formState.email)) nextErrors.email = 'Invalid email'
    if (!formState.message.trim()) nextErrors.message = 'Message is required'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return
    console.log('Form submitted:', formState)
    setFormState({ name: '', email: '', message: '' })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: '' }))
  }

  return (
    <section>
      <p className="mb-8 max-w-[65ch] text-sm leading-6 text-[var(--color-light-gray)]">
        Have a project in mind or want to connect? I&apos;d love to hear from you.
      </p>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
        >
          <h2 className="section-heading">Connect with me</h2>
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-card group"
            >
              <span className="icon-box text-base">
                <contact.icon aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="contact-title">{contact.label}</span>
                <span className="contact-value">{contact.value}</span>
              </span>
            </a>
          ))}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5"
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          noValidate
        >
          <h2 className="section-heading">Send a message</h2>
          <Field error={errors.name} label="Name" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Your name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
          </Field>
          <Field error={errors.email} label="Email" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              className="form-input"
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
          </Field>
          <Field error={errors.message} label="Message" htmlFor="message">
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={5}
              className="form-input resize-y"
              placeholder="Your message..."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
          </Field>
          <motion.button
            type="submit"
            className="form-button"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaPaperPlane aria-hidden />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

function Field({ label, htmlFor, error, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-neutral-200">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  )
}

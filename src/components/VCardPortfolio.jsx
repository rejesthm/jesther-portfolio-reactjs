import { useMemo, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { HiChevronDown, HiMail } from 'react-icons/hi'
import { FaAws, FaLinkedin } from 'react-icons/fa6'
import {
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiNodedotjs,
  SiPython,
  SiReact,
} from 'react-icons/si'

const tabs = ['About', 'Resume', 'Portfolio', 'Contact']

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Built' },
  { value: '15+', label: 'Technologies Used' },
  { value: '100+', label: 'Clients / Users' },
]

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management with drag-and-drop, real-time updates, and team workspaces.',
    tech: ['React', 'Firebase', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization, charts, and export capabilities.',
    tech: ['React', 'Python', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 4,
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking app with workout plans, progress tracking, and social features.',
    tech: ['Flutter', 'Firebase', 'Dart'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

const technologies = [
  { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
  { name: 'Flutter', icon: SiFlutter, color: 'text-[#49A7E8]' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#7BB662]' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-[#F2B84B]' },
  { name: 'Docker', icon: SiDocker, color: 'text-[#3996D8]' },
  { name: 'AWS', icon: FaAws, color: 'text-[#E59D36]' },
  { name: 'Python', icon: SiPython, color: 'text-[#8AA9D6]' },
]

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

const contactLinks = [
  { href: 'mailto:your.email@example.com', icon: HiMail, label: 'your.email@example.com' },
  { href: 'https://github.com', icon: SiGithub, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: FaLinkedin, label: 'LinkedIn' },
]

const panelMotion = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

const MotionDiv = motion.div

function SectionTitle({ children }) {
  return (
    <header className="mb-8">
      <h1 className="section-title">{children}</h1>
    </header>
  )
}

function ProfileSidebar() {
  const [showContacts, setShowContacts] = useState(false)

  return (
    <aside className="vcard-panel vcard-sidebar lg:sticky lg:top-10 lg:self-start" aria-label="Profile summary">
      <div className="flex items-center gap-4 lg:flex-col lg:text-center">
        <div className="avatar-box" aria-hidden="true">
          <span>YN</span>
        </div>
        <div className="min-w-0 flex-1 lg:flex-none">
          <p className="text-[1.45rem] font-semibold tracking-tight text-[var(--text-strong)] lg:text-2xl">
            Your Name
          </p>
          <p className="mt-2 inline-flex rounded-lg bg-[var(--surface-raised)] px-3 py-1 text-xs font-medium text-[var(--text-strong)]">
            Software Engineer
          </p>
        </div>
        <button
          type="button"
          className="contact-toggle lg:hidden"
          aria-expanded={showContacts}
          onClick={() => setShowContacts((value) => !value)}
        >
          <span>Show Contacts</span>
          <HiChevronDown className={`h-4 w-4 transition-transform ${showContacts ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className={`${showContacts ? 'grid' : 'hidden'} lg:grid`}>
        <div className="my-6 h-px bg-[var(--border)]" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="sidebar-link"
            >
              <span className="icon-box">
                <link.icon className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.68rem] uppercase text-[var(--text-muted)]">Contact Info</span>
                <span className="block truncate text-sm text-[var(--text-strong)]">{link.label}</span>
              </span>
            </a>
          ))}
        </div>
        <div className="my-6 h-px bg-[var(--border)]" />
        <div className="grid grid-cols-2 gap-3">
          {stats.slice(0, 2).map((stat) => (
            <div key={stat.label} className="rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-3">
              <p className="font-mono text-xl font-semibold text-[var(--accent)]">{stat.value}</p>
              <p className="mt-1 text-xs leading-snug text-[var(--text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-center gap-4">
          {contactLinks.slice(1).map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] transition hover:text-[var(--accent)]"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}

function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <nav className="vcard-tabs" aria-label="Portfolio sections">
      <div role="tablist" aria-label="Portfolio sections" className="flex flex-wrap items-center justify-center gap-1 sm:gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`${tab.toLowerCase()}-panel`}
            id={`${tab.toLowerCase()}-tab`}
            className="tab-button"
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  )
}

function AboutPanel({ setActiveTab }) {
  return (
    <div>
      <SectionTitle>About</SectionTitle>
      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-[var(--accent)]">Hi, I&apos;m</p>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Your Name
          </p>
          <p className="mt-4 text-xl font-semibold text-[var(--text)]">Software Engineer</p>
          <p className="mt-5 max-w-[65ch] leading-relaxed text-[var(--text)]">
            I build scalable web applications and delightful user experiences with modern technologies.
            Let&apos;s create something amazing together.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" className="primary-action" onClick={() => setActiveTab('Portfolio')}>
              View Projects
            </button>
            <button type="button" className="secondary-action" onClick={() => setActiveTab('Contact')}>
              Contact Me
            </button>
          </div>
        </div>

        <div className="visual-stack" aria-label="Highlighted work cues">
          <div className="visual-card visual-card-large">
            <span className="text-xs uppercase text-[var(--text-muted)]">Code</span>
            <div className="mt-4 space-y-2">
              <span className="block h-2 w-3/4 rounded-full bg-[var(--border-bright)]" />
              <span className="block h-2 w-full rounded-full bg-[var(--border-bright)]" />
              <span className="block h-2 w-1/2 rounded-full bg-[var(--border-bright)]" />
              <span className="mt-4 block h-10 rounded-xl bg-[var(--accent-soft)]" />
            </div>
          </div>
          <div className="visual-card visual-card-small">Build</div>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="metric-card">
            <p className="font-mono text-3xl font-semibold text-[var(--accent)]">{stat.value}</p>
            <p className="mt-2 text-sm text-[var(--text)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ResumePanel() {
  return (
    <div>
      <SectionTitle>Resume</SectionTitle>
      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="subsection-title">Experience</h2>
        <p className="mb-6 max-w-[65ch] leading-relaxed text-[var(--text)]">
          My professional journey in software development.
        </p>
        <ol className="timeline-list">
          {experiences.map((experience) => (
            <li key={experience.id} className="timeline-item">
              <span className="timeline-dot" aria-hidden="true" />
              <p className="text-sm font-medium text-[var(--accent)]">{experience.date}</p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--text-strong)]">{experience.role}</h3>
              <p className="mt-1 font-medium text-[var(--text)]">{experience.company}</p>
              <p className="mt-3 max-w-[65ch] leading-relaxed text-[var(--text)]">{experience.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12" aria-labelledby="tech-heading">
        <h2 id="tech-heading" className="subsection-title">Tech Stack</h2>
        <p className="mb-6 max-w-[65ch] leading-relaxed text-[var(--text)]">
          Technologies and tools I use to bring ideas to life.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div key={tech.name} className="tech-card">
              <span className="icon-box">
                <tech.icon className={`h-5 w-5 ${tech.color}`} />
              </span>
              <span className="font-medium text-[var(--text-strong)]">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function PortfolioPanel() {
  return (
    <div>
      <SectionTitle>Portfolio</SectionTitle>
      <h2 className="subsection-title">Projects</h2>
      <p className="mb-8 max-w-[65ch] leading-relaxed text-[var(--text)]">
        A selection of projects I&apos;ve built. Each one showcases different skills and technologies.
      </p>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="aspect-video overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-soft)]">
              <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="pt-5">
              <h2 className="text-xl font-semibold text-[var(--text-strong)]">{project.title}</h2>
              <p className="mt-3 leading-relaxed text-[var(--text)]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
              <div className="mt-5 flex gap-5">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-link">
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function ContactPanel() {
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

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    setErrors({})
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
    if (errors[name]) setErrors((previous) => ({ ...previous, [name]: '' }))
  }

  return (
    <div>
      <SectionTitle>Contact</SectionTitle>
      <h2 className="subsection-title">Get in Touch</h2>
      <p className="mb-8 max-w-[65ch] leading-relaxed text-[var(--text)]">
        Have a project in mind or want to connect? I&apos;d love to hear from you.
      </p>
      <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
        <section aria-labelledby="contact-info-heading">
          <h2 id="contact-info-heading" className="subsection-title">Contact Info</h2>
          <div className="grid gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="sidebar-link"
              >
                <span className="icon-box">
                  <link.icon className="h-4 w-4" />
                </span>
                <span className="text-[var(--text-strong)]">{link.label}</span>
              </a>
            ))}
          </div>
        </section>

        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="name"
              label="Name"
              value={formData.name}
              error={errors.name}
              onChange={handleChange}
              placeholder="Your name"
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>
          <Field
            id="message"
            label="Message"
            value={formData.message}
            error={errors.message}
            onChange={handleChange}
            placeholder="Your message..."
            textarea
          />
          <button type="submit" className="primary-action ml-auto">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

function Field({ id, label, value, error, onChange, placeholder, type = 'text', textarea = false }) {
  const describedBy = error ? `${id}-error` : undefined
  const className = `form-input ${error ? 'border-[var(--error)]' : 'border-[var(--border)]'}`

  return (
    <div className={textarea ? 'mt-5' : undefined}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-[var(--text-strong)]">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          rows={4}
          className={`${className} resize-none`}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={className}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-[var(--error)]">
          {error}
        </p>
      )}
    </div>
  )
}

function ActivePanel({ activeTab, setActiveTab }) {
  if (activeTab === 'About') return <AboutPanel setActiveTab={setActiveTab} />
  if (activeTab === 'Resume') return <ResumePanel />
  if (activeTab === 'Portfolio') return <PortfolioPanel />
  return <ContactPanel />
}

export default function VCardPortfolio() {
  const [activeTab, setActiveTab] = useState('About')
  const reduceMotion = useReducedMotion()
  const animation = useMemo(() => {
    if (reduceMotion) return { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
    return panelMotion
  }, [reduceMotion])
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <div className="min-h-[100dvh] bg-[var(--page-bg)] px-4 py-6 text-[var(--text)] sm:px-6 lg:px-8 lg:py-10">
      <main className="mx-auto grid w-full max-w-[1200px] gap-6 lg:grid-cols-[295px_minmax(0,1fr)]">
        <ProfileSidebar />
        <section className="vcard-panel relative min-w-0 overflow-hidden" aria-labelledby={`${activeTab.toLowerCase()}-heading`}>
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          <AnimatePresence mode="wait">
            <MotionDiv
              key={activeTab}
              {...animation}
              transition={{ type: 'spring', stiffness: 100, damping: 22 }}
              role="tabpanel"
              id={`${activeTab.toLowerCase()}-panel`}
              aria-labelledby={`${activeTab.toLowerCase()}-tab`}
              className="panel-content"
            >
              <ActivePanel activeTab={activeTab} setActiveTab={setActiveTab} />
            </MotionDiv>
          </AnimatePresence>
          <footer className="mt-12 flex flex-col gap-4 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            <button type="button" className="text-link w-fit" onClick={scrollToTop}>
              Back to top
            </button>
          </footer>
        </section>
      </main>
    </div>
  )
}

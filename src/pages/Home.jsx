import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Projects from '../components/Projects'
import TechStack from '../components/TechStack'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { contacts, profile, tabs } from '../data/profile'

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')
  const [showContacts, setShowContacts] = useState(false)
  const activeTitle = {
    about: 'About me',
    portfolio: 'Portfolio',
    experiences: 'Experiences',
    contact: 'Contact',
  }[activeTab]

  return (
    <main className="min-h-[100dvh] px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1220px] gap-6 lg:grid-cols-[310px_minmax(0,1fr)] lg:items-start">
        <ProfileSidebar
          showContacts={showContacts}
          onToggleContacts={() => setShowContacts((value) => !value)}
        />

        <section className="vcard-article overflow-hidden">
          <header className="vcard-article-header">
            <h1 className="article-title">{activeTitle}</h1>
            <Navbar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          </header>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
              tabIndex={0}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="px-5 pb-6 pt-0 sm:px-8 sm:pb-8 md:px-9"
            >
              {activeTab === 'about' && (
                <Article>
                  <Hero />
                  <Stats />
                </Article>
              )}
              {activeTab === 'portfolio' && (
                <Article>
                  <Projects />
                </Article>
              )}
              {activeTab === 'experiences' && (
                <Article>
                  <div className="grid gap-10">
                    <Experience />
                    <TechStack />
                  </div>
                </Article>
              )}
              {activeTab === 'contact' && (
                <Article>
                  <Contact />
                </Article>
              )}
            </motion.div>
          </AnimatePresence>
          <Footer />
        </section>
      </div>
    </main>
  )
}

function Article({ children }) {
  return <article>{children}</article>
}

function ProfileSidebar({ showContacts, onToggleContacts }) {
  return (
    <aside className={`vcard-sidebar ${showContacts ? 'is-open' : ''}`}>
      <div className="flex items-center gap-4 lg:flex-col lg:text-center">
        <div className="avatar-box">
          <img src={profile.avatar} alt={profile.name} />
        </div>
        <div className="min-w-0 flex-1 lg:flex lg:flex-col lg:items-center">
          <h2 className="text-[17px] font-medium leading-snug text-neutral-50 sm:text-xl lg:text-2xl">
            {profile.name}
          </h2>
          <p className="mt-2 w-fit rounded-lg bg-[var(--color-onyx)] px-3 py-1 text-[11px] font-light text-neutral-100 lg:mx-auto">
            {profile.role}
          </p>
        </div>
        <button
          type="button"
          className="sidebar-toggle lg:hidden"
          onClick={onToggleContacts}
          aria-expanded={showContacts}
          aria-controls="sidebar-contacts"
        >
          <span className="sr-only">Show contacts</span>
          <FaChevronDown
            className={`transition-transform duration-300 ${showContacts ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <div
        id="sidebar-contacts"
        className={`sidebar-details ${showContacts ? 'grid' : 'hidden'} lg:grid`}
      >
        <div className="separator" />
        <ul className="grid gap-4">
          {contacts.map((contact) => (
            <li key={contact.label}>
              <a
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-row group"
              >
                <span className="icon-box">
                  <contact.icon aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="contact-title">{contact.label}</span>
                  <span className="contact-value">{contact.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

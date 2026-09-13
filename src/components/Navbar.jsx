import { motion } from 'framer-motion'
import { FaAddressCard, FaBriefcase, FaEnvelope, FaLayerGroup } from 'react-icons/fa'

const tabIcons = {
  about: FaAddressCard,
  portfolio: FaBriefcase,
  experiences: FaLayerGroup,
  contact: FaEnvelope,
}

export default function Navbar({ tabs, activeTab, onTabChange }) {
  const handleKeyDown = (event, index) => {
    const lastIndex = tabs.length - 1
    let nextIndex = index

    if (event.key === 'ArrowRight') nextIndex = index === lastIndex ? 0 : index + 1
    else if (event.key === 'ArrowLeft') nextIndex = index === 0 ? lastIndex : index - 1
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = lastIndex
    else return

    event.preventDefault()
    onTabChange(tabs[nextIndex].id)
    document.getElementById(`tab-${tabs[nextIndex].id}`)?.focus()
  }

  return (
    <nav className="vcard-nav" aria-label="Portfolio sections">
      <div
        className="vcard-nav-track"
        role="tablist"
        aria-label="Portfolio sections"
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id
          const Icon = tabIcons[tab.id]

          return (
            <motion.button
              key={tab.id}
              id={`tab-${tab.id}`}
              type="button"
              role="tab"
              className={`vcard-nav-link shrink-0 ${isActive ? 'is-active' : ''}`}
              onClick={() => onTabChange(tab.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {isActive && (
                <motion.span
                  layoutId="active-nav-pill"
                  className="vcard-nav-active"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
              <span className="vcard-nav-icon" aria-hidden>
                <Icon />
              </span>
              <span className="vcard-nav-label">{tab.label}</span>
            </motion.button>
          )
        })}
      </div>
    </nav>
  )
}

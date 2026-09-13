import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-5 py-5 sm:px-8 md:px-9">
      <div className="flex flex-col gap-4 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
            aria-label="GitHub"
          >
            <FaGithub aria-hidden />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
            aria-label="LinkedIn"
          >
            <FaLinkedin aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  )
}

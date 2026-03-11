import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Projects from '../components/Projects'
import TechStack from '../components/TechStack'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Projects />
      <TechStack />
      <Experience />
      <Contact />
    </main>
  )
}

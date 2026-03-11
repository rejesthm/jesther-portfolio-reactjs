import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import TechStars from './components/TechStars'

function AppContent() {
  return (
    <>
      <TechStars />
      <div className="relative z-10">
        <Navbar />
        <Home />
      </div>
    </>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <AppContent />
    </MotionConfig>
  )
}

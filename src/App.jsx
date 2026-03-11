import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function AppContent() {
  return (
    <>
      <Navbar />
      <Home />
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

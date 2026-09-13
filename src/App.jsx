import { MotionConfig } from 'framer-motion'
import Home from './pages/Home'

function AppContent() {
  return (
    <Home />
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <AppContent />
    </MotionConfig>
  )
}

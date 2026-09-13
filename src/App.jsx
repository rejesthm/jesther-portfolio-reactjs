import { MotionConfig } from 'framer-motion'
import AmbientBackdrop from './components/AmbientBackdrop'
import Home from './pages/Home'

function AppContent() {
  return (
    <>
      <AmbientBackdrop />
      <div className="relative z-10">
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

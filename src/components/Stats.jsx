import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBriefcase, FaProjectDiagram, FaLayerGroup, FaUsers } from 'react-icons/fa'
import SectionReveal from './SectionReveal'
import { staggerContainer, staggerItem, inViewOptions } from '../utils/animations'

const stats = [
  { value: 7, suffix: '+', label: 'Years Experience', icon: FaBriefcase },
  { value: 30, suffix: '+', label: 'Projects Built', icon: FaProjectDiagram },
  { value: 20, suffix: '+', label: 'Technologies Used', icon: FaLayerGroup },
  { value: 15, suffix: '+', label: 'Clients & Users', icon: FaUsers },
]

function CountUp({ value, suffix = '', isInView, duration = 1.5 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = value
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

function Icon3D({ Icon }) {
  return (
    <motion.div
      className="relative w-16 h-16 flex items-center justify-center"
      style={{ perspective: '200px' }}
    >
      {/* 3D extruded icon - gradient cube with depth shadows */}
      <motion.div
        className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-600"
        style={{
          boxShadow:
            '0 4px 0 0 rgba(88, 28, 135, 0.8), 0 8px 20px -5px rgba(139, 92, 246, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          rotateY: 20,
          rotateX: -8,
          scale: 1.08,
          transition: { duration: 0.35 },
        }}
      >
        <Icon className="text-2xl text-white drop-shadow-md relative z-10" />
      </motion.div>
    </motion.div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, inViewOptions)

  return (
    <SectionReveal
      id="stats"
      ref={ref}
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-zinc-900/40"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent pointer-events-none" aria-hidden />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            By the Numbers
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            A snapshot of my journey building software across web and mobile.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ perspective: '1000px' }}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="group relative"
            >
              <motion.div
                className="relative p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:border-violet-500/40 transition-all overflow-visible"
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{
                  y: -8,
                  rotateX: 5,
                  rotateY: -5,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-4">
                    <Icon3D Icon={stat.icon} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      isInView={isInView}
                    />
                  </div>
                  <div className="text-zinc-400 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  )
}
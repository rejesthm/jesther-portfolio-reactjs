import { motion, useReducedMotion } from 'framer-motion'

/**
 * Small light stars scattered across the background, representing technology.
 * Fixed position, sits behind all content. Respects reduced motion preference.
 */
const STARS = [
  { x: '8%', y: '12%', size: 3, delay: 0, duration: 3 },
  { x: '15%', y: '8%', size: 2, delay: 0.5, duration: 4 },
  { x: '22%', y: '25%', size: 3, delay: 1, duration: 3.5 },
  { x: '5%', y: '35%', size: 2, delay: 0.2, duration: 4.2 },
  { x: '30%', y: '5%', size: 2, delay: 1.2, duration: 3.8 },
  { x: '92%', y: '15%', size: 3, delay: 0.8, duration: 3.2 },
  { x: '88%', y: '28%', size: 2, delay: 0.3, duration: 4 },
  { x: '95%', y: '45%', size: 3, delay: 1.5, duration: 3.5 },
  { x: '78%', y: '12%', size: 2, delay: 0.6, duration: 4.5 },
  { x: '85%', y: '55%', size: 3, delay: 0.1, duration: 3 },
  { x: '45%', y: '18%', size: 2, delay: 0.9, duration: 4.2 },
  { x: '55%', y: '8%', size: 3, delay: 0.4, duration: 3.6 },
  { x: '62%', y: '32%', size: 2, delay: 1.1, duration: 4 },
  { x: '38%', y: '42%', size: 3, delay: 0.7, duration: 3.3 },
  { x: '12%', y: '65%', size: 2, delay: 1.3, duration: 4.1 },
  { x: '25%', y: '72%', size: 3, delay: 0.2, duration: 3.7 },
  { x: '70%', y: '68%', size: 2, delay: 0.5, duration: 4.3 },
  { x: '82%', y: '78%', size: 3, delay: 1, duration: 3.4 },
  { x: '18%', y: '88%', size: 2, delay: 0.8, duration: 4 },
  { x: '50%', y: '85%', size: 3, delay: 0.3, duration: 3.9 },
]

const COLORS = [
  { bg: 'bg-violet-400', glow: 'rgba(139, 92, 246, 0.5)' },
  { bg: 'bg-indigo-400', glow: 'rgba(99, 102, 241, 0.5)' },
  { bg: 'bg-cyan-400', glow: 'rgba(34, 211, 238, 0.4)' },
  { bg: 'bg-violet-300', glow: 'rgba(196, 181, 253, 0.4)' },
]

export default function TechStars() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden
    >
      {STARS.map((star, i) => {
        const color = COLORS[i % COLORS.length]
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${color.bg}`}
            style={{
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
              boxShadow: `0 0 ${star.size * 4}px 1px ${color.glow}`,
            }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.6 }
              : {
                  opacity: [0.3, 0.9, 0.3],
                  scale: [1, 1.2, 1],
                }
          }
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          />
        )
      })}
    </div>
  )
}

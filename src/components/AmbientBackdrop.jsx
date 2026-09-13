import { motion, useReducedMotion } from 'framer-motion'

const STARS = [
  { x: '7%', y: '12%', size: 2, delay: 0, duration: 3.4 },
  { x: '14%', y: '28%', size: 3, delay: 0.5, duration: 4.1 },
  { x: '24%', y: '9%', size: 2, delay: 1.1, duration: 3.8 },
  { x: '34%', y: '18%', size: 2, delay: 0.3, duration: 4.3 },
  { x: '45%', y: '7%', size: 3, delay: 0.8, duration: 3.6 },
  { x: '58%', y: '22%', size: 2, delay: 1.4, duration: 4 },
  { x: '72%', y: '11%', size: 3, delay: 0.2, duration: 3.5 },
  { x: '88%', y: '18%', size: 2, delay: 0.9, duration: 4.4 },
  { x: '94%', y: '38%', size: 3, delay: 1.2, duration: 3.7 },
  { x: '82%', y: '62%', size: 2, delay: 0.6, duration: 4.2 },
  { x: '66%', y: '78%', size: 3, delay: 0.1, duration: 3.9 },
  { x: '48%', y: '88%', size: 2, delay: 1.3, duration: 4.5 },
  { x: '28%', y: '82%', size: 3, delay: 0.7, duration: 3.6 },
  { x: '11%', y: '70%', size: 2, delay: 1, duration: 4.1 },
]

export default function AmbientBackdrop() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="ambient-backdrop" aria-hidden>
      <div className="ambient-grid" />
      <div className="ambient-ribbon ambient-ribbon-one" />
      <div className="ambient-ribbon ambient-ribbon-two" />
      <div className="ambient-vignette" />
      {STARS.map((star) => (
        <motion.span
          key={`${star.x}-${star.y}`}
          className="ambient-star"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
          }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.45 }
              : {
                  opacity: [0.22, 0.82, 0.22],
                  scale: [1, 1.35, 1],
                }
          }
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

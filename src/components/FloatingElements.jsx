import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const floatingElements = [
  {
    id: 1,
    delay: 0,
    duration: 3,
    yOffset: [0, -15, 0],
    rotate: [-2, 2, -2],
    className: 'top-8 left-8 w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 shadow-lg flex items-center justify-center',
    content: '⚛️',
  },
  {
    id: 2,
    delay: 0.5,
    duration: 4,
    yOffset: [0, -20, 0],
    rotate: [2, -2, 2],
    className: 'top-24 right-12 w-20 h-20 rounded-2xl bg-white shadow-xl border border-gray-100 flex items-center justify-center text-sm font-medium text-gray-500',
    content: 'Code',
  },
  {
    id: 3,
    delay: 1,
    duration: 3.5,
    yOffset: [0, -12, 0],
    rotate: [-1, 1, -1],
    className: 'bottom-24 left-16 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg flex items-center justify-center',
    content: '🚀',
  },
  {
    id: 4,
    delay: 0.3,
    duration: 4.2,
    yOffset: [0, -18, 0],
    rotate: [1, -1, 1],
    className: 'bottom-16 right-20 w-24 h-14 rounded-xl bg-white shadow-xl border border-gray-100 flex items-center justify-center text-xs font-medium text-gray-700',
    content: 'Build',
  },
  {
    id: 5,
    delay: 0.8,
    duration: 3.2,
    yOffset: [0, -10, 0],
    rotate: [-3, 3, -3],
    className: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-40 rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden',
    content: (
      <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white p-3">
        <div className="space-y-2">
          <div className="h-2 w-3/4 bg-gray-200 rounded" />
          <div className="h-2 w-full bg-gray-200 rounded" />
          <div className="h-2 w-1/2 bg-gray-200 rounded" />
          <div className="h-8 w-full bg-indigo-100 rounded mt-2" />
        </div>
      </div>
    ),
  },
]

export default function FloatingElements() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <div ref={containerRef} className="relative w-full h-[400px] md:h-[500px] lg:h-[550px]">
      <motion.div style={{ y }} className="relative w-full h-full">
        {floatingElements.map((el) => (
          <motion.div
            key={el.id}
            className={`absolute ${el.className}`}
            animate={{
              y: el.yOffset,
              rotate: el.rotate,
            }}
            transition={{
              duration: el.duration,
              delay: el.delay,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            {el.content}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

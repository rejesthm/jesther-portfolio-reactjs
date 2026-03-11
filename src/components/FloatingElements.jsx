import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

const floatVariants = {
  float1: { y: [0, -12, 0], transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' } },
  float2: { y: [0, -8, 0], transition: { repeat: Infinity, duration: 3.5, ease: 'easeInOut' } },
  float3: { y: [0, -10, 0], transition: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' } },
  float4: { y: [0, -6, 0], transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' } },
}

export default function FloatingElements() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const shouldReduceMotion = useReducedMotion()

  const y1 = useTransform(scrollYProgress, [0, 0.5], [0, shouldReduceMotion ? 0 : 80])
  const y2 = useTransform(scrollYProgress, [0, 0.5], [0, shouldReduceMotion ? 0 : -60])
  const y3 = useTransform(scrollYProgress, [0, 0.5], [0, shouldReduceMotion ? 0 : 40])
  const y4 = useTransform(scrollYProgress, [0, 0.5], [0, shouldReduceMotion ? 0 : -30])

  return (
    <div ref={containerRef} className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Browser window mockup */}
      <motion.div
        className="absolute right-0 top-8 w-[280px] md:w-[320px] rounded-lg overflow-hidden shadow-2xl border border-zinc-700/50 bg-zinc-900/90 backdrop-blur"
        animate={shouldReduceMotion ? {} : floatVariants.float1}
        style={{ y: y1 }}
      >
        <div className="flex items-center gap-2 px-3 py-2 bg-zinc-800/80 border-b border-zinc-700/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 mx-4 py-1 rounded bg-zinc-700/50 text-xs text-zinc-500 truncate">
            portfolio.dev
          </div>
        </div>
        <div className="p-4 space-y-2">
          <div className="h-2 w-3/4 rounded bg-zinc-700/60" />
          <div className="h-2 w-full rounded bg-zinc-700/40" />
          <div className="h-2 w-5/6 rounded bg-zinc-700/40" />
          <div className="h-2 w-1/2 rounded bg-zinc-700/40" />
        </div>
      </motion.div>

      {/* Code snippet card */}
      <motion.div
        className="absolute left-4 md:left-8 top-24 w-[220px] md:w-[260px] rounded-lg p-4 shadow-xl border border-zinc-700/50 bg-zinc-800/90 backdrop-blur"
        animate={shouldReduceMotion ? {} : floatVariants.float2}
        style={{ y: y2 }}
      >
        <div className="flex gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-indigo-500" />
          <div className="w-2 h-2 rounded-full bg-indigo-400/60" />
          <div className="w-2 h-2 rounded-full bg-indigo-400/40" />
        </div>
        <pre className="text-xs font-mono text-zinc-400 overflow-hidden">
          <code>{`const dev = {\n  stack: "React",\n  passion: true\n}`}</code>
        </pre>
      </motion.div>

      {/* Phone mockup */}
      <motion.div
        className="absolute right-16 md:right-24 bottom-16 w-[120px] md:w-[140px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-zinc-700 bg-zinc-900"
        animate={shouldReduceMotion ? {} : floatVariants.float3}
        style={{ y: y3 }}
      >
        <div className="aspect-[9/19] bg-gradient-to-b from-indigo-900/30 to-zinc-900 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-indigo-500/50 flex items-center justify-center">
            <span className="text-indigo-400 text-xl">⚡</span>
          </div>
        </div>
      </motion.div>

      {/* Small floating badge */}
      <motion.div
        className="absolute left-1/2 bottom-8 -translate-x-1/2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 backdrop-blur text-sm text-indigo-300 font-medium"
        animate={shouldReduceMotion ? {} : floatVariants.float4}
        style={{ y: y4 }}
      >
        Available for work
      </motion.div>
    </div>
  )
}

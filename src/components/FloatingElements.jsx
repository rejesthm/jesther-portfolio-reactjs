import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

const lines = [
  { prefix: '~', text: 'npm run build', color: 'text-zinc-400' },
  { prefix: '>', text: 'Building for production...', color: 'text-zinc-500' },
  { prefix: '✓', text: 'Compiled successfully', color: 'text-emerald-400' },
  { prefix: '>', text: 'portfolio@1.0.0 build', color: 'text-zinc-500' },
  { prefix: '$', text: 'Ready to ship', color: 'text-indigo-400' },
]

function TerminalTyping({ shouldReduceMotion }) {
  const [displayLength, setDisplayLength] = useState(0)
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    if (shouldReduceMotion) {
      setLineIndex(lines.length - 1)
      setDisplayLength(lines[lines.length - 1].text.length)
      return
    }

    const currentLine = lines[lineIndex]
    if (!currentLine) return

    if (displayLength < currentLine.text.length) {
      const t = setTimeout(() => setDisplayLength((d) => d + 1), 35)
      return () => clearTimeout(t)
    }
    if (lineIndex < lines.length - 1) {
      const t = setTimeout(() => {
        setLineIndex((i) => i + 1)
        setDisplayLength(0)
      }, 400)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setLineIndex(0)
      setDisplayLength(0)
    }, 2500)
    return () => clearTimeout(t)
  }, [lineIndex, displayLength, shouldReduceMotion])

  return (
    <div className="space-y-3">
      {lines.map((line, i) => (
        <div key={i} className="font-mono text-sm flex items-start gap-2">
          <span className="text-indigo-400 flex-shrink-0">{line.prefix}</span>
          <span className={line.color}>
            {i < lineIndex
              ? line.text
              : i === lineIndex
                ? line.text.slice(0, displayLength)
                : ''}
            {i === lineIndex && displayLength < line.text.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.7 }}
                className="inline-block w-2 h-4 ml-0.5 bg-indigo-400 align-middle"
              />
            )}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function FloatingElements() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const shouldReduceMotion = useReducedMotion()

  const y = useTransform(scrollYProgress, [0, 0.5], [0, shouldReduceMotion ? 0 : 60])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.25])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center"
    >
      {/* Glow */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity }}
      >
        <div className="w-96 h-96 rounded-full bg-indigo-500/20 blur-[80px]" />
      </motion.div>

      {/* Terminal */}
      <motion.div
        className="relative w-full max-w-md mx-4 rounded-2xl overflow-hidden border border-zinc-700/50 bg-zinc-900/95 backdrop-blur-xl shadow-2xl"
        style={{ y }}
        animate={
          shouldReduceMotion
            ? {}
            : { y: [0, -8, 0] }
        }
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/80 border-b border-zinc-700/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs text-zinc-500 ml-3">portfolio — zsh</span>
        </div>
        <div className="p-5 min-h-[200px]">
          <TerminalTyping shouldReduceMotion={shouldReduceMotion} />
        </div>
        <div className="px-5 py-4 border-t border-zinc-800 bg-zinc-900/50">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-indigo-400 font-medium">$</span>
            <span className="text-zinc-500">Ready to build something?</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Lazy-loads images when they enter the viewport.
 * Renders a skeleton placeholder until loaded, then fades in the image.
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  fetchPriority = 'low',
  rootMargin = '100px',
  ...props
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: rootMargin })
  const [loaded, setLoaded] = useState(false)

  return (
    <div ref={ref} className="absolute inset-0">
      {/* Skeleton placeholder */}
      {!loaded && (
        <div
          className="absolute inset-0 bg-zinc-800/80 animate-pulse"
          aria-hidden
        />
      )}
      {isInView && (
        <motion.img
          className={`absolute inset-0 w-full h-full object-cover ${className}`}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          fetchPriority={fetchPriority}
          onLoad={() => setLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          {...props}
        />
      )}
    </div>
  )
}

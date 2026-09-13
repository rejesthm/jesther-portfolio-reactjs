import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { FaChevronLeft, FaChevronRight, FaMobileAlt } from 'react-icons/fa'

export default function ProjectImageCarousel({ images, title, video, variant = 'mobile' }) {
  const isWebsite = variant === 'website'
  const isWorkflow = variant === 'workflow'
  const slideAspectClass = isWorkflow ? 'aspect-[4/3]' : isWebsite ? 'aspect-[16/10]' : 'aspect-[9/16]'
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  })
  const slides = [
    ...(video ? [{ type: 'video', src: video.src, poster: video.poster }] : []),
    ...images.map((src) => ({ type: 'image', src })),
  ]

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  if (!slides.length) {
    return (
      <div
        className={`project-placeholder-screen ${slideAspectClass}`}
        role="img"
        aria-label={`${title} screenshots pending`}
      >
        <div className="project-placeholder-status">
          <FaMobileAlt aria-hidden />
          Preview pending
        </div>
        <div className="project-placeholder-orbit" aria-hidden />
        <div className="project-placeholder-content">
          <span className="project-placeholder-kicker">Mobile project</span>
          <strong>{title}</strong>
          <span>screenshots pending</span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-2xl bg-[var(--color-smoky)]" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div
              key={`${slide.type}-${slide.src}`}
              className={`relative flex min-w-0 flex-[0_0_100%] items-center justify-center ${slideAspectClass}`}
            >
              {slide.type === 'video' ? (
                <video
                  className="h-full w-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  poster={slide.poster}
                  aria-label={`${title} demo video`}
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={slide.src}
                  alt={`${title} screenshot ${index + 1}`}
                  className={`h-full w-full ${isWebsite ? 'object-cover object-top' : 'object-contain'}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <CarouselDots emblaApi={emblaApi} length={slides.length} />
          <CarouselArrows onPrev={scrollPrev} onNext={scrollNext} />
        </>
      )}
    </div>
  )
}

function CarouselDots({ emblaApi, length }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  return (
    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
      {Array.from({ length }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => scrollTo(index)}
          className={`h-1 rounded-full transition-all duration-200 ${
            index === selectedIndex
              ? 'w-4 bg-[var(--color-accent)]'
              : 'w-1 bg-neutral-100/40 hover:bg-neutral-100/60'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}

function CarouselArrows({ onPrev, onNext }) {
  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg bg-neutral-950/70 text-neutral-100 transition-colors hover:bg-[var(--color-jet)] hover:text-[var(--color-accent)]"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="h-3 w-3" aria-hidden />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg bg-neutral-950/70 text-neutral-100 transition-colors hover:bg-[var(--color-jet)] hover:text-[var(--color-accent)]"
        aria-label="Next slide"
      >
        <FaChevronRight className="h-3 w-3" aria-hidden />
      </button>
    </>
  )
}

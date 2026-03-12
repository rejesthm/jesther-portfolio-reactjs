import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function ProjectImageCarousel({ images, title }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-t-lg bg-zinc-900" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {images.map((src, index) => (
            <div
              key={src}
              className="relative flex-[0_0_100%] min-w-0 aspect-[9/16] flex items-center justify-center"
            >
              <img
                src={src}
                alt={`${title} screenshot ${index + 1}`}
                className="w-full h-full object-contain"
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <CarouselDots emblaApi={emblaApi} length={images.length} />
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
              ? 'w-4 bg-white/90'
              : 'w-1 bg-white/40 hover:bg-white/60'
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
        className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white/90 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-3 h-3"
        >
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button
        type="button"
        onClick={onNext}
        className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white/90 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-3 h-3"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    </>
  )
}

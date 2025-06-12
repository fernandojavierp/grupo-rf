"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  { image: "/construccion-loma.webp" },
  { image: "/construccion-loma-1.webp" },
  { image: "/construccion-loma-2.webp" },
  { image: "/construccion-loma-3.webp" },
  { image: "/construccion-loma-4.webp" },
  { image: "/construccion-loma-5.webp" },
  { image: "/construccion-loma-6.webp" },
  { image: "/construccion-loma-7.webp" },
  { image: "/construccion-loma-8.webp" },
  { image: "/construccion-loma-9.webp" },
  { image: "/construccion-loma-10.webp" },
  { image: "/construccion-loma-11.webp" },
  { image: "/construccion-loma-12.webp" },
  { image: "/construccion-loma-13.webp" },
]

export function ConstruccionesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const autoplayPaused = useRef(false)

  const resetInterval = (pause = false) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (pause) {
      autoplayPaused.current = true
      setTimeout(() => {
        autoplayPaused.current = false
        startInterval()
      }, 7000) // Pausa 7 segundos tras interacción
    } else {
      startInterval()
    }
  }

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (!autoplayPaused.current) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
    }
  }

  useEffect(() => {
    startInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    resetInterval(true)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    resetInterval(true)
  }

  // Detecta swipe horizontal
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const deltaX = touchStartX.current - touchEndX.current
      if (Math.abs(deltaX) > 50) { // umbral de swipe
        if (deltaX > 0) {
          // swipe left → next slide
          nextSlide()
        } else {
          // swipe right → prev slide
          prevSlide()
        }
      }
    }
    // reset valores
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section
      className="relative w-full h-[40vh] sm:h-[60vh]"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={`Remodelación de baño - Vista ${index + 1}`}
            fill
            className="object-cover"
            priority={index === currentSlide}
            loading={index === currentSlide ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all focus:outline focus:outline-2 focus:outline-white focus:outline-offset-2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all focus:outline focus:outline-2 focus:outline-white focus:outline-offset-2"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              resetInterval(true)
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

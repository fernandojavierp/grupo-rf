"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Slide = {
  type?: "comparison"
  image?: string
  leftImage?: string
  rightImage?: string
  title: string
  description: string
}

const slides: Slide[] = [
  {
    type: "comparison",
    leftImage: "/baño-obra-gruesa.webp",
    rightImage: "/vista-interior-baño-loma-la-cruz.webp",
    title: "",
    description: "Transformación completa de espacios"
  },
  {
    type: "comparison",
    leftImage: "/escaleraexterior-diseño.png",
    rightImage: "/escalera-terminada-loma-la-cruz.webp",
    title: "",
    description: "Del plano 3D a la realidad"
  },
  {
    type: "comparison",
    leftImage: "/proyecto-camara-leis.webp",
    rightImage: "/proyecto-camara-leis-10.webp",
    title: "",
    description: "Construcción especializada"
  },
  
]

export function ServicesBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative w-full h-[60vh]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.type === "comparison" ? (
            // Comparación lado a lado
            <div className="relative w-full h-full">
              <div className="grid grid-cols-2 h-full">
                <div className="relative">
                  <Image
                    src={slide.leftImage!}
                    alt="Antes del proyecto"
                    fill
                    className="object-cover brightness-75"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-medium w-fit inline-block">
                    {index === 0 ? "Obra Gris" : index === 1 ? "Plano 3D" : "Antes"}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={slide.rightImage!}
                    alt="Después del proyecto"
                    fill
                    className="object-cover brightness-75"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-medium w-fit inline-block">
                    {index === 0 ? "Terminado" : index === 1 ? "Resultado Final" : "Después"}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 bg-black/20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transform transition-all duration-500 translate-y-0">
                  {slide.title}
                </h1>
                <p className="text-xl text-white mb-8 max-w-3xl transform transition-all duration-500 translate-y-0">
                  {slide.description}
                </p>
              </div>
            </div>
          ) : (
            // Imagen normal
            <>
              <Image
                src={slide.image!}
                alt={slide.title}
                fill
                className="object-cover brightness-50"
                priority={index === 0}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transform transition-all duration-500 translate-y-0">
                  {slide.title}
                </h1>
                <p className="text-xl text-white mb-8 max-w-3xl transform transition-all duration-500 translate-y-0">
                  {slide.description}
                </p>
              </div>
            </>
          )}
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 justify-center flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
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
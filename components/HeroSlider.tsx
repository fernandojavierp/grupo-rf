// components/HeroSlider.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  {
    src: '/prueba-escalera.jpg',
    alt: 'Obra de construcción en progreso'
  },
  {
    src: '/remodelacion-baño-0.webp',
    alt: 'Equipo de construcción trabajando'
  },
  {
    src: '/prueba-escalera-2.webp',
    alt: 'Remodelación de interiores terminada'
  },
  {
    src: '/baño-remodelado.webp',
    alt: 'Baño remodelado'
  },
  {
    src: '/baño-remodelado-1.webp',
    alt: 'Baño remodelado'
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Imágenes del slider */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            quality={90}
            sizes="100vw"
          />
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Contenido sobrepuesto */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
          Grupo RF Construcciones y Servicios
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-4xl leading-relaxed">
          Transformando espacios con calidad y profesionalismo en Santiago de Chile
        </p>
      </div>

      {/* Indicadores de navegación */}
      <div className="absolute bottom-4 md:bottom-8 w-full flex justify-center space-x-2 md:space-x-3 z-20 overflow-visible h-6 md:h-8">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
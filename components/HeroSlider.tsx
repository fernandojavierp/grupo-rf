// components/HeroSlider.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Datos de las imágenes del slider
const heroImages = [
  {
    src: '/prueba-escalera.jpg', // Reemplaza con tus imágenes reales
    alt: 'Obra de construcción en progreso'
  },
  {
    src: '/prueba-escalera-1.webp',
    alt: 'Equipo de construcción trabajando'
  },
  {
    src: '/prueba-escalera-2.webp',
    alt: 'Remodelación de interiores terminada'
  },
];

export function HeroSlider() {
  // Configuración del slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
    arrows: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ul className="flex -space-x-60">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors cursor-pointer" />
    ),
  };

  return (
    <section className="relative w-full h-[80vh]">
      {/* Slider principal */}
      <Slider {...settings} className="h-full w-full">
        {heroImages.map((image, index) => (
          <div key={index} className="relative h-[80vh] w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover brightness-50"
              priority={index === 0} // Solo la primera imagen con prioridad
              quality={80}
              sizes="100vw"
            />
          </div>
        ))}
      </Slider>
      
      {/* Contenido sobrepuesto */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 mb-4">
          Grupo RF Construcciones y Servicios
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
          Transformando espacios con calidad y profesionalismo en Santiago de Chile
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-blue-950 hover:bg-blue-900">
            <Link href="/contact" className="text-white hover:text-white">Solicitar presupuesto</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            <Link href="/projects">Ver proyectos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
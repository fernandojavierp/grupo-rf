"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  fill?: boolean
  sizes?: string
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  loading?: "lazy" | "eager"
  onLoad?: () => void
  onError?: () => void
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 85,
  fill = false,
  sizes,
  placeholder = "empty",
  blurDataURL,
  loading = "lazy",
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Generar sizes automáticamente si no se proporciona
  const autoSizes = sizes || (
    fill 
      ? "100vw" 
      : width 
        ? `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, ${width}px`
        : "100vw"
  )

  // Placeholder blur mejorado
  const defaultBlurData = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setImageError(true)
    onError?.()
  }

  // Si hay error, mostrar imagen por defecto o placeholder
  if (imageError) {
    return (
      <div 
        className={cn(
          "bg-gray-200 flex items-center justify-center text-gray-400",
          className
        )}
        style={{ width, height }}
      >
        <span className="text-sm">Error al cargar imagen</span>
      </div>
    )
  }

  // Next.js Image ya maneja AVIF/WebP automáticamente
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      quality={quality}
      priority={priority}
      loading={loading}
      sizes={autoSizes}
      placeholder={placeholder}
      blurDataURL={blurDataURL || defaultBlurData}
      className={cn(
        "transition-opacity duration-300",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
      onLoad={handleLoad}
      onError={handleError}
      style={{
        objectFit: "cover",
      }}
    />
  )
}

// Componente para imágenes responsive automáticas
interface ResponsiveImageProps extends Omit<OptimizedImageProps, 'width' | 'height'> {
  aspectRatio?: 'square' | 'video' | 'wide' | 'portrait' | number
  maxWidth?: number
}

export function ResponsiveImage({ 
  aspectRatio = 'video', 
  maxWidth = 1920,
  className,
  ...props 
}: ResponsiveImageProps) {
  const getAspectRatioClass = (ratio: typeof aspectRatio) => {
    if (typeof ratio === 'number') {
      return { aspectRatio: ratio }
    }
    
    switch (ratio) {
      case 'square': return 'aspect-square'
      case 'video': return 'aspect-video'
      case 'wide': return 'aspect-[21/9]'
      case 'portrait': return 'aspect-[3/4]'
      default: return 'aspect-video'
    }
  }

  return (
    <div className={cn("relative w-full", getAspectRatioClass(aspectRatio), className)}>
      <OptimizedImage
        {...props}
        fill
        sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, ${maxWidth}px`}
      />
    </div>
  )
} 
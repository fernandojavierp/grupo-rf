import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LomaSlider } from "@/components/LomaSlider"

export default function LomaLaCruzPage() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-950 text-gray-300">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
          Casa Loma La Cruz
        </h1>
        <p className="text-base sm:text-lg text-center text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          Remodelación integral del baño, patio exterior, fachada de piscina, construcción de gimnasio y escalera exterior.
        </p>
        
        {/* Image Carousel */}
        <div className="mb-8 h-132 sm:mb-12 lg:h-200 sm:h-132 md:h-150 rounded-lg overflow-hidden shadow-2xl">
          <LomaSlider />
        </div>
        
        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          
          <div className="md:col-span-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Descripción del proyecto</h2>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              Este proyecto residencial en el sector de Providencia consistió en una transformación integral de la vivienda, abarcando tanto espacios interiores como exteriores. Se realizó una remodelación completa del baño principal, modernizando todos sus elementos y acabados para crear un ambiente más funcional y contemporáneo.
            </p>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              En el área exterior, se remodeló completamente el patio exterior, mejorando su funcionalidad y estética. Se renovó la fachada de la piscina, creando un espacio más atractivo y funcional para el disfrute familiar. Como elemento destacado, se construyó un gimnasio completo con todos los acabados necesarios para el entrenamiento en casa.
            </p>
            <p className="text-sm sm:text-base text-gray-400">
              Uno de los elementos más importantes del proyecto fue la construcción de una escalera exterior que conecta diferentes niveles de la propiedad, mejorando la circulación y añadiendo un elemento arquitectónico distintivo. Todos los trabajos se realizaron con materiales de alta calidad y un diseño que mantiene la coherencia visual de toda la propiedad.
            </p>
          </div>
          
          <div>
            <div className="bg-blue-900 p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Detalles del proyecto</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <span className="font-semibold text-gray-300 w-20 sm:w-24 text-sm sm:text-base">Categoría:</span>
                  <span className="text-sm sm:text-base">Residencial</span>
                </li>
                <li className="flex items-center">
                  <span className="font-semibold text-gray-300 w-20 sm:w-24 text-sm sm:text-base">Ubicación:</span>
                  <span className="text-sm sm:text-base">Providencia, Santiago</span>
                </li>
                <li className="flex items-center">
                  <span className="font-semibold text-gray-300 w-20 sm:w-24 text-sm sm:text-base">Servicios:</span>
                  <span className="text-sm sm:text-base">Remodelación, Construcción</span>
                </li>
                <li className="flex items-center">
                  <span className="font-semibold text-gray-300 w-20 sm:w-24 text-sm sm:text-base">Área:</span>
                  <span className="text-sm sm:text-base">180 m²</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Back to Projects Button */}
        <div className="text-center mt-12 sm:mt-16">
          <Button asChild variant="outline" className="border-gray-400 text-gray-300 hover:bg-blue-800 hover:text-white">
            <Link href="/projects">Volver a proyectos</Link>
          </Button>
        </div>
        
      </div>
    </div>
  )
}
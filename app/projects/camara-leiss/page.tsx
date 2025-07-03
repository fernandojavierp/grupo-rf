import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CamaraLeissSlider } from "@/components/CamaraLeissSlider"

export default function CamaraLeissPage() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-950 text-gray-300">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
          Proyecto Cámara Leiss
        </h1>
        <p className="text-base sm:text-lg text-center text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          Construcción y habilitación de horno industrial para procesos de secado y curado.
        </p>
        
        {/* Image Carousel */}
        <div className="mb-8 sm:mb-12 h-[400px] sm:h-[320px] md:h-[400px] lg:h-[700px] rounded-lg overflow-hidden shadow-2xl">
          <CamaraLeissSlider />
        </div>
        
        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          
          <div className="md:col-span-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Descripción del proyecto</h2>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              Este proyecto industrial consistió en la construcción y habilitación completa de un horno industrial especializado para procesos de secado y curado. El proyecto requirió un alto nivel de precisión técnica y conocimiento en sistemas de control de temperatura y ventilación industrial.
            </p>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              Se construyó una estructura metálica robusta que soporta las altas temperaturas requeridas para los procesos industriales. El sistema de control de temperatura fue diseñado e implementado para mantener condiciones óptimas durante todo el proceso de secado y curado, garantizando la calidad del producto final.
            </p>
            <p className="text-sm sm:text-base text-gray-400">
              El proyecto incluyó la instalación de sistemas de ventilación especializados, aislamiento térmico de alta eficiencia y controles automatizados para monitorear y regular las condiciones internas del horno. Todos los materiales utilizados fueron seleccionados para cumplir con los estándares industriales más exigentes.
            </p>
          </div>
          
          <div>
            <div className="bg-blue-900 p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Detalles del proyecto</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <span className="font-semibold text-gray-300 w-20 sm:w-24 text-sm sm:text-base">Categoría:</span>
                  <span className="text-sm sm:text-base">Industrial</span>
                </li>
                <li className="flex items-center">
                  <span className="font-semibold text-gray-300 w-20 sm:w-24 text-sm sm:text-base">Ubicación:</span>
                  <span className="text-sm sm:text-base">Santiago, Chile</span>
                </li>
                <li className="flex items-center">
                  <span className="font-semibold text-gray-300 w-20 sm:w-24 text-sm sm:text-base">Servicios:</span>
                  <span className="text-sm sm:text-base">Construcción Industrial</span>
                </li>
                <li className="flex items-center">
                  <span className="font-semibold text-gray-300 w-20 sm:w-24 text-sm sm:text-base">Capacidad:</span>
                  <span className="text-sm sm:text-base">500 m³</span>
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
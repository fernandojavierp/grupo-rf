import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function LomaLaCruzPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="/banner-loma-la-cruz.webp"
          alt="Proyecto Loma La Cruz"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Proyecto Loma La Cruz</h1>
          <p className="text-xl text-white mb-8 max-w-3xl">
            Un proyecto residencial exclusivo que combina diseño moderno con comodidad
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <Button
            asChild
            variant="ghost"
            className="mb-8 hover:bg-blue-50"
          >
            <Link href="/projects" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Volver a Proyectos
            </Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-6">Descripción del Proyecto</h2>
              <p className="text-gray-600 mb-6">
                Loma La Cruz es un proyecto residencial exclusivo ubicado en una de las zonas más privilegiadas de Santiago. 
                Este desarrollo combina la arquitectura moderna con espacios funcionales, ofreciendo una experiencia de vida única 
                para sus residentes.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold mb-2">Ubicación</h3>
                  <p className="text-gray-600">Las Condes, Santiago</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Área Total</h3>
                  <p className="text-gray-600">2,500 m²</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Duración</h3>
                  <p className="text-gray-600">18 meses</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tipo</h3>
                  <p className="text-gray-600">Residencial</p>
                </div>
              </div>
              <h3 className="font-semibold mb-4">Características Principales</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                <li>Diseño arquitectónico moderno y sustentable</li>
                <li>Amplios espacios verdes y áreas comunes</li>
                <li>Sistema de seguridad 24/7</li>
                <li>Acabados de primera calidad</li>
                <li>Vista panorámica a la ciudad</li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/vista-exterior-loma-la-cruz.webp"
                  alt="Vista exterior Loma La Cruz"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/vista-interior-baño-loma-la-cruz.webp"
                    alt="Interiores Loma La Cruz"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/area-comun-piscina-loma-la-cruz.webp"
                    alt="Áreas comunes Loma La Cruz"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/gimnasio-loma-la-cruz-1.webp"
                    alt="Gimnasio"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/escalera-terminada-loma-la-cruz.webp"
                    alt="Vista de escalera exterior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Detalles del Proyecto</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Diseño Arquitectónico</h3>
              <p className="text-gray-600">
                El diseño incorpora elementos modernos con líneas limpias y materiales contemporáneos, 
                creando un equilibrio perfecto entre estética y funcionalidad.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Sustentabilidad</h3>
              <p className="text-gray-600">
                El proyecto incluye sistemas de eficiencia energética, recolección de agua lluvia 
                y materiales ecológicos para minimizar el impacto ambiental.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Amenidades</h3>
              <p className="text-gray-600">
                Los residentes disfrutan de áreas comunes como gimnasio, piscina 
                y jardines diseñados para el esparcimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-blue-950 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">¿Interesado en este proyecto?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos para obtener más información sobre Loma La Cruz y descubre tu próximo hogar
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-950"
          >
            <Link href="/contact">Contactar Ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
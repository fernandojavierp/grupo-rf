import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BeforeAfterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh]">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Antes y después de proyectos"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Antes y Después</h1>
          <p className="text-xl text-white mb-8 max-w-3xl">
            Descubre las transformaciones que hemos realizado para nuestros clientes
          </p>
        </div>
      </section>

      {/* Before & After Projects */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          {transformations.map((transformation, index) => (
            <div key={index} className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{transformation.title}</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={transformation.before || "/placeholder.svg"}
                    alt={`Antes - ${transformation.title}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-black/70 text-white px-4 py-2 text-sm font-medium">
                    Antes
                  </div>
                </div>
                <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={transformation.after || "/placeholder.svg"}
                    alt={`Después - ${transformation.title}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-orange-600 text-white px-4 py-2 text-sm font-medium">
                    Después
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Descripción del Proyecto</h3>
                <p className="text-gray-600 mb-4">{transformation.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Duración</h4>
                    <p>{transformation.duration}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Ubicación</h4>
                    <p>{transformation.location}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Tipo</h4>
                    <p>{transformation.type}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Área</h4>
                    <p>{transformation.area}</p>
                  </div>
                </div>
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link href={`/before-after/${transformation.id}`}>Ver Más Detalles</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quieres transformar tu espacio?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Contáctanos hoy para una consulta gratuita y comienza a hacer realidad tu proyecto
          </p>
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
            <Link href="/contact">Solicitar Presupuesto</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

// Sample data
const transformations = [
  {
    id: "kitchen-remodel",
    title: "Remodelación de Cocina",
    before: "/placeholder.svg?height=600&width=800",
    after: "/placeholder.svg?height=600&width=800",
    description:
      "Transformación completa de una cocina anticuada a un espacio moderno y funcional. Se reemplazaron los gabinetes, encimeras, electrodomésticos y se instaló nueva iluminación para crear un ambiente más luminoso y acogedor.",
    duration: "3 semanas",
    location: "Providencia",
    type: "Residencial",
    area: "18m²",
  },
  {
    id: "bathroom-renovation",
    title: "Renovación de Baño Principal",
    before: "/placeholder.svg?height=600&width=800",
    after: "/placeholder.svg?height=600&width=800",
    description:
      "Renovación completa de un baño principal con nuevos azulejos, sanitarios, ducha y muebles. Se optimizó el espacio para crear un ambiente más amplio y se incorporaron elementos de diseño contemporáneo.",
    duration: "2 semanas",
    location: "Las Condes",
    type: "Residencial",
    area: "12m²",
  },
  {
    id: "living-room-makeover",
    title: "Transformación de Sala de Estar",
    before: "/placeholder.svg?height=600&width=800",
    after: "/placeholder.svg?height=600&width=800",
    description:
      "Rediseño completo de una sala de estar para crear un espacio más acogedor y funcional. Se renovaron los pisos, se instaló nueva iluminación y se incorporaron elementos decorativos para darle personalidad al espacio.",
    duration: "4 semanas",
    location: "Ñuñoa",
    type: "Residencial",
    area: "30m²",
  },
]

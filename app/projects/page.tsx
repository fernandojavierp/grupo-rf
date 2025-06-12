import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh]">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Proyectos de construcción"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Nuestros Proyectos</h1>
          <p className="text-xl text-white mb-8 max-w-3xl">
            Descubre nuestro portafolio de proyectos exitosos en Santiago de Chile
          </p>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-8 px-4 md:px-6 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="ghost" className="rounded-full">
              Todos
            </Button>
            <Button variant="ghost" className="rounded-full">
              Residencial
            </Button>
            <Button variant="ghost" className="rounded-full">
              Comercial
            </Button>
            <Button variant="ghost" className="rounded-full">
              Remodelaciones
            </Button>
            <Button variant="ghost" className="rounded-full">
              Construcciones
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-64">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{project.category}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/projects/${project.id}`}>Ver Detalles</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="bg-orange-600 text-white hover:bg-orange-700">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tienes un proyecto en mente?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Contáctanos hoy para discutir cómo podemos ayudarte a hacer realidad tu visión
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
const projects = [
  {
    id: "loma-la-cruz",
    title: "Loma La Cruz",
    category: "Residencial",
    description: "Remodelación completa de casa de 180m² en el sector de Providencia.",
    image: "/vista-exterior-loma-la-cruz.webp",
  },
  {
    id: "oficinas-las-condes",
    title: "Oficinas Las Condes",
    category: "Comercial",
    description: "Diseño y construcción de oficinas corporativas de 250m² en Las Condes.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "departamento-nunoa",
    title: "Departamento Ñuñoa",
    category: "Residencial",
    description: "Renovación integral de departamento de 90m² en el corazón de Ñuñoa.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

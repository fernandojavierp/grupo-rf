import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Proyectos de Construcción y Remodelación | Grupo RF",
  description: "Conoce nuestros proyectos destacados de construcción, remodelación y diseño en Santiago de Chile. Casas, oficinas y espacios comerciales transformados.",
  openGraph: {
    title: "Proyectos de Construcción y Remodelación | Grupo RF",
    description: "Conoce nuestros proyectos destacados de construcción, remodelación y diseño en Santiago de Chile. Casas, oficinas y espacios comerciales transformados.",
    url: "https://gruporf.cl/projects",
    siteName: "Grupo RF",
    images: [
      {
        url: "/vista-exterior-loma-la-cruz.webp",
        width: 1200,
        height: 630,
        alt: "Proyectos Grupo RF"
      }
    ],
    locale: "es_CL",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyectos de Construcción y Remodelación | Grupo RF",
    description: "Conoce nuestros proyectos destacados de construcción, remodelación y diseño en Santiago de Chile. Casas, oficinas y espacios comerciales transformados.",
    images: ["/vista-exterior-loma-la-cruz.webp"]
  }
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-950 text-gray-300">
      {/* Hero Section */}
      <section className="relative w-full h-[30vh] sm:h-[40vh]">
        <div className="absolute inset-0 grid grid-cols-3">
          <div className="relative">
            <Image
              src="/vista-exterior-loma-la-cruz.webp"
              alt="Proyecto Loma La Cruz - Vista Exterior"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative">
            <Image
              src="/proyecto-camara-leis-10.webp"
              alt="Horno Industrial Cámara Leiss"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative">
            <Image
              src="/area-comun-piscina-loma-la-cruz.webp"
              alt="Área Común Piscina Loma La Cruz"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 bg-black/40">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Nuestros proyectos</h1>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl px-4">
            Conoce algunos de los proyectos que hemos completado con éxito.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="block"
              >
                <div
                  className="bg-blue-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer mt-5"
                >
                  <div className="relative h-48 sm:h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-4">{project.description}</p>
                    <Button asChild variant="outline" className="border-gray-400 text-gray-300 hover:bg-blue-800 hover:text-white group">
                      <span>
                        Ver Proyecto
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Data for the projects
const projects = [
  {
    id: "loma-la-cruz",
    title: "Casa Loma La Cruz",
    description: "Remodelación integral del baño, patio exterior, fachada de piscina, construcción de gimnasio y escalera exterior.",
    image: "/vista-exterior-loma-la-cruz.webp",
  },
  {
    id: "camara-leiss",
    title: "Proyecto Cámara Leiss",
    description: "Construcción y habilitación de horno industrial para procesos de secado y curado.",
    image: "/proyecto-camara-leis.webp",
  },
]

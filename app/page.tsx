import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import {HeroSlider} from '@/components/HeroSlider';
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden overflow-y-auto">
      {/* Hero Section */}
      <HeroSlider />

      {/* About Us Section */}
      <section className="py-12 sm:py-16 px-4 md:px-6 bg-blue-950 text-gray-300">
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">¿Quiénes somos?</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-center px-4">
            En Grupo RF, somos un equipo de profesionales apasionados por la construcción y remodelación. Nos
            especializamos en crear espacios únicos y funcionales que reflejan la personalidad de nuestros
            clientes. Con más de 10 años de experiencia en el rubro, garantizamos calidad y compromiso en cada
            proyecto.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 px-4 md:px-6 bg-blue-900 text-gray-300">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Nuestros servicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 0.1}>
                <Link href={`/services#${service.id}`} className="block">
                  <div className="rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow bg-blue-950 min-h-56 sm:min-h-64 flex flex-col cursor-pointer">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8" /> 
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm sm:text-base mb-4 text-gray-400 flex-1">{service.description}</p>
                    <span className="font-medium flex items-center group hover:text-white mt-auto text-sm sm:text-base">
                      Ver más
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-all" />
                    </span>
                  </div>
                </Link>
              </ScrollAnimationWrapper>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Button asChild size="lg" className="bg-blue-950 hover:bg-white hover:text-blue-950">
              <Link href="/services">Todos los servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 sm:py-16 px-4 md:px-6 bg-blue-950 text-gray-300">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Proyectos destacados</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {featuredProjects.map((project, index) => (
              <ScrollAnimationWrapper key={project.id} delay={index * 0.1}>
                <Link href={`/projects/${project.id}`} className="block">
                  <div
                    className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-blue-900 cursor-pointer min-h-80 sm:min-h-96 flex flex-col"
                  >
                    <div className="relative h-48 sm:h-64 flex-shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 sm:p-6 flex flex-col flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm sm:text-base text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                    </div>
                  </div>
                </Link>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 sm:py-16 px-4 md:px-6 bg-blue-900 text-gray-300">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">¿Listo para transformar tu espacio?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Contáctanos hoy para una consulta gratuita y comienza a hacer realidad tu proyecto
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
          >
            <Link href="/contact" className="bg-blue-950 hover:bg-white hover:text-blue-950">Contactar ahora</Link>
          </Button>
        </div>
      </section>

    </div>
  )
}

// Sample data
const services = [
  {
    id: "remodelaciones",
    title: "Remodelaciones",
    description: "Transformamos espacios existentes con diseños modernos y funcionales adaptados a tus necesidades.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    id: "construcciones",
    title: "Construcciones",
    description: "Construimos elementos estructurales con los más altos estándares de calidad y durabilidad.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      </svg>
    ),
  },
  {
    id: "diseno",
    title: "Diseño",
    description: "Creamos planos 3D detallados que te permiten ver tu proyecto antes de construirlo, garantizando precisión y funcionalidad.",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
]

const featuredProjects = [
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
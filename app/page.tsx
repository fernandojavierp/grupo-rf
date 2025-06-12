import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import {HeroSlider} from '@/components/HeroSlider';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <HeroSlider />

      {/* About Us Section */}
      <section className="py-16 px-4 md:px-6 bg-blue-950 text-gray-300">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">¿Quiénes Somos?</h2>
          <p className="text-lg max-w-2xl mx-auto text-center">
            En Grupo RF, somos un equipo de profesionales apasionados por la construcción y remodelación. Nos
            especializamos en crear espacios únicos y funcionales que reflejan la personalidad de nuestros
            clientes. Con más de 10 años de experiencia en el rubro, garantizamos calidad y compromiso en cada
            proyecto.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 md:px-6 bg-blue-900 text-gray-300">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-blue-950">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8" /> 
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <Link href={`/services#${service.id}`} className="font-medium flex items-center group hover:text-blue-500">
                  Ver más
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-950 hover:bg-blue-900">
              <Link href="/services">Todos los servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 md:px-6 bg-blue-950 text-gray-300">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-md transition-shadow bg-blue-900"
              >
                <div className="relative h-64">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="font-medium flex items-center group hover:text-blue-500"
                  >
                    Ver proyecto
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 px-4 md:px-6 bg-blue-900 text-gray-300">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Antes y Después</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Antes y después de remodelación"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Remodelación Completa de Cocina</h3>
                  <p className="mb-4">Transformación total en 3 semanas</p>
                  <Link href="/before-after/kitchen" className="font-medium flex items-center group hover:text-blue-500">
                    Ver transformación
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Antes y después de remodelación"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Renovación de Baño Principal</h3>
                  <p className="mb-4">Modernización completa en 2 semanas</p>
                  <Link href="/before-after/bathroom" className="font-medium flex items-center group hover:text-blue-500">
                    Ver transformación
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-950 hover:bg-white/10">
              <Link href="/before-after">Ver Más Transformaciones</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-6 bg-blue-950 text-gray-300">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-lg shadow-sm bg-blue-900 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 md:px-6 bg-blue-900 text-gray-300">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar tu espacio?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy para una consulta gratuita y comienza a hacer realidad tu proyecto
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
          >
            <Link href="/contact" className="bg-blue-950 hover:bg-white hover:text-blue-950">Contactar Ahora</Link>
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
    description: "Construimos proyectos residenciales y comerciales con los más altos estándares de calidad.",
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
    title: "Diseño de Interiores",
    description: "Creamos espacios estéticos y funcionales que reflejan tu estilo y personalidad.",
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
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
]

const featuredProjects = [
  {
    id: "loma-la-cruz",
    title: "Loma La Cruz",
    description: "Remodelación completa de casa de 180m² en el sector de Providencia.",
    image: "/prueba-escalera.jpg",
  },
  {
    id: "oficinas-las-condes",
    title: "Oficinas Las Condes",
    description: "Diseño y construcción de oficinas corporativas de 250m² en Las Condes.",
    image: "/prueba-escalera-1.webp",
  },
  {
    id: "departamento-nunoa",
    title: "Departamento Ñuñoa",
    description: "Renovación integral de departamento de 90m² en el corazón de Ñuñoa.",
    image: "/prueba-escalera-2.webp",
  },
]

const testimonials = [
  {
    name: "Carolina Méndez",
    location: "Providencia",
    text: "Excelente trabajo en la remodelación de nuestra cocina. El equipo fue muy profesional y cumplieron con los plazos establecidos.",
    avatar: "/prueba-escalera-2.webp",
  },
  {
    name: "Rodrigo Fuentes",
    location: "Las Condes",
    text: "Contratamos a Grupo RF para remodelar nuestras oficinas y quedamos muy satisfechos con el resultado. Recomendados al 100%.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "María José Tapia",
    location: "Ñuñoa",
    text: "La renovación de nuestro departamento superó nuestras expectativas. Excelente atención y calidad en los acabados.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]
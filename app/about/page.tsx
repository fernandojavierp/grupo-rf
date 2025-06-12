import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh]">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Sobre nosotros"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-white mb-8 max-w-3xl">Conoce más sobre Grupo RF Remodelaciones y Construcciones</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                Grupo RF Remodelaciones y Construcciones fue fundado en 2010 por un equipo de profesionales con amplia
                experiencia en el sector de la construcción y remodelación en Santiago de Chile.
              </p>
              <p className="text-gray-600 mb-4">
                Desde nuestros inicios, nos hemos dedicado a ofrecer servicios de alta calidad, enfocándonos en la
                satisfacción del cliente y en la excelencia en cada proyecto que emprendemos.
              </p>
              <p className="text-gray-600 mb-6">
                A lo largo de los años, hemos crecido y evolucionado, ampliando nuestra cartera de servicios y nuestro
                equipo de profesionales, pero manteniendo siempre nuestros valores fundamentales: calidad, compromiso y
                profesionalismo.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Calidad</h3>
                    <p className="text-sm text-gray-600">En cada detalle de nuestro trabajo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Compromiso</h3>
                    <p className="text-sm text-gray-600">Con los plazos y presupuestos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Profesionalismo</h3>
                    <p className="text-sm text-gray-600">En cada etapa del proyecto</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Innovación</h3>
                    <p className="text-sm text-gray-600">En técnicas y materiales</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Equipo de Grupo RF"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 md:px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-gray-600 mb-4">
                Transformar espacios con calidad y profesionalismo, superando las expectativas de nuestros clientes a
                través de soluciones innovadoras y personalizadas que mejoren su calidad de vida y valoricen sus
                propiedades.
              </p>
              <p className="text-gray-600">
                Nos comprometemos a utilizar materiales de alta calidad, aplicar técnicas modernas y contar con un
                equipo altamente capacitado para garantizar resultados excepcionales en cada proyecto.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-gray-600 mb-4">
                Ser reconocidos como la empresa líder en remodelaciones y construcciones en Santiago de Chile,
                destacándonos por nuestra excelencia, innovación y compromiso con la satisfacción del cliente.
              </p>
              <p className="text-gray-600">
                Aspiramos a expandir nuestra presencia en el mercado nacional, manteniendo siempre nuestros estándares
                de calidad y servicio personalizado que nos han caracterizado desde nuestros inicios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por Qué Elegirnos?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nos distinguimos por ofrecer un servicio integral y de calidad en cada uno de nuestros proyectos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Award className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">
                Utilizamos materiales de primera calidad y contamos con profesionales altamente capacitados para
                garantizar resultados excepcionales.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Equipo Profesional</h3>
              <p className="text-gray-600">
                Nuestro equipo está formado por arquitectos, ingenieros, diseñadores y técnicos con amplia experiencia
                en el sector.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Clock className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cumplimiento de Plazos</h3>
              <p className="text-gray-600">
                Nos comprometemos a cumplir con los plazos establecidos, respetando el cronograma acordado con el
                cliente.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-12 w-12 text-orange-600 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Garantía en Nuestro Trabajo</h3>
              <p className="text-gray-600">
                Ofrecemos garantía en todos nuestros trabajos, brindando tranquilidad y seguridad a nuestros clientes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-12 w-12 text-orange-600 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Presupuestos Transparentes</h3>
              <p className="text-gray-600">
                Elaboramos presupuestos detallados y transparentes, sin costos ocultos ni sorpresas durante el
                desarrollo del proyecto.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-12 w-12 text-orange-600 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Atención Personalizada</h3>
              <p className="text-gray-600">
                Brindamos un servicio personalizado, adaptándonos a las necesidades y preferencias específicas de cada
                cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contamos con un equipo de profesionales altamente capacitados y comprometidos con la excelencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-80">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-orange-600 mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-orange-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para trabajar con nosotros?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy para una consulta gratuita y comienza a hacer realidad tu proyecto
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-orange-600"
          >
            <Link href="/contact">Contactar Ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

// Sample data
const teamMembers = [
  {
    name: "Roberto Fuentes",
    position: "Director General",
    bio: "Con más de 20 años de experiencia en el sector de la construcción, Roberto lidera nuestro equipo con visión y compromiso.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Carolina Méndez",
    position: "Arquitecta Jefe",
    bio: "Especialista en diseño residencial y comercial, Carolina aporta creatividad y funcionalidad a cada proyecto.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Javier Rojas",
    position: "Ingeniero Civil",
    bio: "Experto en estructuras y gestión de proyectos, Javier garantiza la solidez y seguridad de nuestras construcciones.",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "María Torres",
    position: "Diseñadora de Interiores",
    bio: "Con un ojo para el detalle y las tendencias actuales, María crea espacios estéticos y funcionales.",
    image: "/placeholder.svg?height=400&width=300",
  },
]

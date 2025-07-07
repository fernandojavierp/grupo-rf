import type { Metadata } from "next"
import Image from "next/image"
import { Award, Users, Handshake } from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre Nosotros | Grupo RF Construcciones y Servicios",
  description: "Conoce la historia y misión de Grupo RF. Más de 10 años de experiencia en construcción y remodelación en Santiago de Chile. Equipo profesional comprometido con la calidad.",
  openGraph: {
    title: "Sobre Nosotros | Grupo RF Construcciones y Servicios",
    description: "Conoce la historia y misión de Grupo RF. Más de 10 años de experiencia en construcción y remodelación en Santiago de Chile. Equipo profesional comprometido con la calidad.",
    url: "https://gruporf.cl/about",
    siteName: "Grupo RF",
    images: [
      {
        url: "/banner-servicios.webp",
        width: 1200,
        height: 630,
        alt: "Sobre Grupo RF"
      }
    ],
    locale: "es_CL",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros | Grupo RF Construcciones y Servicios",
    description: "Conoce la historia y misión de Grupo RF. Más de 10 años de experiencia en construcción y remodelación en Santiago de Chile. Equipo profesional comprometido con la calidad.",
    images: ["/banner-servicios.webp"]
  }
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-950 text-gray-300">
      {/* Hero Section */}
      <section className="relative w-full h-[30vh] sm:h-[40vh]">
        <Image
          src="/banner-servicios.webp" 
          alt="Equipo de Grupo RF trabajando en un proyecto"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 bg-black/30">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Sobre Grupo RF</h1>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl px-4">Construyendo confianza a través de la calidad y el compromiso.</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Nuestra historia</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                Fundada en 2019, Grupo RF nació de la pasión por la construcción y el diseño. Con más de una década de experiencia, hemos consolidado un equipo de profesionales dedicados a transformar ideas en realidad, ejecutando cada proyecto con los más altos estándares de calidad y precisión.
              </p>
              <p className="text-sm sm:text-base text-gray-400">
                Nuestro recorrido nos ha permitido especializarnos en una amplia gama de servicios, desde remodelaciones integrales hasta la construcción de proyectos comerciales complejos, siempre con el objetivo de superar las expectativas de nuestros clientes.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <Image
                src="/proyecto-camara-leis-3.webp" 
                alt="Detalle de construcción de estructura metálica"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 px-4 md:px-6 bg-blue-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div className="p-2 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Nuestra misión</h2>
              <p className="text-sm sm:text-base text-gray-400">
                Ofrecer soluciones integrales en construcción y remodelación, materializando los proyectos de nuestros clientes con un servicio personalizado, eficiente y de máxima calidad, asegurando la durabilidad y el valor de cada obra.
              </p>
            </div>
            <div className="p-2 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Nuestra visión</h2>
              <p className="text-sm sm:text-base text-gray-400">
                Ser la empresa constructora líder y de mayor confianza en la región, reconocida por nuestra innovación, integridad y el compromiso inquebrantable con la satisfacción de quienes nos eligen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">¿Por qué elegirnos?</h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4">
              Nuestra experiencia, profesionalismo y atención al detalle nos distinguen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-blue-900 p-4 sm:p-6 rounded-lg text-center transform hover:-translate-y-2 mt-5 transition-transform duration-300">
              <Award className="h-8 w-8 sm:h-10 sm:w-10 text-white mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Calidad garantizada</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Utilizamos materiales de primera y aplicamos los más altos estándares en cada proyecto.
              </p>
            </div>
            <div className="bg-blue-900 p-4 sm:p-6 rounded-lg text-center transform hover:-translate-y-2 mt-5 transition-transform duration-300">
              <Users className="h-8 w-8 sm:h-10 sm:w-10 text-white mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Equipo profesional</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Contamos con expertos en cada área para asegurar resultados impecables.
              </p>
            </div>
            <div className="bg-blue-900 p-4 sm:p-6 rounded-lg text-center transform hover:-translate-y-2 mt-5 transition-transform duration-300">
              <Handshake className="h-8 w-8 sm:h-10 sm:w-10 text-white mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Compromiso total</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Nos involucramos en tu proyecto como si fuera nuestro, de principio a fin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

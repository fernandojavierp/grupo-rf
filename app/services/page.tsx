import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wrench, Building2, Box, CheckCircle } from "lucide-react"
import { ServicesBanner } from "@/components/ServicesBanner"
import { RemodelacionesSlider } from "@/components/RemodelacionesSlider"
import { ConstruccionesSlider } from "@/components/ConstruccionesSlider"
import { DisenoSlider } from "@/components/DisenoSlider"

export const metadata: Metadata = {
  title: "Servicios de Construcción y Remodelación | Grupo RF",
  description: "Descubre todos los servicios de construcción, remodelación y diseño que Grupo RF ofrece en Santiago de Chile. Calidad garantizada en cada proyecto.",
  openGraph: {
    title: "Servicios de Construcción y Remodelación | Grupo RF",
    description: "Descubre todos los servicios de construcción, remodelación y diseño que Grupo RF ofrece en Santiago de Chile. Calidad garantizada en cada proyecto.",
    url: "https://gruporf.cl/services",
    siteName: "Grupo RF",
    images: [
      {
        url: "/grupo-rf-logo.png",
        width: 1200,
        height: 630,
        alt: "Grupo RF Servicios"
      }
    ],
    locale: "es_CL",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Construcción y Remodelación | Grupo RF",
    description: "Descubre todos los servicios de construcción, remodelación y diseño que Grupo RF ofrece en Santiago de Chile. Calidad garantizada en cada proyecto.",
    images: ["/grupo-rf-logo.png"]
  }
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full overflow-x-visible overflow-y-visible">
              {/* Hero Section */}
        <section className="relative w-full h-[400px] sm:h-[320px] md:h-[400px] lg:h-[428px] mb-0 overflow-visible">
        <ServicesBanner />
      </section>
      
      {/* Quick Navigation */}
      <section className="py-12 sm:py-16 px-4 md:px-6 bg-blue-900 z-10">
        <div className="container mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">Nuestros servicios</h2>
            <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-3xl mx-auto px-4">
              Descubre nuestra amplia gama de servicios de construcción y remodelación
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mt-10 mx-auto">
            <Link 
              href="#remodelaciones" 
              className="group flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-blue-950 rounded-xl hover:bg-blue-800 transition-all duration-300 text-white shadow-lg hover:shadow-xl hover:-translate-y-2 min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-800 rounded-full flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:bg-blue-700 transition-colors">
                <Wrench className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              </div>
              <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-center leading-tight">Remodelaciones</span>
              <p className="text-xs sm:text-sm lg:text-base text-blue-200 text-center mt-2 sm:mt-3 opacity-0 group-hover:opacity-100 transition-opacity leading-tight">
                Transformamos espacios existentes
              </p>
            </Link>
            
            <Link 
              href="#construcciones" 
              className="group flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-blue-950 rounded-xl hover:bg-blue-800 transition-all duration-300 text-white shadow-lg hover:shadow-xl hover:-translate-y-2 min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-800 rounded-full flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:bg-blue-700 transition-colors">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              </div>
              <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-center leading-tight">Construcciones</span>
              <p className="text-xs sm:text-sm lg:text-base text-blue-200 text-center mt-2 sm:mt-3 opacity-0 group-hover:opacity-100 transition-opacity leading-tight">
                Construimos desde cero
              </p>
            </Link>
            
            <Link 
              href="#diseño"
              className="group flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-blue-950 rounded-xl hover:bg-blue-800 transition-all duration-300 text-white shadow-lg hover:shadow-xl hover:-translate-y-2 min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] sm:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-800 rounded-full flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:bg-blue-700 transition-colors">
                <Box className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              </div>
              <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-center leading-tight">Diseño 3D</span>
              <p className="text-xs sm:text-sm lg:text-base text-blue-200 text-center mt-2 sm:mt-3 opacity-0 group-hover:opacity-100 transition-opacity leading-tight">
                Visualiza tu proyecto antes
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 px-4 md:px-6 bg-blue-950">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-100 max-w-4xl mx-auto px-4 leading-relaxed">
              En Grupo RF ofrecemos una amplia gama de servicios de construcción y remodelación para proyectos
              residenciales y comerciales en Santiago de Chile.
            </p>
          </div>

          {/* Service 1 */}
          <div id="remodelaciones" className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-16 sm:mb-20 lg:mb-24 scroll-mt-32">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white">Remodelaciones</h3>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-100 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
                Transformamos y revitalizamos tus espacios. Nos especializamos en la remodelación integral de cocinas, baños y ambientes completos, combinando funcionalidad con diseños modernos y personalizados que reflejan tu estilo.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 lg:mb-10">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-blue-400 mr-3 sm:mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100 text-sm sm:text-base lg:text-lg xl:text-xl">Remodelación de cocinas y baños</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-blue-400 mr-3 sm:mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100 text-sm sm:text-base lg:text-lg xl:text-xl">Renovación de acabados y superficies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-blue-400 mr-3 sm:mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100 text-sm sm:text-base lg:text-lg xl:text-xl">Ampliaciones de espacios</span>
                </li>
              </ul>
              <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4">
                <Link href="/contact">Solicitar presupuesto</Link>
              </Button>
            </div>
            <div className="relative h-[400px] sm:h-[320px] md:h-[400px] lg:h-[650px] rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl order-1 lg:order-2">
              <RemodelacionesSlider />
            </div>
          </div>

          {/* Service 2 */}
          <div id="construcciones" className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-16 sm:mb-20 lg:mb-24 scroll-mt-32">
            <div className="relative h-[400px] sm:h-[320px] md:h-[400px] lg:h-[650px] rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl">
              <ConstruccionesSlider />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white">Construcciones</h3>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-100 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
               Construimos desde cero, desde la obra gruesa hasta los detalles finales.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 lg:mb-10">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-blue-400 mr-3 sm:mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100 text-sm sm:text-base lg:text-lg xl:text-xl">Obras civiles y estructuras</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-blue-400 mr-3 sm:mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100 text-sm sm:text-base lg:text-lg xl:text-xl">Gestión integral de proyectos constructivos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-blue-400 mr-3 sm:mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100 text-sm sm:text-base lg:text-lg xl:text-xl">Supervisión de obra y calidad</span>
                </li>
              </ul>
              <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4">
                <Link href="/contact">Solicitar presupuesto</Link>
              </Button>
            </div>
          </div>

          {/* Service 3 */}
          <div id="diseño" className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-16 sm:mb-20 lg:mb-24 scroll-mt-32">
            <div className="relative h-[400px] sm:h-[320px] md:h-[400px] lg:h-[650px] rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl order-1 lg:order-2">
              <DisenoSlider />
            </div>
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white">Diseño 3D</h3>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-100 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
                Diseñamos y optimizamos espacios interiores para que sean funcionales, estéticos y adaptados a tus necesidades.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 lg:mb-10">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-blue-400 mr-3 sm:mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100 text-sm sm:text-base lg:text-lg xl:text-xl">Diseño de espacios interiores</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-blue-400 mr-3 sm:mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100 text-sm sm:text-base lg:text-lg xl:text-xl">Diseño de espacios exteriores</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-blue-400 mr-3 sm:mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100 text-sm sm:text-base lg:text-lg xl:text-xl">Diseño de estructuras industriales</span>
                </li>
              </ul>
              <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4">
                <Link href="/contact">Solicitar presupuesto</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 px-4 md:px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-gray-900 dark:text-white">Nuestro proceso</h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
              Trabajamos con un enfoque metódico y transparente para garantizar que tu proyecto se complete con éxito.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 mx-auto">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl sm:text-2xl lg:text-3xl">1</span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-center text-gray-900 dark:text-white">Consulta inicial</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                Nos reunimos contigo para entender tus necesidades, objetivos y presupuesto para el proyecto.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 mx-auto">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl sm:text-2xl lg:text-3xl">2</span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-center text-gray-900 dark:text-white">Diseño y planificación</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                Desarrollamos un plan detallado, incluyendo diseños, materiales y cronograma del proyecto.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 mx-auto">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl sm:text-2xl lg:text-3xl">3</span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-center text-gray-900 dark:text-white">Ejecución</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                Nuestro equipo de profesionales ejecuta el proyecto con precisión, calidad y atención al detalle.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 mx-auto">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl sm:text-2xl lg:text-3xl">4</span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-center text-gray-900 dark:text-white">Entrega y garantía</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                Entregamos el proyecto terminado y ofrecemos garantía en nuestro trabajo para tu tranquilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 md:px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto text-blue-100 px-4 leading-relaxed">
            Contáctanos hoy para una consulta gratuita y comienza a hacer realidad tu visión
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-950 w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              <Link href="/contact">Contactar ahora</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-950 hover:bg-gray-100 w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              <Link href="/projects">Ver proyectos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
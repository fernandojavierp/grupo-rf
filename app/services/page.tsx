import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { ServicesBanner } from "@/components/ServicesBanner"
import { RemodelacionesSlider } from "@/components/RemodelacionesSlider"
import { ConstruccionesSlider } from "@/components/ConstruccionesSlider"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <ServicesBanner />
      {/* Services Overview */}
      <section className="py-16 px-4 md:px-6  bg-blue-950 text-gray-300">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              En Grupo RF ofrecemos una amplia gama de servicios de construcción y remodelación para proyectos
              residenciales y comerciales en Santiago de Chile.
            </p>
          </div>

          {/* Service 1 */}
          <div id="remodelaciones" className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Remodelaciones</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Transformamos espacios existentes con diseños modernos y funcionales adaptados a tus necesidades.
                Nuestro equipo de profesionales trabaja con precisión y atención al detalle para garantizar resultados
                excepcionales.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Remodelación de cocinas y baños</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Actualización de espacios interiores</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Renovación de acabados y superficies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Optimización de espacios</span>
                </li>
              </ul>
              <Button asChild className="bg-blue-950 hover:bg-blue-900 dark:bg-blue-900 dark:hover:bg-blue-800">
                <Link href="/contact">Solicitar Presupuesto</Link>
              </Button>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <RemodelacionesSlider />
            </div>
          </div>

          {/* Service 2 */}
          <div id="construcciones" className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <ConstruccionesSlider />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Construcciones</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Construimos proyectos residenciales y comerciales con los más altos estándares de calidad. Desde la
                planificación hasta la entrega final, nos encargamos de cada detalle para asegurar que tu proyecto sea
                un éxito.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Construcción de viviendas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Edificios comerciales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Gestión integral de proyectos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Construcción sustentable</span>
                </li>
              </ul>
              <Button asChild className="bg-blue-950 hover:bg-blue-900 dark:bg-blue-900 dark:hover:bg-blue-800">
                <Link href="/contact">Solicitar Presupuesto</Link>
              </Button>
            </div>
          </div>

          {/* Service 3 */}
          <div id="diseno" className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Diseño de Interiores</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Creamos espacios estéticos y funcionales que reflejan tu estilo y personalidad. Nuestro equipo de
                diseñadores trabaja en estrecha colaboración contigo para crear ambientes que inspiren y funcionen
                perfectamente.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Diseño conceptual</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Selección de materiales y acabados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Distribución de espacios</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Asesoría en decoración</span>
                </li>
              </ul>
              <Button asChild className="bg-blue-950 hover:bg-blue-900 dark:bg-blue-900 dark:hover:bg-blue-800">
                <Link href="/contact">Solicitar Presupuesto</Link>
              </Button>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Diseño de Interiores"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Service 4 */}
          <div id="ampliaciones" className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=800&width=1200" alt="Ampliaciones" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Ampliaciones</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Expandimos tu espacio actual para adaptarlo a tus necesidades cambiantes. Ya sea que necesites una
                habitación adicional, un espacio de oficina o una extensión de tu área de estar, podemos ayudarte.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Ampliación de viviendas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Segundos pisos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Extensiones de espacios comerciales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Integración con estructuras existentes</span>
                </li>
              </ul>
              <Button asChild className="bg-blue-950 hover:bg-blue-900 dark:bg-blue-900 dark:hover:bg-blue-800">
                <Link href="/contact">Solicitar Presupuesto</Link>
              </Button>
            </div>
          </div>

          {/* Service 5 */}
          <div id="renovaciones" className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Renovaciones</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Revitalizamos espacios antiguos o deteriorados para darles nueva vida. Nuestras renovaciones combinan
                funcionalidad moderna con el carácter original de tu espacio.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Actualización de sistemas eléctricos y de plomería</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Renovación de fachadas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Restauración de propiedades históricas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-950 dark:text-blue-400 mr-2 mt-0.5" />
                  <span className="dark:text-gray-300">Mejoras de eficiencia energética</span>
                </li>
              </ul>
              <Button asChild className="bg-blue-950 hover:bg-blue-900 dark:bg-blue-900 dark:hover:bg-blue-800">
                <Link href="/contact">Solicitar Presupuesto</Link>
              </Button>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <Image src="/placeholder.svg?height=800&width=1200" alt="Renovaciones" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-500 text-gray-300">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ">Nuestro Proceso</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Trabajamos con un enfoque metódico y transparente para garantizar que tu proyecto se complete con éxito.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-950 dark:text-blue-400 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 ">Consulta Inicial</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nos reunimos contigo para entender tus necesidades, objetivos y presupuesto para el proyecto.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-950 dark:text-blue-400 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 ">Diseño y Planificación</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Desarrollamos un plan detallado, incluyendo diseños, materiales y cronograma del proyecto.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-950 dark:text-blue-400 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 ">Ejecución</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nuestro equipo de profesionales ejecuta el proyecto con precisión, calidad y atención al detalle.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-950 dark:text-blue-400 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 ">Entrega y Garantía</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Entregamos el proyecto terminado y ofrecemos garantía en nuestro trabajo para tu tranquilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-blue-900 text-gray-300">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy para una consulta gratuita y comienza a hacer realidad tu visión
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
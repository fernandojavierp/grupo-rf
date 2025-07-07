import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-300/80 text-gray-800 border-t border-neutral-700 shadow-sm">
      <div className="container mx-auto py-8 sm:py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Grupo RF</h3>
            <p className="mb-4 max-w-md text-sm sm:text-base">
              Empresa líder en remodelaciones y construcciones en Santiago de Chile, ofreciendo servicios de alta
              calidad y profesionalismo desde 2019.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/somosgruporf/" className="hover:text-blue-900 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/services" className="hover:text-blue-900 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-900 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-900 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-900 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contacto</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-blue-950 flex-shrink-0" />
                <span>Huerfanos 1294, Santiago, Chile</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-950 flex-shrink-0" />
                <a
                  href="https://wa.me/56972304874"
                  className="hover:underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>+56 9 7230 4874</span>
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-950 flex-shrink-0" />
                <a href="mailto:gruporf.contacto@gmail.com" className="hover:underline">
                  gruporf.contacto@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-400 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Grupo RF. Todos los derechos reservados.
          </p>
          <p className="text-xs mt-2">
            <Link href="/privacidad" className="underline text-blue-900 hover:text-blue-700">Aviso de privacidad</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-300/80 text-gray-800 border-t border-neutral-700 shadow-sm">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Grupo RF</h3>
            <p className="mb-4">
              Empresa líder en remodelaciones y construcciones en Santiago de Chile, ofreciendo servicios de alta
              calidad y profesionalismo desde 2010.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-blue-900 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-blue-900 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
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
                <Link href="/before-after" className="hover:text-blue-900 transition-colors">
                  Antes y Después
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

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#remodelaciones" className="hover:text-blue-900 transition-colors">
                  Remodelaciones
                </Link>
              </li>
              <li>
                <Link href="/services#construcciones" className="hover:text-blue-900 transition-colors">
                  Construcciones
                </Link>
              </li>
              <li>
                <Link href="/services#diseno" className="hover:text-blue-900 transition-colors">
                  Diseño de Interiores
                </Link>
              </li>
              <li>
                <Link href="/services#ampliaciones" className="hover:text-blue-900 transition-colors">
                  Ampliaciones
                </Link>
              </li>
              <li>
                <Link href="/services#renovaciones" className="hover:text-blue-900 transition-colors">
                  Renovaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2  mt-0.5 text-blue-950" />
                <span>Av. Providencia 1234, Santiago, Chile</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-950" />
                <a
                href="https://wa.me/56972304874"
                className="text-primary hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
            <span>+56 9 7230 4874</span>
            </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-950" />
                <span>contacto@gruporf.cl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Grupo RF Remodelaciones y Construcciones. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terms" className="text-sm transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

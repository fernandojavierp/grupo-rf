import Link from "next/link"

export default function PrivacidadPage() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-950 text-gray-300">
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Aviso de Privacidad</h1>
        <p className="mb-4">
          En <b>Grupo RF</b> nos comprometemos a proteger la privacidad de los datos personales que nos proporcionas a través de nuestro sitio web <b>gruporf.cl</b>. Este aviso explica cómo recopilamos, usamos y protegemos tu información.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">1. ¿Qué datos recopilamos?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Nombre</li>
          <li>Correo electrónico</li>
          <li>Teléfono (opcional)</li>
          <li>Mensaje o consulta</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">2. ¿Para qué usamos tus datos?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Responder a tus consultas o solicitudes de información.</li>
          <li>Contactarte para coordinar servicios o presupuestos.</li>
          <li>Mejorar nuestros servicios y atención al cliente.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">3. ¿Compartimos tu información?</h2>
        <p className="mb-4">
          No compartimos tus datos personales con terceros, salvo obligación legal o para la prestación de servicios estrictamente necesarios para la operación del sitio.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">4. Seguridad</h2>
        <p className="mb-4">
          Implementamos medidas de seguridad para proteger tu información personal contra accesos no autorizados, alteraciones o divulgación.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">5. Derechos</h2>
        <p className="mb-4">
          Puedes solicitar el acceso, rectificación o eliminación de tus datos personales escribiéndonos a <a href="mailto:contacto@gruporf.cl" className="underline text-blue-300">contacto@gruporf.cl</a>.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">6. Cambios a este aviso</h2>
        <p className="mb-4">
          Nos reservamos el derecho de modificar este aviso de privacidad en cualquier momento. Los cambios serán publicados en esta misma página.
        </p>
        <p className="mt-8 text-center text-gray-400 text-sm">
          Última actualización: {new Date().getFullYear()}
        </p>
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-300 underline">Volver al inicio</Link>
        </div>
      </div>
    </div>
  )
} 
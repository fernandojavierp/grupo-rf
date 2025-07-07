"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [isError, setIsError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsError(false)
    setSubmitMessage("")

    // Simulate API call
    setTimeout(() => {
      // Simulate success/error randomly for demonstration
      const isSuccess = Math.random() > 0.2
      
      if (isSuccess) {
        setSubmitMessage("¡Gracias por tu mensaje! Te responderemos a la brevedad.")
        setIsError(false)
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setSubmitMessage("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.")
        setIsError(true)
      }
      
      setIsSubmitting(false)
      setTimeout(() => setSubmitMessage(""), 6000)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen bg-blue-950 text-gray-300">
      {/* Hero Section */}
      <section className="relative w-full h-[30vh] sm:h-[40vh]">
        <Image
          src="/banner-servicios.webp"
          alt="Contacto con Grupo RF"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 bg-black/30">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Contáctanos</h1>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl px-4">Estamos listos para comenzar a trabajar en tu próximo proyecto.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Información de contacto</h2>
                <p className="text-sm sm:text-base text-gray-400 mb-6">
                  Puedes contactarnos a través de los siguientes canales o llenando el formulario.
                </p>
              </div>
              <div className="space-y-4">
                <a href="tel:+56972304874" className="flex items-center group">
                  <Phone className="h-5 w-5 mr-3 text-white flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">+56 9 7230 4874</span>
                </a>
                <a href="mailto:gruporf.contacto@gmail.com" className="flex items-center group">
                  <Mail className="h-5 w-5 mr-3 text-white flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">gruporf.contacto@gmail.com</span>
                </a>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-white flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300">Huerfanos 1294, Santiago, Chile</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-blue-900 p-6 sm:p-8 rounded-lg shadow-2xl">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Envíanos un mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm sm:text-base text-gray-400">Nombre</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-blue-950 border-blue-800 text-white focus:border-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base text-gray-400">Correo electrónico</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-blue-950 border-blue-800 text-white focus:border-white" />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm sm:text-base text-gray-400">Teléfono (opcional)</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="bg-blue-950 border-blue-800 text-white focus:border-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base text-gray-400">¿Cómo podemos ayudarte?</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} required className="bg-blue-950 border-blue-800 text-white focus:border-white" />
                  </div>
                  <Button type="submit" className="w-full bg-white text-blue-950 hover:bg-gray-200 transition-all" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : <><Send className="mr-2 h-4 w-4" /> Enviar mensaje</>}
                  </Button>
                  {submitMessage && (
                    <p className={`text-sm mt-4 text-center ${isError ? 'text-red-400' : 'text-green-400'}`}>
                      {submitMessage}
                    </p>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

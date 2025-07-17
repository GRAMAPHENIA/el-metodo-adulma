import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con El Método AdulMa. Ubicación en Olivos, teléfono, email y formulario de consultas. Te esperamos para comenzar juntos.",
}

export default function ContactoPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Av. Maipú 1234, Olivos\nBuenos Aires, Argentina",
      action: "Ver en Google Maps",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+54 11 2345-6789",
      action: "Llamar ahora",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+54 11 2345-6789",
      action: "Enviar mensaje",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@elmetodoadulma.com",
      action: "Enviar email",
    },
  ]

  const schedule = [
    { day: "Lunes", hours: "9:00 - 10:30 hs" },
    { day: "Martes", hours: "15:00 - 16:30 hs" },
    { day: "Miércoles", hours: "Consultas telefónicas" },
    { day: "Jueves", hours: "9:00 - 10:30 hs" },
    { day: "Viernes", hours: "15:00 - 16:30 hs" },
    { day: "Sábado", hours: "Formación profesional" },
    { day: "Domingo", hours: "Cerrado" },
  ]

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">Contacto</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Estamos aquí para responder todas tus consultas y ayudarte a comenzar tu camino hacia un envejecimiento activo
          y saludable
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {contactInfo.map((info, index) => (
          <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">{info.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4 whitespace-pre-line">{info.content}</p>
              <Button variant="outline" className="w-full bg-transparent">
                {info.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">Horarios de Atención</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="font-medium text-gray-900">{item.day}</span>
                    <span className="text-gray-600">{item.hours}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Consultas Fuera de Horario</h3>
                <p className="text-blue-700">
                  Para consultas urgentes o fuera del horario de atención, puedes escribirnos por WhatsApp. Te
                  responderemos a la brevedad.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">Cómo Llegar</h2>
          <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
            <p className="text-gray-500">Mapa interactivo de Google Maps</p>
          </div>

          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🚂 En Tren</h3>
              <p>Estación Olivos (Línea Mitre) - 3 cuadras caminando</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🚌 En Colectivo</h3>
              <p>Líneas: 60, 152, 166, 168 - Parada Av. Maipú y Corrientes</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🚗 En Auto</h3>
              <p>Estacionamiento disponible en la zona. Acceso fácil desde Panamericana.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 font-playfair">Envíanos tu Consulta</h2>
        <form className="max-w-2xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo *
              </label>
              <Input id="name" required className="text-lg p-3" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <Input id="phone" type="tel" className="text-lg p-3" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <Input id="email" type="email" required className="text-lg p-3" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Asunto
            </label>
            <select id="subject" className="w-full text-lg p-3 border border-gray-300 rounded-md">
              <option value="">Selecciona un tema</option>
              <option value="clases">Consulta sobre clases</option>
              <option value="formacion">Formación profesional</option>
              <option value="horarios">Horarios y disponibilidad</option>
              <option value="precios">Precios y promociones</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Mensaje *
            </label>
            <Textarea
              id="message"
              required
              rows={5}
              className="text-lg p-3"
              placeholder="Cuéntanos en qué podemos ayudarte..."
            />
          </div>
          <div className="text-center">
            <Button type="submit" size="lg" className="text-lg px-8 py-4">
              Enviar Consulta
            </Button>
          </div>
        </form>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">¿Listo para Comenzar?</h3>
          <p className="text-gray-700 mb-6">
            Reserva tu primera clase gratuita y descubre los beneficios del Método AdulMa
          </p>
          <Link
            href="https://wa.me/5491123456789?text=Hola! Me interesa reservar una clase gratuita del Método AdulMa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="text-lg px-8 py-4">
              <MessageCircle className="w-5 h-5 mr-2" />
              Reservar Clase Gratuita
            </Button>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Síguenos en Redes</h3>
          <p className="text-gray-700 mb-6">Mantente al día con tips, ejercicios y novedades del Método AdulMa</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="lg">
              Facebook
            </Button>
            <Button variant="outline" size="lg">
              Instagram
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Users, BookOpen, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Formación Profesional",
  description:
    "Programa de formación para instructores del Método AdulMa. Capacitación integral en actividad física y estimulación cognitiva para adultos mayores.",
}

export default function FormacionPage() {
  const benefits = [
    "Certificación oficial del Método AdulMa",
    "Material didáctico completo",
    "Práctica supervisada con grupos reales",
    "Seguimiento post-formación",
    "Acceso a comunidad de instructores",
    "Actualizaciones continuas del método",
  ]

  const testimonials = [
    {
      name: "María González",
      profession: "Profesora de Educación Física",
      text: "La formación me abrió una nueva perspectiva sobre el trabajo con adultos mayores. El método es integral y muy efectivo.",
    },
    {
      name: "Dr. Carlos Ruiz",
      profession: "Kinesiólogo",
      text: "Excelente combinación de teoría y práctica. Ahora puedo ofrecer un servicio más completo a mis pacientes.",
    },
    {
      name: "Ana Martínez",
      profession: "Psicóloga",
      text: "El enfoque cognitivo del método es innovador. Mis grupos han mostrado mejoras notables en memoria y atención.",
    },
  ]

  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">Formación Profesional</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Conviértete en instructor certificado del Método AdulMa y transforma la vida de adultos mayores a través de
          nuestro enfoque integral
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <Card className="text-center p-6 border-2">
          <CardContent className="pt-6">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Modalidad Presencial</h3>
            <p className="text-gray-600">Clases prácticas con grupos reales para experiencia directa</p>
          </CardContent>
        </Card>

        <Card className="text-center p-6 border-2">
          <CardContent className="pt-6">
            <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">80 Horas de Formación</h3>
            <p className="text-gray-600">Programa intensivo de 2 meses con teoría y práctica</p>
          </CardContent>
        </Card>

        <Card className="text-center p-6 border-2">
          <CardContent className="pt-6">
            <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Certificación Oficial</h3>
            <p className="text-gray-600">Diploma que te habilita como instructor del método</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">Programa de Estudios</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Módulo 1: Fundamentos Teóricos</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Envejecimiento activo y saludable</li>
                <li>• Neuroplasticidad en adultos mayores</li>
                <li>• Bases del ejercicio físico adaptado</li>
                <li>• Estimulación cognitiva: principios y técnicas</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-green-600">Módulo 2: Metodología Práctica</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Planificación de sesiones integrales</li>
                <li>• Adaptaciones según capacidades</li>
                <li>• Manejo de grupos y dinámicas</li>
                <li>• Evaluación y seguimiento</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">Módulo 3: Práctica Supervisada</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Observación de clases modelo</li>
                <li>• Práctica con grupos reales</li>
                <li>• Feedback personalizado</li>
                <li>• Desarrollo de estilo propio</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">Beneficios de la Formación</h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Inversión y Modalidades</h3>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Costo:</strong> Consultar por promociones vigentes
              </p>
              <p>
                <strong>Modalidad:</strong> Presencial en Olivos
              </p>
              <p>
                <strong>Duración:</strong> 8 semanas (2 meses)
              </p>
              <p>
                <strong>Horarios:</strong> Sábados de 9:00 a 13:00 hs
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-playfair">Testimonios de Instructores</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.profession}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 font-playfair">Solicita Información</h2>
        <form className="max-w-2xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo *
              </label>
              <Input id="name" required className="text-lg p-3" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <Input id="email" type="email" required className="text-lg p-3" />
            </div>
          </div>
          <div>
            <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-2">
              Profesión o área de trabajo
            </label>
            <Input id="profession" className="text-lg p-3" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Mensaje o consulta
            </label>
            <Textarea
              id="message"
              rows={4}
              className="text-lg p-3"
              placeholder="Cuéntanos sobre tu interés en la formación..."
            />
          </div>
          <div className="text-center">
            <Button type="submit" size="lg" className="text-lg px-8 py-4">
              Enviar Consulta
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

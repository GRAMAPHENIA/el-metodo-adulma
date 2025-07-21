'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Users, BookOpen, Award, User, Brain, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

const FormacionAdultosMayores = () => (
  <div className="space-y-12">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 font-playfair">Cursos para Adultos Mayores</h2>
      <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
        Descubre nuestros programas diseñados especialmente para mantenerte activo, saludable y conectado con otros adultos mayores
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      <Card className="group relative overflow-hidden h-full transition-all duration-300 border border-gray-50 hover:shadow-md">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-25 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <CardContent className="relative z-10 p-8 h-full flex flex-col">
          <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <User className="w-9 h-9 text-orange-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800 font-playfair">Actividad Física</h3>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">Ejercicios adaptados para mejorar fuerza, equilibrio y movilidad, diseñados específicamente para adultos mayores.</p>
          <div className="mt-auto">
            <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white transition-all duration-300">
              Más información
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="group relative overflow-hidden h-full transition-all duration-300 border border-gray-50 hover:shadow-md">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-25 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <CardContent className="relative z-10 p-8 h-full flex flex-col">
          <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Brain className="w-9 h-9 text-orange-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800 font-playfair">Estimulación Cognitiva</h3>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">Ejercicios diseñados para mantener la mente ágil, mejorar la memoria y potenciar las funciones cognitivas.</p>
          <div className="mt-auto">
            <Button className="w-full bg-gray-700 hover:bg-gray-800 text-white transition-all duration-300">
              Más información
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="group relative overflow-hidden h-full transition-all duration-300 border border-gray-50 hover:shadow-md">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-25 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <CardContent className="relative z-10 p-8 h-full flex flex-col">
          <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-9 h-9 text-orange-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800 font-playfair">Actividades Sociales</h3>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">Talleres y actividades grupales diseñados para fomentar la interacción social y crear conexiones significativas.</p>
          <div className="mt-auto">
            <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white transition-all duration-300">
              Más información
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>

    <div className="bg-orange-25 p-8 rounded-xl mt-12 border border-orange-100">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 font-playfair">Beneficios de Nuestros Cursos</h3>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
          "Mejora de la condición física general",
          "Prevención de caídas y lesiones",
          "Mantenimiento de la autonomía",
          "Estimulación de la memoria y concentración",
          "Reducción del estrés y la ansiedad",
          "Oportunidades de socialización"
        ].map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
            <p className="text-gray-700">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const FormacionProfesionales = () => {
  const benefits = [
    "Certificación oficial del Método AdulMa",
    "Material didáctico completo",
    "Práctica supervisada con grupos reales",
    "Seguimiento post-formación",
    "Acceso a comunidad de instructores",
    "Actualizaciones continuas del método",
  ]



  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 font-playfair">Formación para Profesionales</h2>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Conviértete en instructor certificado del Método AdulMa y transforma la vida de adultos mayores a través de
          nuestro enfoque integral
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="group relative overflow-hidden h-full transition-all duration-300 border border-gray-50 hover:shadow-md">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-25 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardContent className="relative z-10 p-8 h-full flex flex-col">
            <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-9 h-9 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 font-playfair">Modalidad Presencial</h3>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">Clases prácticas con grupos reales para una experiencia de aprendizaje completa y enriquecedora en nuestras instalaciones.</p>
            <div className="mt-auto">
              <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white transition-all duration-300">
                Más información
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden h-full transition-all duration-300 border border-gray-50 hover:shadow-md">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-25 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardContent className="relative z-10 p-8 h-full flex flex-col">
            <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-9 h-9 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 font-playfair">Certificación Oficial</h3>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">Obtén la certificación oficial del Método AdulMa y aumenta tus oportunidades laborales en el campo del envejecimiento activo.</p>
            <div className="mt-auto">
              <Button className="w-full bg-gray-700 hover:bg-gray-800 text-white transition-all duration-300">
                Más información
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-2xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 font-playfair">Beneficios de la Formación</h2>
          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="bg-orange-25 p-6 rounded-lg border border-orange-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 font-playfair">Inversión y Modalidades</h3>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-center gap-2">
                <span className="font-medium">Costo:</span>
                <span>Consultar por promociones vigentes</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Modalidad:</span>
                <span>Presencial en Olivos</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Duración:</span>
                <span>8 semanas (2 meses)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Horarios:</span>
                <span>Sábados de 9:00 a 13:00 hs</span>
              </p>
              <div className="pt-2">
                <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white">
                  Inscribirme ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default function FormacionClientPage() {
  const [activeTab, setActiveTab] = useState('adultos')

  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">Nuestra Formación</h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Programas diseñados para potenciar el bienestar de adultos mayores y capacitar a profesionales
        </p>
      </div>

      <div className="flex border-b border-gray-100 mb-12">
        <button
          onClick={() => setActiveTab('adultos')}
          className={cn(
            'py-4 px-6 text-lg font-medium border-b-2 -mb-px',
            activeTab === 'adultos'
              ? 'border-orange-400 text-orange-500'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200'
          )}
        >
          Para Adultos Mayores
        </button>
        <button
          onClick={() => setActiveTab('profesionales')}
          className={cn(
            'py-4 px-6 text-lg font-medium border-b-2 -mb-px',
            activeTab === 'profesionales'
              ? 'border-orange-400 text-orange-500'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200'
          )}
        >
          Para Profesionales
        </button>
      </div>

      <div className="mb-16">
        {activeTab === 'adultos' ? <FormacionAdultosMayores /> : <FormacionProfesionales />}
      </div>

      <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-playfair">
          {activeTab === 'adultos' ? '¡Inscríbete a nuestros cursos!' : 'Solicita más información'}
        </h2>
        <form className="max-w-2xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
                Nombre completo *
              </label>
              <Input id="name" required className="text-lg p-3" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                Email *
              </label>
              <Input id="email" type="email" required className="text-lg p-3" />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">
              Teléfono *
            </label>
            <Input id="phone" type="tel" required className="text-lg p-3" />
          </div>
          {activeTab === 'profesionales' && (
            <div>
              <label htmlFor="profession" className="block text-sm font-medium text-gray-600 mb-2">
                Profesión o área de trabajo
              </label>
              <Input id="profession" className="text-lg p-3" />
            </div>
          )}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">
              {activeTab === 'adultos' ? '¿Qué curso te interesa?' : 'Mensaje o consulta'}
            </label>
            <Textarea
              id="message"
              rows={4}
              className="text-lg p-3"
              placeholder={
                activeTab === 'adultos'
                  ? 'Cuéntanos qué curso te gustaría realizar y cualquier necesidad especial...'
                  : 'Cuéntanos sobre tu interés en la formación...'
              }
            />
          </div>
          <div className="text-center">
            <Button type="submit" size="lg" className="text-lg px-8 py-4 bg-orange-400 hover:bg-orange-500">
              {activeTab === 'adultos' ? 'Enviar solicitud' : 'Solicitar información'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

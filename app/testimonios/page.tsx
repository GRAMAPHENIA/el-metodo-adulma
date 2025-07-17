import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Testimonios",
  description:
    "Conoce las experiencias reales de nuestros alumnos del Método AdulMa. Testimonios auténticos sobre los beneficios del programa.",
}

export default function TestimoniosPage() {
  const testimonials = [
    {
      name: "María Elena Rodríguez",
      age: 72,
      text: "Desde que empecé con el Método AdulMa me siento más ágil y mi memoria ha mejorado notablemente. Las clases son divertidas y el grupo es como una familia.",
      rating: 5,
      months: 8,
    },
    {
      name: "Roberto Carlos Fernández",
      age: 68,
      text: "Al principio tenía dudas, pero ahora no puedo faltar a las clases. Mi equilibrio mejoró mucho y los ejercicios mentales me mantienen alerta.",
      rating: 5,
      months: 12,
    },
    {
      name: "Carmen Beatriz López",
      age: 75,
      text: "Lo que más me gusta es que cada clase es diferente. Los profesores son muy pacientes y adaptan todo a nuestras necesidades.",
      rating: 5,
      months: 6,
    },
    {
      name: "Jorge Alberto Martín",
      age: 70,
      text: "Después de mi jubilación me sentía sin energía. El Método AdulMa me devolvió las ganas de hacer cosas y conocí amigos maravillosos.",
      rating: 5,
      months: 10,
    },
    {
      name: "Nilda Graciela Torres",
      age: 73,
      text: "Mi médico está sorprendido con mis análisis. Bajé la presión, mejoré el colesterol y me siento 10 años más joven.",
      rating: 5,
      months: 14,
    },
    {
      name: "Héctor Daniel Ruiz",
      age: 69,
      text: "Las actividades cognitivas son fantásticas. Ahora recuerdo mejor los nombres y puedo concentrarme más tiempo leyendo.",
      rating: 5,
      months: 9,
    },
  ]

  const videoTestimonials = [
    {
      title: "María Elena cuenta su experiencia",
      duration: "2:30",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Roberto habla sobre los beneficios",
      duration: "1:45",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Carmen y sus amigas del grupo",
      duration: "3:15",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">Testimonios Reales</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Conoce las experiencias de nuestros alumnos y cómo el Método AdulMa ha transformado sus vidas
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-playfair">Lo Que Dicen Nuestros Alumnos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.age} años • {testimonial.months} meses en el programa
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-playfair">Videos Testimoniales</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {videoTestimonials.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-16 h-16">
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-playfair">Galería de Momentos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={`/placeholder.svg?height=250&width=250`}
                alt={`Momento ${index + 1} en las clases del Método AdulMa`}
                width={250}
                height={250}
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">¿Quieres Ser Parte de Estas Historias?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Únete a nuestra comunidad y comienza tu propia transformación. ¡Tu testimonio podría ser el próximo!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-4">
            Conocer Nuestras Clases
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
            Contactar por WhatsApp
          </Button>
        </div>
      </div>
    </div>
  )
}

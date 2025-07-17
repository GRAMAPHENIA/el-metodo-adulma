import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Users, Target } from "lucide-react"

export default function MethodSummary() {
  const features = [
    {
      icon: Heart,
      title: "Actividad Física Adaptada",
      description:
        "Ejercicios diseñados específicamente para adultos mayores, mejorando fuerza, equilibrio y coordinación.",
    },
    {
      icon: Brain,
      title: "Estimulación Cognitiva",
      description: "Actividades que desafían la memoria, atención y funciones ejecutivas de manera efectiva.",
    },
    {
      icon: Users,
      title: "Ambiente Grupal",
      description: "Clases en grupos reducidos que fomentan la socialización y el sentido de pertenencia.",
    },
    {
      icon: Target,
      title: "Enfoque Personalizado",
      description: "Adaptación de ejercicios según las capacidades y necesidades individuales de cada participante.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">Redefinimos el envejecimiento activo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestro método integral combina lo mejor de la actividad física y la estimulación cognitiva para promover el
            bienestar completo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

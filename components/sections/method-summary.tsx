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
          <h2 className="text-4xl font-bold text-zinc-800 mb-6 font-playfair">Redefinimos el envejecimiento activo</h2>
          <p className="text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed">
            Nuestro método integral combina lo mejor de la actividad física y la estimulación cognitiva para promover el
            bienestar completo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-zinc-50 hover:border-amber-100 bg-gradient-to-b from-white to-zinc-25 hover:to-white">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-50 to-amber-25 rounded-xl flex items-center justify-center shadow-sm">
                    <feature.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <span className="ml-4 w-1 h-8 bg-amber-200 rounded-full"></span>
                </div>
                <h3 className="text-xl font-bold text-zinc-800 mb-3 font-playfair">{feature.title}</h3>
                <p className="text-zinc-500 leading-relaxed mb-4">{feature.description}</p>
                <div className="mt-auto pt-4 border-t border-zinc-50">
                  <span className="text-sm font-medium text-amber-400 hover:text-amber-500 transition-colors cursor-pointer">
                    Conocer más →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

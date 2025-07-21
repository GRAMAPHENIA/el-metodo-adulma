import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Users, Target, Award } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "El Método",
  description:
    "Conoce la historia y enfoque integral del Método AdulMa: actividad física, estimulación cognitiva y bienestar emocional para adultos mayores.",
};

export default function ElMetodoPage() {
  const pillars = [
    {
      icon: Heart,
      title: "Bienestar Físico",
      description:
        "Ejercicios adaptados que mejoran la fuerza, equilibrio y coordinación, respetando las capacidades individuales.",
    },
    {
      icon: Brain,
      title: "Estimulación Cognitiva",
      description:
        "Actividades que desafían la memoria, atención y funciones ejecutivas de manera efectiva.",
    },
    {
      icon: Users,
      title: "Conexión Social",
      description:
        "Ambiente grupal que fomenta la interacción, el compañerismo y el sentido de pertenencia.",
    },
    {
      icon: Target,
      title: "Enfoque Personalizado",
      description:
        "Adaptación de ejercicios según las necesidades y capacidades de cada participante.",
    },
  ];

  const uniqueFeatures = [
    {
      icon: Target,
      title: "Enfoque Integral",
      description:
        "Trabajamos cuerpo y mente de manera simultánea para resultados más efectivos",
    },
    {
      icon: Users,
      title: "Grupos Reducidos",
      description:
        "Atención personalizada en grupos pequeños para mejor seguimiento",
    },
    {
      icon: Award,
      title: "Profesionales Especializados",
      description:
        "Equipo formado específicamente en trabajo con adultos mayores",
    },
  ];

  return (
    <div className="pt-32 pb-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 font-playfair">
            El Método AdulMa
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Un enfoque integral que combina actividad física y estimulación
            cognitiva para promover el envejecimiento activo y saludable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-playfair">
              Nuestra Historia
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                El Método AdulMa nació de la necesidad de crear un espacio
                integral donde los adultos mayores pudieran mantenerse activos
                tanto física como mentalmente, en un ambiente cálido y
                profesional.
              </p>
              <p>
                Desarrollado por profesionales especializados en gerontología y
                actividad física, nuestro método se basa en evidencia científica
                y años de experiencia trabajando con adultos mayores.
              </p>
              <p>
                Creemos que el envejecimiento puede ser una etapa plena y
                activa, donde cada persona puede seguir creciendo y disfrutando
                de la vida en comunidad.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Adultos mayores realizando actividades del Método AdulMa"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-playfair">
            Los Pilares de Nuestro Método
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="border border-gray-50 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                    <pillar.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="border border-gray-50 shadow-lg">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-playfair">
              ¿Qué Hace Único a Nuestro Método?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {uniqueFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

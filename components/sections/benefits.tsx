import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Calendar,
  User,
  Target,
  Brain,
  Users,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function Benefits() {
  const benefits = [
    { text: "Equilibrio y coordinación mejorados", icon: Target },
    { text: "Fortalecimiento muscular progresivo", icon: TrendingUp },
    { text: "Memoria y atención potenciadas", icon: Brain },
    { text: "Reducción significativa del riesgo de caídas", icon: CheckCircle },
    { text: "Mayor independencia en el día a día", icon: User },
    { text: "Conexiones sociales auténticas", icon: Users },
    { text: "Autoestima y confianza renovadas", icon: Heart },
    { text: "Calidad del sueño optimizada", icon: Calendar },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">
              Beneficios comprobados del Método AdulMa
            </h2>

            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Nuestros participantes experimentan mejoras significativas en su
              calidad de vida a través de nuestro enfoque integral y
              personalizado.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-gray-200"
                >
                  <benefit.icon className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/testimonios">
              <Button
                size="lg"
                className="bg-orange-400 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                Ver testimonios reales
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <Card className="border border-gray-200 shadow-lg">
            <CardContent className="p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-playfair">
                  Tu transformación comienza hoy
                </h3>
                <p className="text-gray-600 text-lg">
                  Primera clase completamente gratuita. Sin compromisos, solo
                  resultados.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        Experiencia completa
                      </h4>
                    </div>
                    <p className="text-gray-600">
                      Participa en una sesión integral sin costo para vivir
                      nuestro método
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        Evaluación personalizada
                      </h4>
                    </div>
                    <p className="text-gray-600">
                      Diseñamos juntos tu camino hacia el bienestar integral
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        Programa a medida
                      </h4>
                    </div>
                    <p className="text-gray-600">
                      Tu plan único para maximizar resultados y disfrutar el
                      proceso
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <Link href="/contacto">
                  <Button className="w-full bg-orange-400 hover:bg-orange-600 text-white py-4 text-lg rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200">
                    Reservar mi clase gratuita
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

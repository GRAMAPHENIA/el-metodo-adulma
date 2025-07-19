import type { Metadata } from "next";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, Activity, Brain } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clases",
  description:
    "Horarios y ubicación de las clases del Método AdulMa en Olivos. Lunes y jueves por la mañana, martes y viernes por la tarde.",
};

export default function ClasesPage() {
  const schedules = [
    {
      days: "Lunes y Jueves",
      time: "9:00 - 10:30 hs",
      period: "Mañana",
      available: true,
    },
    {
      days: "Martes y Viernes",
      time: "15:00 - 16:30 hs",
      period: "Tarde",
      available: true,
    },
  ];

  const classContent = [
    {
      icon: Activity,
      title: "Actividad Física",
      duration: "45 min",
      items: [
        "Ejercicios de movilidad articular",
        "Fortalecimiento muscular adaptado",
        "Trabajo de equilibrio y coordinación",
        "Ejercicios cardiovasculares suaves",
      ],
    },
    {
      icon: Brain,
      title: "Estimulación Cognitiva",
      duration: "45 min",
      items: [
        "Ejercicios de memoria y atención",
        "Juegos de lógica y razonamiento",
        "Actividades de lenguaje",
        "Desafíos de funciones ejecutivas",
      ],
    },
  ];

  return (
    <div className="pt-32 pb-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">
            Nuestras Clases
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Clases grupales en un ambiente cálido y profesional, adaptadas a las
            necesidades de cada participante
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">
              Horarios Disponibles
            </h2>
            <div className="space-y-6">
              {schedules.map((schedule, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-8">
                    <CardTitle className="flex items-center gap-3 text-xl mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-orange-400" />
                      </div>
                      {schedule.days}
                    </CardTitle>
                    <div className="space-y-4">
                      <p className="text-2xl font-semibold text-orange-400">
                        {schedule.time}
                      </p>
                      <p className="text-lg text-gray-600">
                        Turno {schedule.period}
                      </p>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            schedule.available ? "bg-green-500" : "bg-red-500"
                          }`}
                        />
                        <span className="text-sm font-medium">
                          {schedule.available
                            ? "Lugares disponibles"
                            : "Completo"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">
              ¿Qué Incluye Cada Clase?
            </h2>
            <div className="space-y-6">
              {classContent.map((content, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <content.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {content.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {content.duration}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      {content.items.map((item, itemIndex) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Card className="border border-gray-200 shadow-lg mb-12">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 font-playfair">
              Ubicación
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Nuestro Espacio
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Av. Maipú 1234, Olivos
                      <br />
                      Buenos Aires, Argentina
                    </p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Transporte público:</strong> Estación Olivos (Tren
                    Mitre) a 3 cuadras. Múltiples líneas de colectivo.
                  </p>
                  <p>
                    <strong>Estacionamiento:</strong> Disponible en la zona.
                  </p>
                </div>
              </div>
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <p className="text-gray-500">
                  Mapa interactivo de la ubicación
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Reserva tu lugar o consulta sobre nuestras clases. ¡Te esperamos
            para comenzar juntos este camino!
          </p>
          <Link
            href="https://wa.me/5491123456789?text=Hola! Me interesa conocer más sobre las clases del Método AdulMa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-orange-400 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Reservar por WhatsApp
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

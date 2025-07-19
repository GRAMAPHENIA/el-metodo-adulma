import { Button } from "@/components/ui/button";
import { ArrowRight, Users, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight font-playfair">
                El Método <span className="text-orange-400">AdulMa</span>
              </h1>
              <p className="text-2xl text-gray-600 mt-4">
                Movimiento y mente para adultos mayores
              </p>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
              Sistema integral que combina ejercicio físico y estimulación
              cognitiva para promover un envejecimiento activo y saludable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/clases">
                <Button
                  size="lg"
                  className="bg-orange-400 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Conocé nuestras clases
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <Link href="/formacion">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-orange-300 bg-white text-gray-700 hover:text-orange-600 px-8 py-4 text-lg rounded-xl hover:shadow-md transition-all duration-200"
                >
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Formate como instructor
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-12 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 font-playfair">
                  5+
                </div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 font-playfair">
                  200+
                </div>
                <div className="text-sm text-gray-600">Alumnos activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 font-playfair">
                  50+
                </div>
                <div className="text-sm text-gray-600">
                  Instructores formados
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Adultos mayores participando en actividades del Método AdulMa"
              width={500}
              height={600}
              className="rounded-2xl shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

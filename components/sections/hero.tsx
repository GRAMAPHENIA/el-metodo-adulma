import { Button } from "@/components/ui/button";
import { ArrowRight, Users, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 bg-zinc-25 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-zinc-800 leading-tight font-playfair">
                El Método <span className="text-amber-400">AdulMa</span>
              </h1>
            </div>

            <p className="text-xl text-zinc-600 leading-relaxed max-w-xl">
              Sistema integral que combina ejercicio físico y estimulación
              cognitiva para promover un envejecimiento activo y saludable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/clases">
                <Button
                  size="lg"
                  className="bg-amber-400 hover:bg-amber-500 text-white px-8 py-4 text-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
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
                  className="border-2 border-zinc-200 hover:border-amber-300 bg-white text-zinc-600 hover:text-amber-500 px-8 py-4 text-lg rounded-xl hover:shadow-sm transition-all duration-200"
                >
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Formate como instructor
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-12 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 font-playfair">
                  5+
                </div>
                <div className="text-sm text-zinc-500">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 font-playfair">
                  200+
                </div>
                <div className="text-sm text-zinc-500">Alumnos activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 font-playfair">
                  50+
                </div>
                <div className="text-sm text-zinc-500">
                  Instructores formados
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[350px] object-cover rounded-2xl shadow-xl opacity-80"
                poster="/galeria/01.webp"
              >
                <source src="/video-hero/hero.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

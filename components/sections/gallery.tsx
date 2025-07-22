import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Gallery() {
  const galleryImages = [
    { src: "/galeria/01.webp", alt: "Clase de AdulMa - Ejercicios grupales" },
    { src: "/galeria/02.webp", alt: "Adultos mayores en actividad física" },
    { src: "/galeria/03.webp", alt: "Estimulación cognitiva en grupo" },
    { src: "/galeria/04.webp", alt: "Ejercicios de equilibrio y coordinación" },
    { src: "/galeria/05.webp", alt: "Ambiente grupal y socialización" },
    { src: "/galeria/06.webp", alt: "Actividades del Método AdulMa" },
    { src: "/galeria/07.webp", alt: "Participantes en clase" },
    { src: "/galeria/08.webp", alt: "Ejercicios adaptados" },
    { src: "/galeria/09.webp", alt: "Bienestar integral en acción" },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-800 mb-6 font-playfair">
            Nuestras clases en acción
          </h2>
          <p className="text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo el Método AdulMa transforma la vida de nuestros participantes
            a través de momentos reales de nuestras sesiones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border border-zinc-50 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
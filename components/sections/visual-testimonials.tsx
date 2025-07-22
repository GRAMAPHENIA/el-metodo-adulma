import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VisualTestimonials() {
  const testimonialImages = [
    { src: "/publicidad/01.webp", alt: "Testimonio visual - Transformación 1" },
    { src: "/publicidad/02.webp", alt: "Testimonio visual - Transformación 2" },
    { src: "/publicidad/03.webp", alt: "Testimonio visual - Transformación 3" },
    { src: "/publicidad/04.webp", alt: "Testimonio visual - Transformación 4" },
    { src: "/publicidad/05.webp", alt: "Testimonio visual - Transformación 5" },
    { src: "/publicidad/06.webp", alt: "Testimonio visual - Transformación 6" },
  ];

  return (
    <section className="py-20 px-4 bg-zinc-25">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-800 mb-6 font-playfair">
            Historias de transformación
          </h2>
          <p className="text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed">
            Cada imagen cuenta una historia de superación, bienestar y alegría.
            Conoce los resultados reales de quienes ya viven el Método AdulMa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonialImages.map((image, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border border-zinc-50 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/testimonios">
            <Button
              size="lg"
              className="bg-amber-400 hover:bg-amber-500 text-white px-8 py-4 text-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              Ver todos los testimonios
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
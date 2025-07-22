import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">El Método</span>
                <span className="text-2xl font-bold text-amber-400 ml-1">
                  AdulMa
                </span>
              </div>
            </div>
            <p className="text-zinc-200 mb-8 max-w-md leading-relaxed text-lg">
              Sistema integral de actividad física y estimulación cognitiva para
              adultos mayores. Promovemos el envejecimiento activo y saludable.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-12 h-12 bg-zinc-700 rounded-xl flex items-center justify-center hover:bg-amber-400 transition-colors duration-300 p-2"
              >
                <Image
                  src="/icons/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 bg-zinc-700 rounded-xl flex items-center justify-center hover:bg-amber-400 transition-colors duration-300 p-2"
              >
                <Image
                  src="/icons/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 bg-zinc-700 rounded-xl flex items-center justify-center hover:bg-amber-400 transition-colors duration-300 p-2"
              >
                <Image
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-playfair">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/el-metodo"
                  className="text-zinc-200 hover:text-amber-400 transition-colors"
                >
                  El Método
                </Link>
              </li>
              <li>
                <Link
                  href="/clases"
                  className="text-zinc-200 hover:text-amber-400 transition-colors"
                >
                  Clases
                </Link>
              </li>
              <li>
                <Link
                  href="/formacion"
                  className="text-zinc-200 hover:text-amber-400 transition-colors"
                >
                  Formación
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonios"
                  className="text-zinc-200 hover:text-amber-400 transition-colors"
                >
                  Testimonios
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-playfair">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-zinc-200">
                  <p>Av. Maipú 1234</p>
                  <p>Olivos, Buenos Aires</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <p className="text-zinc-200">+54 11 2345-6789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <p className="text-zinc-200">info@elmetodoadulma.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-300 text-sm">
              © {currentYear} El Método AdulMa. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacidad"
                className="text-zinc-300 hover:text-amber-400 text-sm transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terminos"
                className="text-zinc-300 hover:text-amber-400 text-sm transition-colors"
              >
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

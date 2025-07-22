import Link from "next/link";
import { MapPin, Phone, Mail, Heart, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid md:grid-cols-12 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-12 lg:col-span-5">
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
            <p className="text-zinc-300 max-w-md leading-relaxed">
              Sistema integral de actividad física y estimulación cognitiva para
              adultos mayores.
            </p>
          </div>

          {/* Enlaces y Contacto */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              Navegación
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/el-metodo"
                  className="text-zinc-300 hover:text-amber-400 transition-colors"
                >
                  El Método
                </Link>
              </li>
              <li>
                <Link
                  href="/clases"
                  className="text-zinc-300 hover:text-amber-400 transition-colors"
                >
                  Clases
                </Link>
              </li>
              <li>
                <Link
                  href="/formacion"
                  className="text-zinc-300 hover:text-amber-400 transition-colors"
                >
                  Formación
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonios"
                  className="text-zinc-300 hover:text-amber-400 transition-colors"
                >
                  Testimonios
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-4">
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              Contacto
            </h3>
            <div className="space-y-4 text-zinc-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <span>Av. Maipú 1234, Olivos, Bs. As.</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>+54 11 2345-6789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>info@elmetodoadulma.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-700 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 text-sm text-center sm:text-left">
            {currentYear} El Método AdulMa. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="text-zinc-400 hover:text-amber-400 transition-colors"
            >
              <Facebook size={22} />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="text-zinc-400 hover:text-amber-400 transition-colors"
            >
              <Instagram size={22} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

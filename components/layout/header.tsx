"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "El Método", href: "/el-metodo" },
    { name: "Clases", href: "/clases" },
    { name: "Formación", href: "/formacion" },
    { name: "Testimonios", href: "/testimonios" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? "shadow-lg bg-amber-500/50 backdrop-blur-xl" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/flag/brand.png"
                alt="El Método AdulMa"
                width={180}
                height={180}
                className="h-10 w-20 rounded-lg object-cover"
                priority
              />
            </Link>

            {/* CTA + Menu Button */}
            <div className="flex items-center space-x-4">
              <Link href="/contacto" className="hidden sm:block">
                <Button
                  size="sm"
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 group ${
                    isScrolled
                      ? "bg-zinc-800/80 backdrop-blur-xl hover:bg-zinc-900/80 text-white"
                      : "bg-white/90 hover:bg-white text-zinc-800 border border-zinc-200/80"
                  }`}
                >
                  Contactar
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Button
                size="icon"
                onClick={() => setIsMenuOpen(true)}
                className={`rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "bg-zinc-800/80 backdrop-blur-xl hover:bg-zinc-900/80 text-white"
                    : "bg-white/90 hover:bg-white text-zinc-800 border border-zinc-200/80"
                }`}
              >
                <span className="sr-only">Abrir menú</span>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* --- Navigation Panel --- */}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between px-6 h-20 border-b">
            <h2 className="font-semibold text-lg">Menú</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full"
            >
              <X className="h-6 w-6 text-zinc-500" />
              <span className="sr-only">Cerrar menú</span>
            </Button>
          </div>

          <nav className="flex-grow p-6">
            <ul className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "bg-amber-100 text-amber-800"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t">
            <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-zinc-800 hover:bg-zinc-900 text-white rounded-xl py-3 text-sm font-medium group">
                Contactar
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

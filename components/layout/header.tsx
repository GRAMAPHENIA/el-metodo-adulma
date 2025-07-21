"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "El Método", href: "/el-metodo" },
    { name: "Clases", href: "/clases" },
    { name: "Formación", href: "/formacion" },
    { name: "Testimonios", href: "/testimonios" },
    { name: "Contacto", href: "/contacto" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`mt-6 transition-all duration-500 ease-out ${
              isScrolled 
                ? "bg-white/95 backdrop-blur-xl shadow-xl shadow-black/5 border border-gray-200/60" 
                : "bg-white/80 backdrop-blur-lg shadow-lg border border-gray-200/40"
            } rounded-full`}
          >
            <div className="flex items-center justify-between px-6 lg:px-8 py-4">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-200">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-lg font-bold text-gray-800">AdulMa</span>
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "bg-orange-400 text-white shadow-sm"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* CTA + Mobile Menu */}
              <div className="flex items-center space-x-4">
                <Link href="/contacto" className="hidden lg:block">
                  <Button 
                    size="sm"
                    className="bg-gray-700 hover:bg-gray-800 text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 group"
                  >
                    Contactar
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>

                {/* Mobile menu button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 rounded-full hover:bg-gray-50"
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Menu className="h-5 w-5 text-gray-500" />
                  )}
                </Button>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mt-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/60 overflow-hidden">
              <div className="px-6 py-6">
                <div className="space-y-2">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive(item.href)
                          ? "bg-orange-400 text-white"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link href="/contacto">
                    <Button 
                      className="w-full bg-gray-700 hover:bg-gray-800 text-white rounded-xl py-3 text-sm font-medium group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contactar
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

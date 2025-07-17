import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | El Método AdulMa",
    default: "El Método AdulMa - Movimiento y Mente para Adultos Mayores",
  },
  description:
    "Programa integral de actividad física y cognitiva para adultos mayores. Clases presenciales en Olivos y formación profesional para instructores.",
  keywords: ["adultos mayores", "actividad física", "estimulación cognitiva", "Olivos", "formación profesional"],
  authors: [{ name: "El Método AdulMa" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://elmetodoadulma.com",
    siteName: "El Método AdulMa",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

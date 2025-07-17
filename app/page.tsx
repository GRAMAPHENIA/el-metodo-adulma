import type { Metadata } from "next"
import Hero from "@/components/sections/hero"
import Benefits from "@/components/sections/benefits"
import MethodSummary from "@/components/sections/method-summary"

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "El Método AdulMa combina actividad física y estimulación cognitiva para adultos mayores. Clases en Olivos y formación profesional para instructores.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <MethodSummary />
      <Benefits />
    </>
  )
}

import type { Metadata } from "next"
import FormacionClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Formación - Método AdulMa",
  description: "Descubre nuestros programas de formación para adultos mayores y profesionales. Cursos especializados en actividad física y estimulación cognitiva para el adulto mayor.",
  keywords: ["formación adultos mayores", "cursos para adultos mayores", "formación profesionales gerontología", "actividad física adultos mayores", "estimulación cognitiva"],
  openGraph: {
    title: 'Formación - Método AdulMa',
    description: 'Programas de formación especializados para adultos mayores y profesionales en el área gerontológica.',
    type: 'website',
    locale: 'es_AR',
  }
}

export default function FormacionPage() {
  return <FormacionClientPage />
}

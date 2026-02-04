// App.tsx
import { useEffect } from "react"
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom"

import Header from "./components/header"
import HeroSection from "./components/hero-section"
import Footer from "./components/footer"
import BookDetailPage from "./BookDetailPage"

// Secciones estáticas (sin lazy/suspense)
import ServicesSection from "./components/services-section"
import AboutSection from "./components/about-section"
import ContactSection from "./components/contact-section"
import BooksSection from "./components/books-section"
import EventsPage from "./events-page"

// --- Util: scroll suave al id del hash ---
function useHashScroll(fallbackId?: string) {
  const location = useLocation()
  useEffect(() => {
    const raw = location.hash?.replace("#", "") || fallbackId
    if (!raw) return
    const el = document.getElementById(raw)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [location.hash, fallbackId])
}

// --- Página one-page con todas las secciones ---
function OnePage({ initialTarget }: { initialTarget?: "servicios" | "libros" | "campamentos" | "contacto" }) {
  useHashScroll(initialTarget)

  return (
    <>
      <Header />
      <HeroSection />

 
      {/* 1) Datos curriculares */}
      <section id="sobre-mi">
        <AboutSection />
      </section>

      {/* 2) Consultas (citas) — dentro de ServicesSection agrega el bloque con id="consultas" (ver punto 2) */}
      <ServicesSection />

      {/* 3) Libros */}
      <section id="libros">
        <BooksSection />
      </section>

      {/* 4) Diplomados (tu componente / bloque) */}
      <section id="diplomados">
        {/* …tu DiplomadosSection aquí… */}
      </section>

      {/* 5) Campamentos */}
      <section id="campamentos">
        <EventsPage />
      </section>

      {/* 6) Contacto */}
      <section id="contacto">
        <ContactSection />
      </section>
    </>
  )
}



export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <main className="flex-1 sm:pb-0 pb-16">
          <Routes>
            {/* Home one-page; el hash decide a dónde scrollear */}
            <Route path="/" element={<OnePage />} />

            {/* Rutas “planas” que mantienen one-page pero hacen scroll inicial */}
            <Route path="/libros" element={<OnePage initialTarget="libros" />} />
            <Route path="/campamentos" element={<OnePage initialTarget="campamentos" />} />
            <Route path="/contacto" element={<OnePage initialTarget="contacto" />} />
            <Route path="/servicios" element={<OnePage initialTarget="servicios" />} />

            {/* Detalle (si lo usas) */}
            <Route path="/libros/:id" element={<BookDetailPage />} />

            {/* Cualquier otra cosa → home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

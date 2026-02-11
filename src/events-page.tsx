"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon, StarIcon, XIcon } from "./components/icons"

// ============================
// CONFIGURACIÓN
// ============================

const CAMPUS = {
  id: "campus-autoconocimiento",
  nombre: "Campamento de Autoconocimiento",
  descripcion_corta:
    "Metodología clínica con fundamento social y cultural. Experiencia vivencial para el autoconocimiento, el desbloqueo y la redistribución energética.",
  objetivo:
    "Aprender el arte de autorrealizarnos; conocerse más, liberar tensiones, abrir canales de comunicación y fomentar nuevos estilos de vida.",
  duracion: "3 días y 2 noches",
  programacion_anual: [
    { mes: "Marzo", cuando: "Según convocatoria" },
    { mes: "Diciembre", cuando: "Según convocatoria" },
  ],
  ubicacion_evento: {
    lugar: "Cabaña Terapéutica de Autoconocimiento",
    zona: "San Francisco, Sinaloa (≈20 min de Mazatlán, por la entrada a El Recodo)",
  },
  dirigido_a:
    "Adolescentes y adultos (incluso mayores de 70) que puedan caminar y deseen profundizar en su proceso personal.",
  contacto_actualizado: {
    direccion: {
      calle: "Carvajal",
      numero: "1028",
      cruce: "Esquina con Galeana",
      colonia: "Centro",
      ciudad: "Mazatlán",
      estado: "Sinaloa",
      pais: "México",
    },
    telefonos: {
      consultorio: { raw: "6699814015", formato: "669 981 4015", whatsapp_link: "https://wa.me/526699814015" },
      particular: { raw: "6691262149", formato: "+52 1 669 126 2149", whatsapp_link: "https://wa.me/526691262149" },
    },
    correo: "hugomalcampodedios@yahoo.com.mx",
  },
  requisitos: [
    "Llevar cambio/ropa blanca para la sesión de sanación",
    "Ropa cómoda para trabajo corporal y caminatas",
  ],
  objetivos: [
    "Autoconocimiento",
    "Catarsis / desbloqueo / desacorazamiento",
    "Redistribución energética",
    "Activar estados de atención: pausamiento, atención, observación",
  ],
} as const

type ProgramacionItem = { mes: string; cuando: string }
type SessionCard = {
  id: string
  title: string
  description: string
  dateLabel: string
  timeLabel: string
  location: string
  category: "Campamento"
}

const SESSIONS: SessionCard[] = CAMPUS.programacion_anual.map(
  (p: ProgramacionItem, idx) => ({
    id: `${CAMPUS.id}-${p.mes.toLowerCase()}-${idx}`,
    title: `${CAMPUS.nombre} — ${p.mes}`,
    description: CAMPUS.descripcion_corta,
    dateLabel: `${p.mes} · ${p.cuando}`,
    timeLabel: `Duración: ${CAMPUS.duracion}`,
    location: `${CAMPUS.ubicacion_evento.lugar} · ${CAMPUS.ubicacion_evento.zona}`,
    category: "Campamento",
  })
)

// ============================
// FOTOS reales (public/campamentos)
// ============================
// Genera IMG-20251015-WA0008.jpg ... WA0023.jpg desde /public/campamentos
const FOTOS: { src: string; alt?: string }[] = Array.from({ length: 23 - 8 + 1 }, (_, i) => {
  const n = (i + 8).toString().padStart(2, "0") // 08, 09, 10, ...
  return {
    src: `/campamentos/IMG-20251015-WA00${n}.jpg`,
    alt: `Campamento ${n}`,
  }
})


// Paleta que ya usas
const categoryColors = "from-blue-100 to-teal-100 text-blue-700"

// ============================
// COMPONENTE
// ============================
export default function EventsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const stripRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  // lightbox: cerrar con ESC / flechas
  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false)
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % FOTOS.length)
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + FOTOS.length) % FOTOS.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxOpen])

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx)
    setLightboxOpen(true)
  }

  const scrollStrip = (dir: 1 | -1) => {
    const el = stripRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" })
  }

  return (
    <section id="campamentos" className="relative min-h-screen py-20 px-4 bg-slate-50">
      {/* Fondos decorativos */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Campamento de Autoconocimiento</h2>
          <p className="text-xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
            Metodología clínica con fundamento <span className="font-medium">social y cultural</span>.
            Se realizan <span className="font-medium">dos</span> al año: <span className="font-medium">marzo</span> y <span className="font-medium">diciembre</span>.
            Sede: <span className="font-medium">San Francisco, Sinaloa</span>.
          </p>
        </div>
    {/* Objetivos + Recomendaciones */}
          <div className="grid lg:grid-cols-2 gap-8 mt-14 mb-14">
            <Card className="border-0 shadow-lg bg-white/90">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-slate-800">Objetivos</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-1 text-slate-700">
                  {CAMPUS.objetivos.map((o) => <li key={o}>{o}.</li>)}
                </ol>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/90">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-slate-800">Recomendaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  {CAMPUS.requisitos.map((r) => <li key={r}>{r}</li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Cards / próximas ediciones */}
        <div className={`transition-all duration-1000 ease-out delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Próximas ediciones</h3>
            <p className="text-slate-600">
              {SESSIONS.length} campamento{SESSIONS.length !== 1 ? "s" : ""} al año · {CAMPUS.duracion}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SESSIONS.map((event) => (
              <Card
                key={event.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white/90 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${categoryColors.split(" ").slice(0, 2).join(" ")} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <StarIcon className={`w-6 h-6 ${categoryColors.split(" ")[2]}`} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">{event.category}</div>
                    <CardTitle className="text-xl text-slate-800 leading-tight">{event.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-slate-600 leading-relaxed">{event.description}</CardDescription>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-slate-600">
                      <CalendarIcon className="w-4 h-4 mr-2 text-blue-500" />
                      {event.dateLabel}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <ClockIcon className="w-4 h-4 mr-2 text-teal-500" />
                      {event.timeLabel}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <MapPinIcon className="w-4 h-4 mr-2 text-purple-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <UsersIcon className="w-4 h-4 mr-2 text-green-500" />
                      {CAMPUS.dirigido_a}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                    <div>
                      <span className="font-medium">Dirección de contacto:</span>{" "}
                      {`${CAMPUS.contacto_actualizado.direccion.calle} ${CAMPUS.contacto_actualizado.direccion.numero}, ${CAMPUS.contacto_actualizado.direccion.cruce}, ${CAMPUS.contacto_actualizado.direccion.colonia}, ${CAMPUS.contacto_actualizado.direccion.ciudad}, ${CAMPUS.contacto_actualizado.direccion.estado}`}
                    </div>
                    <div>
                      <span className="font-medium">Tel. consultorio:</span>{" "}
                      {CAMPUS.contacto_actualizado.telefonos.consultorio.formato} ·{" "}
                      <a className="underline hover:no-underline" href={CAMPUS.contacto_actualizado.telefonos.consultorio.whatsapp_link} target="_blank" rel="noreferrer">
                        WhatsApp
                      </a>
                    </div>
                    <div>
                      <span className="font-medium">Tel. particular:</span>{" "}
                      {CAMPUS.contacto_actualizado.telefonos.particular.formato} ·{" "}
                      <a className="underline hover:no-underline" href={CAMPUS.contacto_actualizado.telefonos.particular.whatsapp_link} target="_blank" rel="noreferrer">
                        WhatsApp
                      </a>
                    </div>
                    <div>
                      <span className="font-medium">Correo:</span> {CAMPUS.contacto_actualizado.correo}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          

        {/* === Galería (CARRUSEL) ABAJO === */}
        {FOTOS.length > 0 && (
          <div className="relative mt-16">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800">Galería del campamento</h3>
              <p className="text-slate-600">Imágenes del espacio y actividades.</p>
            </div>

            <div
              ref={stripRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1 py-2 scrollbar-hide"
            >
              {FOTOS.map((f, idx) => (
                <button
                  key={f.src}
                  onClick={() => openLightbox(idx)}
                  className="
        relative flex-shrink-0
        w-[92%] sm:w-[70%] lg:w-[55%]
        h-[60vh] max-h-[720px]
        rounded-2xl overflow-hidden shadow snap-center group
        bg-white
      "
                  aria-label={`Abrir foto ${idx + 1}`}
                >
                  <img
                    src={f.src}
                    alt={f.alt ?? `Foto del campamento ${idx + 1}`}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 via-transparent to-transparent pointer-events-none" />
                </button>
              ))}
            </div>


            {/* Botones de navegación del carrusel */}
            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1">
              <button
                onClick={() => scrollStrip(-1)}
                className="pointer-events-auto hidden sm:inline-flex w-10 h-10 rounded-full bg-white/90 shadow hover:shadow-md border border-slate-200 justify-center items-center"
                aria-label="Anterior"
              >
                ‹
              </button>
              <button
                onClick={() => scrollStrip(1)}
                className="pointer-events-auto hidden sm:inline-flex w-10 h-10 rounded-full bg-white/90 shadow hover:shadow-md border border-slate-200 justify-center items-center"
                aria-label="Siguiente"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && FOTOS[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[70] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center"
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false) }}
            aria-label="Cerrar"
          >
            <XIcon className="w-5 h-5 text-slate-800" />
          </button>

          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={FOTOS[lightboxIndex].src}
              alt={FOTOS[lightboxIndex].alt ?? `Foto ${lightboxIndex + 1}`}
              className="w-full h-auto rounded-2xl shadow-2xl"
              loading="eager"
              decoding="async"
            />
            {/* Controles dentro del lightbox */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
              <button
                onClick={() => setLightboxIndex((i) => (i - 1 + FOTOS.length) % FOTOS.length)}
                className="w-10 h-10 rounded-full bg-white/90 shadow hidden sm:flex items-center justify-center"
                aria-label="Anterior"
              >
                ‹
              </button>
              <button
                onClick={() => setLightboxIndex((i) => (i + 1) % FOTOS.length)}
                className="w-10 h-10 rounded-full bg-white/90 shadow hidden sm:flex items-center justify-center"
                aria-label="Siguiente"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { PhoneIcon } from "../components/icons"

type Item = { id: string; label: string; targetId: string }

// Subnav (chips) sin “Diplomados”, y “Servicios (Consultas)” apuntando a id="servicios"
const SUBNAV_ITEMS: Item[] = [
  { id: "cv", label: "Datos curriculares", targetId: "sobre-mi" },
  { id: "servicios", label: "Servicios (Consultas)", targetId: "servicios" },
  { id: "libros", label: "Libros", targetId: "libros" },
  { id: "campamentos", label: "Campamentos", targetId: "campamentos" },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSubnav, setShowSubnav] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)

  // Orden de secciones a observar (incluye "consultas" solo para destacar aunque el link vaya a "servicios")
  const sections = [
    "inicio",
    "sobre-mi",
    "servicios",
    "consultas", // ← solo para detección/activo si todavía existe en tu página
    "libros",
    "campamentos",
    "contacto",
  ]

  useEffect(() => {
    const onScroll = () => {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY > 20
        if (scrolled !== isScrolled) setIsScrolled(scrolled)

        const scrollPosition = window.scrollY + 100
        for (const section of sections) {
          const el = document.getElementById(section)
          if (!el) continue
          const { top } = el.getBoundingClientRect()
          const offsetTop = window.scrollY + top
          const offsetHeight = el.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) setActiveSection(section)
            break
          }
        }
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    // Observa el sentinela para mostrar la subnav cuando ya pasó
    const sentinel = document.getElementById("chips-sentinel")
    let io: IntersectionObserver | null = null
    if (sentinel) {
      io = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          setShowSubnav(!entry.isIntersecting)
        },
        { rootMargin: "-64px 0px 0px 0px", threshold: 0 }
      )
      io.observe(sentinel)
    }

    return () => {
      window.removeEventListener("scroll", onScroll)
      io?.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection, isScrolled])

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement> | null,
    targetId: string
  ) => {
    if (e) e.preventDefault()
    const targetElement = document.getElementById(targetId)
    const headerEl = headerRef.current
    if (targetElement) {
      const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 80
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 8
      window.scrollTo({ top: targetPosition, behavior: "smooth" })
    }
  }

  // Helper: determina si un link debe verse activo
  const isActiveLink = (href: string) => {
    if (href === "servicios") return activeSection === "servicios" || activeSection === "consultas"
    return activeSection === href
  }

  // NAV PRINCIPAL (Diplomados removido, “Servicios (Consultas)” con href a #servicios)
  const navLinks = [
    { href: "inicio", label: "Inicio" },
    { href: "sobre-mi", label: "Datos curriculares" },
    { href: "servicios", label: "Servicios (Consultas)" },
    { href: "libros", label: "Libros" },
    { href: "campamentos", label: "Campamentos" },
    { href: "contacto", label: "Contacto" },
  ]

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg border-b border-blue-100 shadow-lg"
          : "bg-white/90 backdrop-blur-md border-b border-blue-50 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg">HM</span>
            </div>
            <div>
              <h1
                className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors cursor-pointer"
                onClick={(e) => handleSmoothScroll(e as any, "inicio")}
                title="Ir al inicio"
              >
                Hugo Malcampo de Dios
              </h1>
              <p className="text-sm text-slate-600">
                Psicólogo clínico con enfoque{" "}
                <span className="font-medium">Existencial, Humanista y de Liberación</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Secciones del sitio">
            {navLinks.map((link) => {
              const active = isActiveLink(link.href)
              return (
                <a
                  key={link.href}
href={`#${link.href}`}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  aria-current={active ? "page" : undefined}
                  className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 relative ${
                    active
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Desktop: teléfonos */}
          <div className="hidden xl:flex items-center space-x-3">
            <a
              href="tel:+526699814015"
              className="flex items-center space-x-2 text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-lg"
              aria-label="Llamar al consultorio 669 981 4015"
              title="Consultorio"
            >
              <PhoneIcon className="w-4 h-4 text-blue-600" />
              <span className="font-medium">669 981 4015</span>
            </a>

            <a
              href="https://wa.me/526691262149"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-lg"
              aria-label="Enviar WhatsApp al +52 1 669 126 2149"
              title="WhatsApp"
            >
              <PhoneIcon className="w-4 h-4 text-green-600" />
              <span className="font-medium"> 669 126 2149</span>
            </a>
          </div>
        </div>

        {/* Móvil: navegación fija (SIN hamburguesa) */}
        <nav className="xl:hidden mt-3" aria-label="Secciones del sitio en móvil">
          <div className="flex flex-wrap gap-2">
            {navLinks.map((link) => {
              const active = isActiveLink(link.href)
              return (
                <a
                  key={link.href}
href={`#${link.href}`}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  aria-current={active ? "page" : undefined}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                    active
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* Teléfonos en móvil (visibles) */}
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="tel:+526699814015"
              className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-lg"
              title="Consultorio"
            >
              <PhoneIcon className="w-4 h-4 text-blue-600" />
              <span className="font-medium">669 981 4015</span>
            </a>

            <a
              href="https://wa.me/526691262149"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-lg"
              title="WhatsApp"
            >
              <PhoneIcon className="w-4 h-4 text-green-600" />
              <span className="font-medium"> 669 126 2149</span>
            </a>
          </div>
        </nav>

        {/* Subnav sticky (chips) — aparece al pasar el sentinel (solo escritorio) */}
        {showSubnav && (
          <div className="hidden xl:block mt-3">
            <div className="flex gap-2 flex-wrap">
              {SUBNAV_ITEMS.map((item) => {
                const active = isActiveLink(item.targetId)
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSmoothScroll(null as any, item.targetId)}
                    className={`px-4 py-2 rounded-full border transition ${
                      active
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
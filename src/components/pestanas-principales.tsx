"use client"

export default function SectionChips() {
  const ITEMS = [
    { id: "cv",         label: "Datos curriculares", targetId: "sobre-mi" },
    { id: "consultas",  label: "Consultas (Citas)",  targetId: "consultas" },
    { id: "libros",     label: "Libros",             targetId: "libros" },
    { id: "diplomados", label: "Diplomados",         targetId: "diplomados" },
    { id: "campamentos",label: "Campamentos",        targetId: "campamentos" },
  ]

  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId)
    const headerEl = document.querySelector("header")
    if (targetElement) {
      const headerH = headerEl ? (headerEl as HTMLElement).getBoundingClientRect().height : 80
      const y = targetElement.getBoundingClientRect().top + window.scrollY - headerH - 8
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section aria-label="Accesos rápidos">
      {/* Sentinela para el Header (cuando desaparece, el header muestra subnav) */}
      <div id="chips-sentinel" className="h-1" />
      <div className="py-6 px-4 bg-white border-y border-slate-100">
        <div className="container mx-auto">
          <div className="flex gap-2 flex-wrap">
            {ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSmoothScroll(item.targetId)}
                className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-300 hover:bg-slate-50 transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

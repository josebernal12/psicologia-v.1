"use client"

import { useState, useEffect } from "react"
import { PhoneIcon, CheckIcon } from "../components/icons"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])


  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20"
    >
      {/* Fondos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/5 to-teal-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Lado de contenido */}
          <div className={`space-y-10 transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-2 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">Disponible para consultas</span>
            </div>

            {/* Encabezado corregido */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                Psicólogo clínico con enfoque{" "}
                <span className="relative">
                  <span className="text-slate-800">Existencial, Humanista y de Liberación</span>
                  <span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-slate-500/30 rounded-full"
                    aria-hidden="true"
                  />
                </span>
              </h1>

              {/* Texto cliente: primero 9 libros, luego campamento (singular) */}
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-light max-w-2xl">
                <strong>Autor de 9 libros</strong> y del <strong>campamento de autoconocimiento</strong>. Consultas presenciales, en línea (otras opciones en linea zoom o videollamada).
              </p>

              {/* Ubicación y datos */}
              <div className="flex flex-wrap items-center gap-6 text-slate-600">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Mazatlán, Sinaloa, México</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckIcon className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">Centro de Psicoterapia y Educación Integral</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckIcon className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">Campamentos en San Francisco, Sinaloa</span>
                </div>
              </div>
            </div>

            {/* CTA: solo llamada aquí (WhatsApp/celular). “Ver servicios” va bajo la foto. */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:6691262149"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                aria-label="Llamar al +52 1 669 126 2149 para agendar una consulta"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                 669 126 2149
              </a>
            </div>
          </div>

          {/* Lado de imagen */}
          <div className={`relative transition-all duration-1000 ease-out delay-200 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/tiohugo.jpg"
                  alt="Hugo Malcampo de Dios - Psicólogo clínico"
                  className="w-full h-[500px] sm:h-[600px] lg:h-[700px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>

                {/* Tarjeta flotante */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg">Hugo Malcampo de Dios</h3>
                      <p className="text-slate-600 text-sm">Psicólogo clínico</p>
                      <div className="flex items-center mt-2 space-x-4 text-xs text-slate-500">
                        <span>Consultorio en Mazatlán</span>
                        <span>•</span>
                        <span>Campamentos en San Francisco, Sinaloa</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                      <CheckIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador scroll */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 animate-bounce" : "opacity-0"}`}>
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

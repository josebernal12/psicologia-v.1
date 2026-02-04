"use client"

import { useState } from "react"

export default function NavigationMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName)
  }

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <ul className="flex items-center h-12">
          {/* Servicios */}
          <li className="relative">
            <button
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => toggleMenu("servicios")}
            >
              Servicios
            </button>
            {activeMenu === "servicios" && (
              <div className="absolute top-full left-0 z-50 w-64 bg-white border border-gray-200 rounded-md shadow-lg mt-1">
                <ul className="py-2">
                  <li>
                    <a
                      href="#terapia-individual"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Terapia Individual
                    </a>
                  </li>
                  <li>
                    <a
                      href="#terapia-pareja"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Terapia de Pareja
                    </a>
                  </li>
                  <li>
                    <a
                      href="#terapia-familiar"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Terapia Familiar
                    </a>
                  </li>
                  <li className="border-t border-gray-100 my-1"></li>
                  <li>
                    <a
                      href="#consultas-online"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Consultas Online
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* Especialidades */}
          <li className="relative">
            <button
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => toggleMenu("especialidades")}
            >
              Especialidades
            </button>
            {activeMenu === "especialidades" && (
              <div className="absolute top-full left-0 z-50 w-64 bg-white border border-gray-200 rounded-md shadow-lg mt-1">
                <ul className="py-2">
                  <li>
                    <a
                      href="#ansiedad"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Trastornos de Ansiedad
                    </a>
                  </li>
                  <li>
                    <a
                      href="#depresion"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Depresión
                    </a>
                  </li>
                  <li>
                    <a
                      href="#estres"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Gestión del Estrés
                    </a>
                  </li>
                  <li>
                    <a
                      href="#trauma"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Trauma y TEPT
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* Información */}
          <li className="relative">
            <button
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => toggleMenu("informacion")}
            >
              Información
            </button>
            {activeMenu === "informacion" && (
              <div className="absolute top-full left-0 z-50 w-64 bg-white border border-gray-200 rounded-md shadow-lg mt-1">
                <ul className="py-2">
                  <li>
                    <a
                      href="#sobre-mi"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Sobre Mí
                    </a>
                  </li>
                  <li>
                    <a
                      href="#formacion"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Formación y Experiencia
                    </a>
                  </li>
                  <li>
                    <a
                      href="#metodologia"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Metodología de Trabajo
                    </a>
                  </li>
                  <li className="border-t border-gray-100 my-1"></li>
                  <li>
                    <a
                      href="#preguntas-frecuentes"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Preguntas Frecuentes
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* Contacto */}
          <li>
            <a
              href="#contacto"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

"use client"

import { useState, useRef, useEffect } from "react"
import type { ReactNode } from "react"

interface MenubarProps {
  children: ReactNode
  className?: string
}

interface MenubarMenuProps {
  children: ReactNode
  className?: string
}

interface MenubarTriggerProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

interface MenubarContentProps {
  children: ReactNode
  className?: string
  isOpen?: boolean
}

interface MenubarItemProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

interface MenubarSeparatorProps {
  className?: string
}



export function Menubar({ children, className = "" }: MenubarProps) {
  return (
    <nav className={`flex h-10 items-center space-x-1 rounded-md border bg-white p-1 ${className}`}>
      <ul className="flex items-center space-x-1">{children}</ul>
    </nav>
  )
}

export function MenubarMenu({ children, className = "" }: MenubarMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <li ref={menuRef} className={`relative ${className}`}>
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
    </li>
  )
}

export function MenubarTrigger({ children, className = "", onClick }: MenubarTriggerProps) {
  return (
    <button
      className={`flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none hover:bg-gray-100 focus:bg-gray-100 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export function MenubarContent({ children, className = "", isOpen = false }: MenubarContentProps) {
  if (!isOpen) return null

  return (
    <div
      className={`absolute top-full left-0 z-50 min-w-48 overflow-hidden rounded-md border bg-white p-1 shadow-md animate-in fade-in-0 zoom-in-95 ${className}`}
    >
      <ul className="space-y-1">{children}</ul>
    </div>
  )
}

export function MenubarItem({ children, className = "", onClick, href }: MenubarItemProps) {
  const baseClasses = `relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 ${className}`

  if (href) {
    return (
      <li>
        <a href={href} className={baseClasses} onClick={onClick}>
          {children}
        </a>
      </li>
    )
  }

  return (
    <li>
      <button className={baseClasses} onClick={onClick}>
        {children}
      </button>
    </li>
  )
}

export function MenubarSeparator({ className = "" }: MenubarSeparatorProps) {
  return <li className={`-mx-1 my-1 h-px bg-gray-200 ${className}`} />
}

// Versión simplificada usando solo HTML
export function SimpleMenubar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <nav className="flex h-10 items-center space-x-1 rounded-md border bg-white p-1">
      <ul className="flex items-center space-x-1">
        {/* Menú Archivo */}
        <li className="relative">
          <button
            className="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none hover:bg-gray-100 focus:bg-gray-100"
            onClick={() => setActiveMenu(activeMenu === "file" ? null : "file")}
          >
            Archivo
          </button>
          {activeMenu === "file" && (
            <div className="absolute top-full left-0 z-50 min-w-48 overflow-hidden rounded-md border bg-white p-1 shadow-md">
              <ul className="space-y-1">
                <li>
                  <a
                    href="#nuevo"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100"
                  >
                    Nuevo
                    <span className="ml-auto text-xs tracking-widest text-gray-500">Ctrl+N</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#abrir"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100"
                  >
                    Abrir
                    <span className="ml-auto text-xs tracking-widest text-gray-500">Ctrl+O</span>
                  </a>
                </li>
                <li className="-mx-1 my-1 h-px bg-gray-200" />
                <li>
                  <a
                    href="#guardar"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100"
                  >
                    Guardar
                    <span className="ml-auto text-xs tracking-widest text-gray-500">Ctrl+S</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>

        {/* Menú Editar */}
        <li className="relative">
          <button
            className="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none hover:bg-gray-100 focus:bg-gray-100"
            onClick={() => setActiveMenu(activeMenu === "edit" ? null : "edit")}
          >
            Editar
          </button>
          {activeMenu === "edit" && (
            <div className="absolute top-full left-0 z-50 min-w-48 overflow-hidden rounded-md border bg-white p-1 shadow-md">
              <ul className="space-y-1">
                <li>
                  <a
                    href="#deshacer"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100"
                  >
                    Deshacer
                    <span className="ml-auto text-xs tracking-widest text-gray-500">Ctrl+Z</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#rehacer"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100"
                  >
                    Rehacer
                    <span className="ml-auto text-xs tracking-widest text-gray-500">Ctrl+Y</span>
                  </a>
                </li>
                <li className="-mx-1 my-1 h-px bg-gray-200" />
                <li>
                  <a
                    href="#cortar"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100"
                  >
                    Cortar
                    <span className="ml-auto text-xs tracking-widest text-gray-500">Ctrl+X</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#copiar"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100"
                  >
                    Copiar
                    <span className="ml-auto text-xs tracking-widest text-gray-500">Ctrl+C</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#pegar"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100"
                  >
                    Pegar
                    <span className="ml-auto text-xs tracking-widest text-gray-500">Ctrl+V</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>

        {/* Menú Ver */}
        <li className="relative">
          <button
            className="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none hover:bg-gray-100 focus:bg-gray-100"
            onClick={() => setActiveMenu(activeMenu === "view" ? null : "view")}
          >
            Ver
          </button>
          {activeMenu === "view" && (
            <div className="absolute top-full left-0 z-50 min-w-48 overflow-hidden rounded-md border bg-white p-1 shadow-md">
              <ul className="space-y-1">
                <li>
                  <label className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    Barra de herramientas
                  </label>
                </li>
                <li>
                  <label className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100">
                    <input type="checkbox" className="mr-2" />
                    Panel lateral
                  </label>
                </li>
                <li className="-mx-1 my-1 h-px bg-gray-200" />
                <li>
                  <a
                    href="#zoom-in"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100"
                  >
                    Acercar
                    <span className="ml-auto text-xs tracking-widest text-gray-500">Ctrl++</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#zoom-out"
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100"
                  >
                    Alejar
                    <span className="ml-auto text-xs tracking-widest text-gray-500">Ctrl+-</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  )
}

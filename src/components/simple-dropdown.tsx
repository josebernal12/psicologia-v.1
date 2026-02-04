"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface DropdownProps {
  trigger: string
  children: React.ReactNode
  className?: string
}

export function SimpleDropdown({ trigger, children, className = "" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      <button
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-56 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  )
}

export function DropdownItem({
  children,
  onClick,
  href,
}: { children: React.ReactNode; onClick?: () => void; href?: string }) {
  const baseClasses = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button className={`${baseClasses} w-full text-left`} onClick={onClick}>
      {children}
    </button>
  )
}

export function DropdownSeparator() {
  return <div className="border-t border-gray-100 my-1" />
}

"use client"

import { useParams, Link } from "react-router-dom"
import { initialBooks } from "./components/books-section"
import { BookOpenIcon, CalendarIcon, StarIcon } from "./components/icons"

export default function BookDetail() {
  const { id } = useParams<{ id: string }>()
  const book = initialBooks.find((b) => b.id === id)

  if (!book) {
    return (
      <div className="p-6 text-center text-slate-600">
        Libro no encontrado.{" "}
        <Link to="/libros" className="text-blue-600 font-medium hover:underline">
          Volver a la biblioteca
        </Link>
      </div>
    )
  }

  const renderStars = (rating: number) =>
    [...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-slate-300"
        }`}
      />
    ))

  return (
    <section className="min-h-screen py-10 px-4 bg-gradient-to-br from-slate-100 via-blue-50/40 to-teal-50/20">
      <div className="container mx-auto max-w-6xl">
        {/* 🔙 Botón volver */}
        <div className="mb-6">
          <Link
            to="/libros"
            className="inline-flex items-center text-slate-700 hover:text-blue-600 transition"
          >
            <span className="material-icons mr-2">
             
            </span>
            Volver a la biblioteca
          </Link>
        </div>

        {/* Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-xl shadow-md p-6">
          {/* Columna izquierda: portada */}
          <div className="flex justify-center lg:justify-start">
            {book.cover ? (
              <img
                src={book.cover}
                alt={book.title}
                className="rounded-lg w-72 lg:w-80 object-contain hover:scale-[1.02] transition-transform"
              />
            ) : (
              <div className="flex items-center justify-center h-96 w-72 bg-gradient-to-br from-blue-500 to-teal-600 rounded-lg shadow-lg">
                <BookOpenIcon className="w-16 h-16 text-white" />
              </div>
            )}
          </div>

          {/* Columna central: información */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-1">{book.title}</h1>
              <p className="text-lg text-slate-600">
                por <span className="font-medium">{book.author}</span>
              </p>
            </div>

            {/* Rating y fecha */}
            <div className="flex items-center gap-3">
              <div className="flex">{renderStars(book.rating)}</div>
              <span className="text-sm text-slate-600">{book.rating}/5</span>
              <div className="flex items-center text-sm text-slate-500 ml-4">
                <CalendarIcon className="w-4 h-4 mr-1 text-blue-500" />
                {book.dateRead && new Date(book.dateRead).toLocaleDateString("es-ES")}
              </div>
            </div>

            {/* Descripción */}
            <div>
              <h2 className="text-xl font-semibold text-slate-800 mb-2">📖 Descripción</h2>
              <p className="text-slate-700 leading-relaxed">{book.description}</p>
            </div>

            {/* Sobre el autor */}
            {book.details?.bio && (
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-2">👤 Sobre el autor</h2>
                <p className="text-slate-700 text-base">{book.details.bio}</p>
              </div>
            )}

            {/* Detalles de la edición */}
            {book.details && (
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-2">📌 Detalles de la edición</h2>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li><span className="font-medium">Editorial:</span> {book.details.editorial}</li>
                  <li><span className="font-medium">ISBN:</span> {book.details.isbn}</li>
                  <li><span className="font-medium">Edición:</span> {book.details.edition}</li>
                </ul>
              </div>
            )}

            {/* Contacto */}
            {book.details?.contact && (
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-2">📩 Contacto del autor</h2>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li><span className="font-medium">Email:</span> {book.details.contact.email}</li>
                  <li><span className="font-medium">Teléfono:</span> {book.details.contact.phone}</li>
                  <li><span className="font-medium">Dirección:</span> {book.details.contact.address}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

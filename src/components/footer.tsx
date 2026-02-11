import { HeartIcon, PhoneIcon, MailIcon, MapPinIcon } from "../components/icons"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">HM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Hugo Malcampo de Dios</h3>
                <p className="text-slate-300 text-sm">
                  Psicólogo clínico con enfoque Existencial, Humanista y de Liberación
                </p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Autor de 9 libros y del <span className="font-semibold">Campamento de Autoconocimiento</span>.
              Más de 40 años de experiencia clínica y docente, con participación en congresos nacionales e internacionales.
            </p>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-4 h-4 text-blue-400" />
                <a href="tel:+526699814015" className="text-slate-300 hover:text-white transition-colors" aria-label="Llamar al consultorio 669 981 4015">
                  Consultorio: 669 981 4015 <span className="text-slate-400">(L–V, 4–8 pm)</span>
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-4 h-4 text-green-400" />
                <div className="text-slate-300">
                  <a href="tel:+526691262149" className="hover:text-white transition-colors" aria-label="Llamar al celular +52 1 669 126 2149">
                    WhatsApp / Cel.: 669 126 2149
                  </a>
                  <span className="mx-2">·</span>
                  <a
                    href="https://wa.me/526691262149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                    aria-label="Enviar mensaje de WhatsApp a +52 1 669 126 2149"
                  >
                    Enviar WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MailIcon className="w-4 h-4 text-blue-400" />
                <a href="mailto:hugomalcampodedios@yahoo.com.mx" className="text-slate-300 hover:text-white transition-colors">
                  hugomalcampodedios@yahoo.com.mx
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-slate-300">
                Carvajal 1028, Centro, Mazatlán, Sinaloa, México — entre Av. Alemán y calle Galeana, esquina con Galeana
                </span>
              </div>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a href="#inicio" className="block text-slate-300 hover:text-white transition-colors">Inicio</a>
              <a href="#sobre-mi" className="block text-slate-300 hover:text-white transition-colors">Datos curriculares</a>
              <a href="#servicios" className="block text-slate-300 hover:text-white transition-colors">Servicios (Consultas)</a>
              <a href="#libros" className="block text-slate-300 hover:text-white transition-colors">Libros</a>
              <a href="#campamentos" className="block text-slate-300 hover:text-white transition-colors">Campamentos</a>
              <a href="#testimonios" className="block text-slate-300 hover:text-white transition-colors">Testimonios</a>
              <a href="#contacto" className="block text-slate-300 hover:text-white transition-colors">Contacto</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-slate-300">
            <span>© 2025 Hugo Malcampo de Dios. Hecho con</span>
            <HeartIcon className="w-4 h-4 text-red-400" />
            <span>para tu bienestar.</span>
          </div>
          <p className="text-sm text-slate-400 mt-2">Cédula Profesional 1405792 — UNAM</p>
        </div>
      </div>
    </footer>
  )
}

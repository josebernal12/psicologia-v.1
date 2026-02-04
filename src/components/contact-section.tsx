import { Card, CardContent } from "../components/ui/card"
import { PhoneIcon, MailIcon } from "../components/icons"

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Contacto personal</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Para comunicación directa y coordinación de consultas en línea.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Datos directos (correo Yahoo + celular) */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Datos de contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Correo</h4>
                    <p className="text-slate-600">hugomalcampodedios@yahoo.com.mx</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">WhatsApp (celular)</h4>
                    <p className="text-slate-600">
                      <a href="tel:+526691262149" className="text-blue-600 hover:underline">
                        +52 1 669 126 2149
                      </a>{" "}
                      ·{" "}
                      <a
                        href="https://wa.me/526691262149"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Enviar WhatsApp
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Teléfono del consultorio</h4>
                    <p className="text-slate-600">
                      <a href="tel:+526699814015" className="text-blue-600 hover:underline">
                        669 981 4015
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

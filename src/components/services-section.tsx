import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { BrainIcon, UsersIcon, HeartIcon, ZapIcon, ClockIcon } from "../components/icons"

const services = [
  {
    icon: ClockIcon,
    title: "Consulta clínica presencial",
    description:
      "Atención en consultorio de lunes a viernes de 4:00 a 8:00 pm.",
    features: [
      "Consultorio #1028",
      "Enfoque clínico con fundamento social y cultural",
      "Agendar por teléfono del consultorio",
    ],
  },
  {
    icon: ZapIcon,
    title: "Consulta por Zoom",
    description:
      "Modalidad en línea (previa cita) con la misma calidad de atención que la consulta presencial.",
    features: [],
  },
  {
    icon: UsersIcon,
    title: "Campamentos de Autoconocimiento",
    description:
      "Metodología clínica con fundamento social y cultural. Se realizan en marzo (equinoccio de primavera) y solsticio de diciembre.",
    features: ["Objetivos y fotos en la sección de Campamentos", "Trabajo grupal y reflexión guiada"],
  },
  {
    icon: HeartIcon,
    title: "Diplomados",
    description:
      "Alternativa de psicoterapia grupal donde se abordan temas clave del desarrollo personal.",
    features: ["Aperturas por convocatoria", "Enfoque vivencial y clínico"],
  },
  {
    icon: BrainIcon,
    title: "Talleres",
    description:
      "Formatos breves, prácticos y participativos orientados al autoconocimiento y la salud emocional.",
    features: ["Fechas según convocatoria", "Modalidad presencial o en línea"],
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Consultas y servicios</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Atención psicólogica a personas con problemas de ansiedad, depresión, patrones adictivos  de conducta, estrés crónico, etc
            expresada en modalidades claras para tu proceso personal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-slate-600 mb-4 leading-relaxed">{service.description}</CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Citas con datos correctos (consultorio, horario y contacto). 
            ⚠️ Rellena dirección y teléfono del consultorio cuando te los confirmen. */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold">Citas</h3>

          <p className="mt-1">Horario: <strong>Lunes a Viernes, 4:00–8:00 pm</strong></p>

          <p className="mt-1">
            Domicilio: <strong>Carvajal 1028, Centro, Mazatlán, Sinaloa, México</strong> —
            entre <strong>Av. Alemán</strong> y <strong>calle Galeana</strong>, esquina con Galeana.
          </p>

          <p className="mt-1">
            <strong>Para agendar cita:</strong>{" "}
            <a href="tel:+526699814015" className="text-blue-600 hover:underline">
              Tel. Consultorio 669 981 4015
            </a>
          </p>

          <p className="mt-1">
            Modalidad Zoom: coordina por{" "}
            <a href="https://wa.me/526691262149" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
              WhatsApp +52 1 669 126 2149
            </a>{" "}
            o correo <a href="mailto:hugomalcampodedios@yahoo.com.mx" className="text-purple-700 hover:underline">hugomalcampodedios@yahoo.com.mx</a>.
          </p>
        </div>


      </div>
    </section>
  )
}

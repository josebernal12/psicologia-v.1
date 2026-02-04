import { Card, CardContent } from "../components/ui/card"
import { StarIcon, QuoteIcon } from "../components/icons"

const testimonials = [
  {
    name: "Ana García",
    age: "32 años",
    text: "El Dr. Mendoza me ayudó a superar mi ansiedad de una manera que nunca pensé posible. Su enfoque es cálido pero profesional, y realmente se nota su experiencia.",
    rating: 5,
    treatment: "Terapia para Ansiedad",
  },
  {
    name: "Carlos Martín",
    age: "28 años",
    text: "Después de meses de terapia de pareja, mi relación ha mejorado enormemente. Las técnicas que nos enseñó han sido transformadoras.",
    rating: 5,
    treatment: "Terapia de Pareja",
  },
  {
    name: "Laura Rodríguez",
    age: "45 años",
    text: "Encontré en el Dr. Mendoza no solo un profesional excepcional, sino también una persona que realmente se preocupa por el bienestar de sus pacientes.",
    rating: 5,
    treatment: "Terapia Individual",
  },
  {
    name: "Miguel Santos",
    age: "38 años",
    text: "Las sesiones online fueron perfectas para mi horario. La calidad de la atención es la misma que presencial. Muy recomendable.",
    rating: 5,
    treatment: "Consultas Online",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Lo Que Dicen Mis Pacientes</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            La confianza y satisfacción de mis pacientes es mi mayor logro. Aquí algunas de sus experiencias
            transformadoras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start mb-4">
                  <QuoteIcon className="w-8 h-8 text-blue-200 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">"{testimonial.text}"</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.age}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-blue-600">{testimonial.treatment}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <span className="text-slate-700 font-medium">4.9/5 puntuación promedio</span>
            <span className="text-slate-500">• 127 reseñas</span>
          </div>
        </div>
      </div>
    </section>
  )
}

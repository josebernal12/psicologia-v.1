import { Card, CardContent } from "../components/ui/card"
import { GraduationCapIcon, AwardIcon, ClockIcon } from "../components/icons"

const achievements = [
  { icon: GraduationCapIcon, title: "40+ Años", subtitle: "de experiencia clínica y educativa" },
  { icon: AwardIcon, title: "Autor", subtitle: "del campamento de autoconocimiento" },
  { icon: ClockIcon, title: "Disponible", subtitle: "Consultas presenciales y por Zoom" },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Datos curriculares</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            <span className="font-medium">Hugo Malcampo de Dios</span>:
            psicoterapia <span className="font-medium">Existencial, Humanista y de Liberación</span>,
            con más de <span className="font-medium">40 años</span> de experiencia clínica y educativa.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna de texto */}
          {/* Encabezado unificado */}


          <div className="space-y-8">
            <div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Hugo Malcampo de Dios, psicólogo con formación en psicoterapia
                  <strong> Existencial, Humanista y de Liberación</strong>, con más de
                  <strong> 40 años</strong> de experiencia en el acompañamiento de personas en su proceso
                  de crecimiento personal y sanación emocional.
                </p>

                <p>
                  Estudió Psicología y obtuvo su titulación en la <strong>UNAM</strong> (cédula profesional 1405792).
                  Realizó estudios en <strong>Pedagogía y Ciencias Sociales</strong> en la ENSS y concluyó la maestría
                  como Psicoterapeuta Clínico en el <strong>Instituto de Terapia Gestalt Región Occidente</strong>.
                </p>

                <p>
                  Posteriormente, en la <strong>Academia Mundial de Psicoterapia Integrativa (WAEH)</strong> obtuvo una
                  segunda maestría con mención de honor y su <strong>doctorado</strong>, recibiendo su titulación en
                  Meersburg, Alemania. Desde el año 2000 participa como expositor en congresos internacionales y es
                  docente en programas de doctorado en México.
                </p>

                <p>
                  Como conferencista ha llegado a compartir espacio con profesionales de países como
                  como Estados Unidos,
                  Alemania, Brasil, República Dominicana, Argentina, Polonia y Nigeria. Es creador del método
                  socioeducativo <strong>CAMPUS de Autoconocimiento</strong>.
                </p>
                <p>
                  <p>
                    El autor, para profundizar sus estudios de psicología, ha viajado a distintos lugares con el propósito de conocer las
                    culturas ancestrales u originarias. Por ejemplo, estuvo en Chiapas visitando lugares como Tuxtla Gutiérrez, San Cristóbal de las Casas,
                    San Juan Chamula y las Rutas del Mamut. Visitó muchas cascadas y lagos donde tuvo experiencias místicas. Estuvo en Yaxchilán,
                    donde logró el encuentro con el pájaro jaguar y la visión de la serpiente. Tuvo experiencias en la selva donde estuvo
                    muy cerca del canto de los monos aulladores y vivió la experiencia del canto armónico. Estuvo también en Bonampak
                    y apreció el arte que quedó plasmado en esos lugares. Conoció la cultura de los mayas lacandones, la zona arqueológica
                    de Palenque y los estudios que se están haciendo sobre la tumba de Pakal. También estuvo en Ocosingo y en Toniná,
                    explorando cada nivel piramidal y experimentando cómo limpiar el lente de percepción por niveles hacia la visión clara.
                    Estuvo en una ecoaldea en Chiapas, visitó el pueblo y el cerro de Copoya.
                  </p>
                  <p>
                    Además, estuvo en Quintana Roo, en Tulum y Cobá. Visitó Chichén Itzá y recorrió el sur-sureste, en los estados de Quintana Roo,
                    Yucatán y Campeche, visitando todas las zonas y territorios que contienen una historia profunda de nuestra cultura milenaria en este país.
                    También ha visitado Alemania, Roma, Venecia y Suiza. Estuvo en Perú, específicamente en la zona de Machu Picchu, en la Montaña de Siete
                    Colores y logró subir a la montaña Humantay. Estuvo en muchos lugares de la India milenaria, con el único propósito de conocer la
                    psicología profunda que utilizaron aquellos que lograron alcanzar una activación en sus niveles de conciencia.
                  </p>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Especialidades y enfoque</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Psicoterapia <strong>Existencial, Humanista y de Liberación</strong>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Acompañamiento en procesos de autoconocimiento y crecimiento personal
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Conferencista y formador en espacios académicos y profesionales
                </li>
              </ul>
            </div>
          </div>

          {/* Columna de logros */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-lg bg-white">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <achievement.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-slate-800 mb-1">{achievement.title}</div>
                    <div className="text-sm text-slate-600">{achievement.subtitle}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

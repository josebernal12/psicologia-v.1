

import { useState, useEffect } from "react"
import { BookOpenIcon, StarIcon, CalendarIcon } from "./icons"
import { Link } from "react-router-dom"

export interface Book {
  id: string
  title: string
  author: string
  isbn?: string
  publisher?: string
  year?: number   // 👈 agregado

  description: string
  category: string
  rating: number
  dateRead?: string
  notes?: string
  cover?: string
  coverColor?: string
  createdAt: Date
  pages?: string[]

  details?: {
    bio?: string
    publishedBooks?: string[]
    academicWork?: string[]

    design?: string
    layout?: string
    editor?: string
    illustration?: string
    photography?: string
    printedIn?: string
    editorial?: string
    isbn?: string
    edition?: string
    backCoverExcerpt?: string

    contact?: {
      email: string
      phone: string
      address: string
    }
  }
}



export const initialBooks: Book[] = [
  {
    id: "1",
    title: "Psicología, Pedagogía y Arte centrados en la nueva acción",
    author: "Hugo Malcampo De Dios",
    description:
      "Una visión social humanista. Urge replantear la dimensión de las carreras que atienden a seres humanos en cualquier área de lo social y retomar el sentido humano de estas profesiones...",
    category: "Psicología",
    rating: 5,
    dateRead: "2023-05-12",
    cover: "/portada1.jpg",
    createdAt: new Date("2023-05-13"),
    details: {
      bio: `Psicólogo titulado en la UNAM. Estudió Pedagogía en la Normal Superior del Sur de Sinaloa, con dos maestrías y dos doctorados. Autor de los Campamentos de Autoconocimiento, director del Centro de Psicoterapia y Educación Integral. Ha escrito ocho libros y participa en congresos internacionales desde 1999.`,
      publishedBooks: [
        "Psicología y cultura (2019)",
        "Educar para transformar (2014)",
        "Educación social y nuevo humanismo (2010)",
        "Sueños y vida cotidiana con un enfoque social (2005)",
        "Psicología y autorrealización (2003)",
        "La fuerza de ser uno mismo y los vínculos familiares (2002)",
        "Autoconocimiento y trascendencia (2001)",
        "Sexualidad (2000)",
      ],
      editorial: "Ediciones del Lirio",
      isbn: "978-607-8930-07-4",
      edition: "Primera edición: mayo de 2023",
      contact: {
        email: "hugomalcampodedios@yahoo.com.mx",
        phone: "6691711534",
        address: "Mar del Coral y Amapa 160, Fracc. Vista del Mar, Mazatlán, Sinaloa",
      },
    },
  },
  {
    id: "2",
    title: "Psicología y Cultura",
    author: "Hugo Malcampo De Dios",
    description:
      "Este libro ofrece un análisis profundo de la relación entre la psicología y la diversidad cultural. A través de reflexiones, ejemplos y estudios, explora cómo las tradiciones, costumbres y expresiones artísticas influyen en la construcción de la identidad, el comportamiento humano y los procesos de autorrealización. Una obra esencial para estudiantes, psicólogos y lectores interesados en comprender la conexión entre mente, cultura y sociedad.",
    category: "Psicología / Cultura",
    rating: 5,
    dateRead: "2023-08-15",
    cover: "/portada2.jpg",
    createdAt: new Date("2023-08-16"),
    details: {
      editorial: "Ediciones del Lirio",
      isbn: "978-607-8569-86-1",
      edition: "Primera edición, agosto de 2019",
      design: "Hugo Malcampo Bernal",
      editor: "Sigfrido Bañuelos / Moby Dick Editorial",
      layout: "Pepe Ceniceros",
      printedIn: "México",
      bio: "Hugo Malcampo De Dios estudió Psicología en el Centro Universitario de Mazatlán (incorporado a la UNAM) y obtuvo su cédula profesional con el número 1405792. También cursó Pedagogía y Ciencias Sociales en la Normal Superior del sur de Sinaloa. Realizó dos maestrías y dos doctorados, destacando su obra *Psicología y autorrealización* (2003), con la cual recibió mención honorífica en Meersburg, Alemania. Ha sido director del Centro de Psicoterapia y Educación Integral, participando desde 1999 en congresos internacionales. Como psicoterapeuta, fundó el Campus de Autoconocimiento con un enfoque psicopedagógico, clínico y comunitario. Asimismo, fue profesor e investigador de tiempo completo titular 'C' en la Facultad de Trabajo Social de la Universidad Autónoma de Sinaloa, impartiendo cátedras como Psicología Social, Sociología de la Familia Mexicana, Pedagogía Social, Cultura y Estilos de Vida. Su labor académica estuvo vinculada al Cuerpo Académico PROMEP con la línea de investigación sobre Cultura e Imaginario Social, participando en foros y publicaciones internacionales.",
      academicWork: [
        "La urgencia de transformar la tarea educativa (ponencia, Univ. de Colima).",
        "El investigador social como sujeto: pobreza e identidad cultural (libro: *Espacios de intervención del trabajador social*, en colaboración con Univ. de Colima).",
        "Métodos para el estudio de grupos y dinámicas sociales.",
        "Cultura y valores de la competencia (publicado en *Educar para transformar*, 2014).",
        "Técnicas integrativas de salud.",
        "Servicio social y creatividad (ponencia en congreso internacional, UAS).",
      ],
      publishedBooks: [
        "Educar para transformar (2014)",
        "Educación social y nuevo humanismo (2010)",
        "Sueños y vida cotidiana con un enfoque social (2005)",
        "Psicología y autorrealización (2003)",
        "La fuerza de ser uno mismo y los vínculos familiares (2002)",
        "Autoconocimiento y trascendencia (2001)",
        "Sexualidad (1999)",
      ],
      backCoverExcerpt:
        "Es necesario integrar la duda con la inteligencia, la toma de decisión, la autonomía y la acción creativa; la sexualidad consciente, responsable e íntima, con la capacidad de amar, con la voz y la esencialidad de las intersubjetividades en contacto; impulsar la vida de seres humanos que trascienden la percepción condicionada que las instituciones milenarias han impuesto y que en la reproducción social los han atrapado en rediles diversos. Aspiramos a la autonomía, la libertad y la conciencia; cuando esto suceda, la emancipación de los pueblos y la justicia social basada en los derechos humanos será posible.",
      contact: {
        email: "hugomalcampodedios@yahoo.com.mx",
        phone: "6691711534",
        address: "Mar del Coral y Amapa 160, Fracc. Vista del Mar, Mazatlán, Sinaloa",
      },
    },
  },
  {
    id: "3",
    title: "Educar para Transformar",
    author: "Dr. Hugo Malcampo De Dios",
    publisher: "Ediciones Papiro Omega, S.A. de C.V.",
    cover: "/portada3.jpg",

    isbn: "978-607-7852-31-5",
    year: 2014, // confirmado: 1a edición, febrero de 2014
    description: `Desde 1981 el Dr. Hugo Malcampo De Dios ha impartido conferencias en México y en congresos internacionales, junto a especialistas de distintos países. Entre sus libros publicados destacan "Sexualidad, Autoconocimiento y trascendencia", "La fuerza de ser uno mismo y los vínculos familiares", "Psicología y autorrealización", "Sueños y vida cotidiana" y "Educación social y nuevo humanismo".  
  El autor impulsa un nuevo humanismo y una pedagogía con fundamentos sociales y humanos, cuestionando el diseño curricular que tiende a deshumanizar la educación. Propone un Servicio Social revalorado y más centrado en las personas que en los números. Es creador del método socioeducativo con base clínica CAMPUS DE AUTOCONOCIMIENTO, el cual ha influido en muchos profesionistas.  
  En este libro, el autor invita a psicólogos, sociólogos, educadores, médicos y profesionistas de distintas áreas a abrir ventanas de percepción para aprender a convivir con la diferencia y ampliar el jardín del conocimiento. Resalta el valor de la rebeldía bien entendida como fuerza transformadora para construir esperanza y metodologías socioeducativas más humanas.`,
    category: "Educación / Psicología",
    rating: 5,
    dateRead: "2023-10-01", // 👈 ajusta a tu conveniencia
    createdAt: new Date("2023-10-02"),
    details: {
      bio: `El Dr. Hugo Malcampo De Dios estudió Psicología en la UNAM (cédula profesional 1405792). Realizó estudios de Pedagogía y Ciencias Sociales en la ENSS. Obtuvo una maestría como Psicoterapeuta Clínico en el Instituto de Terapia Gestalt Región Occidente (Guadalajara, Jalisco) y una segunda maestría en Psicoterapia Integrativa en la Academia Mundial de Psicoterapia Integrativa (WAEH), en Meersburg, Alemania, donde también cursó el doctorado y se convirtió en miembro académico. Desde el 2000 es expositor en congresos internacionales y actualmente docente de doctorados en la misma Academia.  
    Ha sido profesor en la Universidad Autónoma de Sinaloa desde 1993, con más de 30 años de experiencia docente y psicoterapeuta clínico profesional. Además, ha impulsado el nuevo humanismo, la pedagogía social y humana, y es creador del método socioeducativo "Campus de Autoconocimiento".`,
      publishedBooks: [
        "Sexualidad, Autoconocimiento y trascendencia",
        "La fuerza de ser uno mismo y los vínculos familiares",
        "Psicología y autorrealización",
        "Sueños y vida cotidiana",
        "Educación social y nuevo humanismo"
      ]
    }
  },
  {
    id: "4",
    title: "Educación social y nuevo humanismo",
    author: "Hugo Malcampo De Dios",
    publisher: "Ediciones Yoltéotl",
    isbn: "978-968-7846-01-9",
    description: `Cuando un hombre piensa, introduce una forma nueva de mirar el mundo. 
  Así lo hace Hugo Malcampo de Dios en esta obra que invita a los lectores a vivir con pasión la existencia 
  y a entregarse a una manera nueva de pensar. Su obra confronta al pensador encasillado, 
  así como a los investigadores que se han vendido al sistema.  

  El autor convoca a cerrar filas contra el imaginario social que adormece y mata la nueva vida, la feminidad 
  y todo aquello que está más allá de las fronteras que controlan y lapidan.  

  El humanismo que promueve reta tanto al trabajador social como al educador hacia un mundo más humano 
  que despierte los valores del Ser y de la entrega al presente sin borrar la historia que nos construye.  

  La obra impulsa una educación social donde los aprendices no se apoltronan en la educación bancaria, 
  sino que levantan el estandarte del nuevo hombre.  

  Finalmente, es un canto a la conciencia transpersonal que, al superar las fronteras personales, 
  atraviesa la biología, la psicología y lo social, hasta llegar a un Ser que aspire a la Unidad con el Universo, 
  permitiendo afirmar: "todos somos uno".`,
    category: "Educación / Humanismo",
    rating: 5,
    dateRead: "2023-11-25", // cámbialo según tu fecha real
    cover: "/portada4.jpg",
    coverColor: "#000000",
    createdAt: new Date("2023-11-25"),
    details: {
      bio: `Hugo Malcampo De Dios es egresado de la Facultad de Psicología de la UNAM, donde concluyó su Licenciatura en Psicología. 
    Realizó estudios de Pedagogía y Ciencias Sociales en la Normal Superior del Sur de Sinaloa. 
    Obtuvo maestrías en Psicoterapia Gestalt (Instituto de Terapia Gestalt Región Occidente "INTEGRO") 
    y en Hipnoterapia Clínica Médica, con mención honorífica en Meersburg, Alemania, 
    donde también terminó su doctorado en Hipnoterapia Clínica Médica.  
    Actualmente es profesor e investigador titular “C” en la Facultad de Trabajo Social 
    de la Universidad Autónoma de Sinaloa, Unidad Mazatlán.`,
      publishedBooks: [
        "Sexualidad, Autoconocimiento y trascendencia",
        "La fuerza de ser uno mismo y los vínculos familiares",
        "Psicología y autorrealización",
        "Sueños y vida cotidiana",
        "Educar para transformar"
      ],
      design: "Guadalupe Cardiel",
      editor: "Miguel Jarquín",
      layout: "Socorro Paz Lara",
      illustration: "",
      photography: "",
      printedIn: "México",
      edition: "Primera edición, 2010",
      editorial: "Ediciones Yoltéotl",
      contact: {
        email: "soldemovimiento@prodigy.net.mx",
        phone: "01 (33) 31 25 25 40",
        address: "Zapopan, Jalisco, México"
      }
    }
  },
  {
    id: "5",
    title: "Sueños y Vida Cotidiana: Fronteras hacia el Ser",
    author: "Hugo Malcampo de Dios",
    isbn: "978-970-733-122-6",
    publisher: "No especificado",
    description: "Una obra que explora la relación entre los sueños y la vida cotidiana como fronteras hacia el ser. Aborda metáforas y reflexiones sobre vínculos familiares, comunicación, necesidades humanas y procesos de autorrealización. El libro integra temas de psicología transpersonal, autoconocimiento, trascendencia y sexualidad, proponiendo herramientas prácticas y testimonios que inspiran el desarrollo personal.",
    category: "Psicología / Desarrollo personal / Transpersonal",
    rating: 5,
    dateRead: "",
    createdAt: new Date(),
    cover: "/portada5.jpg",
    pages: [
      "IMG-20250821-WA0023.jpg",
      "IMG-20250821-WA0024.jpg",
      "IMG-20250821-WA0025.jpg"
    ],
    details: {
      backCoverExcerpt: `“Asistí a su conferencia sobre Sueños y después de escucharlo pensé que había valido la pena estar ahí... 
    Me gustó que en ese Congreso Internacional un ponente mexicano hablara y moviera emociones como él.” 
    — Testimonio recogido en la contraportada.`,
      publishedBooks: [
        "La Fuerza de Ser Uno Mismo y las Virtudes Familiares",
        "Psicología y Autorrealización",
        "Autoconocimiento y Trascendencia",
        "Sexualidad"
      ],
      edition: "Primera edición (2005)"
    },
    notes: `El libro está acompañado de reflexiones y testimonios de lectores y profesionales de la psicología que destacan el estilo accesible, cálido y metafórico de Hugo Malcampo de Dios. 
  Psicóloga Aurora Araujo (Ciudad Juárez, 2005) resalta que sus metáforas permiten asimilar el conocimiento científico de forma individualizada y profunda.`,
  },
  {
    id: "6",
    title: "Psicología y Autorrealización",
    author: "Hugo Malcampo de Dios",
    description: "es un libro que ofrece herramientas y metodologias que facilitan el desarrollo en cada una de las etapas que pasa el ser humano en vias de su autorrealizacion es la obra transpersonal.",
    category: "Psicología",
    rating: 5,
    cover: "/portada6.jpg",
    createdAt: new Date("2025-08-22"),
    details: {
      bio: `Licenciado en Psicología (UNAM). Doctor en Hipnoterapia Clínica Médica. Maestría en Hipnoterapia Clínica con mención de honor, y Maestría en Psicoterapia Gestalt (Guadalajara, Jalisco). Formación pedagógica en la ENESS en Ciencias Sociales; formación en Nuevas Ciencias de la Conducta y Análisis Transaccional.  
Docente desde 1980 y con experiencia clínica desde 1983. Ha promovido la psicología profunda de autores como Reich, Jung, Maslow, Erickson, Berne, Perls, Satir, Naranjo, Osho, Gurdjieff, entre otros.  
Imparte cursos de alto nivel profesional a directores y gerentes de escuelas y empresas. Profesor de Trabajo Social y Enfermería en la Universidad Autónoma de Sinaloa (área de salud y psicología).  
Pionero de los Congresos de Sexología Transpersonal en México. Miembro académico de la Asociación Internacional de Hipnoterapeutas Eclécticos, facilitador y ponente en congresos mundiales de hipnosis.  
Coordinador de diplomados que han formado a cientos de profesionistas entre médicos, psicólogos, trabajadores sociales y profesores. Participante en congresos internacionales con propuestas orientadas a la Psicología del Ser que enfatiza la capacidad de estar ATENTO.  
Director del Centro de Psicoterapia Transpersonal e Hipnosis Clínica. Capacitador de empresas de la región en autoconocimiento y desarrollo del potencial humano.`,
      publishedBooks: [],
      isbn: "970-93312-2-1",
      edition: "Primera edición: octubre de 2003",
      contact: {
        email: "hugomalcampodedios@yahoo.com.mx",
        phone: "6691711534",
        address: "Mar del Coral y Amapa 160, Fracc. Vista del Mar, Mazatlán, Sinaloa",
      },
    },
  },
  {
    id: "7",
    title: "La Fuerza de Ser Uno Mismo y Los Vínculos Familiares",
    author: "Hugo Malcampo De Dios",
    description: "Es una vision critica y metaforica con respecto a los vinculos familiares se aportan elementos sustanciosos acerca de la dinamica familiar. la comunicacion las necesidades de los ninos y es un desesmascaramiento a las relaciones patogenas de los juegos peligrosos que se practican en el nombre de la ayuda y el afecto tambien es declaracion de vida dicha y creatividad del estado de autorelazacion que encuentra el ser apesar de ese hecho es un mapa una hipotesis una invitacion a la experencia.",
    category: "Psicología",

    rating: 5,
    cover: "/portada7.jpg",
    createdAt: new Date("2025-08-22"),
    details: {
      bio: `Licenciado en Psicología (UNAM). Doctor en Hipnoterapia Clínica Médica. Formación pedagógica en la ENESS en Ciencias Sociales. Maestría en Psicoterapia Gestalt (Guadalajara, Jalisco). Formación en Nuevas Ciencias de la Conducta y Análisis Transaccional.  
Docente desde 1980 y con experiencia clínica desde 1983. Ha promovido la psicología profunda de autores como Reich, Jung, Maslow, Erickson, Berne, Perls, Satir, Naranjo, Osho, Gurdjieff, entre otros.  
Ha coordinado diplomados de postgrado en Terapias Sexuales, Educación Sexual y Desarrollo Humano, Salud y Sexualidad Humana, Desarrollo Transpersonal.  
Capacitador de grandes empresas de la región en las áreas del autoconocimiento y el desarrollo del potencial humano.  
Ofrece cursos de alto nivel profesional a directores y gerentes de escuelas y empresas. Profesor en Trabajo Social y Enfermería en la Universidad Autónoma de Sinaloa.  
Pionero con un equipo de especialistas en los Congresos de Sexología Transpersonal en México.  
Miembro académico de la Asociación Internacional de Hipnoterapeutas Eclécticos, facilitador y ponente en congresos mundiales de hipnosis.  
Participante en congresos internacionales con propuestas orientadas a la Psicología del Ser, que enfatiza la capacidad de estar ATENTO.  
Director del Centro de Psicoterapia Transpersonal e Hipnosis Clínica.`,
      publishedBooks: [],
      isbn: "970-93312-1-3",
      edition: "Primera edición: julio de 2002",
      contact: {
        email: "hugomalcampo@hotmail.com",
        phone: "6691711534",
        address: "Mar del Coral y Amapa 160, Fracc. Vista del Mar, Mazatlán, Sinaloa",
      },
    },
  },
  {
    id: "8",
    title: "Autoconocimiento y Trascendencia",
    author: "Hugo Malcampo De Dios",
    description: "Un texto orientado al desarrollo personal, la psicología profunda y la trascendencia espiritual. Incluye reflexiones, experiencias clínicas y aportes en torno a la hipnoterapia, la psicología humanista y la psicología del ser.",
    category: "Psicología",
    rating: 5,
      cover: "/portada8.jpg",
    createdAt: new Date("2025-08-22"),
    details: {
      bio: `Licenciado en Psicología (CUM–UNAM). Doctor en Hipnoterapia Clínica Médica con mención honorífica en la Academia Mundial de Hipnosis.  
Formación pedagógica en la ENESS (Ciencias Sociales). Maestría en Psicoterapia Gestalt (Guadalajara, Jalisco). Formación en Nuevas Ciencias de la Conducta y Análisis Transaccional.  
Docente desde 1980 y con experiencia clínica desde 1983. Ha promovido la psicología profunda de autores como Reich, Jung, Maslow, Erickson, Berne, Perls, Satir, Naranjo, Osho y Gurdjieff.  
Ha coordinado diplomados de postgrado en Terapias Sexuales, Educación Sexual y Desarrollo Humano, Salud y Sexualidad Humana, Desarrollo Transpersonal.  
Capacitador de grandes empresas en autoconocimiento y desarrollo humano. Profesor en Trabajo Social y Enfermería en la Universidad Autónoma de Sinaloa.  
Pionero en los Congresos de Sexología Transpersonal en México.  
Miembro académico de la Asociación Internacional de Hipnoterapeutas Eclécticos, facilitador y ponente en congresos mundiales de hipnosis.  
Participante en congresos internacionales con propuestas orientadas a la Psicología del Ser, que enfatiza la capacidad de estar ATENTO.  
Director del Centro de Psicoterapia Transpersonal e Hipnosis Clínica.`,
      publishedBooks: [
        "La Fuerza de Ser Uno Mismo y Los Vínculos Familiares"
      ],
      isbn: "En trámite",
      edition: "Primera edición: septiembre de 2001",
      contact: {
        email: "hugomalcampo@hotmail.com",
        phone: "6691711534",
        address: "Mar del Coral y Amapa 160, Fracc. Vista del Mar, Mazatlán, Sinaloa",
      },
    },
  }

]


export default function BooksSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [books] = useState<Book[]>(initialBooks)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const renderStars = (rating: number) =>
    [...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-slate-300"}`}
      />
    ))

  return (
    <section className="min-h-screen py-12 px-4 bg-slate-50">
      <div className="container mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-blue-700">
             Libros publicados
            </span>
          </h1>
 <p className="text-xl text-slate-600 max-w-3xl mx-auto">
    Selección de obras del autor. Ordenados del <span className="font-medium">más reciente</span> al más antiguo.
  </p>
          </div>

        {/* Lista estilo Amazon compacta */}
        <div className="space-y-6">
          {books.map((book) => (
            <Link
              key={book.id}
              to={`/libros/${book.id}`}
              className="flex flex-col md:flex-row bg-white/90 backdrop-blur-sm rounded-lg shadow hover:shadow-md transition p-4 gap-4"
            >
              {/* Portada */}
              <div className="w-full md:w-32 lg:w-40 flex-shrink-0">
                {book.cover ? (
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="rounded-md shadow-sm w-full h-48 object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 bg-gradient-to-br from-blue-500 to-teal-600 rounded-md">
                    <BookOpenIcon className="w-10 h-10 text-white" />
                  </div>
                )}
              </div>

              {/* Info a la derecha */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">{book.title}</h2>
                  <p className="text-sm text-slate-600 mb-2">por {book.author}</p>
                  <p className="text-sm text-slate-700 line-clamp-3">{book.description}</p>
                </div>

                {/* Rating + fecha */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1">
                    {renderStars(book.rating)}
                    <span className="text-xs text-slate-600">{book.rating}/5</span>
                  </div>
                  <div className="flex items-center text-xs text-slate-500">
                    <CalendarIcon className="w-3 h-3 mr-1 text-blue-500" />
                    {book?.dateRead ? new Date(book?.dateRead).toLocaleDateString("es-ES") : "Sin fecha"}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

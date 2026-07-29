import type { Messages } from "./es";

export const gl: Messages = {
  meta: {
    siteTitle: "Club Baixo Minho — Club de Judo en Galicia",
    siteDescription:
      "Club de Judo na Guarda. Formación integral en técnica, disciplina e respecto para nenos, novos e adultos.",
    horariosTitle: "Horarios e clases — CD Baixo Minho",
    horariosDescription:
      "Consulta os horarios das clases de judo por grupos de idade e nivel no CD Baixo Minho, A Guarda.",
    horariosOgDescription: "Grupos por idade e nivel. Judo infantil, xuvenil, adultos e competición.",
    maestrosTitle: "Mestres — CD Baixo Minho",
    maestrosDescription:
      "Coñece o equipo técnico do CD Baixo Minho: sensei con décadas de experiencia en judo tradicional e competición.",
    maestrosOgDescription: "Os nosos sensei: técnica, experiencia e vocación docente.",
    contactoTitle: "Contacto e inscrición — CD Baixo Minho",
    contactoDescription:
      "Contacta co CD Baixo Minho na Guarda. Dirección, teléfono e ubicación no mapa.",
    contactoOgDescription: "Ven coñecernos na Guarda. Encontranos no mapa.",
  },
  nav: {
    home: "Inicio",
    horarios: "Horarios",
    maestros: "Mestres",
    contacto: "Contacto",
    enroll: "Inscríbete",
    menu: "Menú",
    langEs: "ES",
    langGl: "GL",
    langSwitch: "Idioma",
  },
  footer: {
    tagline: "Club de Judo en Galicia. Técnica, disciplina e comunidade desde 2017.",
    academy: "Academia",
    contact: "Contacto",
    address: "Rúa Irmáns Noia Gil, 2, baixo\n36780 A Guarda, Pontevedra",
    copyright: "CD Baixo Minho — Club de Judo",
    madeIn: "Feito en Galicia por",
  },
  notFound: {
    code: "Erro 404",
    title: "Páxina non atopada",
    body: "A páxina que buscas non existe ou foi movida.",
    back: "Volver ao inicio",
  },
  error: {
    title: "Algo saíu mal",
    body: "Non puidemos cargar esta páxina. Proba de novo ou volve ao inicio.",
    retry: "Reintentar",
    home: "Ir ao inicio",
  },
  home: {
    eyebrow: "Club de Judo · Galicia · desde 1998",
    headlineLine1: "O camiño",
    headlineSoft: "suave",
    headlineLine3: "da forza.",
    lead: "No CD Baixo Minho adestramos judo tradicional nun espazo amplo e luminoso. Técnica, respecto e comunidade, para todas as idades.",
    ctaTrial: "Clase de proba gratis",
    ctaSchedule: "Ver horarios →",
    heroAlt: "Judoka no dojo",
    marquee: [
      "礼 Respecto",
      "· 精力善用 Máxima eficiencia",
      "· 自他共栄 Prosperidade mutua",
      "· 柔 Suavidade",
      "· 道 O camiño",
    ],
    academyEyebrow: "A academia",
    academyTitle: "Unha academia pensada para medrar.",
    academyP1:
      "Fundado en 2017 no corazón da Guarda, o CD Baixo Minho é un espazo dedicado ao estudo do judo tradicional segundo os principios do mestre Jigoro Kano.",
    academyP2:
      "Os nosos máis de 100 m² de tatami están deseñados para adestrar con seguridade e concentración: luz natural, silencio e un ambiente onde cada alumno progresa ao seu ritmo.",
    academyP3:
      "Formamos parte da Federación Galega de Judo e traballamos con nenos desde os 3 anos, novos, adultos e competidores.",
    stats: [
      { k: "26", l: "anos formando judokas" },
      { k: "+100", l: "m² de tatami" },
      { k: "+380", l: "alumnos activos" },
    ],
    methodEyebrow: "O noso método",
    methodTitle: "Tres principios guían cada adestramento.",
    principles: [
      {
        n: "01",
        t: "Técnica ante todo",
        d: "Progresión clara do kihon ao randori, con corrección individual en cada sesión.",
      },
      {
        n: "02",
        t: "Respecto e disciplina",
        d: "O reigi —a etiqueta— é o fundamento do judo, dentro e fóra do tatami.",
      },
      {
        n: "03",
        t: "Comunidade galega",
        d: "Un club aberto, con saídas, cursos e competicións por toda Galicia.",
      },
    ],
    ctaTitle: "Sube ao tatami. A primeira clase é o noso convite.",
    ctaBody: "Reserva unha sesión gratuíta e descubre o judo desde dentro.",
    ctaRequest: "Solicitar clase de proba",
    ctaViewSchedule: "Ver horarios",
  },
  horarios: {
    eyebrow: "Horarios",
    title: "Clases por grupo e nivel.",
    lead: "Tempada 2025 – 2026. Todas as clases impartense no tatami principal do dojo. Consulta prazas dispoñibles ao te inscribires.",
    groups: [
      {
        name: "Judo Infantil",
        age: "4 – 7 anos",
        level: "Iniciación",
        slots: [
          { day: "Luns", time: "17:00 – 18:00" },
          { day: "Mércores", time: "17:00 – 18:00" },
        ],
      },
      {
        name: "Judo Alevín",
        age: "8 – 11 anos",
        level: "Básico",
        slots: [
          { day: "Luns", time: "18:00 – 19:15" },
          { day: "Mércores", time: "18:00 – 19:15" },
          { day: "Venres", time: "18:00 – 19:15" },
        ],
      },
      {
        name: "Judo Xuvenil",
        age: "12 – 17 anos",
        level: "Intermedio",
        slots: [
          { day: "Martes", time: "19:00 – 20:30" },
          { day: "Xoves", time: "19:00 – 20:30" },
        ],
      },
      {
        name: "Judo Adultos",
        age: "18+ anos",
        level: "Todos os niveis",
        slots: [
          { day: "Luns", time: "20:00 – 21:30" },
          { day: "Mércores", time: "20:00 – 21:30" },
          { day: "Venres", time: "20:00 – 21:30" },
        ],
      },
      {
        name: "Competición",
        age: "14+ anos",
        level: "Avanzado · convocatoria",
        slots: [
          { day: "Martes", time: "20:30 – 22:00" },
          { day: "Xoves", time: "20:30 – 22:00" },
          { day: "Sábado", time: "10:00 – 12:00" },
        ],
      },
    ],
    feeLabel: "Cota mensual",
    feeValue: "45 € — 65 €",
    feeHint: "Segundo grupo e frecuencia.",
    enrollmentLabel: "Matrícula",
    enrollmentValue: "única",
    enrollmentHint: "Inclúe seguro federativo anual.",
    trialLabel: "Proba gratuíta",
    trialValue: "1 sesión",
    trialHint: "Para coñecer o dojo sen compromiso.",
  },
  maestros: {
    eyebrow: "Equipo técnico",
    title: "Os que guían o camiño.",
    lead: "Un equipo con décadas de tatami ás súas costas. Cada sensei aporta unha mirada única sobre o judo, unida por un mesmo principio: o ensino como servizo.",
    sensei: [
      {
        rank: "5º Dan · Presidenta e adestradora",
        bio: [
          "Presidenta do Clube de Judo Baixo Minho",
          "Mestra adestradora nacional de judo",
          "Coordinadora de programas federativos",
          "Directora deportiva da Federación Galega de Judo",
        ],
      },
      {
        rank: "5º Dan · Judo feminino e competición",
        bio: [
          "Excampioa nacional",
          "Especialista en newaza e preparación para competición autonómica",
        ],
      },
      {
        rank: "3º Dan · Judo infantil",
        bio: [
          "Educador e monitor titulado",
          "Dirixe os grupos de iniciación cunha metodoloxía lúdica e progresiva",
        ],
      },
    ],
    quote: "“O judo é o camiño máis eficaz para empregar a enerxía física e mental.”",
    quoteAuthor: "— Jigoro Kano",
  },
  contacto: {
    eyebrow: "Contacto",
    titleLine1: "Ven coñecer",
    titleLine2: "o dojo.",
    lead: "Estamos no centro da Guarda. Chámanos ou escríbenos para reservar a túa clase de proba ou pedir información.",
    addressLabel: "Dirección",
    address: "Rúa Irmáns Noia Gil, 2, baixo\n36780 A Guarda, Pontevedra",
    phoneLabel: "Teléfono",
    emailLabel: "Email",
    hoursLabel: "Horario secretaría",
    hours: "Lun – Ven · 17:00 – 21:00",
    mapTitle: "Ubicación do CD Baixo Minho en Google Maps",
    openMaps: "Abrir en Google Maps",
  },
};

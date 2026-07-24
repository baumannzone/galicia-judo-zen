import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/actividades")({
  head: () => ({
    meta: [
      { title: "Actividades — Club Deportivo Baixo Miño" },
      { name: "description", content: "Judo, pilates, zumba, entrenamiento infantil y masajes en A Guarda. Actividades para todas las edades en el Club Deportivo Baixo Miño." },
      { property: "og:title", content: "Actividades — Club Deportivo Baixo Miño" },
      { property: "og:description", content: "Descubre nuestras actividades: judo, pilates, zumba, entrenamiento infantil, masajes y más." },
    ],
  }),
  component: Actividades,
});

const ACTIVITIES = [
  {
    id: "judo-infantil",
    name: "Judo Infantil",
    age: "4 – 7 años",
    level: "Iniciación",
    description: "Introducción al judo con enfoque lúdico y seguro. Desarrollamos coordinación, seguridad en uno mismo, y valores como el respeto y la amistad.",
    benefits: ["Coordinación motora", "Confianza", "Respeto", "Diversión"],
  },
  {
    id: "judo-basico",
    name: "Judo Básico",
    age: "8 – 11 años",
    level: "Básico",
    description: "Progresión en técnica de judo. Trabajo de fundamentos, primeros movimientos de competición, y fortalecimiento de valores de equipo.",
    benefits: ["Técnica de judo", "Fuerza", "Disciplina", "Trabajo en equipo"],
  },
  {
    id: "judo-adulto",
    name: "Judo Adulto",
    age: "18+ años",
    level: "Todos los niveles",
    description: "Entrenamiento progresivo de judo. Desde iniciación hasta técnica avanzada. Abierto a todos los niveles de experiencia.",
    benefits: ["Actividad física completa", "Defensa personal", "Comunidad", "Superación personal"],
  },
  {
    id: "judo-competicion",
    name: "Judo de Competición",
    age: "10+ años (convocatoria)",
    level: "Avanzado",
    description: "Preparación intensiva para competiciones autonómicas, nacionales e internacionales. Entrenamiento especializado bajo convocatoria.",
    benefits: ["Entrenamiento de élite", "Competición internacional", "Mentoring", "Desarrollo deportivo"],
  },
  {
    id: "pilates",
    name: "Pilates",
    age: "Adultos",
    level: "Todos los niveles",
    description: "Fortalecimiento y flexibilidad. Trabajo profundo de core, conciencia corporal y alineación. Ideal para recuperación y bienestar.",
    benefits: ["Core fortalecido", "Flexibilidad", "Postura", "Bienestar"],
  },
  {
    id: "zumba",
    name: "Zumba",
    age: "Adultos",
    level: "Todos los niveles",
    description: "Baile y cardio con ritmo y energía. Sesiones dinámicas en grupo donde el movimiento y la diversión van de la mano.",
    benefits: ["Actividad cardiovascular", "Ritmo y coordinación", "Ambiente grupal", "Diversión"],
  },
  {
    id: "entrenamiento-infantil",
    name: "Entrenamiento Infantil",
    age: "Niños",
    level: "Multideporte",
    description: "Actividad física variada con juegos, psicomotricidad y desarrollo de habilidades motoras. Combinamos diversión con aprendizaje.",
    benefits: ["Desarrollo motriz", "Juego organizado", "Socialización", "Actividad física divertida"],
  },
  {
    id: "masaje",
    name: "Masaje Deportivo y Terapéutico",
    age: "Adultos",
    level: "Recuperación",
    description: "Servicios de masaje especializado: deportivo, terapéutico y relajante. Para recuperación, bienestar y alivio de tensiones.",
    benefits: ["Recuperación muscular", "Reducción de tensión", "Bienestar", "Alivio del dolor"],
  },
];

function Actividades() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">Actividades</p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Deporte y bienestar para todas las edades.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">
            Desde judo infantil hasta actividades de bienestar para adultos. Encuentra la actividad que se adapte a ti y forma parte de nuestra comunidad.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((activity, i) => (
            <div
              key={activity.id}
              className="reveal group rounded-3xl border border-border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-soft md:p-10"
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{activity.age}</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">{activity.name}</h2>
                  <p className="mt-2 text-sm font-medium text-primary">{activity.level}</p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{activity.description}</p>

              <ul className="mt-6 space-y-2">
                {activity.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  to="/contacto"
                  className="inline-flex text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Solicitar información →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Próximo paso</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Prueba una clase sin compromiso.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              La mejor forma de conocernos es viviendo una clase. Contacta con nosotros para reservar tu primera sesión gratuita.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary hover:shadow-soft"
            >
              Reservar clase
            </Link>
            <Link
              to="/horarios"
              className="link-underline text-sm font-medium"
            >
              Ver horarios →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

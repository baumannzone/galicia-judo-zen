import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/maestros")({
  head: () => ({
    meta: [
      { title: "Equipo — Club Deportivo Baixo Miño" },
      { name: "description", content: "Conoce al equipo del Club Deportivo Baixo Miño. Profesionales dedicados a la formación en judo, valores y bienestar." },
      { property: "og:title", content: "Equipo — Club Deportivo Baixo Miño" },
      { property: "og:description", content: "Entrenadores y profesionales certificados del Club Deportivo Baixo Miño en A Guarda." },
    ],
  }),
  component: Maestros,
});

const TEAM = [
  {
    name: "Mónica Pacheco Lomba",
    rank: "Presidenta · Cinturón Negro 5º Dan",
    role: "Maestra Entrenadora Nacional de Judo",
    bio: "Coordinadora de programas federativos de la Federación Galega de Judo. Dedicada a la formación integral de judokas desde la base hasta la competición de alto nivel.",
    highlight: true,
  },
  {
    name: "[PENDIENTE]",
    rank: "Cinturón Negro",
    role: "Entrenador/a Principal",
    bio: "Especialista en técnica de judo y preparación de competidores autonómicos, nacionales e internacionales.",
  },
  {
    name: "[PENDIENTE]",
    rank: "[PENDIENTE]",
    role: "Instructor/a de Base",
    bio: "Dedicado/a a la enseñanza del judo infantil con metodología lúdica y progresiva.",
  },
  {
    name: "[PENDIENTE]",
    rank: "[PENDIENTE]",
    role: "Instructor/a de Adultos",
    bio: "Especialista en clases de judo para adultos de todos los niveles, desde iniciación hasta técnica avanzada.",
  },
  {
    name: "[PENDIENTE]",
    rank: "Especialista en Pilates",
    role: "Instructor/a de Pilates",
    bio: "Profesional en actividades de recuperación, flexibilidad y bienestar corporal.",
  },
  {
    name: "[PENDIENTE]",
    rank: "Especialista en Zumba",
    role: "Instructor/a de Zumba",
    bio: "Dinamiza sesiones de baile y cardio con energía, ritmo y ambiente grupal motivador.",
  },
];

function Maestros() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">Equipo</p>
        <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          Profesionales al servicio del crecimiento.
        </h1>
        <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">
          Entrenadores y profesionales certificados comprometidos con la formación técnica, los valores y el desarrollo integral de nuestros deportistas.
        </p>
      </div>

      <div className="mt-20 grid gap-14 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {TEAM.map((p, i) => (
          <article
            key={p.name}
            className={`reveal group rounded-3xl border transition-all p-8 ${
              p.highlight
                ? "border-primary/50 bg-primary/5 hover:shadow-soft"
                : "border-border bg-background hover:border-primary/30 hover:shadow-soft"
            }`}
            style={{ animationDelay: `${0.15 + i * 0.1}s` }}
          >
            <div className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary mb-6 ${
              p.highlight ? "ring-2 ring-primary/30" : ""
            }`}>
              <div className="h-full w-full flex items-center justify-center text-muted-foreground text-sm">
                [Foto autorizada]
              </div>
            </div>
            <div>
              <h2 className={`font-display text-2xl font-semibold tracking-tight ${
                p.highlight ? "text-primary" : ""
              }`}>
                {p.name}
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground">{p.role}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-primary">{p.rank}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-24 border-t border-border pt-12">
        <blockquote className="mx-auto max-w-3xl text-center font-display text-2xl leading-snug tracking-tight sm:text-3xl">
          Deporte, valores y familia en A Guarda.
          <footer className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">Club Deportivo Baixo Miño</footer>
        </blockquote>
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-secondary/30 p-8 md:p-10">
        <p className="font-display text-lg font-semibold tracking-tight">Información a completar</p>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          [PENDIENTE]: Nombres completos, titulaciones exactas, fotografías autorizadas y biografías completas del equipo técnico. Se actualizará cuando se confirme con el club.
        </p>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/horarios")({
  head: () => ({
    meta: [
      { title: "Horarios y actividades — Club Deportivo Baixo Miño" },
      { name: "description", content: "Horarios de judo, pilates, zumba, entrenamiento infantil y fisioterapia en el Club Deportivo Baixo Miño, A Guarda." },
      { property: "og:title", content: "Horarios y actividades — Club Deportivo Baixo Miño" },
      { property: "og:description", content: "Actividades para todas las edades en A Guarda. Judo, pilates, zumba, entrenamiento infantil." },
    ],
  }),
  component: Horarios,
});

type Activity = {
  name: string;
  age: string;
  level: string;
  description?: string;
  slots?: { day: string; time: string }[];
};

const ACTIVITIES: Activity[] = [
  {
    name: "Judo Grupo 1",
    age: "Nacidos en 2023, 2022, 2021 y 2020",
    level: "Iniciación",
    description: "Introducción al judo con enfoque lúdico. Desarrollamos seguridad, coordinación y valores.",
    slots: [
      { day: "Lunes", time: "17:10 – 18:00" },
      { day: "Miércoles", time: "17:10 – 18:00" },
    ],
  },
  {
    name: "Judo Grupo 2",
    age: "Nacidos en 2019, 2018 y 2017 (iniciados)",
    level: "Básico",
    description: "Progresión en técnica de judo. Trabajo de fundamentos y primeros movimientos de competición.",
    slots: [
      { day: "Lunes", time: "18:10 – 19:00" },
      { day: "Miércoles", time: "18:10 – 19:00" },
    ],
  },
  {
    name: "Judo Grupo 3",
    age: "Nacidos en 2017, 2016 y 2015",
    level: "Perfeccionamiento",
    description: "Trabajo técnico y físico para seguir avanzando en el judo.",
    slots: [
      { day: "Lunes", time: "19:10 – 20:00" },
      { day: "Miércoles", time: "19:10 – 20:00" },
    ],
  },
  {
    name: "Judo de Competición",
    age: "Categorías alevín, infantil, cadete y júnior",
    level: "Avanzado",
    description: "Preparación intensiva para competiciones autonómicas, nacionales e internacionales.",
    slots: [
      { day: "Martes", time: "17:10 – 18:00" },
      { day: "Lunes", time: "20:00 – 21:00" },
      { day: "Miércoles", time: "20:00 – 21:00" },
    ],
  },
  {
    name: "Pilates",
    age: "Adultos",
    level: "Todos los niveles",
    description: "Fortalecimiento y flexibilidad. Trabajo de core y conciencia corporal.",
  },
  {
    name: "Zumba Infantil",
    age: "Grupo 1: 2023 – 2019 · Grupo 2: 2018 – 2014",
    level: "Todos los niveles",
    description: "Baile, ritmo y diversión para niños y niñas.",
    slots: [
      { day: "Jueves", time: "17:00 – 17:50 · Grupo 1" },
      { day: "Jueves", time: "18:00 – 18:50 · Grupo 2" },
    ],
  },
  {
    name: "Entrenamiento Infantil",
    age: "Nacidos entre 2020 y 2016",
    level: "Training infantil",
    description: "Actividad física variada para desarrollar fuerza, coordinación y habilidades motoras.",
    slots: [
      { day: "Martes", time: "18:00 – 18:50" },
    ],
  },
  {
    name: "Fisioterapia",
    age: "Adultos",
    level: "Recuperación",
    description: "Fisioterapia para recuperación, prevención y tratamiento de lesiones.",
  },
  {
    name: "Presoterapia",
    age: "Adultos",
    level: "Recuperación",
    description: "[PENDIENTE]: Tratamiento de recuperación y bienestar.",
  },
];

function Horarios() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">Horarios</p>
        <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          Actividades para todas las edades.
        </h1>
        <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">
          Curso 2026 – 2027. Actividades en el Centro Deportivo Baixo Miño.
        </p>
      </div>

      <div className="mt-16 space-y-px overflow-hidden rounded-3xl border border-border bg-border">
        {ACTIVITIES.map((a, i) => (
          <article
            key={a.name}
            className="reveal group grid gap-6 bg-background p-8 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:items-center md:p-10"
            style={{ animationDelay: `${0.1 + i * 0.06}s` }}
          >
            <div className="md:col-span-5">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {a.name}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{a.age} · {a.level}</p>
              {a.description && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              )}
            </div>
            {a.slots && a.slots.length > 0 && (
              <div className="md:col-span-7">
                <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {a.slots.map((s) => (
                    <li
                      key={s.day + s.time}
                      className="rounded-2xl border border-border/70 bg-background px-4 py-3 transition-transform group-hover:-translate-y-0.5"
                    >
                      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{s.day}</p>
                      <p className="mt-1 font-display text-base font-medium">{s.time}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-secondary/30 p-8 md:p-10">
        <div className="max-w-2xl">
          <p className="font-display text-xl font-semibold tracking-tight">Información importante</p>
          <ul className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">[PENDIENTE]:</strong> Tarifas y precios por actividad.
            </li>
            <li>
              <strong className="text-foreground">[PENDIENTE]:</strong> Información de matrícula y seguro federativo.
            </li>
            <li>
              <strong className="text-foreground">Clase de prueba:</strong> Disponible. Contacta para reservar.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

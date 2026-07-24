import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/horarios")({
  head: () => ({
    meta: [
      { title: "Horarios y clases — CD Baixo Minho" },
      { name: "description", content: "Consulta los horarios de las clases de judo por grupos de edad y nivel en el CD Baixo Minho, A Guarda." },
      { property: "og:title", content: "Horarios y clases — CD Baixo Minho" },
      { property: "og:description", content: "Grupos por edad y nivel. Judo infantil, juvenil, adultos y competición." },
    ],
  }),
  component: Horarios,
});

type Group = {
  name: string;
  age: string;
  level: string;
  slots: { day: string; time: string }[];
};

const GROUPS: Group[] = [
  {
    name: "Judo Infantil",
    age: "4 – 7 años",
    level: "Iniciación",
    slots: [
      { day: "Lunes", time: "17:00 – 18:00" },
      { day: "Miércoles", time: "17:00 – 18:00" },
    ],
  },
  {
    name: "Judo Alevín",
    age: "8 – 11 años",
    level: "Básico",
    slots: [
      { day: "Lunes", time: "18:00 – 19:15" },
      { day: "Miércoles", time: "18:00 – 19:15" },
      { day: "Viernes", time: "18:00 – 19:15" },
    ],
  },
  {
    name: "Judo Juvenil",
    age: "12 – 17 años",
    level: "Intermedio",
    slots: [
      { day: "Martes", time: "19:00 – 20:30" },
      { day: "Jueves", time: "19:00 – 20:30" },
    ],
  },
  {
    name: "Judo Adultos",
    age: "18+ años",
    level: "Todos los niveles",
    slots: [
      { day: "Lunes", time: "20:00 – 21:30" },
      { day: "Miércoles", time: "20:00 – 21:30" },
      { day: "Viernes", time: "20:00 – 21:30" },
    ],
  },
  {
    name: "Competición",
    age: "14+ años",
    level: "Avanzado · convocatoria",
    slots: [
      { day: "Martes", time: "20:30 – 22:00" },
      { day: "Jueves", time: "20:30 – 22:00" },
      { day: "Sábado", time: "10:00 – 12:00" },
    ],
  },
];

function Horarios() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">Horarios</p>
        <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          Clases por grupo y nivel.
        </h1>
        <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">
          Temporada 2025 – 2026. Todas las clases se imparten en el tatami principal del dojo.
          Consulta plazas disponibles al inscribirte.
        </p>
      </div>

      <div className="mt-16 space-y-px overflow-hidden rounded-3xl border border-border bg-border">
        {GROUPS.map((g, i) => (
          <article
            key={g.name}
            className="reveal group grid gap-6 bg-background p-8 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:items-center md:p-10"
            style={{ animationDelay: `${0.1 + i * 0.06}s` }}
          >
            <div className="md:col-span-4">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {g.name}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{g.age} · {g.level}</p>
            </div>
            <div className="md:col-span-8">
              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {g.slots.map((s) => (
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
          </article>
        ))}
      </div>

      <div className="mt-16 grid gap-8 rounded-3xl border border-border p-8 md:grid-cols-3 md:p-10">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Cuota mensual</p>
          <p className="mt-3 font-display text-3xl font-semibold">45 € — 65 €</p>
          <p className="mt-2 text-sm text-muted-foreground">Según grupo y frecuencia.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Matrícula</p>
          <p className="mt-3 font-display text-3xl font-semibold">única</p>
          <p className="mt-2 text-sm text-muted-foreground">Incluye seguro federativo anual.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Prueba gratuita</p>
          <p className="mt-3 font-display text-3xl font-semibold">1 sesión</p>
          <p className="mt-2 text-sm text-muted-foreground">Para conocer el dojo sin compromiso.</p>
        </div>
      </div>
    </section>
  );
}

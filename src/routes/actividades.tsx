import { createFileRoute, Link } from "@tanstack/react-router";
import salaImg from "@/assets/club/sala-fisioterapia.webp";
import camillaImg from "@/assets/club/camilla-fisioterapia.webp";

export const Route = createFileRoute("/actividades")({
  head: () => ({
    meta: [
      { title: "Actividades — Club Deportivo Baixo Miño" },
      {
        name: "description",
        content:
          "Judo, pilates, zumba, entrenamiento infantil, masajes y presoterapia en A Guarda. Actividades para todas las edades en el Club Deportivo Baixo Miño.",
      },
      { property: "og:title", content: "Actividades — Club Deportivo Baixo Miño" },
      {
        property: "og:description",
        content:
          "Descubre nuestras actividades: judo, pilates, zumba, entrenamiento infantil, masajes y presoterapia.",
      },
    ],
  }),
  component: Actividades,
});

const ACTIVITIES = [
  {
    id: "pilates",
    name: "Pilates",
    age: "Adultos",
    level: "Todos los niveles",
    description:
      "Fortalecimiento y flexibilidad. Trabajo profundo de core, conciencia corporal y alineación. Ideal para recuperación y bienestar.",
    benefits: ["Core fortalecido", "Flexibilidad", "Postura", "Bienestar"],
  },
  {
    id: "zumba",
    name: "Zumba adultos",
    age: "Adultos",
    level: "Todos los niveles",
    description:
      "Baile y cardio con ritmo y energía. Sesiones dinámicas en grupo donde el movimiento y la diversión van de la mano.",
    benefits: ["Actividad cardiovascular", "Ritmo y coordinación", "Ambiente grupal", "Diversión"],
  },
  {
    id: "zumba-infantil",
    name: "Zumba infantil",
    age: "Niños",
    level: "Grupos 1 y 2",
    description:
      "Baile, ritmo y movimiento para los más pequeños. Dos grupos infantiles para disfrutar y aprender juntos.",
    benefits: ["Coordinación", "Ritmo", "Actividad física", "Diversión"],
  },
  {
    id: "training-competidores",
    name: "Training competidores",
    age: "Competidores",
    level: "Preparación física",
    description:
      "Entrenamiento físico para competidores, como complemento a las sesiones de judo en el tatami.",
    benefits: ["Fuerza", "Resistencia", "Coordinación", "Trabajo en equipo"],
  },
  {
    id: "entrenamiento-infantil",
    name: "Entrenamiento Infantil",
    age: "Niños",
    level: "Multideporte",
    description:
      "Actividad física variada con juegos, psicomotricidad y desarrollo de habilidades motoras. Combinamos diversión con aprendizaje.",
    benefits: [
      "Desarrollo motriz",
      "Juego organizado",
      "Socialización",
      "Actividad física divertida",
    ],
  },
  {
    id: "masajes",
    name: "Área de masajes",
    age: "Adultos",
    level: "Bienestar",
    description:
      "Un espacio para relajarte y cuidar de ti con masajes y presoterapia. Consulta con el club las sesiones disponibles.",
    benefits: ["Masajes", "Presoterapia", "Relajación", "Bienestar"],
  },
];

const SCHEDULE_ROWS = [
  {
    time: "09:15 – 10:15",
    monday: "",
    tuesday: "Pilates",
    wednesday: "",
    thursday: "Pilates",
    friday: "",
  },
  {
    time: "10:30 – 11:20",
    monday: "",
    tuesday: "Zumba adultos",
    wednesday: "",
    thursday: "Zumba adultos",
    friday: "",
  },
  {
    time: "17:00 – 17:50",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "Zumba infantil 1",
    friday: "",
  },
  {
    time: "17:00 – 18:30",
    monday: "",
    tuesday: "Training competidores",
    wednesday: "",
    thursday: "",
    friday: "",
  },
  {
    time: "17:10 – 18:00",
    monday: "Judo 1",
    tuesday: "",
    wednesday: "Judo 1",
    thursday: "",
    friday: "",
  },
  {
    time: "18:00 – 18:50",
    monday: "",
    tuesday: "Training infantil",
    wednesday: "",
    thursday: "Zumba infantil 2",
    friday: "",
  },
  {
    time: "18:10 – 19:00",
    monday: "Judo 2",
    tuesday: "",
    wednesday: "Judo 2",
    thursday: "",
    friday: "",
  },
  {
    time: "19:00 – 20:00",
    monday: "",
    tuesday: "Pilates",
    wednesday: "",
    thursday: "Pilates",
    friday: "",
  },
  {
    time: "19:10 – 20:00",
    monday: "Judo 3",
    tuesday: "",
    wednesday: "Judo 3",
    thursday: "",
    friday: "",
  },
  {
    time: "20:00 – 21:00",
    monday: "Judo competición",
    tuesday: "Pilates",
    wednesday: "Judo competición",
    thursday: "Pilates",
    friday: "",
  },
  {
    time: "21:00 – 21:50",
    monday: "",
    tuesday: "Zumba adultos",
    wednesday: "",
    thursday: "Zumba adultos",
    friday: "",
  },
  {
    time: "21:00 – 22:30",
    monday: "Judo adultos",
    tuesday: "",
    wednesday: "Judo adultos",
    thursday: "",
    friday: "Judo adultos",
  },
];

function scheduleTone(activity: string) {
  const value = activity.toLowerCase();
  if (value.includes("zumba")) return "bg-pink-500/15 text-pink-700 dark:text-pink-300";
  if (value.includes("pilates")) return "bg-yellow-400/25 text-yellow-800 dark:text-yellow-200";
  if (value.includes("competici")) return "bg-blue-500/15 text-blue-700 dark:text-blue-300";
  if (value.includes("training")) return "bg-green-500/15 text-green-700 dark:text-green-300";
  if (value.includes("judo")) return "bg-yellow-400/25 text-yellow-800 dark:text-yellow-200";
  return "";
}

function Actividades() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Otras actividades
          </p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Deporte y bienestar para todas las edades.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">
            Actividades para niños y adultos, movimiento y bienestar. Encuentra la actividad que se
            adapte a ti y forma parte de nuestra comunidad.
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
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {activity.age}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                    {activity.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-primary">{activity.level}</p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {activity.description}
              </p>

              <ul className="mt-6 space-y-2">
                {activity.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
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

        <section className="mt-24" aria-labelledby="espacio-masajes">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Área de masajes
            </p>
            <h2
              id="espacio-masajes"
              className="mt-5 font-display text-3xl leading-tight tracking-tight sm:text-4xl"
            >
              Un espacio dedicado a tu bienestar.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Un espacio del club dedicado a los masajes, la presoterapia y tu bienestar.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-[1.3fr_1fr]">
            <figure className="overflow-hidden rounded-3xl border border-border bg-secondary/30">
              <img
                src={salaImg}
                alt="Área de masajes del club con camilla"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover sm:h-96 md:h-[26rem]"
              />
              <figcaption className="px-6 py-5 text-sm text-muted-foreground">
                Área de masajes
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-3xl border border-border bg-secondary/30">
              <img
                src={camillaImg}
                alt="Detalle de la camilla y toalla del Club Deportivo Baixo Miño"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover sm:h-96 md:h-[26rem]"
              />
              <figcaption className="px-6 py-5 text-sm text-muted-foreground">
                Detalle de la sala
              </figcaption>
            </figure>
          </div>
        </section>

        <div id="horarios" className="mt-20 scroll-mt-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Curso 2026–2027
            </p>
            <h2 className="mt-5 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              Horario completo de actividades.
            </h2>
          </div>
          <div className="mt-8 overflow-x-auto rounded-3xl border border-border">
            <table className="w-full min-w-[760px] table-fixed border-collapse text-left text-sm">
              <colgroup>
                <col className="w-36" />
                <col span={5} />
              </colgroup>
              <thead>
                <tr className="bg-secondary/60">
                  {["Horarios", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].map(
                    (heading) => (
                      <th
                        key={heading}
                        className="border-b border-border px-5 py-4 text-xs uppercase tracking-[0.15em] text-muted-foreground"
                      >
                        {heading}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {SCHEDULE_ROWS.map((row) => (
                  <tr key={row.time} className="border-b border-border/70 last:border-b-0">
                    <th className="whitespace-nowrap px-5 py-4 font-display font-semibold">
                      {row.time}
                    </th>
                    {[row.monday, row.tuesday, row.wednesday, row.thursday, row.friday].map(
                      (activity, index) => (
                        <td
                          key={`${row.time}-${index}`}
                          className={`px-5 py-4 ${activity ? "font-medium" : "text-muted-foreground/30"}`}
                        >
                          {activity ? (
                            <span
                              className={`inline-flex w-full justify-center rounded-lg px-3 py-2 text-center ${scheduleTone(activity)}`}
                            >
                              {activity}
                            </span>
                          ) : (
                            "—"
                          )}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
              La mejor forma de conocernos es viviendo una clase. Contacta con nosotros para
              reservar tu primera sesión gratuita.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary hover:shadow-soft"
            >
              Reservar clase
            </Link>
            <a href="#horarios" className="link-underline text-sm font-medium">
              Ver horarios →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

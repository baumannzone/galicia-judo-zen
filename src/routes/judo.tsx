import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/judo")({
  head: () => ({
    meta: [
      { title: "Judo — Club Deportivo Baixo Miño" },
      { name: "description", content: "Judo en A Guarda. Descubre qué es el judo, sus beneficios, categorías y competición en el Club Deportivo Baixo Miño." },
      { property: "og:title", content: "Judo — Club Deportivo Baixo Miño" },
      { property: "og:description", content: "Judo infantil, adulto y competición. Formación en valores, técnica y desarrollo deportivo." },
    ],
  }),
  component: Judo,
});

const JUDO_SCHEDULE = [
  {
    name: "Judo Grupo 1",
    ages: "Nacidos en 2023, 2022, 2021 y 2020",
    slots: ["Lunes · 17:10 – 18:00", "Miércoles · 17:10 – 18:00"],
  },
  {
    name: "Judo Grupo 2",
    ages: "Nacidos en 2019, 2018 y 2017 (iniciados)",
    slots: ["Lunes · 18:10 – 19:00", "Miércoles · 18:10 – 19:00"],
  },
  {
    name: "Judo Grupo 3",
    ages: "Nacidos en 2017, 2016 y 2015",
    slots: ["Lunes · 19:10 – 20:00", "Miércoles · 19:10 – 20:00"],
  },
  {
    name: "Judo Competición",
    ages: "Categorías alevín, infantil, cadete y júnior",
    slots: ["Martes · 17:10 – 18:00", "Lunes · 20:00 – 21:00", "Miércoles · 20:00 – 21:00"],
  },
];

const ADULT_JUDO_GROUP = {
  name: "Judo Adultos",
  ages: "Grupo de adultos",
  slots: ["Lunes · 21:00 – 22:30", "Miércoles · 21:00 – 22:30", "Viernes · 21:00 – 22:30"],
};

const SCHEDULE_ROWS = [
  { time: "17:10 – 18:00", monday: "Judo 1", tuesday: "Training competidores", wednesday: "Judo 1", thursday: "" },
  { time: "18:00 – 18:50", monday: "", tuesday: "Training infantil", wednesday: "", thursday: "" },
  { time: "18:10 – 19:00", monday: "Judo 2", tuesday: "", wednesday: "Judo 2", thursday: "" },
  { time: "19:10 – 20:00", monday: "Judo 3", tuesday: "", wednesday: "Judo 3", thursday: "" },
  { time: "20:00 – 21:00", monday: "Judo competición", tuesday: "", wednesday: "Judo competición", thursday: "" },
];

const ADULT_SCHEDULE_ROWS = [
  { time: "20:00 – 21:00", monday: "Judo competición", tuesday: "", wednesday: "Judo competición", thursday: "", friday: "" },
  { time: "21:00 – 22:30", monday: "Judo adultos", tuesday: "", wednesday: "Judo adultos", thursday: "", friday: "Judo adultos" },
];

function scheduleTone(activity: string) {
  const value = activity.toLowerCase();
  if (value.includes("zumba")) return "bg-pink-500/15 text-pink-700 dark:text-pink-300";
  if (value.includes("competici")) return "bg-blue-500/15 text-blue-700 dark:text-blue-300";
  if (value.includes("training")) return "bg-green-500/15 text-green-700 dark:text-green-300";
  if (value.includes("judo")) return "bg-yellow-400/25 text-yellow-800 dark:text-yellow-200";
  return "";
}

function Judo() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">Judo</p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            El camino del judo.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">
            Jigoro Kano creó el judo en 1882 como un arte marcial que va más allá de la técnica. Es una forma de entender la vida basada en el respeto, la eficiencia y el crecimiento mutuo.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Filosofía</p>
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                Más que técnica.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                En el Club Deportivo Baixo Miño, el judo es una herramienta de aprendizaje y crecimiento. Cada entrenamiento trabaja técnica, disciplina, respeto y superación personal.
              </p>
              <p>
                Aprendemos a caer sin miedo, a defender sin violencia, y a ganar y perder con humildad. El tatami es el espacio donde construimos carácter, amistades y comunidad.
              </p>
              <p>
                El judo nos enseña que la fuerza no es solo física, sino mental y emocional. Es el arte de aprovechar la energía del compañero para crecer juntos.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
            {[
              { title: "Respeto", description: "La base de la convivencia en el tatami y en la vida." },
              { title: "Eficiencia", description: "Aprovechar la energía física y mental al máximo." },
              { title: "Beneficio mutuo", description: "Crecer juntos, como compañeros y como equipo." },
            ].map((v) => (
              <div key={v.title} className="bg-background p-10">
                <p className="font-display text-lg font-semibold tracking-tight text-foreground">{v.title}</p>
                <p className="mt-3 text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Curso 2026–2027</p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Horarios de judo.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {JUDO_SCHEDULE.map((group) => (
            <article key={group.name} className="rounded-3xl border border-border bg-background p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold tracking-tight">{group.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{group.ages}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5">
                {group.slots.map((slot) => (
                  <li key={slot} className="text-sm font-medium text-primary">{slot}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="font-display text-2xl font-semibold tracking-tight">Judo infantil y competición.</h3>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-border">
            <table className="w-full min-w-[760px] table-fixed border-collapse text-left text-sm">
              <colgroup>
                <col className="w-36" />
                <col span={4} />
              </colgroup>
              <thead>
                <tr className="bg-secondary/60">
                  {["Horarios", "Lunes", "Martes", "Miércoles", "Jueves"].map((heading) => (
                    <th key={heading} className="border-b border-border px-5 py-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SCHEDULE_ROWS.map((row) => (
                  <tr key={row.time} className="border-b border-border/70 last:border-b-0">
                    <th className="whitespace-nowrap px-5 py-4 font-display font-semibold">{row.time}</th>
                    {[row.monday, row.tuesday, row.wednesday, row.thursday].map((activity, index) => (
                      <td key={`${row.time}-${index}`} className={`px-5 py-4 ${activity ? "font-medium" : "text-muted-foreground/30"}`}>
                        {activity ? <span className={`inline-flex w-full justify-center rounded-lg px-3 py-2 text-center ${scheduleTone(activity)}`}>{activity}</span> : "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-border bg-background p-8 md:p-10">
            <h3 className="font-display text-2xl font-semibold tracking-tight">{ADULT_JUDO_GROUP.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ADULT_JUDO_GROUP.ages}</p>
            <ul className="mt-6 space-y-2 border-t border-border pt-5">
              {ADULT_JUDO_GROUP.slots.map((slot) => (
                <li key={slot} className="text-sm font-medium text-primary">{slot}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-14">
          <h3 className="font-display text-2xl font-semibold tracking-tight">Judo adultos.</h3>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-border">
            <table className="w-full min-w-[760px] table-fixed border-collapse text-left text-sm">
              <colgroup>
                <col className="w-36" />
                <col span={5} />
              </colgroup>
              <thead>
                <tr className="bg-secondary/60">
                  {["Horarios", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].map((heading) => (
                    <th key={heading} className="border-b border-border px-5 py-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ADULT_SCHEDULE_ROWS.map((row) => (
                  <tr key={row.time} className="border-b border-border/70 last:border-b-0">
                    <th className="whitespace-nowrap px-5 py-4 font-display font-semibold">{row.time}</th>
                    {[row.monday, row.tuesday, row.wednesday, row.thursday, row.friday].map((activity, index) => (
                      <td key={`${row.time}-${index}`} className={`px-5 py-4 ${activity ? "font-medium" : "text-muted-foreground/30"}`}>
                        {activity ? <span className={`inline-flex w-full justify-center rounded-lg px-3 py-2 text-center ${scheduleTone(activity)}`}>{activity}</span> : "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-primary/30 bg-primary/5 p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Curso 2026–2027</p>
          <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">Licencia federativa obligatoria para judokas.</h3>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li><strong className="text-foreground">25 €</strong> · Nacidos en 2011 y posteriores</li>
            <li><strong className="text-foreground">63 €</strong> · Nacidos en 2008, 2009 y 2010</li>
            <li><strong className="text-foreground">85 €</strong> · Nacidos en 2007 y anteriores</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Beneficios</p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Por qué practicar judo.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            El judo es mucho más que un deporte: ayuda a mejorar la forma física, refuerza la
            confianza y transmite valores como el respeto, la disciplina y el compañerismo.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {[
            {
              category: "Físicos",
              benefits: ["Fuerza y resistencia", "Coordinación motora", "Equilibrio", "Flexibilidad", "Salud cardiovascular"],
            },
            {
              category: "Mentales y Emocionales",
              benefits: ["Confianza en uno mismo", "Disciplina", "Concentración", "Manejo del estrés", "Resiliencia"],
            },
            {
              category: "Sociales",
              benefits: ["Comunidad y amistad", "Trabajo en equipo", "Respeto al otro", "Liderazgo", "Sentimiento de pertenencia"],
            },
            {
              category: "Educativos",
              benefits: ["Aprender del fracaso", "Perseverancia", "Humildad", "Empatía", "Crecimiento personal"],
            },
          ].map((group) => (
            <div key={group.category} className="rounded-3xl border border-border bg-background p-8 md:p-10">
              <p className="font-display text-2xl font-semibold tracking-tight">{group.category}</p>
              <ul className="mt-6 space-y-3">
                {group.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Competición</p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Del tatami a la competición.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
            <p className="font-display text-2xl font-semibold tracking-tight">Competiciones</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Nuestros deportistas compiten en campeonatos gallegos, nacionales e internacionales. La competición es una oportunidad para poner en práctica lo aprendido, desafiarse a uno mismo y representar al club.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">→</span> Campeonato Gallego
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span> Campeonato de España
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span> Competiciones Europeas
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span> Torneo Internacional Santa Trega
              </li>
            </ul>
          </div>

        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="rounded-3xl bg-foreground text-background px-10 py-20 text-center md:px-16 md:py-28">
            <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Comienza tu camino.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-sm text-background/70">
              La mejor forma de conocer el judo es viviéndolo. Ven a entrenar con nosotros.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/actividades"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Conoce nuestras clases
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-background/30 px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
              >
                Contacta con nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Beneficios</p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Por qué practicar judo.
          </h2>
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

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Estructura</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Categorías y progresión.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                name: "Infantil",
                age: "4–7 años",
                focus: "Iniciación lúdica y segura",
              },
              {
                name: "Básico",
                age: "8–11 años",
                focus: "Fundamentos técnicos",
              },
              {
                name: "Juvenil",
                age: "12–17 años",
                focus: "Técnica avanzada",
              },
              {
                name: "Adulto",
                age: "18+ años",
                focus: "Todos los niveles",
              },
            ].map((cat) => (
              <div key={cat.name} className="rounded-2xl border border-border p-6">
                <p className="font-display text-xl font-semibold">{cat.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{cat.age}</p>
                <p className="mt-3 text-sm font-medium text-primary">{cat.focus}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-background border border-border p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Cinturones</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              El sistema de cinturones en judo representa la progresión del judoka. Desde blanco (iniciación) hasta negro (maestría), cada cinturón marca una etapa de aprendizaje y desarrollo.
            </p>
          </div>
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

          <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
            <p className="font-display text-2xl font-semibold tracking-tight">Logros 2026</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Nuestros deportistas destacan a nivel autonómico, nacional e internacional. En la temporada 2025/26, representamos a Baixo Miño con excelencia.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">→</span> 20+ participantes nacionales
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span> Selección Gallega
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span> European Cup
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span> Supercopa de España
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

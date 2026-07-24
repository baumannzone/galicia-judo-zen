import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-judo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Club Deportivo Baixo Miño | Judo y actividades en A Guarda" },
      { name: "description", content: "Judo, pilates, zumba, entrenamiento infantil, masajes y campus en A Guarda. Deporte, valores y comunidad para niños, jóvenes y adultos." },
      { property: "og:title", content: "Club Deportivo Baixo Miño | Judo y actividades en A Guarda" },
      { property: "og:description", content: "Centro deportivo con judo, pilates, zumba, entrenamiento infantil, masajes, campus y torneo internacional en A Guarda." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-32">
          <div className="grid gap-14 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-6 flex flex-col justify-center">
              <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Centro Deportivo · A Guarda · Pontevedra
              </p>
              <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
                Deporte, <br/>
                <span className="text-muted-foreground">valores</span> <br/>
                y familia.
              </h1>
              <p className="reveal reveal-delay-2 mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Judo, pilates, zumba, entrenamiento infantil y masajes. Acompañamos a niños, jóvenes y adultos en su crecimiento deportivo y personal.
              </p>
              <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary hover:shadow-soft"
                >
                  Clase de prueba gratis
                </Link>
                <Link to="/horarios" className="link-underline text-sm font-medium">
                  Ver horarios →
                </Link>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="reveal reveal-delay-2 relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-secondary">
                <img
                  src={heroImg}
                  alt="Judoka en el dojo"
                  width={1600}
                  height={1800}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border/60 py-6 overflow-hidden">
          <div className="marquee-track flex w-max gap-16 whitespace-nowrap font-display text-2xl font-medium text-muted-foreground">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-16">
                <span>礼 Respeto</span>
                <span>· 精力善用 Máxima eficiencia</span>
                <span>· 自他共栄 Prosperidad mutua</span>
                <span>· 柔 Suavidad</span>
                <span>· 道 El camino</span>
                <span>·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre el club */}
      <section id="academia" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">El club</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Un proyecto de deporte y valores.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              El Centro Deportivo Baixo Miño es un proyecto deportivo de A Guarda dedicado a la enseñanza del judo, la actividad física, el bienestar y la formación en valores.
            </p>
            <p>
              Combinamos deporte base y competición de alto nivel con actividades como pilates, zumba, entrenamiento infantil y masajes. Nuestra filosofía se apoya en el respeto, el esfuerzo, la humildad, la amistad y el sentimiento de equipo.
            </p>
            <p>
              Formamos parte de la Federación Galega de Judo. Trabajamos con niños, jóvenes y adultos, acompañándolos en su desarrollo tanto dentro como fuera del tatami.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
          {[
            { k: "160+", l: "licencias deportivas" },
            { k: "20+", l: "participantes nacionales" },
            { k: "500+", l: "en Torneo Santa Trega 2026" },
          ].map((s) => (
            <div key={s.l} className="bg-background p-10">
              <p className="font-display text-5xl font-semibold tracking-tight text-foreground">{s.k}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Nuestros valores</p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Entendemos el deporte como herramienta de crecimiento.
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              { n: "01", t: "Respeto", d: "Base de la convivencia dentro y fuera del tatami. Respeto al compañero, al entrenador, a las normas." },
              { n: "02", t: "Esfuerzo", d: "Superación constante. En cada entrenamiento trabajamos por mejorar, juntos y en equipo." },
              { n: "03", t: "Familia", d: "El club como comunidad. Las familias participan en el proceso de crecimiento de nuestros deportistas." },
            ].map((v) => (
              <div key={v.n} className="group">
                <p className="font-display text-sm text-muted-foreground">{v.n}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
                <div className="mt-6 h-px w-8 bg-foreground transition-all duration-500 group-hover:w-24 group-hover:bg-primary" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="rounded-3xl bg-foreground px-10 py-20 text-center text-background md:px-16 md:py-28">
          <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Forma parte de nuestro equipo.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm text-background/70">
            Prueba una clase gratis. Judo, pilates, zumba, entrenamiento infantil. Actividades para todas las edades.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/actividades"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Conoce nuestras actividades
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-full border border-background/30 px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              Contacta con nosotros
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

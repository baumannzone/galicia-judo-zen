import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-judo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Club Baixo Minho — Club de Judo en Galicia" },
      { name: "description", content: "Club de Judo en A Guarda. Formación integral en técnica, disciplina y respeto para niños, jóvenes y adultos." },
      { property: "og:title", content: "Club Baixo Minho — Club de Judo en Galicia" },
      { property: "og:description", content: "Club de Judo en A Guarda. Formación integral en técnica, disciplina y respeto para niños, jóvenes y adultos." },
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
                Club de Judo · Galicia · desde 1998
              </p>
              <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
                El camino <br/>
                <span className="text-muted-foreground">suave</span> <br/>
                de la fuerza.
              </h1>
              <p className="reveal reveal-delay-2 mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                En el CD Baixo Minho entrenamos judo tradicional en un espacio amplio y luminoso. Técnica, respeto y comunidad, para todas las edades.
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

      {/* Sobre la academia */}
      <section id="academia" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">La academia</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Un dojo pensado para crecer.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Fundado en 2017 en el corazón de A Guarda, el CD Baixo Minho es un espacio dedicado al estudio del judo tradicional según los principios del maestro Jigoro Kano.
            </p>
            <p>
              Nuestros más de 100 m² de tatami están diseñados para entrenar con seguridad y concentración: luz natural, silencio y un ambiente donde cada alumno progresa a su ritmo.
            </p>
            <p>
              Formamos parte de la Federación Galega de Judo y trabajamos con niños desde los 4 años, jóvenes, adultos y competidores.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
          {[
            { k: "26", l: "años formando judokas" },
            { k: "+100", l: "m² de tatami" },
            { k: "+380", l: "alumnos activos" },
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
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Nuestro método</p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Tres principios guían cada entrenamiento.
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              { n: "01", t: "Técnica ante todo", d: "Progresión clara del kihon al randori, con corrección individual en cada sesión." },
              { n: "02", t: "Respeto y disciplina", d: "El reigi —la etiqueta— es el fundamento del judo, dentro y fuera del tatami." },
              { n: "03", t: "Comunidad gallega", d: "Un club abierto, con salidas, cursos y competiciones por toda Galicia." },
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
            Sube al tatami. La primera clase es nuestra invitación.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm text-background/70">
            Reserva una sesión gratuita y descubre el judo desde dentro.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Solicitar clase de prueba
            </Link>
            <Link
              to="/horarios"
              className="inline-flex items-center justify-center rounded-full border border-background/30 px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              Ver horarios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

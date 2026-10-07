import { createFileRoute, Link } from "@tanstack/react-router";
import equipoImg from "@/assets/club/equipo-a-guarda.webp";
import tatamiImg from "@/assets/club/tatami-vista-general.webp";
import tatamiDetalleImg from "@/assets/club/tatami-segunda-vista.webp";
import salaMasajesImg from "@/assets/club/sala-fisioterapia.webp";
import camillaImg from "@/assets/club/camilla-fisioterapia.webp";
import vestuarioImg from "@/assets/club/vestuario.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Club Deportivo Baixo Miño | Judo y actividades en A Guarda" },
      {
        name: "description",
        content:
          "Judo, pilates, zumba, entrenamiento infantil, masajes y presoterapia y campus en A Guarda. Deporte, valores y comunidad para niños, jóvenes y adultos.",
      },
      {
        property: "og:title",
        content: "Club Deportivo Baixo Miño | Judo y actividades en A Guarda",
      },
      {
        property: "og:description",
        content:
          "Club deportivo con judo, pilates, zumba, entrenamiento infantil, masajes, presoterapia, campus y torneo internacional en A Guarda.",
      },
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
                Club Deportivo · A Guarda · Pontevedra
              </p>
              <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
                Deporte, <br />
                <span className="text-muted-foreground">valores</span> <br />y familia.
              </h1>
              <p className="reveal reveal-delay-2 mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Judo, pilates, zumba, entrenamiento infantil, masajes y presoterapia. Acompañamos a
                niños, jóvenes y adultos en su crecimiento deportivo y personal.
              </p>
              <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary hover:shadow-soft"
                >
                  Clase de prueba gratis
                </Link>
                <a href="/actividades#horarios" className="link-underline text-sm font-medium">
                  Ver horarios →
                </a>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="foto-tatami reveal reveal-delay-2 relative aspect-4/5 w-full overflow-hidden rounded-3xl bg-secondary">
                <img
                  src={tatamiImg}
                  alt="Tatami del Club Deportivo Baixo Miño en A Guarda"
                  width={1536}
                  height={1024}
                  className="foto-tatami-imagen h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/65 to-transparent"
                />
                <p className="absolute inset-x-0 bottom-0 px-6 pb-6 text-xs font-medium uppercase tracking-[0.15em] text-white sm:px-8 sm:pb-8">
                  Nuestro tatami · A Guarda
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border/60 py-6 overflow-hidden">
          <div className="marquee-track flex w-max gap-16 whitespace-nowrap font-display text-2xl font-medium text-muted-foreground">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-16">
                <span> 礼 Respeto</span>
                <span>· 精力善用 Valores </span>
                <span>· 自他共栄 Familia </span>
                <span>· 柔 Judo </span>
                <span>· 道 Pilates </span>
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
              El Club Deportivo Baixo Miño es un proyecto deportivo de A Guarda dedicado a la
              enseñanza del judo, la actividad física, el bienestar y la formación en valores.
            </p>
            <p>
              Combinamos deporte base y competición de alto nivel con actividades como pilates,
              zumba, entrenamiento infantil, masajes y presoterapia. Nuestra filosofía se apoya en
              el respeto, el esfuerzo, la humildad, la amistad y el sentimiento de equipo.
            </p>
            <p>
              Formamos parte de la Federación Galega de Judo. Trabajamos con niños, jóvenes y
              adultos, acompañándolos en su desarrollo tanto dentro como fuera del tatami.
            </p>
          </div>
        </div>

        <figure className="foto-equipo relative mt-20 isolate overflow-hidden rounded-3xl bg-foreground">
          <img
            src={equipoImg}
            alt="Judokas y familias del Club Deportivo Baixo Minho reunidos junto al mar en A Guarda"
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
            className="foto-equipo-imagen aspect-[3/2] w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="foto-equipo-degradado pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(4,24,45,0.94)_0%,rgba(4,24,45,0.55)_22%,transparent_58%)]"
          />
          <figcaption className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-10 text-white sm:px-10 sm:pb-10 md:px-12 md:pb-12">
            <div aria-hidden="true" className="mb-4 h-0.5 w-12 bg-sky-400 sm:mb-6 sm:w-16" />
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/85 sm:text-xs sm:tracking-[0.3em]">
              Baixo Minho · A Guarda
            </p>
            <p className="mt-3 max-w-xl font-display text-2xl font-semibold leading-tight tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
              Un equipo dentro y fuera del tatami.
            </p>
          </figcaption>
        </figure>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
          {[
            { k: "160+", l: "licencias deportivas" },
            { k: "20+", l: "participantes nacionales" },
            { k: "500+", l: "en Torneo Santa Trega 2026" },
          ].map((s) => (
            <div key={s.l} className="bg-background p-10">
              <p className="font-display text-5xl font-semibold tracking-tight text-foreground">
                {s.k}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Nuestros valores
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Entendemos el deporte como herramienta de crecimiento.
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              { n: "01", t: "Respeto", d: "La base de la convivencia en el tatami y en la vida." },
              { n: "02", t: "Eficiencia", d: "Aprovechar la energía física y mental al máximo." },
              {
                n: "03",
                t: "Beneficio mutuo",
                d: "Crecer y aprender juntos, ayudándonos a mejorar.",
              },
              {
                n: "04",
                t: "Salud y fuerza",
                d: "Cuidar nuestro cuerpo, mantenernos activos y crecer fuertes, sanos y preparados para afrontar nuevos retos.",
              },
              {
                n: "05",
                t: "Diversión",
                d: "Disfrutar del entrenamiento, del aprendizaje y de compartir el camino con los demás.",
              },
              {
                n: "06",
                t: "Superación",
                d: "Esforzarnos cada día para ser un poco mejores que ayer.",
              },
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

      {/* Instalaciones */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Nuestras instalaciones
          </p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Un espacio para entrenar y sentirte en casa.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Conoce el tatami y los espacios del club en A Guarda.
          </p>
        </div>
        <p id="galeria-ayuda" className="mt-8 text-sm text-muted-foreground">
          Desliza para descubrir los espacios del club →
        </p>
        <div
          className="instalaciones-galeria mt-6 flex gap-4 overflow-x-auto pb-4 sm:gap-6 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          role="region"
          aria-label="Fotos de las instalaciones"
          aria-describedby="galeria-ayuda"
          tabIndex={0}
        >
          {[
            {
              src: tatamiImg,
              title: "El tatami",
              alt: "Tatami azul y zona de entrenamiento del club",
            },
            {
              src: tatamiDetalleImg,
              title: "Nuestro espacio de entrenamiento",
              alt: "Otra vista del tatami del Club Deportivo Baixo Miño",
            },
            {
              src: vestuarioImg,
              title: "El vestuario",
              alt: "Vestuario del club con percheros, espejo y lavabo",
            },
            {
              src: salaMasajesImg,
              title: "Área de masajes",
              alt: "Sala de masajes del club con camilla",
            },
            {
              src: camillaImg,
              title: "Un espacio para cuidarte",
              alt: "Detalle de la camilla y toalla del área de masajes",
            },
          ].map((photo, index) => (
            <figure
              key={photo.src}
              className="instalaciones-foto shrink-0 overflow-hidden rounded-3xl border border-border bg-secondary/30"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover sm:aspect-[3/2]"
              />
              <figcaption className="flex items-center justify-between gap-4 px-6 py-5 text-sm text-muted-foreground">
                <span>{photo.title}</span>
                <span className="shrink-0 tabular-nums" aria-label={`Foto ${index + 1} de 5`}>
                  {index + 1} / 5
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="rounded-3xl bg-foreground px-10 py-20 text-center text-background md:px-16 md:py-28">
          <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Forma parte de nuestro equipo.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm text-background/70">
            Prueba una clase gratis. Judo, pilates, zumba, entrenamiento infantil. Actividades para
            todas las edades.
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

import { createFileRoute, Link } from "@tanstack/react-router";
import PAGE from "@/content/es/home.json";
import equipoImg from "@/assets/club/equipo-a-guarda.webp";
import tatamiImg from "@/assets/club/tatami-vista-general.webp";
import recepcionImg from "@/assets/club/recepcion-club.webp";
import salaMasajesImg from "@/assets/club/sala-fisioterapia.webp";
import camillaImg from "@/assets/club/camilla-fisioterapia.webp";
import vestuarioImg from "@/assets/club/vestuario.webp";

const facilityImages = [tatamiImg, recepcionImg, vestuarioImg, salaMasajesImg, camillaImg];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE.meta.title },
      {
        name: "description",
        content: PAGE.meta.description,
      },
      {
        property: "og:title",
        content: PAGE.meta.title,
      },
      {
        property: "og:description",
        content: PAGE.meta.socialDescription,
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
                {PAGE.hero.eyebrow}
              </p>
              <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
                {PAGE.hero.titleStart} <br />
                <span className="text-muted-foreground">{PAGE.hero.titleMiddle}</span> <br />
                {PAGE.hero.titleEnd}
              </h1>
              <p className="reveal reveal-delay-2 mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                {PAGE.hero.description}
              </p>
              <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary hover:shadow-soft"
                >
                  {PAGE.hero.trial}
                </Link>
                <Link
                  to="/actividades"
                  hash="horarios"
                  className="link-underline text-sm font-medium"
                >
                  {PAGE.hero.schedule}
                </Link>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="foto-tatami reveal reveal-delay-2 relative aspect-4/5 w-full overflow-hidden rounded-3xl bg-secondary">
                <img
                  src={tatamiImg}
                  alt={PAGE.hero.tatamiAlt}
                  width={1536}
                  height={1024}
                  className="foto-tatami-imagen h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/65 to-transparent"
                />
                <p className="absolute inset-x-0 bottom-0 px-6 pb-6 text-xs font-medium uppercase tracking-[0.15em] text-white sm:px-8 sm:pb-8">
                  {PAGE.hero.tatamiCaption}
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
                <span>{PAGE.marquee[0]}</span>
                <span>· {PAGE.marquee[1]} </span>
                <span>· {PAGE.marquee[2]} </span>
                <span>· {PAGE.marquee[3]} </span>
                <span>· {PAGE.marquee[4]} </span>
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
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {PAGE.club.eyebrow}
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              {PAGE.club.title}
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-base leading-relaxed text-muted-foreground">
            {PAGE.club.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <figure className="foto-equipo relative mt-20 isolate overflow-hidden rounded-3xl bg-foreground">
          <img
            src={equipoImg}
            alt={PAGE.club.teamAlt}
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
              {PAGE.club.teamEyebrow}
            </p>
            <p className="mt-3 max-w-xl font-display text-2xl font-semibold leading-tight tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
              {PAGE.club.teamCaption}
            </p>
          </figcaption>
        </figure>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
          {PAGE.club.stats.map((s) => (
            <div key={s.label} className="bg-background p-10">
              <p className="font-display text-5xl font-semibold tracking-tight text-foreground">
                {s.value}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {PAGE.values.eyebrow}
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            {PAGE.values.title}
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {PAGE.values.items.map((v, index) => (
              <div key={v.title} className="group">
                <p className="font-display text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
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
            {PAGE.facilities.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            {PAGE.facilities.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {PAGE.facilities.description}
          </p>
        </div>
        <p id="galeria-ayuda" className="mt-8 text-sm text-muted-foreground">
          {PAGE.facilities.galleryHint}
        </p>
        <div
          className="instalaciones-galeria mt-6 flex gap-4 overflow-x-auto pb-4 sm:gap-6 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          role="region"
          aria-label={PAGE.facilities.galleryLabel}
          aria-describedby="galeria-ayuda"
          tabIndex={0}
        >
          {PAGE.facilities.photos.map((photo, index) => (
            <figure
              key={photo.title}
              className="instalaciones-foto shrink-0 overflow-hidden rounded-3xl border border-border bg-secondary/30"
            >
              <img
                src={facilityImages[index]}
                alt={photo.alt}
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover sm:aspect-[3/2]"
              />
              <figcaption className="flex items-center justify-between gap-4 px-6 py-5 text-sm text-muted-foreground">
                <span>{photo.title}</span>
                <span
                  className="shrink-0 tabular-nums"
                  aria-label={PAGE.facilities.photoCountLabel
                    .replace("{current}", String(index + 1))
                    .replace("{total}", String(PAGE.facilities.photos.length))}
                >
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
            {PAGE.cta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm text-background/70">{PAGE.cta.description}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/actividades"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              {PAGE.cta.activities}
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-full border border-background/30 px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              {PAGE.cta.contact}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, getRouteApi, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-judo.jpg";
import { getMessages, isLocale, pageMeta, type Locale } from "@/i18n";

const localeRoute = getRouteApi("/$locale");

export const Route = createFileRoute("/$locale/")({
  head: ({ params }) => {
    if (!isLocale(params.locale)) return {};
    const m = getMessages(params.locale as Locale);
    return pageMeta(
      params.locale as Locale,
      { title: m.meta.siteTitle, description: m.meta.siteDescription },
      "",
    );
  },
  component: Index,
});

function Index() {
  const { locale, messages: m } = localeRoute.useRouteContext();
  const h = m.home;

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-32">
          <div className="grid gap-14 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-6 flex flex-col justify-center">
              <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">{h.eyebrow}</p>
              <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
                {h.headlineLine1} <br />
                <span className="text-muted-foreground">{h.headlineSoft}</span> <br />
                {h.headlineLine3}
              </h1>
              <p className="reveal reveal-delay-2 mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                {h.lead}
              </p>
              <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/$locale/contacto"
                  params={{ locale }}
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary hover:shadow-soft"
                >
                  {h.ctaTrial}
                </Link>
                <Link
                  to="/$locale/horarios"
                  params={{ locale }}
                  className="link-underline text-sm font-medium"
                >
                  {h.ctaSchedule}
                </Link>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="reveal reveal-delay-2 relative aspect-4/5 w-full overflow-hidden rounded-3xl bg-secondary">
                <img
                  src={heroImg}
                  alt={h.heroAlt}
                  width={1600}
                  height={1800}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-border/60 py-6 overflow-hidden">
          <div className="marquee-track flex w-max gap-16 whitespace-nowrap font-display text-2xl font-medium text-muted-foreground">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-16">
                {h.marquee.map((item) => (
                  <span key={`${i}-${item}`}>{item}</span>
                ))}
                <span>·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="academia" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{h.academyEyebrow}</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              {h.academyTitle}
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>{h.academyP1}</p>
            <p>{h.academyP2}</p>
            <p>{h.academyP3}</p>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
          {h.stats.map((s) => (
            <div key={s.l} className="bg-background p-10">
              <p className="font-display text-5xl font-semibold tracking-tight text-foreground">{s.k}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{h.methodEyebrow}</p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            {h.methodTitle}
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {h.principles.map((v) => (
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

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="rounded-3xl bg-foreground px-10 py-20 text-center text-background md:px-16 md:py-28">
          <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            {h.ctaTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm text-background/70">{h.ctaBody}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/$locale/contacto"
              params={{ locale }}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              {h.ctaRequest}
            </Link>
            <Link
              to="/$locale/horarios"
              params={{ locale }}
              className="inline-flex items-center justify-center rounded-full border border-background/30 px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              {h.ctaViewSchedule}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

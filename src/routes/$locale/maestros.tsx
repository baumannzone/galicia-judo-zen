import { createFileRoute, getRouteApi } from "@tanstack/react-router";
import s1 from "@/assets/sensei-1.jpg";
import s2 from "@/assets/sensei-2.jpg";
import s3 from "@/assets/sensei-3.jpg";
import { getMessages, isLocale, pageMeta, type Locale } from "@/i18n";

const localeRoute = getRouteApi("/$locale");

export const Route = createFileRoute("/$locale/maestros")({
  head: ({ params }) => {
    if (!isLocale(params.locale)) return {};
    const m = getMessages(params.locale as Locale);
    return pageMeta(
      params.locale as Locale,
      {
        title: m.meta.maestrosTitle,
        description: m.meta.maestrosDescription,
        ogDescription: m.meta.maestrosOgDescription,
      },
      "/maestros",
    );
  },
  component: Maestros,
});

const SENSEI_STATIC = [
  { img: s1, name: "Mónica Pacheco" },
  { img: s2, name: "Aiko Tanaka" },
  { img: s3, name: "Diego Castromil" },
] as const;

function Maestros() {
  const { messages: m } = localeRoute.useRouteContext();
  const t = m.maestros;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">{t.eyebrow}</p>
        <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          {t.title}
        </h1>
        <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">{t.lead}</p>
      </div>

      <div className="mt-20 grid gap-14 md:grid-cols-3 md:gap-10">
        {SENSEI_STATIC.map((p, i) => {
          const copy = t.sensei[i];
          return (
            <article
              key={p.name}
              className="reveal group"
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-secondary">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <h2 className="font-display text-2xl font-semibold tracking-tight">{p.name}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">{copy.rank}</p>
                <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground">
                  {copy.bio.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-24 border-t border-border pt-12">
        <blockquote className="mx-auto max-w-3xl text-center font-display text-2xl leading-snug tracking-tight sm:text-3xl">
          {t.quote}
          <footer className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t.quoteAuthor}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

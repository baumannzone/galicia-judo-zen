import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import PAGE from "@/content/es/noticias.json";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: PAGE.meta.title },
      {
        name: "description",
        content: PAGE.meta.description,
      },
      { property: "og:title", content: PAGE.meta.title },
      {
        property: "og:description",
        content: PAGE.meta.socialDescription,
      },
    ],
  }),
  component: Noticias,
});

const NOTICIAS = PAGE.articles;
const CATEGORIES = [PAGE.filters.all, ...new Set(NOTICIAS.map((noticia) => noticia.category))];

function Noticias() {
  const [selectedCategory, setSelectedCategory] = React.useState(PAGE.filters.all);

  const filtered =
    selectedCategory === PAGE.filters.all
      ? NOTICIAS
      : NOTICIAS.filter((n) => n.category === selectedCategory);

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {PAGE.intro.eyebrow}
          </p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            {PAGE.intro.title}
          </h1>
          <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">
            {PAGE.intro.description}
          </p>
        </div>

        <div role="group" aria-label={PAGE.filters.label} className="mt-12 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                selectedCategory === cat
                  ? "bg-foreground text-background"
                  : "border border-border bg-background hover:border-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <div className="space-y-8" aria-live="polite" aria-atomic="true">
          {filtered.map((noticia, i) => (
            <article
              key={noticia.id}
              className="reveal border-b border-border pb-12 last:border-0"
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-[0.15em] text-primary font-medium">
                      {noticia.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{noticia.date}</span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">
                    {noticia.title}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {noticia.excerpt}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {noticia.content}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{PAGE.filters.empty}</p>
          </div>
        )}
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {PAGE.social.eyebrow}
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              {PAGE.social.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {PAGE.social.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/cdbaixominho/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary hover:shadow-soft"
              >
                {PAGE.social.instagram}
              </a>
              <a
                href="https://www.facebook.com/judobaixominho/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-all"
              >
                {PAGE.social.facebook}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

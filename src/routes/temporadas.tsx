import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, MapPin } from "lucide-react";
import PAGE from "@/content/es/temporadas.json";

export const Route = createFileRoute("/temporadas")({
  head: () => ({
    meta: [
      { title: PAGE.meta.title },
      { name: "description", content: PAGE.meta.description },
      { property: "og:title", content: PAGE.meta.title },
      { property: "og:description", content: PAGE.meta.socialDescription },
    ],
  }),
  component: Temporadas,
});

function Temporadas() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {PAGE.intro.eyebrow}
          </p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            {PAGE.intro.title}
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {PAGE.intro.description}
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-5 rounded-3xl border border-border bg-secondary/30 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {PAGE.intro.seasonLabel}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
              {PAGE.intro.season}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{PAGE.intro.seasonDescription}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24" aria-label={PAGE.intro.season}>
        <div className="space-y-14">
          {PAGE.months.map((month) => (
            <section key={month.name} aria-labelledby={`mes-${month.name.toLowerCase()}`}>
              <div className="mb-5 flex items-center gap-3">
                <CalendarDays aria-hidden="true" className="h-4 w-4 text-primary" />
                <h2
                  id={`mes-${month.name.toLowerCase()}`}
                  className="font-display text-2xl font-semibold tracking-tight"
                >
                  {month.name}
                </h2>
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="grid grid-cols-1 gap-4">
                {month.events.map((event) => (
                  <article
                    key={`${event.date}-${event.title}`}
                    className="rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/40 sm:p-6"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">
                      {event.date}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                      {event.title}
                    </h3>
                    {event.place && (
                      <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
                        {event.place}
                      </p>
                    )}
                    {event.detail && (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {event.detail}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

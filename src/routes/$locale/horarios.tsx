import { createFileRoute, getRouteApi } from "@tanstack/react-router";
import { getMessages, isLocale, pageMeta, type Locale } from "@/i18n";

const localeRoute = getRouteApi("/$locale");

export const Route = createFileRoute("/$locale/horarios")({
  head: ({ params }) => {
    if (!isLocale(params.locale)) return {};
    const m = getMessages(params.locale as Locale);
    return pageMeta(
      params.locale as Locale,
      {
        title: m.meta.horariosTitle,
        description: m.meta.horariosDescription,
        ogDescription: m.meta.horariosOgDescription,
      },
      "/horarios",
    );
  },
  component: Horarios,
});

function Horarios() {
  const { messages: m } = localeRoute.useRouteContext();
  const h = m.horarios;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">{h.eyebrow}</p>
        <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          {h.title}
        </h1>
        <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">{h.lead}</p>
      </div>

      <div className="mt-16 space-y-px overflow-hidden rounded-3xl border border-border bg-border">
        {h.groups.map((g, i) => (
          <article
            key={g.name}
            className="reveal group grid gap-6 bg-background p-8 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:items-center md:p-10"
            style={{ animationDelay: `${0.1 + i * 0.06}s` }}
          >
            <div className="md:col-span-4">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">{g.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {g.age} · {g.level}
              </p>
            </div>
            <div className="md:col-span-8">
              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {g.slots.map((s) => (
                  <li
                    key={s.day + s.time}
                    className="rounded-2xl border border-border/70 bg-background px-4 py-3 transition-transform group-hover:-translate-y-0.5"
                  >
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{s.day}</p>
                    <p className="mt-1 font-display text-base font-medium">{s.time}</p>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 grid gap-8 rounded-3xl border border-border p-8 md:grid-cols-3 md:p-10">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{h.feeLabel}</p>
          <p className="mt-3 font-display text-3xl font-semibold">{h.feeValue}</p>
          <p className="mt-2 text-sm text-muted-foreground">{h.feeHint}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{h.enrollmentLabel}</p>
          <p className="mt-3 font-display text-3xl font-semibold">{h.enrollmentValue}</p>
          <p className="mt-2 text-sm text-muted-foreground">{h.enrollmentHint}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{h.trialLabel}</p>
          <p className="mt-3 font-display text-3xl font-semibold">{h.trialValue}</p>
          <p className="mt-2 text-sm text-muted-foreground">{h.trialHint}</p>
        </div>
      </div>
    </section>
  );
}

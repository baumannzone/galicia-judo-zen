import { createFileRoute, Link } from "@tanstack/react-router";
import PAGE from "@/content/es/actividades.json";
import salaImg from "@/assets/club/sala-fisioterapia.webp";
import camillaImg from "@/assets/club/camilla-fisioterapia.webp";

export const Route = createFileRoute("/actividades")({
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
  component: Actividades,
});

const ACTIVITIES = PAGE.activities;
const SCHEDULE_ROWS = PAGE.schedule.rows;

function scheduleTone(activity: string) {
  const value = activity.toLowerCase();
  if (value.includes("zumba")) return "bg-pink-500/15 text-pink-700 dark:text-pink-300";
  if (value.includes("pilates")) return "bg-yellow-400/25 text-yellow-800 dark:text-yellow-200";
  if (value.includes("competici")) return "bg-blue-500/15 text-blue-700 dark:text-blue-300";
  if (value.includes("training")) return "bg-green-500/15 text-green-700 dark:text-green-300";
  if (value.includes("judo")) return "bg-yellow-400/25 text-yellow-800 dark:text-yellow-200";
  return "";
}

function Actividades() {
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

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((activity, i) => (
            <div
              key={activity.id}
              className="reveal group rounded-3xl border border-border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-soft md:p-10"
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {activity.age}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                    {activity.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-primary">{activity.level}</p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {activity.description}
              </p>

              <ul className="mt-6 space-y-2">
                {activity.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  to="/contacto"
                  className="inline-flex text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {PAGE.actions.requestInfo}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-24" aria-labelledby="espacio-masajes">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {PAGE.massageArea.eyebrow}
            </p>
            <h2
              id="espacio-masajes"
              className="mt-5 font-display text-3xl leading-tight tracking-tight sm:text-4xl"
            >
              {PAGE.massageArea.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {PAGE.massageArea.description}
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-[1.3fr_1fr]">
            <figure className="overflow-hidden rounded-3xl border border-border bg-secondary/30">
              <img
                src={salaImg}
                alt={PAGE.massageArea.salaAlt}
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover sm:h-96 md:h-[26rem]"
              />
              <figcaption className="px-6 py-5 text-sm text-muted-foreground">
                {PAGE.massageArea.salaCaption}
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-3xl border border-border bg-secondary/30">
              <img
                src={camillaImg}
                alt={PAGE.massageArea.camillaAlt}
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover sm:h-96 md:h-[26rem]"
              />
              <figcaption className="px-6 py-5 text-sm text-muted-foreground">
                {PAGE.massageArea.camillaCaption}
              </figcaption>
            </figure>
          </div>
        </section>

        <div id="horarios" className="mt-20 scroll-mt-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {PAGE.schedule.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              {PAGE.schedule.title}
            </h2>
          </div>
          <div className="mt-8 overflow-x-auto rounded-3xl border border-border">
            <table className="w-full min-w-[760px] table-fixed border-collapse text-left text-sm">
              <colgroup>
                <col className="w-36" />
                <col span={5} />
              </colgroup>
              <thead>
                <tr className="bg-secondary/60">
                  {PAGE.schedule.headings.map((heading) => (
                    <th
                      key={heading}
                      className="border-b border-border px-5 py-4 text-xs uppercase tracking-[0.15em] text-muted-foreground"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SCHEDULE_ROWS.map((row) => (
                  <tr key={row.time} className="border-b border-border/70 last:border-b-0">
                    <th className="whitespace-nowrap px-5 py-4 font-display font-semibold">
                      {row.time}
                    </th>
                    {[row.monday, row.tuesday, row.wednesday, row.thursday, row.friday].map(
                      (activity, index) => (
                        <td
                          key={`${row.time}-${index}`}
                          className={`px-5 py-4 ${activity ? "font-medium" : "text-muted-foreground/30"}`}
                        >
                          {activity ? (
                            <span
                              className={`inline-flex w-full justify-center rounded-lg px-3 py-2 text-center ${scheduleTone(activity)}`}
                            >
                              {activity}
                            </span>
                          ) : (
                            "—"
                          )}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {PAGE.cta.eyebrow}
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              {PAGE.cta.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {PAGE.cta.description}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary hover:shadow-soft"
            >
              {PAGE.cta.reserve}
            </Link>
            <a href="#horarios" className="link-underline text-sm font-medium">
              {PAGE.cta.schedule} →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

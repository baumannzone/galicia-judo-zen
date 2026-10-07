import { createFileRoute, Link } from "@tanstack/react-router";
import PAGE from "@/content/es/judo.json";
import tatamiImg from "@/assets/club/tatami-segunda-vista.webp";

export const Route = createFileRoute("/judo")({
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
  component: Judo,
});

const JUDO_SCHEDULE = PAGE.schedule.groups;
const ADULT_JUDO_GROUP = PAGE.schedule.adultGroup;
const SCHEDULE_ROWS = PAGE.schedule.rows;
const ADULT_SCHEDULE_ROWS = PAGE.schedule.adultRows;

function scheduleTone(activity: string) {
  const value = activity.toLowerCase();
  if (value.includes("zumba")) return "bg-pink-500/15 text-pink-700 dark:text-pink-300";
  if (value.includes("competici")) return "bg-blue-500/15 text-blue-700 dark:text-blue-300";
  if (value.includes("training")) return "bg-green-500/15 text-green-700 dark:text-green-300";
  if (value.includes("judo")) return "bg-yellow-400/25 text-yellow-800 dark:text-yellow-200";
  return "";
}

function Judo() {
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
            Jigoro Kano creó el judo en 1882 como un arte marcial que va más allá de la técnica. Es
            una forma de entender la vida basada en el respeto, la eficiencia y el crecimiento
            mutuo.
          </p>
        </div>
        <figure className="mt-14 overflow-hidden rounded-3xl border border-border bg-secondary/30">
          <img
            src={tatamiImg}
            alt={PAGE.intro.imageAlt}
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
            className="aspect-[16/9] w-full object-cover"
          />
          <figcaption className="px-6 py-5 text-sm text-muted-foreground md:px-8">
            {PAGE.intro.imageCaption}
          </figcaption>
        </figure>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {PAGE.philosophy.eyebrow}
              </p>
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                {PAGE.philosophy.title}
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6 text-base leading-relaxed text-muted-foreground">
              {PAGE.philosophy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
            {PAGE.philosophy.values.map((v) => (
              <div key={v.title} className="bg-background p-10">
                <p className="font-display text-lg font-semibold tracking-tight text-foreground">
                  {v.title}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {PAGE.schedule.course}
          </p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            {PAGE.schedule.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {JUDO_SCHEDULE.map((group) => (
            <article
              key={group.name}
              className="rounded-3xl border border-border bg-background p-8 md:p-10"
            >
              <h3 className="font-display text-2xl font-semibold tracking-tight">{group.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{group.ages}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5">
                {group.slots.map((slot) => (
                  <li key={slot} className="text-sm font-medium text-primary">
                    {slot}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            {PAGE.schedule.kidsTableTitle}
          </h3>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-border">
            <table className="w-full min-w-190 table-fixed border-collapse text-left text-sm">
              <colgroup>
                <col className="w-36" />
                <col span={4} />
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
                    {[row.monday, row.tuesday, row.wednesday, row.thursday].map(
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

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-border bg-background p-8 md:p-10">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              {ADULT_JUDO_GROUP.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {ADULT_JUDO_GROUP.ages}
            </p>
            <ul className="mt-6 space-y-2 border-t border-border pt-5">
              {ADULT_JUDO_GROUP.slots.map((slot) => (
                <li key={slot} className="text-sm font-medium text-primary">
                  {slot}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-14">
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            {PAGE.schedule.adultTableTitle}
          </h3>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-border">
            <table className="w-full min-w-190 table-fixed border-collapse text-left text-sm">
              <colgroup>
                <col className="w-36" />
                <col span={5} />
              </colgroup>
              <thead>
                <tr className="bg-secondary/60">
                  {PAGE.schedule.adultHeadings.map((heading) => (
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
                {ADULT_SCHEDULE_ROWS.map((row) => (
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

        <div className="mt-8 rounded-3xl border border-primary/30 bg-primary/5 p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">{PAGE.schedule.course}</p>
          <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
            {PAGE.schedule.licenseTitle}
          </h3>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">25 €</strong> · Nacidos en 2011 y posteriores
            </li>
            <li>
              <strong className="text-foreground">63 €</strong> · Nacidos en 2008, 2009 y 2010
            </li>
            <li>
              <strong className="text-foreground">85 €</strong> · Nacidos en 2007 y anteriores
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {PAGE.benefits.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            {PAGE.benefits.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {PAGE.benefits.description}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {PAGE.benefits.groups.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl border border-border bg-background p-8 md:p-10"
            >
              <p className="font-display text-2xl font-semibold tracking-tight">{group.category}</p>
              <ul className="mt-6 space-y-3">
                {group.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {PAGE.competition.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            {PAGE.competition.title}
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
            <p className="font-display text-2xl font-semibold tracking-tight">
              {PAGE.competition.cardTitle}
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {PAGE.competition.description}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {PAGE.competition.events.map((event) => (
                <li key={event} className="flex gap-2">
                  <span className="text-primary">→</span>
                  {event}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="rounded-3xl bg-foreground text-background px-10 py-20 text-center md:px-16 md:py-28">
            <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              {PAGE.cta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-sm text-background/70">
              {PAGE.cta.description}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/actividades"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Conoce nuestras clases
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-background/30 px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
              >
                Contacta con nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

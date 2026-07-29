import { createFileRoute, getRouteApi } from "@tanstack/react-router";
import { getMessages, isLocale, pageMeta, type Locale } from "@/i18n";

const localeRoute = getRouteApi("/$locale");

const MAPS_LINK =
  "https://www.google.com/maps/place/Centro+Deportivo+Baixo+Mi%C3%B1o/@41.9049296,-8.8755687,17z/data=!3m1!4b1!4m6!3m5!1s0xd25ea8bb849c317:0x9ecaed688d2ca3f7!8m2!3d41.9049296!4d-8.8755687!16s%2Fg%2F11c1mzhz55?hl=es-ES";
const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.2!2d-8.8755687!3d41.9049296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd25ea8bb849c317%3A0x9ecaed688d2ca3f7!2sCentro%20Deportivo%20Baixo%20Mi%C3%B1o!5e0!3m2!1ses-ES!2ses!4v1!5m2!1ses-ES!2ses";

export const Route = createFileRoute("/$locale/contacto")({
  head: ({ params }) => {
    if (!isLocale(params.locale)) return {};
    const m = getMessages(params.locale as Locale);
    return pageMeta(
      params.locale as Locale,
      {
        title: m.meta.contactoTitle,
        description: m.meta.contactoDescription,
        ogDescription: m.meta.contactoOgDescription,
      },
      "/contacto",
    );
  },
  component: Contacto,
});

function Contacto() {
  const { messages: m } = localeRoute.useRouteContext();
  const c = m.contacto;
  const addressLines = c.address.split("\n");

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">{c.eyebrow}</p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            {c.titleLine1} <br />
            {c.titleLine2}
          </h1>
          <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">{c.lead}</p>

          <dl className="mt-12 space-y-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.addressLabel}</dt>
              <dd className="mt-2">
                {addressLines[0]}
                <br />
                {addressLines[1]}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.phoneLabel}</dt>
              <dd className="mt-2">+34 986 910 408</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.emailLabel}</dt>
              <dd className="mt-2">judobaixominho@gmail.com</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.hoursLabel}</dt>
              <dd className="mt-2">{c.hours}</dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-7">
          <div className="reveal reveal-delay-2 overflow-hidden rounded-3xl border border-border bg-background">
            <iframe
              title={c.mapTitle}
              src={MAPS_EMBED_SRC}
              className="aspect-[4/3] w-full border-0 md:aspect-auto md:h-[634px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="reveal reveal-delay-3 mt-4 text-sm text-muted-foreground">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline transition-colors hover:text-foreground"
            >
              {c.openMaps}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

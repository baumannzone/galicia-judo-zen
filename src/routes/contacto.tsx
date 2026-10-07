import { createFileRoute } from "@tanstack/react-router";
import PAGE from "@/content/es/contacto.json";

export const Route = createFileRoute("/contacto")({
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
  component: Contacto,
});

function Contacto() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {PAGE.intro.eyebrow}
          </p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            {PAGE.intro.title}
          </h1>
          <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">
            {PAGE.intro.description}
          </p>

          <dl className="mt-12 space-y-8 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {PAGE.fields.address}
              </dt>
              <dd className="mt-2 font-medium">
                {PAGE.address.street}
                <br />
                {PAGE.address.city}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {PAGE.fields.phone}
              </dt>
              <dd className="mt-2 space-y-1">
                <div>
                  <a
                    href={PAGE.phones[0].href}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {PAGE.phones[0].display}
                  </a>
                </div>
                <div>
                  <a
                    href={PAGE.phones[1].href}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {PAGE.phones[1].display}
                  </a>
                </div>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {PAGE.fields.email}
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${PAGE.emailAddress}`}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {PAGE.emailAddress}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {PAGE.fields.social}
              </dt>
              <dd className="mt-2 space-y-1">
                {PAGE.socialLinks.map((social) => (
                  <div key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {social.label}
                    </a>
                  </div>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-7">
          <div className="reveal reveal-delay-2 rounded-3xl border border-border bg-secondary/30 p-8 md:p-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              {PAGE.fields.location}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">{PAGE.fields.locationDescription}</p>
            <div className="mt-6 overflow-hidden rounded-2xl">
              <iframe
                title={PAGE.fields.mapTitle}
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.2!2d-8.8755687!3d41.9049296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd25ea8bb849c317%3A0x9ecaed688d2ca3f7!2sCentro%20Deportivo%20Baixo%20Mi%C3%B1o!5e0!3m2!1ses-ES!2ses!4v1!5m2!1ses-ES!2ses"
              />
            </div>

            <div className="mt-8 rounded-2xl bg-background p-6">
              <p className="font-display text-sm font-semibold tracking-tight mb-3">
                {PAGE.fields.practical}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">{PAGE.fields.trial}</strong>{" "}
                  {PAGE.fields.trialDescription}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

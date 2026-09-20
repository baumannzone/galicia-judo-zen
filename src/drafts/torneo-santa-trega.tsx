import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/torneo-santa-trega")({
  head: () => ({
    meta: [
      { title: "Torneo Santa Trega — Club Deportivo Baixo Miño" },
      { name: "description", content: "Torneo Internacional de Judo Infantil Santa Trega. Evento anual con más de 500 participantes de Galicia, Portugal e Italia." },
      { property: "og:title", content: "Torneo Santa Trega — Club Deportivo Baixo Miño" },
      { property: "og:description", content: "III Torneo Internacional de Judo Santa Trega 2026. Más de 500 participantes, Portugal, Italia y Galicia." },
    ],
  }),
  component: TorneoSantaTrega,
});

function TorneoSantaTrega() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">Torneo</p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Torneo Internacional Santa Trega.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">
            El mayor evento de judo infantil internacional de Galicia. Más de 500 judokas de Galicia, Portugal e Italia compitiendo, aprendiendo y compartiendo.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Crecimiento</p>
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                Un evento en expansión.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6 text-base leading-relaxed text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">I Torneo — 2024</p>
                <p className="mt-1 text-primary font-semibold">~220 participantes</p>
              </div>
              <div>
                <p className="font-medium text-foreground">II Torneo — 2025</p>
                <p className="mt-1 text-primary font-semibold">+420 participantes</p>
              </div>
              <div>
                <p className="font-medium text-foreground">III Torneo — 2026</p>
                <p className="mt-1 text-primary font-semibold">+500 participantes</p>
                <p className="mt-2">9 de mayo, Pabellón A Sangriña, A Guarda</p>
              </div>
              <p className="pt-4 border-t border-border">
                El torneo es testimonio del trabajo del club y de la red deportiva que hemos construido en Galicia, Portugal e Italia. Cada año, el evento crece en participantes, calidad y visibilidad internacional.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
            {[
              { k: "500+", l: "judokas participantes" },
              { k: "10+", l: "clubes portugueses" },
              { k: "3", l: "países representados" },
            ].map((s) => (
              <div key={s.l} className="bg-background p-10">
                <p className="font-display text-5xl font-semibold tracking-tight text-foreground">{s.k}</p>
                <p className="mt-3 text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">2026</p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            III Torneo Internacional.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              label: "Fecha",
              value: "9 de mayo de 2026",
            },
            {
              label: "Lugar",
              value: "Pabellón A Sangriña, A Guarda",
            },
            {
              label: "Categorías",
              value: "Desde prebenjamín hasta cadete",
            },
            {
              label: "Participantes",
              value: "Más de 500 judokas",
            },
            {
              label: "Procedencias",
              value: "Galicia, Portugal, Italia",
            },
            {
              label: "Objetivo",
              value: "Fomentar judo de base, amistad internacional",
            },
          ].map((info) => (
            <div key={info.label} className="rounded-3xl border border-border bg-background p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{info.label}</p>
              <p className="mt-4 font-display text-lg font-semibold tracking-tight">{info.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Red</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Una red internacional.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
              <p className="font-display text-2xl font-semibold tracking-tight">Colaboradores Institucionales</p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>Deputación de Pontevedra</li>
                <li>Concello da Guarda</li>
                <li>Federación Galega de Judo</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
              <p className="font-display text-2xl font-semibold tracking-tight">Clubes Galegos</p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>Judo Club Galicia Sur</li>
                <li>Clubes de Ferrolterra</li>
                <li>Clubes de Coruña</li>
                <li>Y muchos más...</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
              <p className="font-display text-2xl font-semibold tracking-tight">Internacionales</p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>Clubes de Portugal</li>
                <li>Frascati, Italia</li>
                <li>Otras delegaciones</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 rounded-3xl border border-border bg-background p-8 md:p-10">
            <p className="font-display text-2xl font-semibold tracking-tight mb-6">Por qué participar</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="font-medium text-foreground text-sm">Para judokas</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Competir en nivel internacional</li>
                  <li>• Conocer judokas de otros países</li>
                  <li>• Vivir la experiencia del tatami global</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Para clubes</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Compartir metodología y experiencia</li>
                  <li>• Fortalecer red internacional</li>
                  <li>• Promover judo de base de calidad</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="rounded-3xl bg-foreground text-background px-10 py-20 text-center md:px-16 md:py-28">
          <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Forma parte del torneo.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm text-background/70">
            Inscripción de clubes participantes para la próxima edición. Contáctanos para más información.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Contactar
            </Link>
            <Link
              to="/judo"
              className="inline-flex items-center justify-center rounded-full border border-background/30 px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              Conoce el judo
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <div className="rounded-2xl border border-border bg-secondary/30 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Documentación</p>
          <p className="mt-3 text-sm text-muted-foreground">
            [PENDIENTE]: Reglamento en PDF, formulario de inscripción, programa detallado, información de alojamiento y más detalles de la próxima edición.
          </p>
        </div>
      </div>
    </>
  );
}

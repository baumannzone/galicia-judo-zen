import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "Campus y Familias — Club Deportivo Baixo Miño" },
      { name: "description", content: "Campus de verano, actividades infantiles y jornadas familiares en el Club Deportivo Baixo Miño en A Guarda." },
      { property: "og:title", content: "Campus y Familias — Club Deportivo Baixo Miño" },
      { property: "og:description", content: "Campus julio-agosto, Plan Madruga y actividades infantiles en A Guarda." },
    ],
  }),
  component: Campus,
});

function Campus() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">Campus y Familias</p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Actividades para familias.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">
            En Baixo Miño creemos que la familia es parte del club. Por eso ofrecemos actividades para que niños y adultos aprendan, disfruten y crezcan juntos.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Verano</p>
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                Campus de verano.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Julio y agosto es tiempo de aprendizaje y diversión en el Club Deportivo Baixo Miño. Nuestro campus de verano combina actividades deportivas, juegos, manualidades y salidas a la naturaleza.
              </p>
              <p>
                <strong className="text-foreground">Horario:</strong> 9:00 – 14:00<br/>
                <strong className="text-foreground">Plan Madruga:</strong> Desde las 8:30 (opcional)<br/>
                <strong className="text-foreground">Edades:</strong> Niños nacidos en 2022 o anteriormente<br/>
                <strong className="text-foreground">Opciones:</strong> Por semana, quincena o mes completo
              </p>
              <p>
                Monitor es cualificados y ambiente seguro, donde la diversión y el aprendizaje van de la mano.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
              <p className="font-display text-xl font-semibold tracking-tight">Actividades incluidas</p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
                  Judo y multideporte
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
                  Zumba y baile
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
                  Manualidades y arte
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
                  Lectura y actividades lúdicas
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
                  Salidas a la naturaleza y playa
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
                  Actividades de equipo y valores
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
              <p className="font-display text-xl font-semibold tracking-tight">Información práctica</p>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Qué traer</p>
                  <p>Ropa cómoda, chanclas, toalla, desayuno.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Autorización</p>
                  <p>Formulario firmado requerido para cada menor.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Contacto emergencia</p>
                  <p>Datos actualizados de teléfono y responsable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Año redondo</p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Actividades durante todo el año.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Navidad",
              description: "Actividades y campus navideño con temática festiva, juegos y diversión para las vacaciones de invierno.",
            },
            {
              title: "Judo en Familia",
              description: "Jornadas especiales donde padres e hijos entrenan juntos en el tatami, viviendo la experiencia del judo como familia.",
            },
            {
              title: "Manzaneda",
              description: "Viajes y retiros deportivos para disfrutar de la naturaleza, la convivencia y el deporte intensivo.",
            },
            {
              title: "Actividades Infantiles",
              description: "Talleres, celebraciones y eventos especiales organizados durante el año escolar para los más pequeños.",
            },
          ].map((activity) => (
            <div
              key={activity.title}
              className="rounded-3xl border border-border bg-background p-8 md:p-10 hover:border-primary/50 transition-all"
            >
              <p className="font-display text-2xl font-semibold tracking-tight">{activity.title}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Valores</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              En familia, se crece mejor.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Participación",
                description: "La familia es parte activa del proceso de crecimiento deportivo y personal de los niños.",
              },
              {
                title: "Comunidad",
                description: "Creamos vínculos entre familias, convirtiendo el club en un espacio de pertenencia.",
              },
              {
                title: "Diversión",
                description: "Actividades donde el aprendizaje y la diversión van juntos, sin separar al deporte de la alegría.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-border bg-background p-8 md:p-10"
              >
                <p className="font-display text-2xl font-semibold tracking-tight">{value.title}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-foreground text-background px-10 py-20 text-center md:px-16 md:py-28">
            <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Reserva tu plaza.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-sm text-background/70">
              Plazas limitadas en campus y actividades. Contacta cuanto antes para asegurar tu lugar.
            </p>
            <Link
              to="/contacto"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Solicitar información
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <div className="rounded-2xl border border-border bg-secondary/30 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Nota importante</p>
          <p className="mt-3 text-sm text-muted-foreground">
            [PENDIENTE]: Tarifas exactas, fechas precisas de campus, formularios de inscripción y políticas de cancelación serán confirmadas con el club.
          </p>
        </div>
      </div>
    </>
  );
}

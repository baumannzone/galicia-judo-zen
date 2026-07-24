import { createFileRoute } from "@tanstack/react-router";

const MAPS_LINK =
  "https://www.google.com/maps/place/Centro+Deportivo+Baixo+Mi%C3%B1o/@41.9049296,-8.8755687,17z/data=!3m1!4b1!4m6!3m5!1s0xd25ea8bb849c317:0x9ecaed688d2ca3f7!8m2!3d41.9049296!4d-8.8755687!16s%2Fg%2F11c1mzhz55?hl=es-ES";
const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.2!2d-8.8755687!3d41.9049296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd25ea8bb849c317%3A0x9ecaed688d2ca3f7!2sCentro%20Deportivo%20Baixo%20Mi%C3%B1o!5e0!3m2!1ses-ES!2ses!4v1!5m2!1ses-ES!2ses";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto e inscripción — CD Baixo Minho" },
      { name: "description", content: "Contacta con el CD Baixo Minho en A Guarda. Dirección, teléfono y ubicación en el mapa." },
      { property: "og:title", content: "Contacto e inscripción — CD Baixo Minho" },
      { property: "og:description", content: "Ven a conocernos en A Guarda. Encuéntranos en el mapa." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">Contacto</p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Ven a conocer <br/>el dojo.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">
            Estamos en el centro de A Guarda. Llámanos o escríbenos para reservar tu clase de prueba o pedir información.
          </p>

          <dl className="mt-12 space-y-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Dirección</dt>
              <dd className="mt-2">Rúa Irmáns Noia Gil, 2, bajo<br/>36780 A Guarda, Pontevedra</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Teléfono</dt>
              <dd className="mt-2">+34 986 910 408</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</dt>
              <dd className="mt-2">judobaixominho@gmail.com</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Horario secretaría</dt>
              <dd className="mt-2">Lun – Vie · 17:00 – 21:00</dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-7">
          <div className="reveal reveal-delay-2 overflow-hidden rounded-3xl border border-border bg-background">
            <iframe
              title="Ubicación del CD Baixo Minho en Google Maps"
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
              Abrir en Google Maps
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

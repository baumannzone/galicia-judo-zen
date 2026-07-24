import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Club Deportivo Baixo Miño" },
      { name: "description", content: "Contacta con el Club Deportivo Baixo Miño en A Guarda. Teléfono, email, ubicación e información de atención." },
      { property: "og:title", content: "Contacto — Club Deportivo Baixo Miño" },
      { property: "og:description", content: "Dirección, teléfono y email del Club Deportivo Baixo Miño en A Guarda, Pontevedra." },
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
            Ponte en <br/>contacto.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">
            Envíanos un mensaje por email, llámanos o visítanos directamente. Estamos en el corazón de A Guarda.
          </p>

          <dl className="mt-12 space-y-8 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Dirección</dt>
              <dd className="mt-2 font-medium">Rúa Irmáns Noia Gil, 2, bajo<br/>36780 A Guarda, Pontevedra</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Teléfono</dt>
              <dd className="mt-2">
                <a href="tel:+34663374895" className="font-medium hover:text-primary transition-colors">
                  +34 663 374 895
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</dt>
              <dd className="mt-2">
                <a href="mailto:judobaixominho@gmail.com" className="font-medium hover:text-primary transition-colors">
                  judobaixominho@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Redes sociales</dt>
              <dd className="mt-2 space-y-1">
                <div>
                  <a href="https://www.instagram.com/cdbaixominho/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                    Instagram @cdbaixominho →
                  </a>
                </div>
                <div>
                  <a href="https://www.facebook.com/judobaixominho/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                    Facebook Judo Baixo Miño →
                  </a>
                </div>
              </dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-7">
          <div className="reveal reveal-delay-2 rounded-3xl border border-border bg-secondary/30 p-8 md:p-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight">Ubicación</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Estamos en A Guarda, a pocos minutos del centro. Junto al pabellón de A Sangriña, donde celebramos competiciones y eventos.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl">
              <iframe
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.2394723456456!2d-8.880344!3d42.006694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e0c0c0c0c0c0d%3A0x0!2sR%C3%BAa%20Irm%C3%A1ns%20Noia%20Gil%2C%202%2C%2036780%20A%20Guarda%2C%20Pontevedra!5e0!3m2!1ses!2ses!4v1234567890"
              />
            </div>

            <div className="mt-8 rounded-2xl bg-background p-6">
              <p className="font-display text-sm font-semibold tracking-tight mb-3">Información práctica</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">Aparcamiento:</strong> En la calle o cercano (consultar en teléfono).
                </li>
                <li>
                  <strong className="text-foreground">[PENDIENTE]:</strong> Horario de atención a confirmar.
                </li>
                <li>
                  <strong className="text-foreground">Clase de prueba:</strong> Disponible. Contacta para reservar.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

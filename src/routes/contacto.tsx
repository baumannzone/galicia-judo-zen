import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto e inscripción — Dojo Breogán" },
      { name: "description", content: "Solicita tu clase de prueba en el Dojo Breogán, A Coruña. Formulario de inscripción y datos de contacto." },
      { property: "og:title", content: "Contacto e inscripción — Dojo Breogán" },
      { property: "og:description", content: "Reserva tu clase de prueba gratuita." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [sent, setSent] = useState(false);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">Contacto</p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Ven a conocer <br/>el dojo.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">
            Escríbenos para reservar tu clase de prueba o pedir información. Te responderemos en menos de 24 horas.
          </p>

          <dl className="mt-12 space-y-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Dirección</dt>
              <dd className="mt-2">Rúa da Ponte, 14 · 15001 A Coruña, Galicia</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Teléfono</dt>
              <dd className="mt-2">+34 981 123 456</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</dt>
              <dd className="mt-2">hola@dojobreogan.gal</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Horario secretaría</dt>
              <dd className="mt-2">Lun – Vie · 17:00 – 21:00</dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-7">
          <div className="reveal reveal-delay-2 rounded-3xl border border-border bg-background p-8 md:p-10">
            {sent ? (
              <div className="fade-slow py-16 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary text-2xl">✓</div>
                <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight">¡Gracias!</h2>
                <p className="mt-3 text-sm text-muted-foreground">Hemos recibido tu solicitud. Te escribimos pronto.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-6"
              >
                <Field label="Nombre" name="name" required />
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Teléfono" name="phone" type="tel" />
                </div>
                <SelectField
                  label="Grupo de interés"
                  name="group"
                  options={["Infantil (4–7)", "Alevín (8–11)", "Juvenil (12–17)", "Adultos", "Competición"]}
                />
                <TextArea label="Mensaje" name="message" />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:bg-primary hover:shadow-soft sm:w-auto"
                >
                  Solicitar clase de prueba
                </button>
                <p className="text-xs text-muted-foreground">
                  Al enviar aceptas nuestra política de privacidad.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-foreground focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{label}</span>
      <select
        name={name}
        className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-foreground focus:ring-2 focus:ring-primary/20"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

function TextArea({ label, name }: { label: string; name: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{label}</span>
      <textarea
        name={name}
        rows={4}
        className="mt-2 block w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-foreground focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

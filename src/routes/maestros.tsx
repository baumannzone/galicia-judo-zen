import { createFileRoute } from "@tanstack/react-router";
import s1 from "@/assets/sensei-1.jpg";
import s2 from "@/assets/sensei-2.jpg";
import s3 from "@/assets/sensei-3.jpg";

export const Route = createFileRoute("/maestros")({
  head: () => ({
    meta: [
      { title: "Maestros — CD Baixo Minho" },
      { name: "description", content: "Conoce al equipo técnico del CD Baixo Minho: sensei con décadas de experiencia en judo tradicional y competición." },
      { property: "og:title", content: "Maestros — CD Baixo Minho" },
      { property: "og:description", content: "Nuestros sensei: técnica, experiencia y vocación docente." },
    ],
  }),
  component: Maestros,
});

const SENSEI = [
  {
    img: s1,
    name: "Mónica Pacheco",
    rank: "5º Dan · Presidenta y entrenadora",
    bio: [
      "Presidenta del Clube de Judo Baixo Minho",
      "Maestra entrenadora nacional de judo",
      "Coordinadora de programas federativos",
      "Directora deportiva de la Federación Galega de Judo",
    ],
  },
  {
    img: s2,
    name: "Aiko Tanaka",
    rank: "5º Dan · Judo femenino y competición",
    bio: [
      "Excampeona nacional",
      "Especialista en newaza y preparación para competición autonómica",
    ],
  },
  {
    img: s3,
    name: "Diego Castromil",
    rank: "3º Dan · Judo infantil",
    bio: [
      "Educador y monitor titulado",
      "Dirige los grupos de iniciación con una metodología lúdica y progresiva",
    ],
  },
];

function Maestros() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">Equipo técnico</p>
        <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          Los que guían el camino.
        </h1>
        <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">
          Un equipo con décadas de tatami a sus espaldas. Cada sensei aporta una mirada única sobre el judo, unida por un mismo principio: la enseñanza como servicio.
        </p>
      </div>

      <div className="mt-20 grid gap-14 md:grid-cols-3 md:gap-10">
        {SENSEI.map((p, i) => (
          <article
            key={p.name}
            className="reveal group"
            style={{ animationDelay: `${0.15 + i * 0.1}s` }}
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-secondary">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={800}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-6">
              <h2 className="font-display text-2xl font-semibold tracking-tight">{p.name}</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">{p.rank}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground">
                {p.bio.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-24 border-t border-border pt-12">
        <blockquote className="mx-auto max-w-3xl text-center font-display text-2xl leading-snug tracking-tight sm:text-3xl">
          “El judo es el camino más eficaz para emplear la energía física y mental.”
          <footer className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">— Jigoro Kano</footer>
        </blockquote>
      </div>
    </section>
  );
}

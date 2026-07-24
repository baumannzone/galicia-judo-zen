import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Resultados y Noticias — Club Deportivo Baixo Miño" },
      { name: "description", content: "Resultados de competiciones, noticias del club y logros de nuestros deportistas. Mantente actualizado del Club Deportivo Baixo Miño." },
      { property: "og:title", content: "Resultados y Noticias — Club Deportivo Baixo Miño" },
      { property: "og:description", content: "Últimas noticias, resultados y logros de nuestros judokas." },
    ],
  }),
  component: Noticias,
});

const NOTICIAS = [
  {
    id: "temporada-2025-26",
    title: "Brillante temporada 2025/26",
    category: "Temporada",
    date: "Junio 2026",
    excerpt: "Cierre de una temporada excepcional con logros a nivel autonómico, nacional e internacional. Crecimiento en licencias, participantes de competición y desarrollo de nuevos talentos.",
    content: "La temporada 2025/26 ha sido un punto de inflexión para el Club Deportivo Baixo Miño. Con más de 160 licencias deportivas activas y 20+ participantes en competiciones nacionales, hemos consolidado nuestra posición como referencia en judo de base gallego.",
  },
  {
    id: "campeonato-gallego-2026",
    title: "Campeonato Gallego Infantil 2026",
    category: "Competición",
    date: "Abril 2026",
    excerpt: "Nuestros deportistas brillan en el Campeonato Gallego de Judo. Medallas de oro, plata y bronce, y clasificación de varios judokas para el Campeonato de España.",
    content: "En el Campeonato Gallego Infantil y Cadete de 2026, nuestro club obtuvo: 3 medallas de oro (Ainhoa Paz, Carlota Crespo, Antía Januario), 1 plata (Melisa Simón) y 4 bronces. 5 judokas clasificados para el Campeonato de España.",
  },
  {
    id: "antia-januario-bronze",
    title: "Antía Januario: Bronce Nacional",
    category: "Logros",
    date: "Junio 2026",
    excerpt: "Antía Januario consigue medalla de bronce en el Campeonato Nacional de Judo y es seleccionada para la European Cup Cadete.",
    content: "Antía Januario ha alcanzado un hito importante en su carrera: medalla de bronce en el Campeonato Nacional Cadete. Además, ha sido convocada para representar a Galicia en la European Cup Cadete de Faro, Portugal, demostrando su nivel de competencia internacional.",
  },
  {
    id: "supercopa-españa",
    title: "Participación en Supercopa de España",
    category: "Competición",
    date: "Mayo 2026",
    excerpt: "Nuestros judokas compiten en la Supercopa de España Cadete y Junior en Extremadura. Xavi Lomba alcanza cuartos de final tras dos victorias consecutivas.",
    content: "En la Supercopa de España Cadete de Extremadura, participaron Antía Januario, Xavi Lomba, Carlota Crespo y otros judokas de Baixo Miño. Xavi Lomba llegó a cuartos de final tras ganar sus primeros encuentros. También participaron en la categoría Junior con buenas actuaciones.",
  },
  {
    id: "european-cup-faro",
    title: "European Cup Cadete de Faro",
    category: "Internacional",
    date: "Abril 2026",
    excerpt: "Carlota Crespo y Antía Januario representan a Baixo Miño en la European Cup Cadete en Faro, Portugal. Experiencia internacional de nuestros judokas.",
    content: "Nuestras judokas participaron en la European Cup Cadete de Faro, Portugal, una competición de nivel europeo. Esta oportunidad ha permitido que el club tenga presencia confirmada en competiciones internacionales de élite.",
  },
  {
    id: "iii-torneo-santa-trega",
    title: "III Torneo Internacional Santa Trega 2026",
    category: "Eventos",
    date: "Mayo 2026",
    excerpt: "Más de 500 judokas participan en el III Torneo Internacional de Judo Infantil Santa Trega. Celebrado en el Pabellón A Sangriña de A Guarda.",
    content: "El III Torneo Internacional Santa Trega de 2026 reunió a más de 500 judokas de Galicia, Portugal e Italia. Este evento consolidó a Baixo Miño como referencia en la organización de competiciones de judo infantil de ámbito internacional, con participación de 10+ clubes portugueses y delegaciones de Italia.",
  },
];

const CATEGORIES = ["Todos", "Judo", "Competición", "Campus", "Actividades", "Eventos", "Familias", "Logros"];

function Noticias() {
  const [selectedCategory, setSelectedCategory] = React.useState("Todos");

  const filtered = selectedCategory === "Todos"
    ? NOTICIAS
    : NOTICIAS.filter(n => n.category === selectedCategory);

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">Noticias</p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Resultados y noticias.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">
            Mantente actualizado de los logros, competiciones y actividades del Club Deportivo Baixo Miño. Historias de superación, amistad y deporte.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-foreground text-background"
                  : "border border-border bg-background hover:border-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <div className="space-y-8">
          {filtered.map((noticia, i) => (
            <article
              key={noticia.id}
              className="reveal border-b border-border pb-12 last:border-0"
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-[0.15em] text-primary font-medium">
                      {noticia.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{noticia.date}</span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">
                    {noticia.title}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {noticia.excerpt}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed hidden md:block">
                    {noticia.content}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No hay noticias en esta categoría.</p>
          </div>
        )}
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Redes sociales</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Síguenos para las últimas noticias.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              En Instagram y Facebook compartimos actualizaciones diarias, resultados en directo y momentos especiales del club.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/cdbaixominho/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary hover:shadow-soft"
              >
                Instagram @cdbaixominho
              </a>
              <a
                href="https://www.facebook.com/judobaixominho/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-all"
              >
                Facebook Judo Baixo Miño
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { articles, articleLoaders } from "virtual:articles";
import { formatArticleDate } from "@/lib/articles";
import { canonicalUrl } from "@/lib/site";

const components = Object.fromEntries(
  Object.entries(articleLoaders).map(([slug, load]) => [slug, lazy(load)]),
);

export const Route = createFileRoute("/noticias/$slug")({
  loader: async ({ params }) => {
    const article = articles.find((item) => item.slug === params.slug);
    if (!article) throw notFound();
    await articleLoaders[article.slug]();
    return article;
  },
  head: ({ loaderData: article }) => {
    if (!article) return {};
    const title = `${article.title} — Club Deportivo Baixo Miño`;
    const image = canonicalUrl(article.cover?.src ?? "/og-baixo-mino-v2.png");
    return {
      meta: [
        { title },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: image },
        { property: "og:image:alt", content: article.cover?.alt ?? article.title },
        { property: "og:image:width", content: undefined },
        { property: "og:image:height", content: undefined },
        { property: "og:image:type", content: undefined },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: article.excerpt },
        { name: "twitter:image", content: image },
        { name: "twitter:image:alt", content: article.cover?.alt ?? article.title },
        ...(article.draft ? [{ name: "robots", content: "noindex, nofollow" }] : []),
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData();
  const Content = components[article.slug];
  const published = articles.filter((item) => !item.draft);
  const currentIndex = published.findIndex((item) => item.slug === article.slug);
  const previous = currentIndex > 0 ? published[currentIndex - 1] : undefined;
  const next = currentIndex >= 0 ? published[currentIndex + 1] : undefined;
  const related = articles
    .filter(
      (item) => !item.draft && item.slug !== article.slug && item.category === article.category,
    )
    .slice(0, 3);
  return (
    <article className="mx-auto max-w-3xl px-6 py-10 md:py-14">
      <Link to="/noticias" className="text-sm text-primary underline underline-offset-4">
        ← Todas las noticias
      </Link>
      <header className="mt-6">
        {article.draft && (
          <p className="mb-4 rounded-lg bg-secondary p-3 text-sm font-medium">
            Borrador · Vista previa local
          </p>
        )}
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <span className="font-medium text-primary">{article.category}</span>
          <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
        </div>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{article.excerpt}</p>
        {article.author && (
          <p className="mt-4 text-sm text-muted-foreground">Por {article.author}</p>
        )}
        {article.updated && (
          <p className="mt-2 text-sm text-muted-foreground">
            Actualizado:{" "}
            <time dateTime={article.updated}>{formatArticleDate(article.updated)}</time>
          </p>
        )}
        {article.cover && (
          <img
            src={article.cover.src}
            alt={article.cover.alt}
            width={article.cover.width}
            height={article.cover.height}
            decoding="async"
            className="mx-auto mt-6 block h-auto max-h-[35rem] w-auto max-w-full rounded-2xl"
          />
        )}
      </header>
      <div className="article-prose prose prose-lg mt-10 max-w-none">
        <Suspense fallback={<p>Cargando artículo…</p>}>
          <Content />
        </Suspense>
      </div>
      {(previous || next) && (
        <nav
          aria-label="Navegación entre publicaciones"
          className="mt-12 grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
        >
          {previous && (
            <Link
              to="/noticias/$slug"
              params={{ slug: previous.slug }}
              rel="prev"
              className="min-w-0 rounded-xl border border-border p-5 transition-colors hover:border-primary hover:bg-secondary/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span className="block text-sm text-muted-foreground">← Artículo anterior</span>
              <span className="mt-2 block break-words font-display text-lg font-semibold text-primary">
                {previous.title}
              </span>
            </Link>
          )}
          {next && (
            <Link
              to="/noticias/$slug"
              params={{ slug: next.slug }}
              rel="next"
              className="min-w-0 rounded-xl border border-border p-5 text-right transition-colors hover:border-primary hover:bg-secondary/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:col-start-2"
            >
              <span className="block text-sm text-muted-foreground">Artículo siguiente →</span>
              <span className="mt-2 block break-words font-display text-lg font-semibold text-primary">
                {next.title}
              </span>
            </Link>
          )}
        </nav>
      )}
      {related.length > 0 && (
        <aside className="mt-16 border-t border-border pt-8" aria-label="Noticias relacionadas">
          <h2 className="font-display text-2xl font-semibold">También te puede interesar</h2>
          <ul className="mt-5 space-y-4">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/noticias/$slug"
                  params={{ slug: item.slug }}
                  className="text-primary underline underline-offset-4"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </article>
  );
}

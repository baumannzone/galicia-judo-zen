import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { LOCALES, type LocaleSuffix } from "@/i18n";

const BASE_URL = "";

interface SitemapEntry {
  suffix: LocaleSuffix;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { suffix: "", changefreq: "weekly", priority: "1.0" },
          { suffix: "/horarios", changefreq: "monthly", priority: "0.8" },
          { suffix: "/maestros", changefreq: "monthly", priority: "0.7" },
          { suffix: "/contacto", changefreq: "monthly", priority: "0.7" },
        ];

        const urls = entries.flatMap((e) =>
          LOCALES.map((locale) => {
            const path = `/${locale}${e.suffix}`;
            return [
              `  <url>`,
              `    <loc>${BASE_URL}${path}</loc>`,
              e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
              e.priority ? `    <priority>${e.priority}</priority>` : null,
              `  </url>`,
            ]
              .filter(Boolean)
              .join("\n");
          }),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import type { Plugin } from "vite";

const date = z
  .string()
  .regex(/^\d{4}-\d{2}(-\d{2})?$/)
  .refine((value) => {
    const full = value.length === 7 ? `${value}-01` : value;
    const parsed = new Date(`${full}T12:00:00Z`);
    return !Number.isNaN(parsed.getTime()) && parsed.toISOString().startsWith(full);
  }, "Fecha inválida: usa YYYY-MM o YYYY-MM-DD");
const schema = z
  .object({
    title: z.string().trim().min(1),
    excerpt: z.string().trim().min(1),
    date,
    category: z.enum(["Club", "Competiciones", "Eventos", "Guías"]),
    draft: z.boolean(),
    author: z.string().trim().min(1).optional(),
    updated: date.optional(),
    cover: z
      .object({
        src: z.string().regex(/^\/(?!\/)/),
        alt: z.string().trim().min(1),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
      })
      .optional(),
  })
  .strict();

export function articlesPlugin(): Plugin {
  const directory = path.resolve("src/content/es/publicaciones");
  const virtualId = "virtual:articles";
  let development = false;
  return {
    name: "club-articles",
    enforce: "pre",
    configResolved(config) {
      development = config.command === "serve";
    },
    resolveId(id) {
      if (id === virtualId) return `\0${virtualId}`;
    },
    load(id) {
      if (id !== `\0${virtualId}`) return;
      const articles = fs
        .readdirSync(directory)
        .filter((name) => name.endsWith(".mdx"))
        .map((name) => {
          const slug = name.slice(0, -4);
          if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`Slug inválido: ${name}`);
          const file = path.join(directory, name);
          this.addWatchFile(file);
          const { data, content } = matter(fs.readFileSync(file, "utf8"));
          const parsed = schema.safeParse(data);
          if (!parsed.success) throw new Error(`${name}: ${parsed.error.message}`);
          if (!content.trim()) throw new Error(`${name}: contenido vacío`);
          if (
            parsed.data.cover &&
            !fs.existsSync(path.resolve("public", parsed.data.cover.src.slice(1)))
          ) {
            throw new Error(`${name}: portada inexistente`);
          }
          return { slug, ...parsed.data };
        })
        .filter((article) => development || !article.draft)
        .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
      return `export const articles = ${JSON.stringify(articles)};\nexport const articleLoaders = {${articles.map((a) => `${JSON.stringify(a.slug)}: () => import(${JSON.stringify(path.join(directory, `${a.slug}.mdx`))})`).join(",")}};`;
    },
    transform(code, id) {
      if (id.endsWith(".mdx") && id.startsWith(directory))
        return { code: matter(code).content, map: null };
    },
    configureServer(server) {
      server.watcher.add(directory);
      server.watcher.on("all", (_event, file) => {
        if (!file.startsWith(directory)) return;
        const module = server.moduleGraph.getModuleById(`\0${virtualId}`);
        if (module) server.moduleGraph.invalidateModule(module);
        server.ws.send({ type: "full-reload" });
      });
    },
  };
}

declare module "virtual:articles" {
  import type { ComponentType } from "react";
  export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    draft: boolean;
    author?: string;
    updated?: string;
    cover?: { src: string; alt: string; width: number; height: number };
    /** Portada 1200x630 en JPEG para Open Graph, si se ha generado. */
    og?: string;
  }
  export const articles: Article[];
  export const articleLoaders: Record<string, () => Promise<{ default: ComponentType }>>;
}

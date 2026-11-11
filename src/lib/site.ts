export const SITE_ORIGIN = "https://judobaixominho.com";

export function canonicalUrl(pathname: string) {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(path, SITE_ORIGIN).href;
}

/**
 * Lienzo de las imágenes para compartir: las redes recortan a 1.91:1 y algunos
 * scrapers (WhatsApp entre ellos) no leen WebP ni AVIF, así que son JPEG de
 * 1200x630. Las portadas de las publicaciones las genera scripts/generate-og.sh.
 */
export const OG_IMAGE = { width: 1200, height: 630, type: "image/jpeg" } as const;

/** Imagen social genérica del club, para las páginas que no aportan la suya. */
export const SOCIAL_IMAGE = {
  ...OG_IMAGE,
  src: "/og-baixo-mino.jpg",
  alt: "Club Deportivo Baixo Miño: deporte, valores y familia. Nuestro tatami en A Guarda.",
} as const;

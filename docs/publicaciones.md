# Publicar noticias y artículos

Cada archivo `.mdx` de `src/content/es/publicaciones` genera `/noticias/nombre-del-archivo`.
Usa nombres en minúsculas, sin tildes, separados por guiones. Mantén estable el nombre después de publicar. Esta migración cambia las direcciones sin añadir redirecciones.

## Nombres y años

- Competiciones y eventos: `2026-supercopa-junior-ourense.mdx`. Incluye también el año o la edición en el título.
- Si hay varias citas equivalentes en el mismo año: `2026-11-07-nombre-del-evento.mdx`, solo cuando la fecha exacta esté confirmada. También puedes distinguir previa y crónica en el nombre.
- Temporadas: `temporada-2025-2026.mdx`.
- Guías atemporales: `como-preparar-tu-primera-clase-de-judo.mdx`.

Usa el año del evento, que puede ser distinto del año de publicación. Cada nueva edición se escribe en un archivo nuevo: nunca sobrescribas el artículo del año anterior. Las carpetas de fotos también deben distinguir el año para no reemplazar imágenes de ediciones anteriores.

## Plantilla

```mdx
---
title: "Título del artículo"
excerpt: "Resumen breve para el listado y los enlaces compartidos."
date: "2026-11-07"
category: "Club"
draft: true
---

Primer párrafo.

## Un apartado

Texto con **negrita**, listas y [enlaces](/contacto).
```

Categorías: Club, Competiciones, Eventos y Guías. Las fechas deben ir entre comillas: `YYYY-MM-DD`; se admite `YYYY-MM` para contenido histórico sin día conocido. No inventes fechas ni resultados. El listado se ordena por fecha descendente y, a igualdad, por nombre del archivo.

Campos opcionales: `author`, `updated` (mismo formato de fecha) y `cover`:

```yaml
cover:
  src: "/noticias/mi-articulo/01.webp"
  alt: "Descripción de la fotografía"
  width: 1080
  height: 1350
```

Guarda esa imagen en `public/noticias/mi-articulo/01.webp`. Optimiza las imágenes a WebP antes de publicarlas. La portada debe existir y tener texto alternativo y sus dimensiones reales en píxeles (`width` y `height`); la compilación exige estos campos para reservar espacio durante la carga.

### Imagen para compartir (Open Graph)

Tras añadir o cambiar una portada, genera su versión para redes:

```bash
./scripts/generate-og.sh
```

El script escribe `public/noticias/mi-articulo/og.jpg` (1200x630, JPEG, por debajo de 300 KB) y es lo que se publica en `og:image` y `twitter:image`. Son JPEG a propósito: WhatsApp y algunos scrapers no leen WebP ni AVIF. Como las redes recortan a 1.91:1 y nuestras portadas suelen ser verticales, la foto se encaja entera sobre un fondo difuminado de ella misma en lugar de recortarla.

Necesita ImageMagick 7 (`brew install imagemagick`) y hay que commitear el `og.jpg` resultante. Si falta, el artículo cae en la imagen social genérica del club (`public/og-baixo-mino.jpg`) en vez de romper la compilación.

En el cuerpo usa una imagen MDX con sus dimensiones reales y carga diferida:

```mdx
<img
  src="/noticias/mi-articulo/02.webp"
  alt="Descripción de la fotografía"
  width={1080}
  height={1350}
  loading="lazy"
  decoding="async"
/>
```

## Revisión y publicación

1. Ejecuta `pnpm dev` y abre la dirección del artículo. Los borradores llevan una etiqueta y `noindex`.
2. Revisa texto, imágenes, enlaces y aspecto móvil.
3. Cambia `draft` a `false` cuando esté listo.
4. Ejecuta `pnpm build` y `pnpm exec tsc --noEmit`.
5. Publica mediante el flujo habitual del repositorio y despliegue. Guardar el archivo no actualiza por sí solo la web pública.

Los borradores quedan fuera del listado, las rutas, los módulos MDX y el sitemap de producción. `build:dev` también excluye borradores; la vista previa de borradores solo existe con el servidor de desarrollo. No hay publicación programada: la fecha es editorial, `draft` controla la publicación.

El cuerpo usa Tailwind Typography (`prose`) con las fuentes y colores del club. MDX permite importar componentes React; usa un contenedor `className="not-prose"` cuando un bloque deba tener estilos independientes. Solo incorpora MDX de autores de confianza, porque puede ejecutar código. Para tablas Markdown se necesitaría añadir soporte GFM; actualmente puedes usar una tabla JSX.

Las seis noticias iniciales se migraron sin cambiar sus afirmaciones ni completar sus fechas. Sus contenidos siguen necesitando la misma revisión editorial que antes.

#!/usr/bin/env bash
# Genera las portadas Open Graph de las publicaciones: public/noticias/<slug>/og.jpg
#
# Las redes recortan la previsualización a 1.91:1 y buena parte de nuestras
# portadas son verticales, así que la foto se encaja entera sobre un fondo
# difuminado de ella misma en lugar de recortarla (si no, corta cabezas).
# Siempre JPEG: WhatsApp y algunos scrapers no leen WebP ni AVIF.
#
# Requiere ImageMagick 7. Ejecutar desde la raíz del repositorio tras añadir
# o cambiar la portada de un artículo:
#
#   ./scripts/generate-og.sh
set -euo pipefail

readonly WIDTH=1200
readonly HEIGHT=630
readonly MAX_BYTES=$((300 * 1024))
readonly MIN_QUALITY=60

command -v magick >/dev/null 2>&1 || {
  echo "Falta ImageMagick 7 (brew install imagemagick)" >&2
  exit 1
}

cd "$(dirname "$0")/.."

for file in src/content/es/publicaciones/*.mdx; do
  [ -e "$file" ] || continue
  src=$(sed -n '/^cover:/,/^[^ ]/ s/^  src: *"\(.*\)"/\1/p' "$file")
  [ -n "$src" ] || continue

  cover="public${src}"
  # Preferimos el JPEG original al WebP: menos pérdida acumulada al recomprimir.
  source="${cover%.*}.jpg"
  [ -f "$source" ] || source="$cover"
  [ -f "$source" ] || { echo "Sin portada: $file" >&2; exit 1; }

  out="$(dirname "$cover")/og.jpg"
  quality=82
  while :; do
    magick "$source" \
      \( -clone 0 -resize "${WIDTH}x${HEIGHT}^" -gravity center -extent "${WIDTH}x${HEIGHT}" \
         -blur 0x24 -brightness-contrast -25x-10 \) \
      \( -clone 0 -resize "${WIDTH}x${HEIGHT}" \) \
      -delete 0 -gravity center -composite \
      -strip -colorspace sRGB -interlace Plane -sampling-factor 4:2:0 -quality "$quality" \
      "$out"
    bytes=$(wc -c < "$out")
    { [ "$bytes" -le "$MAX_BYTES" ] || [ "$quality" -le "$MIN_QUALITY" ]; } && break
    quality=$((quality - 6))
  done

  if [ "$bytes" -gt "$MAX_BYTES" ]; then
    echo "Demasiado pesada ($((bytes / 1024)) KB): $out" >&2
    exit 1
  fi
  printf '%-58s %4s KB  q%d\n' "$out" "$((bytes / 1024))" "$quality"
done

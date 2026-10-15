export const SITE_ORIGIN = "https://judobaixominho.com";

export function canonicalUrl(pathname: string) {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(path, SITE_ORIGIN).href;
}

import { LOCALES, isLocale, type Locale, DEFAULT_LOCALE } from "./locales";
import { messagesByLocale } from "./messages";
import type { Messages } from "./messages/es";

export type { Locale, Messages };
export { LOCALES, DEFAULT_LOCALE, isLocale };

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale];
}

export function parseLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

/** Path suffix after `/$locale` (empty string = home). */
export type LocaleSuffix = "" | "/horarios" | "/maestros" | "/contacto";

export function localeHref(locale: Locale, suffix: LocaleSuffix = ""): string {
  return `/${locale}${suffix}`;
}

export function swapLocaleInPath(pathname: string, next: Locale): string {
  const parts = pathname.split("/");
  if (parts.length >= 2 && isLocale(parts[1])) {
    parts[1] = next;
    return parts.join("/") || `/${next}`;
  }
  return `/${next}`;
}

export function pageMeta(
  locale: Locale,
  meta: { title: string; description: string; ogDescription?: string },
  suffix: LocaleSuffix,
) {
  return {
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.ogDescription ?? meta.description },
      { property: "og:locale", content: locale === "gl" ? "gl_ES" : "es_ES" },
    ],
    links: [
      { rel: "alternate", hrefLang: "es", href: localeHref("es", suffix) },
      { rel: "alternate", hrefLang: "gl", href: localeHref("gl", suffix) },
      { rel: "alternate", hrefLang: "x-default", href: localeHref(DEFAULT_LOCALE, suffix) },
      { rel: "canonical", href: localeHref(locale, suffix) },
    ],
  };
}

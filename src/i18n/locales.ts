export const LOCALES = ["es", "gl"] as const;

export type Locale = (typeof LOCALES)[number];

/** Default language for `/` redirect and x-default hreflang. */
export const DEFAULT_LOCALE: Locale = "es";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

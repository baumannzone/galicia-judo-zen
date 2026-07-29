import { es, type Messages } from "./es";
import { gl } from "./gl";
import type { Locale } from "../locales";

export const messagesByLocale: Record<Locale, Messages> = {
  es,
  gl,
};

export function formatArticleDate(value: string) {
  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    ...(value.length === 10 ? { day: "numeric" as const } : {}),
    timeZone: "UTC",
  }).format(new Date(`${value.length === 7 ? `${value}-01` : value}T12:00:00Z`));
}

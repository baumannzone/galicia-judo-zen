import {
  Outlet,
  Link,
  createFileRoute,
  notFound,
  useRouterState,
} from "@tanstack/react-router";
import { useState } from "react";
import {
  getMessages,
  isLocale,
  LOCALES,
  swapLocaleInPath,
  type Locale,
} from "@/i18n";

export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale)) {
      throw notFound();
    }
    const locale = params.locale as Locale;
    return {
      locale,
      messages: getMessages(locale),
    };
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

function useLocaleMessages() {
  const { locale, messages } = Route.useRouteContext();
  return { locale, m: messages };
}

function LanguageSwitcher() {
  const { locale, m } = useLocaleMessages();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div
      role="group"
      aria-label={m.nav.langSwitch}
      className="flex items-center rounded-full border border-border p-0.5"
    >
      {LOCALES.map((code) => (
        <a
          key={code}
          href={swapLocaleInPath(pathname, code)}
          aria-current={locale === code ? "page" : undefined}
          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
            locale === code
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {code === "es" ? m.nav.langEs : m.nav.langGl}
        </a>
      ))}
    </div>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { locale, m } = useLocaleMessages();
  const nav = [
    { to: "/$locale" as const, label: m.nav.home, exact: true },
    { to: "/$locale/horarios" as const, label: m.nav.horarios, exact: false },
    { to: "/$locale/maestros" as const, label: m.nav.maestros, exact: false },
    { to: "/$locale/contacto" as const, label: m.nav.contacto, exact: false },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/$locale"
          params={{ locale }}
          className="flex items-center gap-2 font-display text-base font-semibold tracking-tight"
        >
          <img src="/logo.png" alt="" className="h-8 w-8 rounded-full object-cover" width={32} height={32} />
          <span>CD Baixo Minho</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              params={{ locale }}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
              activeProps={{ className: "active" }}
              activeOptions={{ exact: n.exact }}
            >
              {n.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            to="/$locale/contacto"
            params={{ locale }}
            className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-all hover:bg-primary hover:shadow-soft"
          >
            {m.nav.enroll}
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={m.nav.menu}
            className="grid h-9 w-9 place-items-center rounded-full border border-border"
          >
            <span className="relative block h-2.5 w-4">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-foreground transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-foreground transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                params={{ locale }}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-foreground"
                activeProps={{ className: "active" }}
                activeOptions={{ exact: n.exact }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/$locale/contacto"
              params={{ locale }}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-foreground px-3 py-2 text-center text-sm font-medium text-background"
            >
              {m.nav.enroll}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  const { m } = useLocaleMessages();
  const addressLines = m.footer.address.split("\n");

  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-base font-semibold">
            <img src="/logo.png" alt="" className="h-8 w-8 rounded-full object-cover" width={32} height={32} />
            <span>CD Baixo Minho</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{m.footer.tagline}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{m.footer.academy}</p>
          <p className="mt-3 text-sm">
            {addressLines[0]}
            <br />
            {addressLines[1]}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{m.footer.contact}</p>
          <p className="mt-3 text-sm">
            judobaixominho@gmail.com
            <br />
            +34 986 910 408
          </p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <span>
            © {new Date().getFullYear()} {m.footer.copyright}
          </span>
          <span>
            {m.footer.madeIn}{" "}
            <a href="https://instagram.com/baumannzone" target="_blank" rel="noopener noreferrer">
              @baumannzone
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logoMark from "../assets/logo-mark.png";
import { reportLovableError } from "../lib/lovable-error-reporting";
import COPY from "@/content/es/common.json";
import CONTACT from "@/content/es/contacto.json";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {COPY.errors.notFoundLabel}
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight">
          {COPY.errors.notFoundTitle}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">{COPY.errors.notFoundDescription}</p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-primary"
          >
            {COPY.errors.home}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold tracking-tight">
          {COPY.errors.errorTitle}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{COPY.errors.errorDescription}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary"
          >
            {COPY.errors.retry}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {COPY.errors.goHome}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: COPY.site.title },
      {
        name: "description",
        content: COPY.site.description,
      },
      { name: "author", content: "Club Deportivo Baixo Miño" },
      {
        name: "keywords",
        content: COPY.site.keywords,
      },
      {
        property: "og:title",
        content: COPY.site.title,
      },
      {
        property: "og:description",
        content: COPY.site.socialDescription,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: COPY.site.title,
      },
      {
        name: "twitter:description",
        content:
          "Judo, pilates, zumba, entrenamiento infantil, masajes, presoterapia y campus en A Guarda.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/11d686cf-84c9-4850-a7ff-b78241215cd4/id-preview-b92fa60a--07910a82-7b24-43fd-9817-00904d83ad6a.lovable.app-1784758799298.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/11d686cf-84c9-4850-a7ff-b78241215cd4/id-preview-b92fa60a--07910a82-7b24-43fd-9817-00904d83ad6a.lovable.app-1784758799298.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&family=Epilogue:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

// The club mark, tinted with the foreground token via a mask so it follows the theme.
const maskStyle = {
  maskImage: `url(${logoMark})`,
  WebkitMaskImage: `url(${logoMark})`,
  maskSize: "contain",
  WebkitMaskSize: "contain",
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
  maskPosition: "center",
  WebkitMaskPosition: "center",
} as const;

function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`${className} shrink-0 bg-foreground`} style={maskStyle} />
  );
}

const NAV = [
  { to: "/", label: COPY.nav.home },
  { to: "/judo", label: COPY.nav.judo },
  { to: "/actividades", label: COPY.nav.activities },
  { to: "/noticias", label: COPY.nav.news },
  { to: "/contacto", label: COPY.nav.contact },
] as const;

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-base font-semibold tracking-tight"
        >
          <BrandMark />
          <span>{COPY.site.brand}</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
              activeProps={{ className: "active" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={COPY.nav.menu}
          className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
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
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-foreground"
                activeProps={{ className: "active" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  const linkClass = "text-sm text-muted-foreground transition-colors hover:text-foreground";

  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 font-display text-base font-semibold">
            <BrandMark />
            <span>{COPY.site.organization}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {COPY.site.footerDescription}
          </p>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {COPY.footer.explore}
          </h2>
          <nav aria-label={COPY.footer.explore} className="mt-4 flex flex-col items-start gap-3">
            <Link to="/" className={linkClass}>
              {COPY.nav.home}
            </Link>
            <Link to="/judo" className={linkClass}>
              {COPY.nav.judo}
            </Link>
            <Link to="/actividades" className={linkClass}>
              {COPY.nav.activities}
            </Link>
            <Link to="/noticias" className={linkClass}>
              {COPY.nav.news}
            </Link>
            <Link to="/temporadas" className={linkClass}>
              {COPY.footer.seasons}
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {COPY.footer.club}
          </h2>
          <nav aria-label={COPY.footer.club} className="mt-4 flex flex-col items-start gap-3">
            <Link to="/actividades#horarios" className={linkClass}>
              {COPY.footer.schedule}
            </Link>
            <Link to="/contacto" className={linkClass}>
              {COPY.nav.contact}
            </Link>
            <Link to="/legal" className={linkClass}>
              {COPY.footer.legal}
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {COPY.footer.contact}
          </h2>
          <div className="mt-4 flex flex-col items-start gap-3">
            {CONTACT.phones.map((phone) => (
              <a key={phone.href} href={phone.href} className={linkClass}>
                {phone.display}
              </a>
            ))}
            <a href={`mailto:${CONTACT.emailAddress}`} className={`${linkClass} break-all`}>
              {CONTACT.emailAddress}
            </a>
            <Link to="/contacto" className={`${linkClass} leading-relaxed`}>
              {COPY.footer.address}
              <br />
              {COPY.footer.city}
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {COPY.footer.followUs}
          </h2>
          <nav aria-label={COPY.footer.followUs} className="mt-4 flex flex-col items-start gap-3">
            {CONTACT.socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {social.label.replace(" →", "")}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <span>
            © {new Date().getFullYear()} {COPY.site.organization}
          </span>
          <span>
            {COPY.footer.madeIn}{" "}
            <a
              href="https://instagram.com/baumannzone"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              @baumannzone
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}

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

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Error 404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight">Página no encontrada</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          La página que buscas no existe o ha sido movida.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-primary"
          >
            Volver al inicio
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
        <h1 className="font-display text-2xl font-semibold tracking-tight">Algo salió mal</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          No pudimos cargar esta página. Prueba de nuevo o vuelve al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Ir al inicio
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
      { title: "Club Deportivo Baixo Miño | Judo y actividades en A Guarda" },
      { name: "description", content: "Judo, pilates, zumba, entrenamiento infantil, fisioterapia y campus en A Guarda. Deporte, valores y comunidad para niños, jóvenes y adultos." },
      { name: "author", content: "Club Deportivo Baixo Miño" },
      { name: "keywords", content: "judo A Guarda, club deportivo, pilates, zumba, campus verano, torneo santa trega, A Guarda Pontevedra" },
      { property: "og:title", content: "Club Deportivo Baixo Miño | Judo y actividades en A Guarda" },
      { property: "og:description", content: "Centro deportivo con judo, pilates, zumba, entrenamiento infantil, fisioterapia, campus y torneo internacional en A Guarda." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Club Deportivo Baixo Miño | Judo y actividades en A Guarda" },
      { name: "twitter:description", content: "Judo, pilates, zumba, entrenamiento infantil, fisioterapia y campus en A Guarda." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/11d686cf-84c9-4850-a7ff-b78241215cd4/id-preview-b92fa60a--07910a82-7b24-43fd-9817-00904d83ad6a.lovable.app-1784758799298.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/11d686cf-84c9-4850-a7ff-b78241215cd4/id-preview-b92fa60a--07910a82-7b24-43fd-9817-00904d83ad6a.lovable.app-1784758799298.png" },
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
  { to: "/", label: "Inicio" },
  { to: "/judo", label: "Judo" },
  { to: "/actividades", label: "Actividades" },
  { to: "/noticias", label: "Noticias" },
  { to: "/contacto", label: "Contacto" },
] as const;

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-base font-semibold tracking-tight">
          <BrandMark />
          <span>Baixo Miño</span>
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
          aria-label="Menú"
          className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
        >
          <span className="relative block h-2.5 w-4">
            <span className={`absolute inset-x-0 top-0 h-px bg-foreground transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`absolute inset-x-0 bottom-0 h-px bg-foreground transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
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
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-base font-semibold">
            <BrandMark />
            <span>Club Deportivo Baixo Miño</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Deporte, valores y familia en A Guarda. Judo, pilates, zumba y más.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Ubicación</p>
          <p className="mt-3 text-sm">Rúa Irmáns Noia Xil, 2<br/>36780 A Guarda, Pontevedra</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contacto</p>
          <p className="mt-3 text-sm">
            <a href="tel:+34663374895" className="hover:text-primary transition-colors">+34 663 37 48 95</a>
            <br />
            <a href="mailto:judobaixominho@gmail.com" className="hover:text-primary transition-colors">judobaixominho@gmail.com</a>
            <br />
            <a href="https://www.instagram.com/cdbaixominho/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram @cdbaixominho</a>
          </p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Club Deportivo Baixo Miño</span>
          <div className="flex items-center gap-4">
            <Link to="/legal" className="hover:text-foreground transition-colors">Aviso Legal</Link>
            <span>Feito en Galicia por <a href="https://instagram.com/baumannzone" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">@baumannzone</a></span>
          </div>
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

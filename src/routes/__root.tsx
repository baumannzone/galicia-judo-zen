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
      { title: "Club Baixo Minho — Club de Judo en Galicia" },
      { name: "description", content: "Club de Judo en A Guarda. Formación integral en técnica, disciplina y respeto para niños, jóvenes y adultos." },
      { name: "author", content: "Dojo Breogán" },
      { property: "og:title", content: "Club Baixo Minho — Club de Judo en Galicia" },
      { property: "og:description", content: "Club de Judo en A Guarda. Formación integral en técnica, disciplina y respeto para niños, jóvenes y adultos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Club Baixo Minho — Club de Judo en Galicia" },
      { name: "twitter:description", content: "Club de Judo en A Guarda. Formación integral en técnica, disciplina y respeto para niños, jóvenes y adultos." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/11d686cf-84c9-4850-a7ff-b78241215cd4/id-preview-b92fa60a--07910a82-7b24-43fd-9817-00904d83ad6a.lovable.app-1784758799298.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/11d686cf-84c9-4850-a7ff-b78241215cd4/id-preview-b92fa60a--07910a82-7b24-43fd-9817-00904d83ad6a.lovable.app-1784758799298.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
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

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/horarios", label: "Horarios" },
  { to: "/maestros", label: "Maestros" },
  { to: "/contacto", label: "Contacto" },
] as const;

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-base font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-background text-xs">柔</span>
          <span>Dojo Breogán</span>
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
          <Link
            to="/contacto"
            className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-all hover:bg-primary hover:shadow-soft"
          >
            Inscríbete
          </Link>
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
            <span className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-background text-xs">柔</span>
            <span>Dojo Breogán</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Club de Judo en Galicia. Técnica, disciplina y comunidad desde 1998.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Dojo</p>
          <p className="mt-3 text-sm">Rúa da Ponte, 14<br/>15001 A Coruña, Galicia</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contacto</p>
          <p className="mt-3 text-sm">hola@dojobreogan.gal<br/>+34 981 123 456</p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Dojo Breogán — Club de Judo</span>
          <span>Feito en Galicia</span>
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

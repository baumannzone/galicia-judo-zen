import { createFileRoute } from "@tanstack/react-router";
import { useState, type UIEvent } from "react";
import PAGE from "@/content/es/actividades.json";

export const Route = createFileRoute("/horarios")({
  head: () => ({
    meta: [
      { title: "Horarios — Club Deportivo Baixo Miño" },
      {
        name: "description",
        content:
          "Consulta los horarios semanales de judo, pilates, zumba y entrenamiento en el Club Deportivo Baixo Miño, A Guarda.",
      },
      { property: "og:title", content: "Horarios — Club Deportivo Baixo Miño" },
      {
        property: "og:description",
        content: "Todos los horarios semanales de las actividades del club en A Guarda.",
      },
    ],
  }),
  component: Horarios,
});

const DAYS = [
  { key: "monday", name: "Lunes" },
  { key: "tuesday", name: "Martes" },
  { key: "wednesday", name: "Miércoles" },
  { key: "thursday", name: "Jueves" },
  { key: "friday", name: "Viernes" },
] as const;

const DAY_START = 9 * 60;
const DAY_END = 23 * 60;
const TIMELINE_HEIGHT = DAY_END - DAY_START;
const TIME_MARKS = Array.from({ length: 14 }, (_, index) => 9 * 60 + index * 60);

type Event = {
  id: string;
  name: string;
  start: number;
  end: number;
  lane: number;
  lanes: number;
};

function toMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function eventsForDay(dayKey: (typeof DAYS)[number]["key"]): Event[] {
  const events = PAGE.schedule.rows.flatMap((row) => {
    const activity = row[dayKey];
    if (!activity) return [];

    const [start, end] = row.time.split("–").map((part) => toMinutes(part.trim()));
    return [{ id: `${dayKey}-${row.time}-${activity}`, name: activity, start, end, lane: 0, lanes: 1 }];
  });

  const laneEnds: number[] = [];
  for (const event of events) {
    let lane = laneEnds.findIndex((end) => end <= event.start);
    if (lane === -1) lane = laneEnds.length;
    laneEnds[lane] = event.end;
    event.lane = lane;
  }

  return events.map((event) => {
    const overlapping = events.filter(
      (other) => other.start < event.end && other.end > event.start,
    );
    const lanes = Math.max(1, ...overlapping.map((other) => other.lane + 1));
    return { ...event, lanes };
  });
}

function activityTone(activity: string) {
  const value = activity.toLowerCase();
  if (value.includes("zumba")) return "border-pink-500/30 bg-pink-500/15 text-pink-800 dark:text-pink-200";
  if (value.includes("pilates")) return "border-yellow-500/30 bg-yellow-400/25 text-yellow-900 dark:text-yellow-100";
  if (value.includes("training")) return "border-green-500/30 bg-green-500/15 text-green-800 dark:text-green-200";
  if (value.includes("competici")) return "border-blue-500/30 bg-blue-500/15 text-blue-800 dark:text-blue-200";
  return "border-primary/20 bg-primary/10 text-foreground";
}

function formatTime(minutes: number) {
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}

function Horarios() {
  const [scheduleScrollLeft, setScheduleScrollLeft] = useState(0);

  function syncScheduleHeader(event: UIEvent<HTMLDivElement>) {
    setScheduleScrollLeft(event.currentTarget.scrollLeft);
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Curso 2026 – 2027
        </p>
        <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          Horarios de actividades.
        </h1>
        <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-muted-foreground">
          Cada bloque empieza y termina a la hora indicada. Su altura representa la duración real de la clase.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-x-5 gap-y-3 text-xs text-muted-foreground" aria-label="Leyenda de actividades">
        {[
          ["bg-primary/60", "Judo"],
          ["bg-yellow-400/70", "Pilates"],
          ["bg-pink-500/60", "Zumba"],
          ["bg-green-500/60", "Entrenamiento"],
        ].map(([color, label]) => (
          <span key={label} className="inline-flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
            {label}
          </span>
        ))}
      </div>

      <div className="relative mt-5 rounded-3xl border border-border bg-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[calc(45rem+3.5rem)] overflow-x-clip sm:h-[calc(45rem+4rem)]"
        >
          <div className="sticky top-16 rounded-t-3xl border-b border-border/70 bg-background/95 pb-3 pt-2 backdrop-blur">
            <div
              className="min-w-[920px] px-4 sm:px-6"
              style={{ transform: `translateX(-${scheduleScrollLeft}px)` }}
            >
              <div className="grid grid-cols-[64px_repeat(5,minmax(150px,1fr))]">
                <div />
                {DAYS.map((day) => (
                  <h2
                    key={day.key}
                    className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    {day.name}
                  </h2>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-[2.5rem]" aria-hidden="true" />
        <div className="overflow-x-auto" onScroll={syncScheduleHeader}>
          <div className="min-w-[920px] p-4 sm:p-6">
          <div className="grid grid-cols-[64px_repeat(5,minmax(150px,1fr))]">
            <div className="relative" style={{ height: TIMELINE_HEIGHT }} aria-hidden="true">
              {TIME_MARKS.map((minute) => (
                <span
                  key={minute}
                  className="absolute right-3 -translate-y-1/2 text-[10px] tabular-nums text-muted-foreground"
                  style={{ top: minute - DAY_START }}
                >
                  {formatTime(minute)}
                </span>
              ))}
              <span className="absolute right-3 bottom-0 translate-y-1/2 text-[10px] tabular-nums text-muted-foreground">
                23:00
              </span>
            </div>

            {DAYS.map((day) => {
              const events = eventsForDay(day.key);
              return (
                <div
                  key={day.key}
                  className="relative border-l border-border/70"
                  style={{ height: TIMELINE_HEIGHT }}
                  aria-label={`Actividades del ${day.name.toLowerCase()}`}
                >
                  {TIME_MARKS.map((minute) => (
                    <div
                      key={minute}
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 border-t border-border/50"
                      style={{ top: minute - DAY_START }}
                    />
                  ))}
                  {events.map((event) => (
                    <article
                      key={event.id}
                      className={`absolute z-10 flex flex-col justify-center overflow-hidden rounded-xl border px-2 py-1 shadow-sm ${activityTone(event.name)}`}
                      style={{
                        top: event.start - DAY_START,
                        height: event.end - event.start,
                        left: `calc(${(event.lane / event.lanes) * 100}% + 3px)`,
                        width: `calc(${100 / event.lanes}% - 6px)`,
                      }}
                      title={`${event.name}: ${formatTime(event.start)}–${formatTime(event.end)}`}
                    >
                      <span className="text-[10px] font-semibold leading-tight sm:text-xs">{event.name}</span>
                      <span className="mt-0.5 text-[9px] leading-tight opacity-80 sm:text-[10px]">
                        {formatTime(event.start)} – {formatTime(event.end)}
                      </span>
                    </article>
                  ))}
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        En móvil, desliza horizontalmente para consultar todos los días.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-border bg-secondary/30 p-7 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Con cita previa</p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">Masajes y presoterapia</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Estas sesiones se reservan directamente con el club y no tienen un horario semanal fijo.
          </p>
        </article>
        <article className="rounded-3xl border border-border bg-secondary/30 p-7 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">¿Tienes dudas?</p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">Ven a probar una clase</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Contacta con nosotros para confirmar el grupo más adecuado y reservar tu primera sesión.
          </p>
          <a href="/contacto" className="link-underline mt-5 inline-flex text-sm font-medium">
            Contactar con el club →
          </a>
        </article>
      </div>
    </section>
  );
}

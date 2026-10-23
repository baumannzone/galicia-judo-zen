import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, ChevronUp } from "lucide-react";
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
const COLLAPSED_GAP_HEIGHT = 30;
const TIME_MARKS = Array.from({ length: 14 }, (_, index) => 9 * 60 + index * 60);

type TimeRange = { start: number; end: number };

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
    return [
      {
        id: `${dayKey}-${row.time}-${activity}`,
        name: activity,
        start,
        end,
        lane: 0,
        lanes: 1,
      },
    ];
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

// Find whole hours with no class on any day so every column keeps the same time axis.
function findEmptyGaps(): TimeRange[] {
  const events = DAYS.flatMap((day) => eventsForDay(day.key));
  const gaps: TimeRange[] = [];
  let gapStart: number | null = null;

  for (let hour = DAY_START; hour <= DAY_END; hour += 60) {
    const isEmpty =
      hour < DAY_END && events.every((event) => event.end <= hour || event.start >= hour + 60);

    if (isEmpty && gapStart === null) gapStart = hour;
    if (!isEmpty && gapStart !== null) {
      const duration = hour - gapStart;
      if (duration >= 120) {
        // Keep the hour before the next class visible when the gap is long.
        const end = hour < DAY_END && duration >= 180 ? hour - 60 : hour;
        gaps.push({ start: gapStart, end });
      }
      gapStart = null;
    }
  }

  return gaps;
}

const EMPTY_GAPS = findEmptyGaps();

function gapKey(gap: TimeRange) {
  return `${gap.start}-${gap.end}`;
}

function timelinePosition(minute: number, collapsedGaps: TimeRange[]) {
  let position = minute - DAY_START;
  for (const gap of collapsedGaps) {
    if (minute <= gap.start) break;
    const elapsed = Math.min(minute, gap.end) - gap.start;
    position -= elapsed * (1 - COLLAPSED_GAP_HEIGHT / (gap.end - gap.start));
  }
  return position;
}

function activityTone(activity: string) {
  const value = activity.toLowerCase();
  if (value.includes("zumba"))
    return "border-pink-500/30 bg-pink-500/15 text-pink-800 dark:text-pink-200";
  if (value.includes("pilates"))
    return "border-yellow-500/30 bg-yellow-400/25 text-yellow-900 dark:text-yellow-100";
  if (value.includes("training"))
    return "border-green-500/30 bg-green-500/15 text-green-800 dark:text-green-200";
  if (value.includes("competici"))
    return "border-blue-500/30 bg-blue-500/15 text-blue-800 dark:text-blue-200";
  return "border-primary/20 bg-primary/10 text-foreground";
}

function formatTime(minutes: number) {
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}

function Horarios() {
  const [scheduleScrollLeft, setScheduleScrollLeft] = useState(0);
  const [expandedGaps, setExpandedGaps] = useState<string[]>([]);
  const collapsedGaps = EMPTY_GAPS.filter((gap) => !expandedGaps.includes(gapKey(gap)));
  const timelineHeight = timelinePosition(DAY_END, collapsedGaps);
  const allHoursVisible = EMPTY_GAPS.length > 0 && collapsedGaps.length === 0;

  function toggleGap(gap: TimeRange) {
    const key = gapKey(gap);
    setExpandedGaps((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
    );
  }

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
          Cada bloque empieza y termina a la hora indicada. Su altura representa la duración real de
          la clase; las horas sin actividad se pueden desplegar.
        </p>
      </div>

      <div
        className="mt-12 flex flex-wrap gap-x-5 gap-y-3 text-xs text-muted-foreground"
        aria-label="Leyenda de actividades"
      >
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

      {EMPTY_GAPS.length > 0 && (
        <div className="mt-5 flex justify-end">
          <button
            type="button"
            className="rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={() => setExpandedGaps(allHoursVisible ? [] : EMPTY_GAPS.map(gapKey))}
          >
            {allHoursVisible ? "Comprimir horas vacías" : "Mostrar todas las horas"}
          </button>
        </div>
      )}

      <div
        className={`relative rounded-3xl border border-border bg-background ${EMPTY_GAPS.length ? "mt-4" : "mt-5"}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-30 overflow-x-clip"
          style={{ height: timelinePosition(21 * 60, collapsedGaps) + 64 }}
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
            <div className="relative grid grid-cols-[64px_repeat(5,minmax(150px,1fr))]">
              <div className="relative" style={{ height: timelineHeight }} aria-hidden="true">
                {TIME_MARKS.filter(
                  (minute) =>
                    !collapsedGaps.some((gap) => minute >= gap.start && minute <= gap.end),
                ).map((minute) => (
                  <span
                    key={minute}
                    className="absolute right-3 -translate-y-1/2 text-[10px] tabular-nums text-muted-foreground"
                    style={{ top: timelinePosition(minute, collapsedGaps) }}
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
                    style={{ height: timelineHeight }}
                    aria-label={`Actividades del ${day.name.toLowerCase()}`}
                  >
                    {TIME_MARKS.filter(
                      (minute) =>
                        !collapsedGaps.some((gap) => minute > gap.start && minute < gap.end),
                    ).map((minute) => (
                      <div
                        key={minute}
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 border-t border-border/50"
                        style={{ top: timelinePosition(minute, collapsedGaps) }}
                      />
                    ))}
                    {events.map((event) => (
                      <article
                        key={event.id}
                        className={`absolute z-10 flex flex-col justify-center overflow-hidden rounded-xl border px-2 py-1 shadow-sm ${activityTone(event.name)}`}
                        style={{
                          top: timelinePosition(event.start, collapsedGaps),
                          height:
                            timelinePosition(event.end, collapsedGaps) -
                            timelinePosition(event.start, collapsedGaps),
                          left: `calc(${(event.lane / event.lanes) * 100}% + 3px)`,
                          width: `calc(${100 / event.lanes}% - 6px)`,
                        }}
                        title={`${event.name}: ${formatTime(event.start)}–${formatTime(event.end)}`}
                      >
                        <span className="text-[10px] font-semibold leading-tight sm:text-xs">
                          {event.name}
                        </span>
                        <span className="mt-0.5 text-[9px] leading-tight opacity-80 sm:text-[10px]">
                          {formatTime(event.start)} – {formatTime(event.end)}
                        </span>
                      </article>
                    ))}
                  </div>
                );
              })}

              {EMPTY_GAPS.map((gap) => {
                const isCollapsed = collapsedGaps.includes(gap);
                const start = timelinePosition(gap.start, collapsedGaps);
                const end = timelinePosition(gap.end, collapsedGaps);
                return (
                  <button
                    key={gapKey(gap)}
                    type="button"
                    aria-expanded={!isCollapsed}
                    aria-label={`${formatTime(gap.start)}–${formatTime(gap.end)}. ${isCollapsed ? "Sin actividades. Mostrar horas" : "Contraer franja vacía"}`}
                    onClick={() => toggleGap(gap)}
                    className="absolute inset-x-0 z-20 flex h-[30px] cursor-pointer items-center justify-start border-y border-border bg-secondary/85 px-2 text-[10px] font-medium text-muted-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-xs"
                    style={{
                      top: isCollapsed ? start : start + (end - start - COLLAPSED_GAP_HEIGHT) / 2,
                    }}
                  >
                    <span className="sticky left-0 flex w-[calc(100vw-5rem)] max-w-full shrink-0 items-center justify-center whitespace-nowrap">
                      {formatTime(gap.start)}–{formatTime(gap.end)} ·{" "}
                      {isCollapsed ? "Sin actividades" : "Contraer franja vacía"}
                      {isCollapsed ? (
                        <ChevronDown className="ml-1.5 size-3.5" aria-hidden="true" />
                      ) : (
                        <ChevronUp className="ml-1.5 size-3.5" aria-hidden="true" />
                      )}
                    </span>
                  </button>
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
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Con cita previa
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">
            Masajes y presoterapia
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Estas sesiones se reservan directamente con el club y no tienen un horario semanal fijo.
          </p>
        </article>
        <article className="rounded-3xl border border-border bg-secondary/30 p-7 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">¿Tienes dudas?</p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">
            Ven a probar una clase
          </h2>
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

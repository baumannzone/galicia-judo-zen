import { createFileRoute } from "@tanstack/react-router";
import PAGE from "@/content/es/legal.json";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: PAGE.meta.title },
      { name: "description", content: PAGE.meta.description },
      { property: "og:title", content: PAGE.meta.title },
    ],
  }),
  component: Legal,
});

function Legal() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h1 className="font-display text-4xl font-semibold tracking-tight mb-12">{PAGE.title}</h1>
        {PAGE.sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-2xl font-semibold tracking-tight mt-10 mb-4">
              {section.title}
            </h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.items && (
              <ul>
                {section.items.map(([label, value]) => (
                  <li key={label}>
                    <strong>{label}:</strong> {value}
                  </li>
                ))}
              </ul>
            )}
            {section.blocks?.map((block) => (
              <div key={block.title}>
                <p>
                  <strong>{block.title}</strong>
                </p>
                {"text" in block && <p>{block.text}</p>}
                {"items" in block && (
                  <ul>
                    {block.items.map(([label, value]) => (
                      <li key={label}>
                        <strong>{label}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {section.after && <p>{section.after}</p>}
          </section>
        ))}
        <p className="mt-12 text-sm text-muted-foreground">{PAGE.lastUpdated}</p>
      </div>
    </section>
  );
}

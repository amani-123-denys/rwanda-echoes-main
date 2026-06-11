import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PROVINCES } from "@/lib/data/history";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Rwanda Map Experience — History of Rwanda" },
      {
        name: "description",
        content:
          "An interactive map of Rwanda — provinces, kingdoms, memorials, and heritage sites.",
      },
      { property: "og:title", content: "Rwanda Map Experience" },
      { property: "og:description", content: "Explore Rwanda's provinces and heritage sites." },
    ],
    links: [{ rel: "canonical", href: "/map" }],
  }),
  component: MapPage,
});

function MapPage() {
  const [active, setActive] = useState(PROVINCES[0]);
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-20">
        <SectionHeader
          eyebrow="Igihugu"
          title="Rwanda, hill by hill"
          description="Hover or tap a province to discover its history, heritage sites, and natural wonders."
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative aspect-[4/3] rounded-3xl border border-gold/30 bg-card overflow-hidden">
          <img
            src="/rwanda-districts-map.jpg"
            alt="Rwanda districts map"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold">{active.name}</div>
          <h2 className="mt-2 font-display text-4xl">{active.capital}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{active.highlight}</p>
          <div className="mt-8 grid gap-2">
            {PROVINCES.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p)}
                className={`flex items-baseline justify-between rounded-xl border px-5 py-4 text-left transition-colors ${
                  active.id === p.id ? "border-gold bg-card" : "border-border hover:border-gold"
                }`}
              >
                <span className="font-display text-lg">{p.name}</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {p.capital}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

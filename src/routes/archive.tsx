import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Search } from "lucide-react";
import hero from "@/assets/hero-archive.png";
import intore from "@/assets/intore-dancers.jpg";
import palace from "@/assets/royal-palace.jpg";
import king from "@/assets/memorial.jpg";
import archive from "@/assets/archive.png";
import modern from "@/assets/modern.png";
import memorial from "@/assets/memorial.jpg";
import imigongo from "@/assets/imigongo.png";

type Item = { src: string; title: string; category: string; span: string };
const ITEMS: Item[] = [
  { src: hero, title: "The Thousand Hills at dawn", category: "Photography", span: "row-span-2" },
  { src: intore, title: "Intore in motion", category: "Dance", span: "" },
  { src: archive, title: "Elders, c. 1930", category: "Archival", span: "" },
  { src: palace, title: "Nyanza Royal Palace", category: "Heritage site", span: "row-span-2" },
  { src: king, title: "Mwami in regalia", category: "Portrait", span: "" },
  { src: modern, title: "Modern Kigali skyline", category: "Today", span: "" },
  { src: memorial, title: "Candles at the memorial", category: "Remembrance", span: "" },
  { src: imigongo, title: "Imigongo geometry", category: "Art", span: "" },
];
const CATS = [
  "All",
  "Photography",
  "Dance",
  "Archival",
  "Heritage site",
  "Portrait",
  "Today",
  "Remembrance",
  "Art",
];

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "Media Archive — History of Rwanda" },
      {
        name: "description",
        content:
          "A curated digital archive of Rwandan photography, art, archival imagery, and heritage media.",
      },
      { property: "og:title", content: "Media Archive — History of Rwanda" },
      { property: "og:description", content: "A curated archive of Rwandan visual heritage." },
    ],
    links: [{ rel: "canonical", href: "/archive" }],
  }),
  component: ArchivePage,
});

function ArchivePage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<Item | null>(null);

  const filtered = useMemo(
    () =>
      ITEMS.filter(
        (i) =>
          (cat === "All" || i.category === cat) &&
          (q === "" || i.title.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, cat],
  );

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-20">
        <SectionHeader
          eyebrow="Media Archive"
          title="A living archive of Rwandan memory"
          description="Photographs, art, archival imagery and heritage media — searchable and shareable."
        />
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search the archive…"
              className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm outline-none focus:border-gold"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition-colors ${
                  cat === c
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-4">
          {filtered.map((i) => (
            <button
              key={i.title}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-xl ${i.span}`}
            >
              <img
                src={i.src}
                alt={i.title}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-[10px] uppercase tracking-widest text-[--gold]">
                  {i.category}
                </div>
                <div className="font-display text-lg">{i.title}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md grid place-items-center p-6 animate-fade-in"
        >
          <div className="max-w-5xl w-full">
            <img
              src={open.src}
              alt={open.title}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="mt-4 text-center text-white">
              <div className="text-[10px] uppercase tracking-widest text-[--gold]">
                {open.category}
              </div>
              <div className="font-display text-2xl">{open.title}</div>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { NEWS } from "@/lib/data/history";
import hero from "@/assets/hero.png";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Updates — History of Rwanda" },
      {
        name: "description",
        content:
          "Heritage news, museum updates, cultural events and remembrance activities from across Rwanda.",
      },
      { property: "og:title", content: "News & Updates — History of Rwanda" },
      { property: "og:description", content: "Heritage news and cultural events." },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

function NewsPage() {
  const [featured, ...rest] = NEWS;
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-20">
        <SectionHeader
          eyebrow="Amakuru"
          title="News & dispatches"
          description="From museums, memorials, classrooms and cultural festivals."
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <article className="relative overflow-hidden rounded-3xl border border-gold/30 group">
          <img
            src={hero}
            alt={featured.title}
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
            width={1800}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="relative z-10 p-10 md:p-16 text-white min-h-[400px] flex flex-col justify-end">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em]">
              <span className="text-[--gold]">{featured.category}</span>
              <span className="text-white/60">{featured.date}</span>
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl max-w-2xl leading-tight">
              {featured.title}
            </h2>
            <p className="mt-4 max-w-xl text-white/80">{featured.excerpt}</p>
            <button className="mt-6 inline-flex items-center gap-2 text-sm text-[--gold] self-start">
              READ ARTICLE <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 grid gap-6 md:grid-cols-3">
        {rest.map((n) => (
          <article
            key={n.id}
            className="rounded-2xl border border-border p-6 hover:border-gold transition-colors"
          >
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em]">
              <span className="text-gold">{n.category}</span>
              <span className="text-muted-foreground">{n.date}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl leading-tight">{n.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{n.excerpt}</p>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}

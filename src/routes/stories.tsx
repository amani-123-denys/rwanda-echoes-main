import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { STORIES } from "@/lib/data/history";
import { Volume2 } from "lucide-react";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Stories & Oral Traditions — History of Rwanda" },
      {
        name: "description",
        content: "Legends, poems, proverbs and the oral history of Rwanda's elders.",
      },
      { property: "og:title", content: "Stories & Oral Traditions" },
      { property: "og:description", content: "The voices and wisdom of Rwandan elders." },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-20">
        <SectionHeader
          eyebrow="Inkuru"
          title="Voices carried across generations"
          description="In Rwanda, history is sung before it is written. These stories live in the breath of elders, the rhythm of drums, and the memory of the land."
        />
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 space-y-10">
        {STORIES.map((s, i) => (
          <motion.article
            key={s.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="rounded-3xl border border-border bg-card p-8 md:p-12 hover:border-gold transition-colors"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{s.kind}</div>
              <button
                className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-gold transition-colors"
                aria-label="Play narration"
              >
                <Volume2 className="h-4 w-4" />
              </button>
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight">{s.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{s.excerpt}</p>
          </motion.article>
        ))}
      </section>
    </SiteLayout>
  );
}

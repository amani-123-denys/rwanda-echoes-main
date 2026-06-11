import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { KINGS } from "@/lib/data/history";
import palace from "@/assets/royal-palace.jpg";
import king1 from "@/assets/king1.jpeg";
import king2 from "@/assets/king2.jpeg";
import king4 from "@/assets/king4.jpeg";
import king5 from "@/assets/king5.jpeg";
import king6 from "@/assets/king6.jpeg";

export const Route = createFileRoute("/kings")({
  head: () => ({
    meta: [
      { title: "Kings & Kingdom — History of Rwanda" },
      {
        name: "description",
        content:
          "The Abami of Rwanda — sovereigns of the Nyiginya dynasty who shaped a kingdom across centuries.",
      },
      { property: "og:title", content: "Kings & Kingdom — History of Rwanda" },
      { property: "og:description", content: "The royal lineage of the Mwami." },
    ],
    links: [{ rel: "canonical", href: "/kings" }],
  }),
  component: KingsPage,
});

function KingsPage() {
  return (
    <SiteLayout>
      <section className="relative h-[60vh] min-h-[460px] overflow-hidden">
        <img
          src={palace}
          alt="Royal palace"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-background/40 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col justify-end pb-16 text-white">
          <div className="text-xs uppercase tracking-[0.35em] text-[--gold] mb-4">Abami</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1]">KINGS & KINGDOM</h1>
          <p className="mt-4 max-w-xl text-white/80">
            THE LINEAGE OF THE MWAMI — KEEPERS OF THE CATTLE, THE DRUM, AND THE THRONE.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {KINGS.map((k, i) => (
            <motion.div
              key={k.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group rounded-2xl overflow-hidden border border-border hover:border-gold transition-colors"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={[king1, king2, king4, king5, king6][i % 5]}
                  alt={k.name}
                  loading="lazy"
                  width={1600}
                  height={1024}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{k.dynasty}</div>
                <h3 className="mt-2 font-display text-2xl leading-tight">{k.name}</h3>
                <div className="mt-1 text-xs text-muted-foreground">{k.reign}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{k.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

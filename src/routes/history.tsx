import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ERAS } from "@/lib/data/history";
import archive from "@/assets/archive.png";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "History — A Timeline of Rwanda" },
      {
        name: "description",
        content:
          "From the pre-colonial kingdom to modern Rwanda — a guided timeline through six defining eras.",
      },
      { property: "og:title", content: "History — A Timeline of Rwanda" },
      { property: "og:description", content: "Six eras that shaped a nation." },
    ],
    links: [{ rel: "canonical", href: "/history" }],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <SiteLayout>
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <img
          src={archive}
          alt="Archival"
          className="absolute inset-0 h-full w-full object-cover sepia-[0.4]"
          width={653}
          height={907}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col justify-end pb-16">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">AMATEKA</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-3xl">
            A TIMELINE OF RWANDA
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
          {ERAS.map((era, i) => (
            <motion.div
              key={era.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`relative pb-20 grid md:grid-cols-2 gap-8 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
            >
              <div
                className={`pl-12 md:pl-0 md:pr-12 ${i % 2 === 0 ? "md:text-right" : "md:[direction:ltr] md:pl-12 md:pr-0"}`}
              >
                <div className="text-xs uppercase tracking-[0.35em] text-gold">{era.yearLabel}</div>
                <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
                  {era.title}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{era.body}</p>
              </div>
              <div className="hidden md:block" />
              <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 grid place-items-center">
                <span className="h-3 w-3 rounded-full bg-gold shadow-[0_0_0_6px_color-mix(in_oklab,var(--gold)_25%,transparent)]" />
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

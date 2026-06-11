import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import memorial from "@/assets/memorial.jpg";

export const Route = createFileRoute("/memorial")({
  head: () => ({
    meta: [
      { title: "Memorial & Reconciliation — History of Rwanda" },
      {
        name: "description",
        content:
          "A place of remembrance, reconciliation and peace-building. Honouring the victims of the 1994 Genocide Against the Tutsi.",
      },
      { property: "og:title", content: "Memorial & Reconciliation" },
      {
        property: "og:description",
        content: "Remembrance, reconciliation, and the long work of peace.",
      },
    ],
    links: [{ rel: "canonical", href: "/memorial" }],
  }),
  component: MemorialPage,
});

function MemorialPage() {
  return (
    <SiteLayout>
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <img
          src={memorial}
          alt="Candles of remembrance"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="relative z-10 mx-auto max-w-3xl h-full flex flex-col justify-end px-6 pb-24 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="text-xs uppercase tracking-[0.4em] text-[--gold] mb-6">
              KWIBUKA — REMEMBER
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1]">
              IN MEMORY, IN LIGHT, IN PEACE OF ALL RWANDANS.
            </h1>
            <p className="mt-6 max-w-xl text-white/80 leading-relaxed">
              We remember the more than one million Tutsi killed during the 1994 Genocide Against
              the Tutsi. NEVERFORGET
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 space-y-12 text-lg leading-relaxed">
        <p>
          Between April and July 1994, Rwanda lived through one hundred days of unimaginable
          violence. The genocide was planned, organised, and carried out with chilling efficiency.
          Neighbours, colleagues, and friends were targeted because of who they were.
        </p>
        <div className="border-l-2 border-gold pl-6 italic font-display text-2xl text-foreground">
          “There will be no humanity without forgiveness, no forgiveness without justice, and no
          justice without memory.”
        </div>
        <p>
          In the years since, Rwanda has chosen the long, patient path of reconciliation — through
          Gacaca community courts, through Ubumuntu (humanity to others), through education that
          refuses to look away. Memorials across the country, including the Kigali Genocide
          Memorial, hold the names and the stories so that they are not lost.
        </p>
        <p>
          To remember is not to remain in pain. It is to refuse silence, to honour the dead, and to
          build a country and a world .where this can never happen again.
        </p>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ERAS, KINGS, STORIES, NEWS } from "@/lib/data/history";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import imageCopy from "@/assets/image copy.png";
import imigongo from "@/assets/imigongo.png";
import imageCopy2 from "@/assets/image copy 2.png";
import palace from "@/assets/royal-palace.jpg";
import heroArchive from "@/assets/hero-archive.png";
import a1 from "@/assets/a1.avif";
import a2 from "@/assets/a2.avif";
import a3 from "@/assets/a3.avif";
import a4 from "@/assets/a4.webp";
import a5 from "@/assets/a5.avif";
import a6 from "@/assets/a6.avif";
import a7 from "@/assets/a7.avif";
import a8 from "@/assets/a8.webp";
import { ArrowRight, Play } from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "History of Rwanda — A Digital Museum" },
      {
        name: "description",
        content:
          "Discover Rwanda through time — kingdoms, culture, memory, and the modern nation. A cinematic journey through the land of a thousand hills.",
      },
      { property: "og:title", content: "History of Rwanda — A Digital Museum" },
      {
        property: "og:description",
        content: "Discover Rwanda through time — kingdoms, culture, memory, and the modern nation.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const HOME_SLIDES = [
  { src: a1, alt: "Rwanda heritage image 1" },
  { src: a2, alt: "Rwanda heritage image 2" },
  { src: a3, alt: "Rwanda heritage image 3" },
  { src: a4, alt: "Rwanda heritage image 4" },
  { src: a5, alt: "Rwanda heritage image 5" },
  { src: a6, alt: "Rwanda heritage image 6" },
  { src: a7, alt: "Rwanda heritage image 7" },
  { src: a8, alt: "Rwanda heritage image 8" },
];

function HomePage() {
  const { t } = useTranslation();
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % HOME_SLIDES.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={HOME_SLIDES[slideIndex].src}
              src={HOME_SLIDES[slideIndex].src}
              alt={HOME_SLIDES[slideIndex].alt}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading={slideIndex === 0 ? "eager" : "lazy"}
              decoding="async"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            />
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[--gold] mb-6">
              <span className="divider-gold" />
              {t("hero.eyebrow")}
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-white">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-white/85 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/history"
                className="group inline-flex items-center gap-3 gradient-gold px-7 py-3.5 rounded-full text-[--gold-foreground] text-sm font-medium tracking-wide shadow-[0_10px_40px_-10px_color-mix(in_oklab,var(--gold)_70%,transparent)] hover:translate-y-[-2px] transition-transform"
              >
                {t("hero.cta")}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/30 group-hover:border-white">
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                {t("hero.secondary")}
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 gradient-hero pointer-events-none" />
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-5xl px-6 py-28 text-center">
        <div className="text-6xl text-gold font-display leading-none mb-6">“</div>
        <p className="font-display text-3xl md:text-5xl leading-tight">{t("sections.quote")}</p>
        <div className="mt-8 text-xs uppercase tracking-[0.35em] text-muted-foreground">
          — {t("sections.quoteAuthor")}
        </div>
      </section>

      {/* TIMELINE PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader
          eyebrow={t("sections.timeline")}
          title="Six chapters that shaped a nation"
          description={t("sections.timelineDesc")}
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ERAS.map((era, i) => (
            <motion.div
              key={era.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 hover:border-gold transition-colors"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-gold">{era.yearLabel}</div>
              <h3 className="mt-3 font-display text-2xl leading-tight">{era.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{era.summary}</p>
              <Link to="/history" className="mt-6 inline-flex items-center gap-2 text-sm text-gold">
                {t("sections.explore")} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* KINGS SPLIT */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl"
          >
            <img
              src={heroArchive}
              alt="Royal portrait"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/30 rounded-3xl pointer-events-none" />
          </motion.div>
          <div>
            <SectionHeader
              eyebrow={t("sections.kings")}
              title="The Abami — keepers of the kingdom"
              description={t("sections.kingsDesc")}
            />
            <div className="mt-8 divide-y divide-border">
              {KINGS.slice(0, 4).map((k) => (
                <div key={k.id} className="py-4 flex items-baseline justify-between gap-6">
                  <div>
                    <div className="font-display text-xl">{k.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{k.note}</div>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gold whitespace-nowrap">
                    {k.reign}
                  </div>
                </div>
              ))}
            </div>
            <Link to="/kings" className="mt-8 inline-flex items-center gap-2 text-sm text-gold">
              {t("sections.explore")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HERITAGE GALLERY CAROUSEL */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <SectionHeader
          eyebrow="VISUAL HERITAGE"
          title="Echoes of Rwanda"
          description="A gallery of stories, traditions, and moments that define the Rwandan spirit"
        />
        <div className="mt-16 relative h-[500px] overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={HOME_SLIDES[slideIndex].src}
              src={HOME_SLIDES[slideIndex].src}
              alt={HOME_SLIDES[slideIndex].alt}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 ring-1 ring-inset ring-gold/30 rounded-2xl pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
            <div className="flex gap-2">
              {HOME_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === slideIndex ? "bg-gold w-8" : "bg-white/40 w-2"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="text-xs text-white bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
              {slideIndex + 1} / {HOME_SLIDES.length}
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE FULL-BLEED */}
      <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
        <img
          src={imageCopy2}
          alt="Intore dancers"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-xl text-white">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[--gold] mb-4">
              <span className="divider-gold" />
              {t("sections.culture")}
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              WHERE EVERY DANCE IS A CHRONICLE
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              THE INTORE — "THE CHOSEN ONES" — carry a tradition of warrior dance, beaded
              headdresses, and ancestral memory passed from generation to generation.
            </p>
            <Link
              to="/stories"
              className="mt-8 inline-flex items-center gap-2 text-sm text-[--gold]"
            >
              {t("sections.explore")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* STORIES + NEWS */}
      <section className="mx-auto max-w-7xl px-6 py-28 grid gap-16 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow={t("sections.stories")}
            title="Voices of the elders"
            description={t("sections.storiesDesc")}
          />
          <div className="mt-10 space-y-5">
            {STORIES.slice(0, 3).map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-border p-5 hover:border-gold transition-colors"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{s.kind}</div>
                <div className="mt-1 font-display text-xl">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHeader eyebrow={t("nav.news")} title="From the heritage desk" />
          <div className="mt-10 space-y-5">
            {NEWS.slice(0, 3).map((n) => (
              <Link
                key={n.id}
                to="/news"
                className="block rounded-xl border border-border p-5 hover:border-gold transition-colors"
              >
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em]">
                  <span className="text-gold">{n.category}</span>
                  <span className="text-muted-foreground">{n.date}</span>
                </div>
                <div className="mt-1 font-display text-xl">{n.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{n.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-6 md:mx-12 my-12 overflow-hidden rounded-[2rem] border border-gold/30">
        <img
          src={imageCopy}
          alt="Modern Kigali"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
        <div
          aria-hidden
          className="absolute right-0 top-0 h-full w-1/3 opacity-10 mix-blend-overlay"
          style={{ backgroundImage: `url(${imigongo})`, backgroundSize: "200px" }}
        />
        <div className="relative z-10 max-w-2xl px-8 md:px-14 py-20">
          <h2 className="font-display text-4xl md:text-5xl leading-tight">{t("sections.cta")}</h2>
          <p className="mt-4 text-muted-foreground">{t("sections.ctaDesc")}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/map"
              className="gradient-gold px-6 py-3 rounded-full text-[--gold-foreground] text-sm font-medium"
            >
              {t("nav.map")}
            </Link>
            <Link
              to="/archive"
              className="px-6 py-3 rounded-full border border-border text-sm hover:border-gold"
            >
              {t("nav.archive")}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-6 right-8 hidden md:block">
          <img
            src={palace}
            alt="Royal palace"
            className="h-40 w-60 object-cover rounded-2xl border border-gold/30"
            loading="lazy"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

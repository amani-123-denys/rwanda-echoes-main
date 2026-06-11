import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-3xl"
    >
      {eyebrow && (
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold mb-4">
          <span className="divider-gold" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">{title}</h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

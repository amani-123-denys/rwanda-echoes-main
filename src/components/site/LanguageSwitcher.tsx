import { useTranslation } from "react-i18next";
import { LANGUAGES } from "@/lib/i18n";
import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const current = LANGUAGES.find((l) => l.code === i18n.language?.slice(0, 2)) ?? LANGUAGES[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full border border-border px-3 h-9 text-xs uppercase tracking-widest hover:border-gold transition-colors"
        aria-label="Language"
      >
        <Globe className="h-3.5 w-3.5" />
        {current.short}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 glass rounded-lg overflow-hidden animate-fade-in z-50">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                i18n.changeLanguage(l.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-sm hover:bg-secondary/60 ${
                l.code === current.code ? "text-gold" : ""
              }`}
            >
              <span>{l.label}</span>
              <span className="text-[10px] uppercase tracking-widest opacity-60">{l.short}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

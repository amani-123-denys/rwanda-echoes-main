import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import imigongo from "@/assets/imigongo.png";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative mt-32 border-t border-gold/20 bg-card/40">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-cover bg-repeat-x opacity-60"
        style={{ backgroundImage: `url(${imigongo})`, backgroundSize: "120px" }}
      />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl">{t("brand")}</div>
          <p className="mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
            A digital museum honouring the memory, heritage, and living culture of Rwanda — the land
            of a thousand hills.
          </p>
          
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/history" className="hover:text-gold">
                {t("nav.history")}
              </Link>
            </li>
            <li>
              <Link to="/kings" className="hover:text-gold">
                {t("nav.kings")}
              </Link>
            </li>
            <li>
              <Link to="/archive" className="hover:text-gold">
                {t("nav.archive")}
              </Link>
            </li>
            <li>
              <Link to="/map" className="hover:text-gold">
                {t("nav.map")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">
            {t("footer.follow")}
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Twitter / X</li>
            <li>Instagram</li>
            <li>YouTube</li>
            <li>info@historyofrwanda.rw</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 px-6">
        <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Developers</div>
        <div className="text-xs text-muted-foreground space-y-1">
          <div>AMANI Denys</div>
          <div>HIRWA Emmanuel</div>
          <div>MANZI Baraka Taniar</div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} · {t("brand")} · {t("footer.rights")}
      </div>
    </footer>
  );
}

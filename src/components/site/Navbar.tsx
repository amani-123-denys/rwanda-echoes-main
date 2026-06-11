import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTheme } from "@/lib/theme";
import logo from "@/assets/logo.png";

export function Navbar() {
  const { t } = useTranslation();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(null);

  useEffect(() => {
    try {
      const auth = JSON.parse(localStorage.getItem("hor_auth") || "null");
      setUser(auth?.user ?? null);
    } catch (e) {
      setUser(null);
    }
  }, []);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/history", label: t("nav.history") },
    { to: "/kings", label: t("nav.kings") },
    { to: "/archive", label: t("nav.archive") },
    { to: "/map", label: t("nav.map") },
    { to: "/stories", label: t("nav.stories") },
    { to: "/news", label: t("nav.news") },
    { to: "/memorial", label: t("nav.memorial") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="History of Rwanda" className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-secondary/60 transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          {user ? (
            <div className="hidden sm:flex items-center gap-3">
              <div className="text-sm">{user.name ?? user.email}</div>
              <button
                onClick={() => {
                  localStorage.removeItem("hor_auth");
                  setUser(null);
                  window.location.href = "/";
                }}
                className="text-sm text-destructive"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Link to="/login" className="text-sm text-foreground/80 hover:underline">
                Sign in
              </Link>
              <Link to="/signup" className="text-sm bg-gold text-[--gold-foreground] px-3 py-1 rounded-md">
                Sign up
              </Link>
            </div>
          )}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-border hover:border-gold transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-9 w-9 place-items-center rounded-full border border-border"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border/60 bg-background/95 px-6 py-4 flex flex-col gap-1 text-sm animate-fade-in">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-secondary"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

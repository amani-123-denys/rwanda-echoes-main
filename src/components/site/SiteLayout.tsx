import { type ReactNode, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import "@/lib/i18n";
import { applyTheme } from "@/lib/theme";

export function SiteLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const stored = localStorage.getItem("hor-theme");
    if (stored === "dark" || stored === "light") applyTheme(stored);
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

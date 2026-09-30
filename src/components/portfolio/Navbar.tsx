import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolio";
const heroImage = "https://id-preview--cd4fbe95-be01-4e63-bb67-b978c39d94fc.lovable.app/__l5e/assets-v1/e4d4a59a-ccdb-4f6b-b055-7b061d031b4e/ashish-hero.jpg";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-card" : "bg-transparent",
      )}
    >
      <nav aria-label="Main navigation" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#home" className="flex min-w-0 items-center gap-2.5">
            <img
              src={heroImage}
              alt="Ashish Khadka"
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 rounded-full border-2 border-primary/25 object-cover object-center shadow-sm ring-2 ring-primary/10"
            />
            <span className="truncate text-sm font-semibold tracking-tight text-foreground sm:text-base">
              Ashish Khadka
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-accent-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Hire Me
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-foreground lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <ul className="mb-3 space-y-1 rounded-2xl border border-border bg-background p-2 shadow-lift lg:hidden">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary-soft"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-primary px-3 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Hire Me
              </a>
            </li>
          </ul>
        ) : null}
      </nav>
    </header>
  );
}

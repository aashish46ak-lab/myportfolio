import { MessageCircle, Facebook } from "lucide-react";
import { site } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div className="min-w-0">
            <p className="text-base font-semibold text-foreground">Ashish Khadka</p>
            <p className="mt-1 text-sm text-muted-foreground">Full-Stack Developer &amp; AI Enthusiast</p>
            <p className="mt-3 text-sm text-muted-foreground">
              <a href={`tel:${site.phone}`} className="hover:text-foreground">
                {site.phone}
              </a>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              <a href={`mailto:${site.email}`} className="hover:text-foreground">
                {site.email}
              </a>
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Connect</p>
            <div className="mt-3 flex gap-2">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-primary-soft"
              >
                <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook / Messenger"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-primary-soft"
              >
                <Facebook className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          © 2026 Ashish Khadka. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

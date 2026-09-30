import { ArrowRight, MessageCircle, Phone, Facebook } from "lucide-react";
import heroImage from "@/assets/ashish-hero.jpg.asset.json";
import { site } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="px-4 pt-24 pb-10 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="hero-gradient hero-pattern shadow-hero relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="min-w-0 text-primary-foreground">
              <span className="inline-flex items-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
                Hello, I'm Ashish 👋
              </span>

              <h1 className="mt-6 text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Ashish Khadka
              </h1>
              <p className="mt-3 text-lg font-semibold text-primary-foreground/90 sm:text-xl">
                Full-Stack Developer &amp; AI Enthusiast
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80">
                I build modern, responsive web applications and explore practical AI-powered solutions
                with today's web technologies.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary-deep transition-transform hover:-translate-y-0.5"
                >
                  View My Work
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/35 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Message Me
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message Ashish Khadka on WhatsApp"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message Ashish Khadka on Messenger"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={`tel:${site.phone}`}
                  aria-label={`Call Ashish Khadka at ${site.phone}`}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[1.9rem] bg-primary-foreground/10" aria-hidden="true" />
              <img
                src={heroImage.url}
                alt="Ashish Khadka - Full-Stack Developer and AI Enthusiast"
                width={1440}
                height={1920}
                fetchPriority="high"
                decoding="async"
                className="relative aspect-[3/4] w-full rounded-[1.6rem] object-cover object-center shadow-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

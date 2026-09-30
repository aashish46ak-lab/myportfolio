import { ArrowRight, MessageCircle, Phone, Facebook, Mail, Github } from "lucide-react";
const heroImage = "https://id-preview--cd4fbe95-be01-4e63-bb67-b978c39d94fc.lovable.app/__l5e/assets-v1/e4d4a59a-ccdb-4f6b-b055-7b061d031b4e/ashish-hero.jpg";
import { site } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="px-4 pt-24 pb-10 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="hero-gradient hero-pattern shadow-hero relative overflow-hidden rounded-[2rem] border border-border px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="min-w-0 text-foreground">
              <p className="text-sm font-medium text-muted-foreground">Hello, I'm Ashish</p>

              <h1 className="mt-4 text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Ashish Khadka
              </h1>
              <p className="mt-3 text-lg font-semibold text-primary sm:text-xl">
                Full-Stack Developer &amp; AI Enthusiast
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Ashish Khadka builds modern, responsive web applications and explores practical AI-powered
                solutions with today's web technologies. Based in Itahari, Nepal.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  View My Work
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
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
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-primary-soft"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message Ashish Khadka on Messenger"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-primary-soft"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ashish Khadka on GitHub"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-primary-soft"
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  aria-label={`Email Ashish Khadka at ${site.email}`}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-primary-soft"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={`tel:${site.phone}`}
                  aria-label={`Call Ashish Khadka at ${site.phone}`}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-primary-soft"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[1.9rem] bg-primary-soft" aria-hidden="true" />
              <img
                src={heroImage}
                alt="Ashish Khadka - Full-Stack Developer and AI Enthusiast from Itahari, Nepal"
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

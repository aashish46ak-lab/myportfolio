import { Layers, Bot, Palette, Rocket } from "lucide-react";
import { services } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Section";

const icons = [Layers, Bot, Palette, Rocket];

export function Services() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="How I Can Help You"
            subtitle="Practical development services for founders, teams and businesses."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <Reveal key={service.title} className="h-full">
                <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

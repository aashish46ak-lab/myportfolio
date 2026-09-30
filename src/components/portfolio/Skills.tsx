import { Code2, Server, Database, Sparkles, Wrench } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Section";

const icons = [Code2, Server, Database, Sparkles, Wrench];

export function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I Work With"
            subtitle="The tools and technologies I use to build and ship web applications."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <Reveal key={group.title}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-accent-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border bg-muted px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

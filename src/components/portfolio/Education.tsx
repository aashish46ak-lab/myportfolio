import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Section";

export function Education() {
  return (
    <section id="education" className="soft-gradient px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Education" />
        </Reveal>

        <ol className="relative mt-10 space-y-6 border-l border-border pl-6 sm:pl-8">
          {education.map((item) => (
            <li key={item.degree} className="relative">
              <span
                className="absolute top-6 -left-[calc(1.5rem+9px)] grid h-[18px] w-[18px] place-items-center rounded-full bg-primary ring-4 ring-background sm:-left-[calc(2rem+9px)]"
                aria-hidden="true"
              />
              <Reveal>
                <article className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-foreground">{item.degree}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                    </div>
                    <span className="shrink-0 rounded-lg bg-primary-soft px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                      {item.status}
                    </span>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <article className="mt-10 flex flex-col gap-4 rounded-[1.5rem] border border-border bg-card p-8 shadow-card sm:flex-row sm:items-center">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-accent-foreground">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-foreground">My Journey</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                From Diktel, Khotang to Itahari, my journey has been shaped by curiosity, learning and
                building things with technology.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

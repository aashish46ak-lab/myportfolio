import aboutImage from "@/assets/ashish-about.jpg.asset.json";
import { aboutFacts } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Section";

export function About() {
  return (
    <section id="about" className="soft-gradient px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="About" title="About Me" />
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <img
              src={aboutImage.url}
              alt="Ashish Khadka outdoors in Itahari, Nepal"
              width={960}
              height={1280}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-[1.6rem] border border-border object-cover shadow-card"
            />
          </Reveal>

          <Reveal>
            <div className="min-w-0">
              <p className="text-base leading-relaxed text-muted-foreground">
                I'm Ashish Khadka, a BSc. CSIT student based in Itahari, Nepal, with a strong interest in
                full-stack web development and AI-powered applications. I enjoy turning ideas into
                practical digital products, experimenting with modern technologies, and building clean,
                responsive web experiences.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                I'm currently studying BSc. CSIT at Sushma Godawari College in Itahari, after completing
                my +2 at Itahari Namuna College. Originally from Diktel, Khotang, I spend most of my time
                exploring modern frontend and backend technologies and figuring out how AI can fit into
                everyday web apps.
              </p>

              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                {aboutFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-border bg-card p-5 shadow-card"
                  >
                    <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

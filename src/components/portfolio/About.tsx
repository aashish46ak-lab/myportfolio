const aboutImage = "https://id-preview--cd4fbe95-be01-4e63-bb67-b978c39d94fc.lovable.app/__l5e/assets-v1/e8e435b6-a9f6-4fa0-98a2-f23791b783a8/ashish-about.jpg";
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
              src={aboutImage}
              alt="Ashish Khadka - Full-Stack Developer from Itahari, Nepal"
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
                I'm Ashish Khadka, a BSc. CSIT student and Full-Stack Developer based in Itahari, Nepal.
                I build clean, reliable web applications — from simple landing pages to full platforms
                like NepARENA.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                I care about clear communication, shipping on time, and writing maintainable code.
                Currently studying at Sushma Godawari College, Itahari, after completing +2 at Itahari
                Namuna College. Originally from Diktel, Khotang.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

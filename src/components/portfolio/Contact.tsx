import { useState } from "react";
import { MessageCircle, Facebook, Phone, Mail } from "lucide-react";
import { site } from "@/data/portfolio";
import { Reveal } from "./Section";

/**
 * Local-only submit handler. No backend/email service is connected yet, so the
 * message is not actually delivered — swap this for a Supabase insert or an
 * email function later without touching the form UI.
 */
async function submitMessage(_values: { name: string; email: string; message: string }) {
  return { ok: true as const };
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setPending(true);
    await submitMessage({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    setPending(false);
    setSent(true);
    form.reset();
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="hero-gradient hero-pattern shadow-hero overflow-hidden rounded-[2rem] border border-border px-6 py-12 sm:px-10 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="min-w-0 text-foreground">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's Build Something</h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                Have an idea, project or simply want to connect? Feel free to reach out.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-primary-soft"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Message on WhatsApp
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-primary-soft"
                >
                  <Facebook className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Message on Messenger
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-primary-soft"
                >
                  <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-center gap-3 rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Call Me · {site.phone}
                </a>
              </div>
            </div>

            <Reveal>
              <div className="rounded-[1.5rem] bg-card p-6 shadow-lift sm:p-8">
                <h3 className="text-lg font-semibold text-foreground">Send Me a Message</h3>
                <form className="mt-5 space-y-4" onSubmit={onSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="mt-1.5 w-full resize-y rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={pending}
                    className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70"
                  >
                    {pending ? "Sending…" : "Send Message"}
                  </button>

                  <p aria-live="polite" className="min-h-5 text-sm text-muted-foreground">
                    {sent
                      ? "Thanks for reaching out! I'll get back to you soon. This form isn't connected to email yet, so WhatsApp or a call reaches me fastest."
                      : null}
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

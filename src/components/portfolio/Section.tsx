import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-base text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const { ref, className: revealClass } = useReveal();
  return (
    <div ref={ref} className={cn(revealClass, className)}>
      {children}
    </div>
  );
}

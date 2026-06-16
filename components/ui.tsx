import Image from "next/image";
import type { ComponentType, ReactNode } from "react";
import type { LucideProps } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Lift, Reveal } from "@/components/motion";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type IconType = ComponentType<LucideProps>;

export function Section({
  id,
  children,
  className
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-16 sm:py-20 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center"
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={cn(
        "mx-auto mb-10 max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left"
      )}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-blush-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-gray-500 sm:text-lg">{description}</p>
    </Reveal>
  );
}

export function GradientButton({
  children,
  href,
  variant = "primary"
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={href}
      className={cn(
        "shine-button relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-sm font-semibold transition duration-300 hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-blush-200",
        variant === "primary"
          ? "bg-gradient-to-r from-blush-500 to-lavender-500 text-white shadow-glow"
          : "border border-white/80 bg-white/70 text-gray-900 shadow-lg shadow-gray-200/70 backdrop-blur-xl hover:bg-white"
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export function GlassCard({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Lift
      delay={delay}
      className={cn(
        "premium-card rounded-[28px] border border-white/75 bg-white/72 p-6 shadow-premium backdrop-blur-2xl",
        className
      )}
    >
      {children}
    </Lift>
  );
}

export function IconBadge({
  icon: Icon,
  className
}: {
  icon: IconType;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-gradient-to-br from-blush-100 via-white to-lavender-100 text-blush-500 shadow-sm shadow-blush-200/50 ring-1 ring-white/80",
        className
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
    </span>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  delay
}: {
  icon: IconType;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <GlassCard delay={delay} className="h-full">
      <IconBadge icon={icon} />
      <h3 className="mt-6 text-xl font-semibold text-gray-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-gray-500">{description}</p>
    </GlassCard>
  );
}

export function ImageCard({
  src,
  alt,
  label,
  title,
  description,
  delay
}: {
  src: string;
  alt: string;
  label: string;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <Lift
      delay={delay}
      className="premium-card group overflow-hidden rounded-[30px] border border-white/80 bg-white shadow-premium"
    >
      <div className="relative aspect-[1.28] overflow-hidden bg-blush-50">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 via-transparent to-white/10 opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blush-500">
          {label}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-gray-950">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-gray-500">{description}</p>
      </div>
    </Lift>
  );
}

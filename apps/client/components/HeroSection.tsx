import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
}

interface HeroHighlight {
  title: string;
  description: string;
  icon: ReactNode;
}

interface HeroSectionProps {
  imageSrc?: string;
  imageAlt?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: HeroAction[];
  highlights?: HeroHighlight[];
  imageUnoptimized?: boolean;
  variant?: "image" | "plain";
}

function HeroLink({ action }: { action: HeroAction }) {
  const className =
    action.variant === "secondary"
      ? "rounded-lg border-2 border-white px-8 py-4 text-center text-lg font-semibold text-white transition-all duration-200 hover:bg-white hover:text-primary"
      : "rounded-lg bg-accent px-8 py-4 text-center text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:bg-accent-light";

  if (action.external) {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {action.label}
      </a>
    );
  }

  return (
    <Link href={action.href} className={className}>
      {action.label}
    </Link>
  );
}

function PlainHeroSection({
  eyebrow,
  title,
  description,
  highlights,
}: Pick<HeroSectionProps, "eyebrow" | "title" | "description" | "highlights">) {
  return (
    <section className="bg-secondary-gray py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="mb-6 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-primary md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            {description}
          </p>
        )}
        {highlights && highlights.length > 0 && (
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600">
            {highlights.map((item) => (
              <span key={item.title} className="inline-flex items-center gap-2">
                <span className="text-accent">{item.icon}</span>
                {item.title}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function HeroSection({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  description,
  actions = [],
  highlights = [],
  imageUnoptimized = false,
  variant = "image",
}: HeroSectionProps) {
  const hasHighlights = highlights.length > 0;

  if (variant === "plain") {
    return (
      <PlainHeroSection
        eyebrow={eyebrow}
        title={title}
        description={description}
        highlights={highlights}
      />
    );
  }

  if (!imageSrc || !imageAlt) {
    throw new Error("HeroSection image variant requires imageSrc and imageAlt.");
  }

  return (
    <section className="relative overflow-hidden py-14 text-white lg:py-20">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        unoptimized={imageUnoptimized}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-primary/40 to-black/20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={
            hasHighlights
              ? "grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
              : "mx-auto max-w-4xl text-center"
          }
        >
          <div className={hasHighlights ? "max-w-3xl" : "mx-auto max-w-3xl"}>
            {eyebrow && (
              <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-accent-light shadow-lg shadow-black/10 backdrop-blur-sm">
                {eyebrow}
              </div>
            )}
            <h1 className="mb-5 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mb-7 text-base leading-relaxed text-gray-100 md:text-lg">
                {description}
              </p>
            )}
            {actions.length > 0 && (
              <div
                className={
                  hasHighlights
                    ? "flex flex-col gap-4 sm:flex-row"
                    : "flex flex-col justify-center gap-4 sm:flex-row"
                }
              >
                {actions.map((action) => (
                  <HeroLink key={`${action.label}-${action.href}`} action={action} />
                ))}
              </div>
            )}
          </div>

          {hasHighlights && (
            <div className="hidden lg:block">
              <div className="rounded-2xl bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur-sm">
                <div className="space-y-6">
                  {highlights.map((item) => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="rounded-lg bg-accent p-3 shadow-lg shadow-black/10">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

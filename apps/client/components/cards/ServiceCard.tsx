import type { Service } from "@bilacert/contracts/service";
import { Icon } from "@bilacert/shared/Icon";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceImageFallback = "/images/services/services-hero.svg";

function getServiceImage(service: Service) {
  return service.thumbnail?.trim() || service.image?.trim() || serviceImageFallback;
}

function isSvgImage(src: string) {
  return src.toLowerCase().endsWith(".svg");
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const imageUrl = getServiceImage(service);
  const description = service.shortDescription || service.description;

  return (
    <Link href={service.href} className="group block h-full">
      <article className="relative flex min-h-[360px] h-full overflow-hidden rounded-2xl bg-primary shadow-md shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
        <Image
          src={imageUrl}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={isSvgImage(imageUrl)}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-primary/10" />
        <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />

        <div className="relative z-10 mt-auto flex min-h-full flex-col justify-end p-6 text-white">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-accent-light shadow-lg shadow-black/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <Icon name={service.icon || "Shield"} className="h-6 w-6" />
          </div>

          {service.category && (
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-accent-light">
              {service.category}
            </p>
          )}

          <h3 className="mb-3 text-2xl font-bold leading-tight line-clamp-2">
            {service.title}
          </h3>

          {description && (
            <p className="line-clamp-3 text-sm leading-relaxed text-white/85">
              {description}
            </p>
          )}

          <div className="mt-6 flex items-center justify-between gap-4">
            {service.pricing ? (
              <p className="text-sm font-semibold text-white/90">
                From R
                {service.pricing.toLocaleString("en-ZA", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </p>
            ) : (
              <span />
            )}
            <span className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-bold text-white shadow-lg shadow-black/20 transition-all duration-300 group-hover:bg-accent-light">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

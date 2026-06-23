import type { Service } from "@bilacert/contracts/service";
import { Icon } from "@bilacert/shared/Icon";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceImageFallback = "/images/services/services-hero.svg";

function getServiceImage(service: Service) {
  return (
    service.thumbnail?.trim() || service.image?.trim() || serviceImageFallback
  );
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
      <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10">
        <div className="relative h-64 w-full overflow-hidden bg-primary">
          <Image
            src={imageUrl}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={isSvgImage(imageUrl)}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-primary/10" />
          <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />

          <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-accent-light shadow-lg shadow-black/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Icon name={service.icon || "Shield"} className="h-6 w-6" />
            </div>

            <h3 className="mb-3 line-clamp-2 text-2xl font-bold leading-tight">
              {service.title}
            </h3>

            {description && (
              <p className="line-clamp-3 text-sm leading-relaxed text-white/85">
                {description}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-grow flex-col p-6">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            {service.category && (
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                {service.category}
              </span>
            )}
            {service.processingTime && (
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {service.processingTime}
              </span>
            )}
          </div>

          <div className="mt-auto flex items-center justify-between gap-4 border-t border-gray-50 pt-4">
            {service.pricing ? (
              <p className="text-sm font-semibold text-primary">
                From R
                {service.pricing.toLocaleString("en-ZA", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </p>
            ) : (
              <p className="text-sm font-semibold text-primary">View details</p>
            )}

            <span className="inline-flex items-center text-sm font-bold text-accent transition-all duration-300 group-hover:gap-1.5">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

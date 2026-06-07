import Image from "next/image";
import Link from "next/link";
import { getIcon } from "@/lib/services-config";
import { CheckCircle, Shield } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  iconName: string;
  imageSrc: string;
  processing_time: string;
  formPath: string;
  phone: string;
}

export function ServiceHero({
  title,
  subtitle,
  iconName,
  imageSrc,
  processing_time,
  formPath,
  phone,
}: ServiceHeroProps) {
  const Icon = getIcon(iconName);

  return (
    <section className="relative text-white py-20">
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon className="h-8 w-8 text-accent" />
              <span className="text-accent font-semibold">{title}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-gray-200 mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={formPath}
                className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-all duration-200 transform hover:-translate-y-1 text-center"
              >
                Get Free Consultation
              </Link>
              <Link
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200 text-center"
              >
                Call {phone}
              </Link>
            </div>
          </div>
          <HeroStatsBackdrop processing_time={processing_time} />
        </div>
      </div>
    </section>
  );
}

interface HeroStatsBackdropProps {
  processing_time: string;
}

export function HeroStatsBackdrop({ processing_time }: HeroStatsBackdropProps) {
  const CheckCircleIcon = getIcon("CheckCircle");

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="bg-accent p-3 rounded-lg">
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">{processing_time}</h3>
            <p className="text-gray-300">Standard processing time</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-accent p-3 rounded-lg">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">100% Success Rate</h3>
            <p className="text-gray-300">On first-time applications</p>
          </div>
        </div>
      </div>
    </div>
  );
}

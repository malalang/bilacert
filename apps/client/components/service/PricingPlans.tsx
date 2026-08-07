import Link from "next/link";
import { getServiceIcon } from "@/lib/service-icons";

interface PricingPlansProps {
  title: string;
  subtitle: string;
  plans: Array<{
    title: string;
    description: string;
    features: string[];
    price: string;
    popular: boolean;
  }>;
  formPath: string;
}

export function PricingPlans({
  title,
  subtitle,
  plans,
  formPath,
}: PricingPlansProps) {
  const CheckCircleIcon = getServiceIcon("CheckCircle");

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "-translate-y-3 bg-primary text-white shadow-2xl shadow-primary/25 ring-4 ring-accent/30"
                  : "bg-white text-primary shadow-sm shadow-black/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-5 py-1.5 text-sm font-bold text-white shadow-lg shadow-accent/25">
                    Most Popular
                  </span>
                </div>
              )}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-primary"
                }`}
              >
                {plan.title}
              </h3>
              <p
                className={`mb-6 ${
                  plan.popular ? "text-white/75" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>
              <div
                className={`text-4xl font-extrabold mb-6 ${
                  plan.popular ? "text-accent-light" : "text-primary"
                }`}
              >
                {plan.price}
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-center text-sm ${
                      plan.popular ? "text-white/85" : "text-gray-600"
                    }`}
                  >
                    <CheckCircleIcon
                      className={`h-4 w-4 mr-2 flex-shrink-0 ${
                        plan.popular ? "text-accent-light" : "text-accent"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={formPath}
                className={`mt-auto inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-center font-bold transition-colors duration-200 ${
                  plan.popular
                    ? "bg-accent text-white hover:bg-accent-light"
                    : "bg-primary text-white hover:bg-primary-light"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

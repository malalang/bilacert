"use client";

import type { Testimonial } from "@bilacert/shared/types";
import { useEffect } from "react";

type TestimonialEmbed = Pick<Testimonial, "id" | "postUrl">;

declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: () => void;
      };
      init: (options: { xfbml: boolean; version: string }) => void;
    };
    fbAsyncInit?: () => void;
  }
}

export default function TestimonialsEmbed({
  testimonials,
}: {
  testimonials: TestimonialEmbed[];
}) {
  useEffect(() => {
    if (testimonials.length === 0) {
      return;
    }

    if (window.FB?.XFBML) {
      window.FB.XFBML.parse();
      return;
    }

    window.fbAsyncInit = () => {
      if (window.FB) {
        window.FB.init({
          xfbml: true,
          version: "v18.0",
        });
        window.FB.XFBML.parse();
      }
    };

    ((d, s, id) => {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      const js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      if (fjs?.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      } else {
        d.head.appendChild(js);
      }
    })(document, "script", "facebook-jssdk");
  }, [testimonials]);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="fb-root" />
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trusted by South African Businesses
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            See what our clients say about our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="fb-post bg-white rounded-xl overflow-hidden"
              data-href={t.postUrl}
              data-width="500"
              data-show-text="true"
            >
              <blockquote cite={t.postUrl} className="fb-xfbml-parse-ignore">
                <a href={t.postUrl}>Post</a>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

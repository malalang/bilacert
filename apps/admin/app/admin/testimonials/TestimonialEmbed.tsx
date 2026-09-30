"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    FB?: {
      init: (params: { xfbml: boolean; version: string }) => void;
      XFBML: {
        parse: (element?: HTMLElement) => void;
      };
    };
    fbAsyncInit?: () => void;
  }
}

interface TestimonialEmbedProps {
  postUrl: string;
}

const SDK_VERSION = "v21.0";
const SDK_SRC = `https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=${SDK_VERSION}`;

/**
 * The SDK is a page-level singleton. Several embeds can mount at once - the
 * testimonials list and the detail view both use this component - and none of
 * them should inject a second <script> or race the same global.
 */
let sdkPromise: Promise<void> | null = null;

function loadFacebookSdk(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }
  if (window.FB) {
    return Promise.resolve();
  }

  if (!sdkPromise) {
    sdkPromise = new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.id = "facebook-sdk";
      script.async = true;
      script.defer = true;
      script.src = SDK_SRC;
      script.onerror = () => {
        // Clear the cache so a later mount can retry rather than inheriting a
        // promise that will never settle.
        sdkPromise = null;
        reject(new Error("Facebook SDK failed to load"));
      };
      document.head.appendChild(script);

      // The SDK calls this once its XFBML parser is actually ready - parsing
      // before that point is what silently produces an empty embed.
      window.fbAsyncInit = () => {
        window.FB?.init({ xfbml: true, version: SDK_VERSION });
        resolve();
      };
    });
  }

  return sdkPromise;
}

export default function TestimonialEmbed({ postUrl }: TestimonialEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const node = containerRef.current;

    if (!node) {
      return;
    }

    loadFacebookSdk()
      .then(() => {
        // Hand the parser this embed's own node instead of re-scanning the
        // whole document. The data-href guard ties the parse to the URL this
        // effect was scheduled for, so a fast navigation that has already
        // swapped the node cannot make us parse a stale one.
        if (!cancelled && node.getAttribute("data-href") === postUrl) {
          window.FB?.XFBML.parse(node);
        }
      })
      .catch(() => {
        // Blocked by CSP, an extension, or offline. The embed area stays empty
        // but the rest of the page must keep working, so this is deliberately
        // swallowed rather than thrown.
      });

    return () => {
      cancelled = true;
    };
    // postUrl is a dependency on purpose: a client-side navigation swaps this
    // embed's data-href without remounting the component, so the updated node
    // has to be handed back to the parser.
  }, [postUrl]);

  return (
    <div className="p-4">
      <div
        ref={containerRef}
        className="fb-post"
        data-href={postUrl}
        data-show-text="true"
        data-adapt-container-width="true"
      />
    </div>
  );
}

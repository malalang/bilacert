import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    serverActions: {
      // Admin image uploads travel to the server action as multipart FormData.
      bodySizeLimit: "5mb",
    },
  },
  async redirects() {
    return [
      // The dashboard IS the admin home (`apps/admin/app/page.tsx`), so the old
      // explicit segment is retired rather than kept as a second admin home.
      { source: "/dashboard", destination: "/", permanent: true },
      // Legacy deep links from before the admin route tree was flattened. `/admin`
      // was a real path segment, so every old URL lands one segment too deep.
      { source: "/admin", destination: "/", permanent: true },
      { source: "/admin/:path*", destination: "/:path*", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "zpgxnohxizcmuwbosapx.supabase.co",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

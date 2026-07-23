import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Canonical host is https://www.roofingbyjerry.com (Vercel's primary domain,
  // which already 308-redirects the apex -> www at the edge). All in-app URLs
  // — metadataBase, config.ts domain, sitemap, OG tags, JSON-LD — use www so
  // ranking signals consolidate on the one host Google already indexes.
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;

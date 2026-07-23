import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce a single canonical host. GSC showed the site indexed under both
  // https://www.roofingbyjerry.com and https://roofingbyjerry.com, splitting
  // ranking signals. Canonical everywhere (config.ts + metadataBase) is the
  // non-www apex, so 308 www -> apex to consolidate authority.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.roofingbyjerry.com' }],
        destination: 'https://roofingbyjerry.com/:path*',
        permanent: true,
      },
    ];
  },
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

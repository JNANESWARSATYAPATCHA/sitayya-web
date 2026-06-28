import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // @ts-expect-error: 'eslint' is a valid Next.js config property but may be missing in current NextConfig types
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

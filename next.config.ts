import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    turbo: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [],
    domains: [],
  },
};

export default nextConfig;

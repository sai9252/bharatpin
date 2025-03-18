import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['your-domain-if-image-is-external.com'], // Add this if your image is hosted externally
  },
};

export default nextConfig;

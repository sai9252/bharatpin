import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https', // or 'http' depending on your image source
        hostname: 'localhost:3000', // replace with actual domain
        port: '', // optional
        pathname: '/path/**', // optional, if you want to restrict to specific paths
      }
    ]
  },
};

export default nextConfig;
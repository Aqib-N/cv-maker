import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  // Only apply webpack polling in development
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;

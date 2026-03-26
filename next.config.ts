import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "dist",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

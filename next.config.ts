import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/espaco-vital" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  reactCompiler: true,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

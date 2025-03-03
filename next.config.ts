import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**", // Aceita qualquer domínio com HTTP
      },
      {
        protocol: "https",
        hostname: "**", // Aceita qualquer domínio com HTTPS
      },
    ],
  },
};

export default nextConfig;

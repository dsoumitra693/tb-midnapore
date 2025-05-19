import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.sanity.io",
      "i.pinimg.com",
      "randomuser.me"
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },

  // ✅ Force Webpack instead of Turbopack
  experimental: {
    turbo: false,
  },
};

export default nextConfig;

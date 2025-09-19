/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // tidak perlu raw-loader untuk CSS
    return config;
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const { withGluestackUI } = require("@gluestack/ui-next-adapter");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = withGluestackUI(nextConfig);

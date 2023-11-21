/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "./base.scss";`,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = false;
    }

    return config;
  },
};

module.exports = nextConfig;

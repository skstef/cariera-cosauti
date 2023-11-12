/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["mui-file-input"],
  i18n,
};

module.exports = nextConfig;

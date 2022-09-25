/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  images: { domains: ["mosaic.scdn.co", "i.scdn.co"] },
  reactStrictMode: true,
});

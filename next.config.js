/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['bestpractices.coreinfrastructure.org', 'github.com'],
  },
};

module.exports = nextConfig;

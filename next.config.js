/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    domains: ['bestpractices.coreinfrastructure.org', 'github.com'],
  },
  trailingSlash: true,
};

module.exports = nextConfig;

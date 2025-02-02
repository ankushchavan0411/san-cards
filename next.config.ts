/** @format */

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['dummyimage.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;

import type {NextConfig} from 'next';
const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
   output: 'export',
  basePath: isProd ? '/devPortfolio' : '',
  assetPrefix: isProd ? '/devPortfolio/' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;

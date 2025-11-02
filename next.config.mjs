import withMDX from '@next/mdx';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  pageExtensions: ['js','jsx','ts','tsx','mdx'],
};

export default withMDX(nextConfig);

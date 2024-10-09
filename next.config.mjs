import withTwin from './withTwin.mjs';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withTwin({
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
});

export default nextConfig;

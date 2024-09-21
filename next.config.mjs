import withTwin from './withTwin.mjs';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withTwin({
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // Allow images from Cloudinary
  },
});

export default nextConfig;

import withTwin from './withTwin.mjs';

/**
 * @type {import('next').NextConfig}
 */
export default withTwin({
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'picsum.photos', 'socialcry.com'], // Add Cloudinary or any other external image host here
  },
});

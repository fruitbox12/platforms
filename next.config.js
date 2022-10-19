/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "abs.twimg.com",
      "pbs.twimg.com",
      "avatars.githubusercontent.com",
    ],
  },
  reactStrictMode: false,
  swcMinify: false, // Required to fix: https://nextjs.org/docs/messages/failed-loading-swc
};

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
module.exports = {
  // Next dev with React 18, Always render twice #35822
  reactStrictMode: isProd,

  // Redirects allow you to redirect an incoming request path to a different destination path.
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/about',
  //       permanent: true,
  //     },
  //   ];
  // },

  // Rewrites allow you to map an incoming request path to a different destination path.
  // async rewrites() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/about',
  //     },
  //   ];
  // },
};

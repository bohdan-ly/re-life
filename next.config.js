/** @type {import('next').NextConfig} */

const path = require('path');

const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withOptimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const { i18n } = require('./next-i18next.config.js');
const withTwin = require('./withTwin');

console.debug(
  `Building Next with NODE_ENV="${process.env.NODE_ENV}" NEXT_PUBLIC_APP_STAGE="${process.env.NEXT_PUBLIC_APP_STAGE}" using GIT_COMMIT_SHA=${process.env.GIT_COMMIT_SHA} and GIT_COMMIT_REF=${process.env.GIT_COMMIT_REF}`,
);

const pwaConfig = {
  pwa: {
    dest: 'public',
    register: true,
    sw: 'service-worker.js',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
};

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_APP_NAME: 'ReLifeRPG',
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    NEXT_PUBLIC_SERVER_ENDPOINT: process.env.NEXT_PUBLIC_SERVER_ENDPOINT,
  },
  eslint: {
    dirs: ['components', 'constants', 'hooks', 'locales', 'pages', 'providers', 'utils'],
  },
  exclude: path.resolve(__dirname, 'src/images/*'),

  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg?$/,
      oneOf: [
        {
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }],
                },
                titleProp: true,
              },
            },
          ],
        },
      ],
    });

    config.resolve.fallback = { fs: false, module: false };

    return config;
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  trailingSlash: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/home',
  //       permanent: true,
  //     },
  //   ];
  // },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
    };
  },
  i18n,
  pwa: {
    dest: 'public',
    register: true,
    sw: 'service-worker.js',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
};

const twin = withTwin(nextConfig);

module.exports = withPlugins([withPWA, twin, withImages], nextConfig);

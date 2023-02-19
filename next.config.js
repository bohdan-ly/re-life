/** @type {import('next').NextConfig} */

const path = require('path');

const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withOptimizedImages = require('next-optimized-images');

const withTwin = require('./withTwin');

console.debug(
  `Building Next with NODE_ENV="${process.env.NODE_ENV}" NEXT_PUBLIC_APP_STAGE="${process.env.NEXT_PUBLIC_APP_STAGE}" using GIT_COMMIT_SHA=${process.env.GIT_COMMIT_SHA} and GIT_COMMIT_REF=${process.env.GIT_COMMIT_REF}`,
);

const withTwinConf = {
  reactStrictMode: true, // < Recommended by Next
};

const withImagesConf = {
  exclude: path.resolve(__dirname, 'src/images/*'),
  webpack(config, options) {
    return config;
  },
};

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withPlugins(
  [[withTwin, withTwinConf], [withImages, withImagesConf], withOptimizedImages],
  nextConfig,
);

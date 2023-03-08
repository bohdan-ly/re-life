// withTwin.js
const path = require('path');

// The folders containing files importing twin.macro
console.log('DIRNAME', __dirname);
const includedDirs = [path.resolve(__dirname, 'src/shared')];

module.exports = function withTwin() {
  return (nextConfig) => {
    return {
      ...nextConfig,
      webpack(config, options) {
        const { dev, isServer } = options;

        config.module = config.module || {};
        config.module.rules = config.module.rules || [];
        config.module.rules.push({
          test: /\.(jsx|js)$/,
          include: includedDirs,
          use: [
            options.defaultLoaders.babel,
            {
              loader: 'babel-loader',
              options: {
                sourceMaps: dev,
                plugins: [
                  [
                    require.resolve('babel-plugin-macros'),
                    {
                      twin: {
                        perest: 'styled-components',
                      },
                    },
                  ],
                  [require.resolve('@babel/plugin-syntax-jsx'), { isTSX: true }],
                  [
                    require.resolve('babel-plugin-styled-components'),
                    { ssr: true, displayName: true },
                  ],
                ],
              },
            },
          ],
        });

        if (!isServer) {
          config.resolve.fallback = {
            ...(config.resolve.fallback || {}),
            fs: false,
            module: false,
            path: false,
            os: false,
            crypto: false,
          };
        }

        if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(config, options);
        } else {
          return config;
        }
      },
    };
  };
};

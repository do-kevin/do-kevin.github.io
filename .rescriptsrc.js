const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const logConfig = (config) => {
  return config;
};

logConfig.isMiddleware = true;

module.exports = [
  'env',
  ['use-postcss-config'],
  {
    webpack: (config) => {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
      };

      // if (config.mode === 'production') {
      //   config.plugins = [
      //     ...config.plugins,
      //     new BundleAnalyzerPlugin({
      //       analyzerMode: 'static',
      //       reportFilename: 'report.html',
      //     }),
      //   ];
      // }

      if (config.mode === 'development') {
        config.plugins = [
          ...config.plugins,
          config.mode === 'development' && new ReactRefreshWebpackPlugin(),
        ];
      }

      return config;
    },
  },
  logConfig,
];

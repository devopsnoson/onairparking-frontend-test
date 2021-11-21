/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const plugins = [
  [
    withAntdLess({
      modifyVars: {
        '@primary-color': '#f47607', // primary color for all components
        '@link-color': '#515356', // link color
        '@success-color': '#52c41a', // success state color
        '@warning-color': '#faad14', // warning state color
        '@error-color': '#f5222d', // error state color
        '@font-size-base': '14px', // major text font size
        '@heading-color': '#515356', // heading text color
        '@text-color': '#434343', // major text color
        '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
        '@disabled-color': '#d4d4d4', // disable state color
        '@border-radius-base': '4px', // major border radius
        '@border-color-base': '#d9d9d9', // major border color
        '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // major shadow for layers
        '@font-family': "'Roboto', sans-serif !important",
        '@rate-star-bg': '#ccc',
      },

      // optional
      // lessVarsFilePath: './styles/variables.less',

      // optional
      lessVarsFilePathAppendToEndOfContent: true,

      // Other Config Here...
      webpack(config, { dev, isServer }) {
        config.plugins.push(
          new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/)
        );

        // Replace React with Preact only in client production build
        if (!dev && !isServer) {
          Object.assign(config.resolve.alias, {
            react: 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
          });
        }

        return config;
      },
    }),
  ],
  [withBundleAnalyzer],
];

const nextConfig = {
  env: {},
  images: {
    domains: ['localhost', 'seal-goldengate.bbb.org'],
  },
  compress: true,
  productionBrowserSourceMaps: true,
};

module.exports = withPlugins(plugins, nextConfig);

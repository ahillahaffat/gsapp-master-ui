//@ts-check
const { composePlugins, withNx } = require('@nx/next');
const path = require('path');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // Use this to set Nx-specific options
  // See: https://nx.dev/recipes/next/next-config-setup
  nx: {},
  transpilePackages: ['@gs-app/ui'],
  webpack: (config) => {
    // Add alias for @gs-app/ui to resolve to source files
    config.resolve.alias = {
      ...config.resolve.alias,
      '@gs-app/ui': path.resolve(__dirname, '../../packages/ui/src/index.ts'),
    };
    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
import path from 'path';
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        '@components': path.resolve(__dirname, '../src/components'),
        '@assets': path.resolve(__dirname, '../src/assets'),
      },
    };
    return config;
  },
};
export default config;

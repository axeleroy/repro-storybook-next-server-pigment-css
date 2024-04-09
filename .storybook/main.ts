import type { StorybookConfig } from '@storybook/nextjs-server';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-controls'],
framework: '@storybook/nextjs-server',
};

export default config;
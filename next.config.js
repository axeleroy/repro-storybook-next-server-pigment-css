const { withPigment, extendTheme } = require('@pigment-css/nextjs-plugin');
const withStorybook = require('@storybook/nextjs-server/next-config')({/* sb config */});

// To learn more about theming, visit https://github.com/mui/material-ui/blob/master/packages/zero-runtime/README.md#theming
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: '0 0% 100%',
        foreground: '240 10% 3.9%',
        primary: '240 5.9% 10%',
        border: '240 5.9% 90%',
      },
    },
    dark: {
      palette: {
        background: '240 10% 3.9%',
        foreground: '0 0% 80%',
        primary: '0 0% 98%',
        border: '240 3.7% 15.9%',
      },
    },
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withStorybook(withPigment(nextConfig, { theme }, { appDir: true }));

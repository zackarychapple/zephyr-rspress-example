import * as path from 'path';
import { defineConfig } from 'rspress/config';
import {withZephyr} from "zephyr-webpack-plugin";
export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'zephyr rspress demo',
  description: 'Rspack-based Static Site Generator',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
  builderConfig: {
    tools: {
      rspack: async config => {
        return withZephyr()(config);
      },
    },
  },
});

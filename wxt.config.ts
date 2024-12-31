import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react', '@wxt-dev/auto-icons'],
  manifest: {
    name: 'ZenYoutube',
    description: 'ZenYoutube is a browser extension that helps you to watch youtube videos in a zen mode.',
    version: '0.1.0',
    permissions: ['tabs', 'storage'],
    icons: {
      16: 'icons/16.png',
      32: 'icons/32.png',
      48: 'icons/48.png',
      128: 'icons/128.png',
    },
  },
  hooks: {
    "build:manifestGenerated": (wxt, manifest) => {
      manifest.content_scripts ??= [];
      manifest.content_scripts.push({
        css: ["assets/reset.css"],
        matches: ["*://*.youtube.com/*"]
      })
    }
  }
});

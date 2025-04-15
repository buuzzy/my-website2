import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Minimal Test Site',
  tagline: 'Minimal Tagline',
  // favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-org', // 你的 GitHub 用户名
  projectName: 'your-project', // 使用实际的仓库名

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  staticDirectories: ['static'],

  presets: [
    [
      'classic',
      {
        docs: {
          // 使用默认路径和路由
          sidebarPath: './sidebars.ts', // 仍然指向简化后的 sidebars
        },
        blog: false, // 禁用 blog
        theme: {
          // 尝试暂时移除 customCss
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options, // 确保 Preset 类型可用
    ],
  ],

  themeConfig: { // 提供最基础的 themeConfig
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    navbar: {
      title: 'Minimal Site',
      logo: {
        alt: '谈文解字 Logo',
        src: 'img/logo.svg',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Minimal Copyright`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: true,
      }
    },
  } satisfies Preset.ThemeConfig, // 确保 Preset 类型可用
};

export default config;

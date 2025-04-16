import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '谈文解字',
  tagline: '做最好的 AI 产品设计网站',
  // favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
      logo: {
        alt: '谈文解字 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'ai',
          position: 'left',
          label: 'AI 编程入门',
        },
        {
          type: 'docSidebar',
          sidebarId: 'product',
          position: 'left',
          label: '产品设计入门',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} 谈文解字. Built with Docusaurus.`,
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

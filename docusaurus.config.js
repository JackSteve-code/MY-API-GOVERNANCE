// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'API Governance Infrastructure',
  favicon: 'img/favicon.ico',

  url: 'https://JackSteve-code.github.io', 
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'JackSteve-code', 
  projectName: 'MY-API-GOVERNANCE', 

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // This makes the docs your home page (No index.js needed)
          sidebarPath: './sidebars.js',
          // This hides the "Edit this page" links for a cleaner look
          editUrl: undefined, 
        },
        blog: false, // Disables the blog entirely
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Keeps the header clean with just your Site Name
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [], // Removed Tutorial, Blog, and GitHub links
      },
      // Simplified footer
      footer: {
        style: 'dark',
        links: [], // Removed all footer columns
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // Forces the sidebar to be hidden by default if not needed
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
};

export default config;
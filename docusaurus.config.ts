import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'UtopiaMC-Wiki',
  tagline: 'The best Minecraft server',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rotzrohr.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RotzRohr', // Usually your GitHub org/user name.
  projectName: 'UtopiaMC-Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        // Disable docs (main tutorial section)
        docs: false,
        // Disable blog
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // SkyBlock plugin configuration remains unchanged
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'skyblock',
        path: 'skyblock',
        routeBasePath: 'skyblock',
        sidebarPath: './skyblock-sidebars.ts',
        // Sidebar collapse settings
        sidebarCollapsible: true,
        sidebarCollapsed: false,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'UtopiaMC-Wiki',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        // Remove Tutorial navbar item
        // Remove Blog navbar item

        // Keep only SkyBlock in navbar
        {
          type: 'docSidebar',
          sidebarId: 'skyblockSidebar',
          position: 'left',
          label: 'SkyBlock',
          docsPluginId: 'skyblock'
        },
        {
          href: 'https://github.com/RotzRohr/UtopiaMC-Documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            // Remove Tutorial link
            {
              label: 'SkyBlock',
              to: '/skyblock/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/GPJGChP9',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // Remove Blog link
            {
              label: 'GitHub',
              href: 'https://github.com/RotzRohr/UtopiaMC-Documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UtopiaMC-Wiki. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
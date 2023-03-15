// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const domain = 'https://finamweb.github.io';
const pathname = '/trade-api-docs/';
const metaImageUrl = `${domain}${pathname}img/meta-image.png`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Trade API',
  tagline:
    'Сервис для организации взаимодействия пользовательских приложений с сервером TRANSAQ',
  url: domain,
  baseUrl: pathname,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'finamweb', // Usually your GitHub org/user name.
  projectName: 'trade-api-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Serve the docs at the site's root
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:image',
          content: metaImageUrl,
        },
        {
          property: 'og:image:secure_url',
          content: metaImageUrl,
        },
        {
          property: 'og:image',
          content: metaImageUrl,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:image:alt',
          content: 'Trade API — Все самое необходимое для алготрейдинга',
        },
      ],
      navbar: {
        title: 'Trade API',
        logo: {
          alt: 'Trade API Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'common-info',
            position: 'left',
            label: 'Документация',
          },
          {
            href: 'https://trade-api.finam.ru/swagger/index.html',
            label: 'Swagger',
            position: 'left',
          },
          {
            href: 'https://github.com/FinamWeb/trade-api-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Документация',
            to: '/',
          },
          {
            label: 'Swagger',
            href: 'https://trade-api.finam.ru/swagger/index.html',
          },
        ],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require('path')

module.exports = {
  title: 'Novabolt',
  tagline: 'Hệ thống quản lý dịch vụ mua hàng hộ',
  url: 'https://novabolt.dev',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/mark.png',
  organizationName: 'novaboltlabs', // Usually your GitHub org/user name.
  projectName: 'novabolt.dev', // Usually your repo name.
  plugins: [
    path.resolve(__dirname, 'plugins/docusaurus-tailwindcss-loader'),
  ],
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr'
      },
      vi: {
        label: 'Tiếng Việt',
        direction: 'ltr'
      }
    }
  },
  themeConfig: {
    image: 'img/cover.png',
    navbar: {
      title: 'Novabolt',
      logo: {
        alt: 'Novabolt Logo',
        src: 'img/mark.svg',
      },
      hideOnScroll: true,
      items: [
        {
          type: 'doc',
          docId: 'gioi-thieu',
          position: 'left',
          label: 'Tài liệu',
        },
        {
          href: 'https://github.com/novaboltlabs/novabolt',
          label: 'GitHub',
          position: 'right',
        },
        {
          label: 'Demo',
          position: 'left',
          items: [
            {
              label: 'Khách hàng',
              href: 'https://demo.novabolt.dev/user'
            },
            {
              label: 'Quản trị viên',
              href: 'https://demo.novabolt.dev/admin'
            }
          ]
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Novabolt Labs`,
    },
    prism: {
      additionalLanguages: ['php'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        }
      },
    ],
  ],
}

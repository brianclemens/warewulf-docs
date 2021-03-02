module.exports = {
  title: 'Warewulf',
  tagline: 'A stateless and diskless container operating system provisioning system for large clusters of bare metal and/or virtual systems.',
  url: 'https://warewulf.ctrliq.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'ctrliq',
  projectName: 'warewulf',
  themeConfig: {
    navbar: {
      title: 'Warewulf',
      logo: {
        alt: 'Warewulf Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'recipes', label: 'Recipes', position: 'left'},
        {to: 'news', label: 'News', position: 'left'},
        {to: 'videos', label: 'Videos', position: 'left'},
        {
          href: 'https://github.com/ctrliq/warewulf',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs',
            },
            {
              label: 'Videos',
              to: 'videos',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/hpcng/shared_invite/zt-ll5c3ofb-XhvMPbXUhTVrHlutQz2jbA',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCQbKq1vIffqRAMUDPfHcU0w',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'News',
              to: 'news',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ctrliq/warewulf',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ctrl IQ, Inc. - All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/ctrliq/warewulf-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/ctrliq/warewulf-docs/edit/master/blog/',
          routeBasePath: 'news',
          path: './news',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  basePath: '/bounty-system-documentation',
  images: {
    unoptimized: true,
  },
});

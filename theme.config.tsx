import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
      <span style={{ fontSize: '1.25rem' }}>
        Git<span style={{ color: '#10b981' }}>Busters</span>
      </span>
    </span>
  ),
  project: {
    link: 'https://github.com/miguelemosreverte/bounty-platform',
  },
  docsRepositoryBase: 'https://github.com/miguelemosreverte/bounty-platform/tree/main/docs',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} GitBusters. Blockchain-powered bounties for open source.
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="GitBusters - Blockchain-powered bounty system for open source development" />
      <meta name="og:title" content="GitBusters Documentation" />
    </>
  ),
  primaryHue: 155,
  primarySaturation: 70,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - GitBusters Docs',
    };
  },
};

export default config;

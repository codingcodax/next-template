import type { DefaultSeoProps } from 'next-seo';

const title = 'Next.js Template';
const description =
  'Next.js template with T3 Stack and template inspired by Shadcn.';
const domain = 'https://template.codingcodax.dev/';

export const SEO: DefaultSeoProps = {
  defaultTitle: title,
  titleTemplate: `%s | ${title}`,
  description,
  canonical: domain,
  openGraph: {},
  twitter: {},
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
};

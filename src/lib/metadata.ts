// src/lib/metadata.ts

import { Metadata } from 'next';
import { siteContent } from './content';

const { baseUrl, name: siteName } = siteContent.site;
const { headline, subheadline } = siteContent.home;

const metadataBase = {
  title: {
    default: `${siteName} - Petualangan Menanti`,
    template: `%s | ${siteName}`,
  },
  description: subheadline,
  keywords: ['Genshin Impact', 'Next.js', 'AMP', 'Teyvat', 'HoYoverse'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'id-ID': baseUrl,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: headline,
    description: subheadline,
    url: baseUrl,
    siteName: siteName,
    images: [
      {
        url: `${baseUrl}/images/og-home.svg`,
        width: 1200,
        height: 630,
        alt: 'Genshin Impact Open Graph Image',
      },
    ],
    locale: siteContent.site.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: headline,
    description: subheadline,
    images: [`${baseUrl}/images/og-home.svg`],
  },
};

export const ampMetadata = {
  title: `${siteName} - Petualangan Menanti (AMP)`,
  description: subheadline,
  canonical: baseUrl,
};

export const siteMetadata: Metadata = metadataBase;
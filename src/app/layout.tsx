import React from 'react';
import '../styles/index.css';
import { Montserrat } from 'next/font/google';
import type { Metadata, Viewport } from 'next';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-main',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://trivista-consulting.com.ua'),

  title: 'Trivista Consulting',
  description:
    'Trivista Consulting — професійний консалтинг для бізнесу. Стратегія розвитку, управління, цифрові рішення та підтримка росту компаній.',

  icons: {
    icon: [{ url: '/favicon.webp' }],
  },

  openGraph: {
    title: 'Trivista Consulting',
    description:
      'Професійний бізнес-консалтинг: стратегія розвитку, управління, цифрові рішення та підтримка росту компаній.',
    url: 'https://trivista-consulting.com.ua',
    siteName: 'Trivista Consulting',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Trivista Consulting',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Trivista Consulting',
    description:
      'Професійний бізнес-консалтинг: стратегія розвитку, управління та цифрові рішення.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={montserrat.variable}>
        {children}
        <script
          type="module"
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbuddhasa1071back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.7"
        ></script>
      </body>
    </html>
  );
}

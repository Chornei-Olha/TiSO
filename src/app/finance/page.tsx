import Header from '../../components/ui/Header';
import FinancePage from '../../components/ui/FinanceServices';
import Footer from '../../components/ui/Footer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Бухгалтерські послуги та фінансовий консалтинг | TriVista Consulting g',
  description:
    'Бухгалтерські послуги та фінансовий консалтинг для бізнесу. Аутсорсинг бухгалтерського обліку, фінансова звітність, фінансовий аналіз та стратегічне управління фінансами компанії.',

  openGraph: {
    title: 'Бухгалтерські послуги та фінансовий консалтинг | TriVista Consulting ',
    description:
      'Бухгалтерські послуги та фінансовий консалтинг для бізнесу. Аутсорсинг бухгалтерського обліку, фінансова звітність, фінансовий аналіз та стратегічне управління фінансами компанії.',
    url: 'https://trivista-consulting.com.ua',
    siteName: 'TriVista Consulting',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TriVista Consulting',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Бухгалтерські послуги та фінансовий консалтинг | TriVista Consulting ',
    description:
      'Бухгалтерські послуги та фінансовий консалтинг для бізнесу. Аутсорсинг бухгалтерського обліку, фінансова звітність, фінансовий аналіз та стратегічне управління фінансами компанії. ',
    images: ['/og-image.png'],
  },
};

const Products: React.FC = () => {
  return (
    <>
      <Header />
      <FinancePage />
      <Footer />
    </>
  );
};
export default Products;

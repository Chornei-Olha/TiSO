import Header from '../../components/ui/Header';
import LegalServices from '../../components/ui/LegalServices';
import Footer from '../../components/ui/Footer';

import type { Metadata } from 'next';
import CDA from '../../components/ui/CDA';

export const metadata: Metadata = {
  title: 'Юридичні послуги для бізнесу та підприємців | TriVista Consulting',
  description:
    'Юридичні послуги для бізнесу та підприємців: договірний супровід, корпоративне право, податкові консультації, судовий захист та юридичний супровід компаній. TriVista Consulting.',

  openGraph: {
    title: 'Юридичні послуги для бізнесу та підприємців | TriVista Consulting',
    description:
      'Юридичні послуги для бізнесу та підприємців: договірний супровід, корпоративне право, податкові консультації, судовий захист та юридичний супровід компаній. TriVista Consulting.',
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
    title: 'Юридичні послуги для бізнесу та підприємців | TriVista Consulting',
    description:
      'Юридичні послуги для бізнесу та підприємців: договірний супровід, корпоративне право, податкові консультації, судовий захист та юридичний супровід компаній. TriVista Consulting.',
    images: ['/og-image.png'],
  },
};

const Products: React.FC = () => {
  return (
    <>
      <Header />
      <LegalServices />
      <CDA />
      <Footer />
    </>
  );
};
export default Products;

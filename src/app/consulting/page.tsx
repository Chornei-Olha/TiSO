import Header from '../../components/ui/Header';
import ConsultingPage from '../../components/ui/ConsultingServices';
import Footer from '../../components/ui/Footer';

import type { Metadata } from 'next';
import CDA from '../../components/ui/CDA';

export const metadata: Metadata = {
  title: 'Бізнес-консалтинг для розвитку та масштабування компаній | TriVista Consulting',
  description:
    'Професійний бізнес-консалтинг для компаній та підприємців: стратегічне планування, оптимізація бізнес-процесів, фінансовий аналіз та розвиток бізнесу.',

  openGraph: {
    title: 'Бізнес-консалтинг для розвитку та масштабування компаній | TriVista Consulting',
    description:
      'Професійний бізнес-консалтинг для компаній та підприємців: стратегічне планування, оптимізація бізнес-процесів, фінансовий аналіз та розвиток бізнесу.',
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
    title: 'Бізнес-консалтинг для розвитку та масштабування компаній | TriVista Consulting',
    description:
      'Професійний бізнес-консалтинг для компаній та підприємців: стратегічне планування, оптимізація бізнес-процесів, фінансовий аналіз та розвиток бізнесу.',
    images: ['/og-image.png'],
  },
};

const Products: React.FC = () => {
  return (
    <>
      <Header />
      <ConsultingPage />
      <CDA />
      <Footer />
    </>
  );
};
export default Products;

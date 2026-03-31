import React from 'react';
import type { Metadata } from 'next';
import Header from '../components/ui/Header';
import HeroGate from '../components/ui/HeroGate';
import FeatureGate from '../components/ui/FeatureGate';
import HeroGateBg from '../components/ui/HeroGateBg';
import ExperienceSection from '../components/ui/ExperienceSection';
import FaceRecognitionSection from '../components/ui/FaceRecognitionSection';
import BrandSection from '../components/ui/BrandSection';
import SpecificationsSection from '../components/ui/SpecificationsSection';
import VideoFeatureSection from '../components/ui/VideoFeatureSection';
import GateFeaturesShowcase from '../components/ui/GateFeaturesShowcase';
import Footer from '../components/ui/Footer';
import ContactSection from '../components/ui/ContactSection';

export const metadata: Metadata = {
  title: 'Lets Make Life Safer | TiSO',
  description: 'Lets Make Life Safer',

  openGraph: {
    title: 'Lets Make Life Safer | TiSO',
    description: 'Lets Make Life Safer',
    url: '',
    siteName: 'TiSO',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TiSO',
      },
    ],
    locale: 'en_EN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: '',
    description: '',
    images: ['/og-image.png'],
  },
};

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen font-inter overflow-x-hidden">
        <Header />
        <HeroGate />
        <FeatureGate />
        <HeroGateBg />
        <ExperienceSection />
        <FaceRecognitionSection />
        <BrandSection />
        <SpecificationsSection />
        <VideoFeatureSection />
        <GateFeaturesShowcase />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;

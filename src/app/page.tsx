'use client';
import React from 'react';
import Header from '../components/ui/Header';
import HeroSection from '../components/ui/HeroSection';
import AboutSection from '../components/ui/AboutSection';
import DirectionsSection from '../components/ui/DirectionsSection';
// import HowWeWork from '../components/ui/HowWeWork';
import WhyUs from '../components/ui/WhyUs';
import Footer from '../components/ui/Footer';
import BoardSlider from '../components/ui/BoardSlider';
import BoardSlide_2 from '../components/ui/BoardSlider_2';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen font-inter overflow-x-hidden">
      <Header />
      <HeroSection />
      <BoardSlider />
      <BoardSlide_2 />
      <AboutSection />
      <DirectionsSection />
      {/* <HowWeWork /> */}
      <WhyUs />
      <Footer />
    </div>
  );
};
export default LandingPage;

import React from 'react';
import Hero from '../../components/feature/hero';
import Footer from '../../components/layout/footer';
import Solution from '../../components/section1';
import OurService from '../../components/section2';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Solution />
      <OurService />
      <Footer />
    </div>
  );
};

export default LandingPage;

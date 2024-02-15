import React from 'react';
import Hero from '../../components/feature/hero';
import Footer from '../../components/layout/footer';
import Solution from '../../components/section1';
import OurService from '../../components/section2';
import WorkFlow from '../../components/section3';
import OurDoctors from '../../components/section4';
import Help from '../../components/section6';
import Reviews from '../../components/section5';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Solution />
      <OurService />
      <WorkFlow />
      <OurDoctors />
      <Reviews />
      <Help />
      <Footer />

      {/* <ResponsiveIndicator /> */}
    </div>
  );
};

export default LandingPage;

// export const ResponsiveIndicator = () => {
//   if (process.env.NODE_ENV === 'production') return null;

//   return (
//     <div className='fixed bottom-1 left-1 z-[999999999] flex h-6 w-6 items-center justify-center rounded-full bg-red-800 p-3 font-mono text-xs text-white'>
//       <div className='block sm:hidden'>xs</div>
//       <div className='hidden sm:block md:hidden'>sm</div>
//       <div className='hidden md:block lg:hidden'>md</div>
//       <div className='hidden lg:block xl:hidden'>lg</div>
//       <div className='hidden xl:block 2xl:hidden'>xl</div>
//       <div className='hidden 2xl:block'>2xl</div>
//     </div>
//   );
// };

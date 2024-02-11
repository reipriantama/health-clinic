import React from "react";
import Hero from "../../components/feature/hero";
import Footer from "../../components/layout/footer";
import Solution from "../../components/section1";
import OurService from "../../components/section2";
import WorkFlow from "../../components/section3";
import OurDoctors from "../../components/section4";
import Help from "../../components/section6";
import Reviews from "../../components/section5";

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
    </div>
  );
};

export default LandingPage;

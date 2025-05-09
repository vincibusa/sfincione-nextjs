// src/SfincioneFest.tsx
import React from "react";
import Header from "@/app/components/Header";

import AboutSection from "@/app/components/AboutSection";

import ScheduleSection from "@/app/components/ScheduleSection";


import PresentersSection from "@/app/components/PresentersSection";
import LocationSection from "@/app/components/LocationSection";
import SponsorSection from "@/app/components/SponsorSection";

import Footer from "@/app/components/Footer";
import HeroVideo from "@/app/components/HeroVideo";

const SfincioneFest: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <Header />
    <HeroVideo />
      <AboutSection />

      <ScheduleSection />
   
      <PresentersSection />
      <LocationSection />
      <SponsorSection />
  
      <Footer />
    </div>
  );
};

export default SfincioneFest;

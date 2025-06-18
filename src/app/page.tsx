// src/SfincioneFest.tsx
import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AboutSectionWrapper from "@/app/components/server/AboutSectionWrapper";
import ScheduleSectionWrapper from "./components/server/ScheduleSectionWrapper";
import PresentersSectionWrapper from "./components/server/PresentersSectionWrapper";
import LocationSectionWrapper from "./components/server/LocationSectionWrapper";
import SponsorSectionWrapper from "./components/server/SponsorSectionWrapper";
import HeroVideoWrapper from "./components/server/HeroVideoWrapper";
const SfincioneFest: React.FC = () => {
  return (
    <main 
      className="min-h-screen bg-white text-neutral-800"
      role="main"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <Header />
    <HeroVideoWrapper />
      <AboutSectionWrapper />

      <ScheduleSectionWrapper />
   
      <PresentersSectionWrapper />
      <LocationSectionWrapper />
      <SponsorSectionWrapper   />
  
      <Footer />
    </main>
  );
};

export default SfincioneFest;


import AboutSection from "../AboutSection";
import Script from 'next/script';

export default function AboutSectionWrapper() {
  return (
    <>
      <Script
        id="about-section-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Cannolo Fest",
              "description": "Festival che celebra il cannolo siciliano e la cultura Arbëreshë con pasticcerie artigianali, dimostrazioni culinarie e tradizioni siciliane",
              "image": "https://cannolofest.it/about.JPG",
              "url": "https://cannolofest.it/#about",
              "foundingDate": "2023",
              "knowsAbout": [
                "Pasticceria siciliana",
                "Cultura Arbëreshë",
                "Tradizioni culinarie siciliane", 
                "Cannolo siciliano"
              ],
              "areaServed": {
                "@type": "Place",
                "name": "Sicilia",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "Sicilia",
                  "addressCountry": "Italia"
                }
              },
              "member": {
                "@type": "Organization",
                "name": "Catanzaro & Partners",
                "description": "Società che organizza e produce eventi di caratura nazionale"
              }
            }
          })
        }}
      />
      <AboutSection />
    </>
  );
} 
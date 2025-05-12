import LocationSection from "../LocationSection";
import Script from 'next/script';

export default function LocationSectionWrapper() {
  return (
    <>
      <Script
        id="location-section-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "name": "Piana degli Albanesi",
            "description": "Cittadina pittoresca a circa 25 km da Palermo, famosa per la sua storia unica come comunità arbëreshë (italo-albanese) fondata nel XV secolo. Sede del Cannolo Fest.",
            "image": "https://cannolofest.it/luogo.JPG",
            "url": "https://cannolofest.it/#location",
            "telephone": "+39 327 167 7871",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.9947",
              "longitude": "13.2814"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Piana degli Albanesi",
              "addressRegion": "Palermo",
              "addressCountry": "IT"
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Orari Festival",
                "value": "17-18 Maggio 2025, dalle 10:00 alle 23:00"
              },
              {
                "@type": "PropertyValue",
                "name": "Tradizione",
                "value": "Comunità arbëreshë (italo-albanese) che mantiene lingua, costumi e tradizioni albanesi"
              }
            ],
            "publicAccess": true,
            "tourBookingPage": "https://cannolofest.it/tickets",
            "hasMap": "https://maps.google.com/maps?q=37.9947,13.2814&z=15"
          })
        }}
      />
      <LocationSection />
    </>
  );
} 
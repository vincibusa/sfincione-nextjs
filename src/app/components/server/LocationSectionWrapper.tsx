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
            "name": "Bagheria",
            "description": "Bagheria è una vivace cittadina della provincia di Palermo famosa per le sue ville settecentesche e la sua ricca tradizione gastronomica siciliana. È conosciuta per le sue tradizioni culinarie, tra cui il famoso sfincione siciliano, e per la sua posizione strategica nella provincia palermitana. La città rappresenta un punto di incontro ideale per celebrare l'eccellenza culinaria dell'isola. Sede dello Sfincione Fest.",
            "image": "https://sfincionefest.it/luogo.JPG",
            "url": "https://sfincionefest.it/#location",
            "telephone": "+39 327 167 7871",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 38.078638,
              "longitude": 13.507068
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Corso Umberto I",
              "addressLocality": "Bagheria",
              "addressRegion": "Palermo",
              "postalCode": "90011",
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
            "tourBookingPage": "https://sfincionefest.it/tickets",
            "hasMap": "https://maps.google.com/maps?q=37.9947,13.2814&z=15"
          })
        }}
      />
      <LocationSection />
    </>
  );
} 
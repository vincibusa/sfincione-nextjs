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
              "name": "Sfincione Fest",
              "description": "Festival gastronomico che celebra lo sfincione siciliano, giunto alla settima edizione con oltre 130.000 visitatori a Bagheria. Tra le principali manifestazioni enogastronomiche della Sicilia, promuove la cultura gastronomica siciliana attraverso degustazioni, cooking show e competizioni culinarie",
              "image": "https://sfincionefest.it/about.JPG",
              "url": "https://sfincionefest.it/#about",
              "foundingDate": "2018",
              "knowsAbout": [
                "Sfincione siciliano tradizionale",
                "Sfincione bianco di Bagheria",
                "Cultura gastronomica siciliana", 
                "Street food siciliano",
                "Panificazione artigianale",
                "Competizioni culinarie"
              ],
              "event": {
                "@type": "FoodEvent",
                "name": "Sfincione Fest Bagheria",
                "description": "Manifestazione enogastronomica che celebra lo sfincione, la 'pizza dei siciliani', con degustazioni, show cooking e spettacoli musicali",
                "eventAttendanceMode": "OfflineEventAttendanceMode",
                "eventStatus": "EventScheduled",
                "location": "Corso Umberto I, Bagheria",
                "organizer": "Associazione La Piana d'Oro"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Bagheria e Provincia di Palermo",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bagheria",
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
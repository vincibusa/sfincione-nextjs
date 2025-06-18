import SponsorSection from "../SponsorSection";
import Script from 'next/script';

export default function SponsorSectionWrapper() {
  return (
    <>
      <Script
        id="sponsor-section-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sfincione Fest",
            "url": "https://sfincionefest.it",
            "sponsor": [
              {
                "@type": "Organization",
                "name": "Comune di Piana degli Albanesi",
                "image": "https://sfincionefest.it/loghi istituzionali/loghi istituzionali-19.png",
                "url": "https://www.comune.pianadeglialbanesi.pa.it/",
                "description": "Co-Organizzazione"
              },
              {
                "@type": "Organization",
                "name": "Catanzaro & Partners",
                "image": "https://sfincionefest.it/loghi istituzionali/loghi istituzionali-20.png",
                "url": "https://sfincionefest.it",
                "description": "Co-Organizzazione"
              },
              {
                "@type": "Organization",
                "name": "Regione Sicilia",
                "image": "https://sfincionefest.it/loghi istituzionali/loghi istituzionali-21.png",
                "url": "https://www.regione.sicilia.it/",
                "description": "Patrocinio Istituzionale"
              },
              {
                "@type": "Organization",
                "name": "Sicilia Enogastronomica",
                "image": "https://sfincionefest.it/loghi istituzionali/loghi istituzionali-22.png",
                "url": "https://www.siciliaenogastronomica.it/",
                "description": "Patrocinio Istituzionale"
              },
              {
                "@type": "Organization",
                "name": "Giornale di Sicilia",
                "image": "https://sfincionefest.it/loghi istituzionali/loghi istituzionali-23.png",
                "url": "https://gds.it/",
                "description": "Media Partner"
              },
              {
                "@type": "Organization",
                "name": "TGS",
                "image": "https://sfincionefest.it/loghi istituzionali/loghi istituzionali-24.png",
                "url": "https://www.tgs.it/",
                "description": "Media Partner"
              }
            ],
            "funding": [
              {
                "@type": "Grant",
                "name": "Patrocinio Istituzionale",
                "funder": {
                  "@type": "Organization",
                  "name": "Regione Sicilia"
                }
              }
            ],
            "knowsAbout": [
              "Festival Gastronomico",
              "Sfincione Siciliano",
              "Tradizione Culinaria",
              "Cultura Arbëreshë"
            ]
          })
        }}
      />
      <SponsorSection />
    </>
  );
} 
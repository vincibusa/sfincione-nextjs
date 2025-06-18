import HeroVideo from "../HeroVideo";
import Script from 'next/script';

export default function HeroVideoWrapper() {
  return (
    <>
      <Script
        id="hero-section-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Festival",
            "name": "Sfincione Fest",
            "description": "Il primo festival dello sfincione nel mondo. Celebrazione della tradizione pasticcera siciliana e della cultura arbëreshë.",
            "image": "https://sfincionefest.it/logohero.png",
            "video": {
              "@type": "VideoObject",
              "name": "Sfincione Fest Promo Video",
              "description": "Video promozionale dello Sfincione Fest, il primo festival dello sfincione nel mondo",
              "thumbnailUrl": "https://sfincionefest.it/og-image.jpg",
              "contentUrl": "https://sfincionefest.it/sfincioneVideo.mp4",
              "uploadDate": "2024-01-01T08:00:00+01:00",
              "duration": "PT30S"
            },
            "startDate": "2025-05-17T10:30:00+02:00",
            "endDate": "2025-05-18T23:00:00+02:00",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "Piana degli Albanesi",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Piana degli Albanesi",
                "addressRegion": "Palermo",
                "addressCountry": "IT"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "Catanzaro & Partners",
              "url": "https://sfincionefest.it"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01T00:00:00+01:00",
              "url": "https://sfincionefest.it/tickets"
            },
            "performer": [
              {
                "@type": "Person",
                "name": "Maestri Pasticceri Siciliani"
              },
              {
                "@type": "MusicGroup",
                "name": "Artisti e Gruppi Musicali"
              }
            ]
          })
        }}
      />
      <HeroVideo />
    </>
  );
} 
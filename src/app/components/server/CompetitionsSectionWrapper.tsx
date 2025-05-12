import CompetitionsSection from "../CompetitionsSection";
import Script from 'next/script';

export default function CompetitionsSectionWrapper() {
  return (
    <>
      <Script
        id="competitions-section-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SportsEvent",
              "name": "Il Miglior Cannolo di Sicilia",
              "description": "La competizione principale del festival dove pasticceri professionisti si sfidano per creare il cannolo più autentico e delizioso secondo la tradizione siciliana.",
              "image": "https://images.unsplash.com/photo-1635924339056-b122fb1e418e?w=800&q=80",
              "url": "https://cannolofest.it/#competitions",
              "startDate": "2024-05-18T11:00:00+02:00",
              "endDate": "2024-05-18T13:00:00+02:00",
              "location": {
                "@type": "Place",
                "name": "Palco Principale, Piazza Vittorio Emanuele",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Piana degli Albanesi",
                  "addressRegion": "Palermo",
                  "addressCountry": "IT"
                }
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR",
                "url": "https://cannolofest.it/tickets"
              },
              "performer": {
                "@type": "Person",
                "name": "Pasticceri professionisti"
              },
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "competitor": {
                "@type": "Person",
                "name": "Pasticceri Professionisti"
              },
              "organizer": {
                "@type": "Organization",
                "name": "Cannolo Fest",
                "url": "https://cannolofest.it"
              },
              "sponsor": {
                "@type": "Organization",
                "name": "Catanzaro & Partners",
                "url": "https://cannolofest.it"
              },
              "prize": "€1.000 e il trofeo 'Cannolo d'Oro'"
            },
            {
              "@context": "https://schema.org",
              "@type": "SportsEvent",
              "name": "Sfida dei Pasticceri Amatoriali",
              "description": "I cuochi casalinghi competono per creare la loro personale interpretazione del cannolo siciliano utilizzando ingredienti forniti dall'organizzazione.",
              "image": "https://cannolofest.it/og-image.jpg",
              "url": "https://cannolofest.it/#competitions",
              "startDate": "2024-05-17T15:00:00+02:00",
              "endDate": "2024-05-17T17:00:00+02:00",
              "location": {
                "@type": "Place",
                "name": "Area Workshop, Piazza Vittorio Emanuele",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Piana degli Albanesi",
                  "addressRegion": "Palermo",
                  "addressCountry": "IT"
                }
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR",
                "url": "https://cannolofest.it/tickets"
              },
              "performer": {
                "@type": "Person",
                "name": "Pasticceri amatoriali"
              },
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "competitor": {
                "@type": "Person",
                "name": "Pasticceri amatoriali"
              },
              "organizer": {
                "@type": "Organization",
                "name": "Cannolo Fest",
                "url": "https://cannolofest.it"
              },
              "prize": "€300 + Corso di Pasticceria"
            },
            {
              "@context": "https://schema.org",
              "@type": "SportsEvent",
              "name": "Concorso Junior Pasticceri",
              "description": "Giovani chef dai 8-14 anni mostrano le loro abilità nella preparazione dei cannoli in un ambiente divertente e stimolante.",
              "image": "https://cannolofest.it/og-image.jpg",
              "url": "https://cannolofest.it/#competitions",
              "startDate": "2024-05-18T10:00:00+02:00",
              "endDate": "2024-05-18T12:00:00+02:00",
              "location": {
                "@type": "Place",
                "name": "Area Workshop, Piazza Vittorio Emanuele",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Piana degli Albanesi",
                  "addressRegion": "Palermo",
                  "addressCountry": "IT"
                }
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR",
                "url": "https://cannolofest.it/tickets"
              },
              "performer": {
                "@type": "Person",
                "name": "Junior Pasticceri (8-14 anni)"
              },
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "organizer": {
                "@type": "Organization",
                "name": "Cannolo Fest",
                "url": "https://cannolofest.it"
              },
              "prize": "Kit da Pasticceria + Medaglia"
            }
          ])
        }}
      />
      <CompetitionsSection />
    </>
  );
} 
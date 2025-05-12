import ScheduleSection from "../ScheduleSection";
import Script from 'next/script';

export default function ScheduleSectionWrapper() {
  // Creiamo strutture per ogni evento singolo nel calendario
  const eventsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      // Giorno 1 - Sabato 17 Maggio
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Event",
          "name": "Cannolo Taste e Cannolo Expo",
          "description": "Inaugurazione del festival con stand espositivi e degustazioni.",
          "startDate": "2024-05-17T10:30:00+02:00",
          "endDate": "2024-05-17T23:00:00+02:00",
          "location": {
            "@type": "Place",
            "name": "Piazza Vittorio Emanuele",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sicilia",
              "addressRegion": "IT",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://cannolofest.it/tickets"
          },
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Event",
          "name": "Talk Show: Il cannolo prodotto identitario",
          "description": "Talk Show: 'Il cannolo prodotto identitario e principe dei dolci dell'enogastronomia siciliana'.",
          "startDate": "2024-05-17T11:00:00+02:00", 
          "endDate": "2024-05-17T12:00:00+02:00",
          "performer": {
            "@type": "Person",
            "name": "Esperti di gastronomia"
          },
          "location": {
            "@type": "Place",
            "name": "Palco Centrale, Piazza Vittorio Emanuele",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sicilia",
              "addressRegion": "IT",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://cannolofest.it/tickets"
          },
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Event",
          "name": "Presentazione libro di Mario Liberto",
          "description": "Presentazione libro: 'Storia dell'enogastronomia siciliana. Da Polifemo alla patria alimentare'.",
          "startDate": "2024-05-17T17:00:00+02:00", 
          "endDate": "2024-05-17T18:00:00+02:00",
          "performer": {
            "@type": "Person",
            "name": "Mario Liberto",
            "description": "Autore"
          },
          "location": {
            "@type": "Place",
            "name": "Area Cultura, Piazza Vittorio Emanuele",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sicilia",
              "addressRegion": "IT",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://cannolofest.it/tickets"
          },
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Event",
          "name": "Workshop sulla cassata con Giuseppe Sparacello",
          "description": "Workshop sulla cassata con degustazione a cura di Giuseppe Sparacello.",
          "startDate": "2024-05-17T18:00:00+02:00", 
          "endDate": "2024-05-17T19:00:00+02:00",
          "performer": {
            "@type": "Person",
            "name": "Giuseppe Sparacello",
            "description": "Maestro pasticciere"
          },
          "location": {
            "@type": "Place",
            "name": "Area Workshop, Piazza Vittorio Emanuele",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sicilia",
              "addressRegion": "IT",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://cannolofest.it/tickets"
          },
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
        }
      },
      // Giorno 2 - Domenica 18 Maggio
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Event",
          "name": "Workshop sul panettone con Mario Fiasconaro",
          "description": "Workshop sul panettone con degustazione a cura di Mario Fiasconaro.",
          "startDate": "2024-05-18T16:00:00+02:00", 
          "endDate": "2024-05-18T17:00:00+02:00",
          "performer": {
            "@type": "Person",
            "name": "Mario Fiasconaro",
            "description": "Maestro pasticciere"
          },
          "location": {
            "@type": "Place",
            "name": "Area Workshop, Piazza Vittorio Emanuele",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sicilia",
              "addressRegion": "IT",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://cannolofest.it/tickets"
          },
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Event",
          "name": "Workshop sulla cassata con Giovanni Cappello",
          "description": "Workshop sulla cassata con degustazione a cura di Giovanni Cappello.",
          "startDate": "2024-05-18T17:00:00+02:00", 
          "endDate": "2024-05-18T18:00:00+02:00",
          "performer": {
            "@type": "Person",
            "name": "Giovanni Cappello",
            "description": "Maestro pasticciere"
          },
          "location": {
            "@type": "Place",
            "name": "Area Workshop, Piazza Vittorio Emanuele",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sicilia",
              "addressRegion": "IT",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://cannolofest.it/tickets"
          },
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Event",
          "name": "Man vs Cannolo Competition",
          "description": "La sfida a chi mangia il cannolo più grande.",
          "startDate": "2024-05-18T18:00:00+02:00", 
          "endDate": "2024-05-18T22:00:00+02:00",
          "performer": {
            "@type": "Organization",
            "name": "Cannolo Fest"
          },
          "location": {
            "@type": "Place",
            "name": "Palco Competizioni, Piazza Vittorio Emanuele",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sicilia",
              "addressRegion": "IT",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://cannolofest.it/tickets"
          },
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="schedule-section-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventsJsonLd)
        }}
      />
      <ScheduleSection />
    </>
  );
} 
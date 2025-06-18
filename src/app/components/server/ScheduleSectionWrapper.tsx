import ScheduleSection from "../ScheduleSection";
import Script from 'next/script';

export default function ScheduleSectionWrapper() {
  // Programma dello Sfincione Fest 2024 (edizione passata) - Il programma 2025 è in fase di elaborazione
  const eventsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      // Venerdì 22 Novembre 2024 - Giorno 1
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Event",
          "name": "Inaugurazione Sfincione Fest - Sfincione Taste",
          "description": "Inaugurazione della settima edizione del festival con degustazioni di sfincione bianco e rosso lungo Corso Umberto I nelle casette dei panificatori siciliani.",
          "startDate": "2024-11-22T17:00:00+01:00",
          "endDate": "2024-11-22T22:00:00+01:00",
          "location": {
            "@type": "Place",
            "name": "Corso Umberto I, Bagheria",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bagheria",
              "addressRegion": "Sicilia",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://sfincionefest.it/tickets"
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
          "name": "Show Cooking con Andy Luotto e Giusina in Cucina",
          "description": "Show cooking con le star della televisione culinaria Andy Luotto e Giusina nello Sfincione Taste di fronte Villa Palagonia.",
          "startDate": "2024-11-22T18:00:00+01:00",
          "endDate": "2024-11-22T20:00:00+01:00",
          "performer": {
            "@type": "Person",
            "name": "Andy Luotto, Giusina in Cucina"
          },
          "location": {
            "@type": "Place",
            "name": "Villa Palagonia - Sfincione Taste",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bagheria",
              "addressRegion": "Sicilia",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://sfincionefest.it/tickets"
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
          "name": "Cugini di Campagna in Concerto",
          "description": "Concerto serale del famoso gruppo musicale Cugini di Campagna sul palco di Piazza Madrice.",
          "startDate": "2024-11-22T21:00:00+01:00",
          "endDate": "2024-11-22T23:00:00+01:00",
          "performer": {
            "@type": "MusicGroup",
            "name": "Cugini di Campagna"
          },
          "location": {
            "@type": "Place",
            "name": "Piazza Madrice, Bagheria",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bagheria",
              "addressRegion": "Sicilia",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://sfincionefest.it/tickets"
          },
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
        }
      },
      // Sabato 23 Novembre 2024 - Giorno 2
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Event",
          "name": "Sfincione Taste - Seconda Giornata",
          "description": "Continuano le degustazioni con sfincioni da tutta la Sicilia: Piana degli Albanesi, Misilmeri, Palermo, Camporeale, Monreale, Santa Flavia, Ficarazzi e Corleone.",
          "startDate": "2024-11-23T17:00:00+01:00",
          "endDate": "2024-11-23T22:00:00+01:00",
          "location": {
            "@type": "Place",
            "name": "Corso Umberto I, Bagheria",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bagheria",
              "addressRegion": "Sicilia",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://sfincionefest.it/tickets"
          },
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Event",
          "name": "Show Cooking con Tony Lo Coco",
          "description": "Show cooking dello chef stellato Tony Lo Coco del ristorante I Pupi di Bagheria nello Sfincione Taste.",
          "startDate": "2024-11-23T18:00:00+01:00",
          "endDate": "2024-11-23T19:30:00+01:00",
          "performer": {
            "@type": "Person",
            "name": "Tony Lo Coco",
            "description": "Chef stellato del ristorante I Pupi"
          },
          "location": {
            "@type": "Place",
            "name": "Villa Palagonia - Sfincione Taste",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bagheria",
              "addressRegion": "Sicilia",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://sfincionefest.it/tickets"
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
          "name": "Sicily Young Bakery Competition",
          "description": "Competizione tra quattro talenti emergenti per il titolo di miglior giovane panificatore dell'anno, promossa dal Molino Riggi.",
          "startDate": "2024-11-23T19:00:00+01:00",
          "endDate": "2024-11-23T20:30:00+01:00",
          "performer": {
            "@type": "Organization",
            "name": "Molino Riggi"
          },
          "location": {
            "@type": "Place",
            "name": "Palco Competizioni, Bagheria",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bagheria",
              "addressRegion": "Sicilia",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://sfincionefest.it/tickets"
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
          "name": "I 40 che ballano '90 - Serata Danzante",
          "description": "Serata danzante fino a tarda sera con lo show degli scatenati '40 che ballano '90'.",
          "startDate": "2024-11-23T21:00:00+01:00",
          "endDate": "2024-11-23T23:30:00+01:00",
          "performer": {
            "@type": "MusicGroup",
            "name": "I 40 che ballano '90"
          },
          "location": {
            "@type": "Place",
            "name": "Piazza Madrice, Bagheria",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bagheria",
              "addressRegion": "Sicilia",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://sfincionefest.it/tickets"
          },
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
        }
      },
      // Domenica 24 Novembre 2024 - Giorno 3
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Event",
          "name": "Sfincione Taste - Ultima Giornata",
          "description": "Ultima giornata di degustazioni con la partecipazione dei migliori panifici: Panificio Conti, Antica Focacceria 1956, Forneria Scaduto e La bontà senza Glutine.",
          "startDate": "2024-11-24T17:00:00+01:00",
          "endDate": "2024-11-24T22:00:00+01:00",
          "location": {
            "@type": "Place",
            "name": "Corso Umberto I, Bagheria",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bagheria",
              "addressRegion": "Sicilia",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://sfincionefest.it/tickets"
          },
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Event",
          "name": "Campionato Nazionale Pizza dell'Identità",
          "description": "Sfida tra quattro regioni: Sicilia (Peppe Martinez), Lazio (Christian Riccio), Toscana (Antonio Minissale) e Campania (Carmine Pellone).",
          "startDate": "2024-11-24T18:00:00+01:00",
          "endDate": "2024-11-24T20:00:00+01:00",
          "performer": {
            "@type": "Organization",
            "name": "Molino Riggi"
          },
          "location": {
            "@type": "Place",
            "name": "Palco Competizioni, Bagheria",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bagheria",
              "addressRegion": "Sicilia",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://sfincionefest.it/tickets"
          },
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Event",
          "name": "Sugarfree in Concerto - Gran Finale",
          "description": "Concerto finale del gruppo musicale Sugarfree per chiudere in bellezza la settima edizione dello Sfincione Fest.",
          "startDate": "2024-11-24T21:00:00+01:00",
          "endDate": "2024-11-24T23:00:00+01:00",
          "performer": {
            "@type": "MusicGroup",
            "name": "Sugarfree"
          },
          "location": {
            "@type": "Place",
            "name": "Piazza Madrice, Bagheria",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bagheria",
              "addressRegion": "Sicilia",
              "addressCountry": "Italia"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "url": "https://sfincionefest.it/tickets"
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
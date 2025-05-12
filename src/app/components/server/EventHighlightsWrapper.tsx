import EventHighlights from "../EventHighlights";
import Script from 'next/script';

export default function EventHighlightsWrapper() {
  return (
    <>
      <Script
        id="highlights-section-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Event",
                  "name": "Cooking Demonstrations",
                  "description": "Watch master chefs prepare authentic Sfincione using traditional techniques and learn their secrets.",
                  "image": "https://cannolofest.it/demo-cooking.jpg",
                  "startDate": "2024-05-17T11:00:00+02:00",
                  "endDate": "2024-05-17T16:00:00+02:00",
                  "location": {
                    "@type": "Place",
                    "name": "Main Stage, Piazza Vittorio Emanuele",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Piana degli Albanesi",
                      "addressRegion": "Palermo",
                      "addressCountry": "IT"
                    }
                  },
                  "performer": {
                    "@type": "Person",
                    "name": "Master Chefs"
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
                  "name": "Tasting Competition",
                  "description": "Sample varieties of Sfincione from different bakers and vote for your favorite in our people's choice award.",
                  "image": "https://cannolofest.it/tasting.jpg",
                  "startDate": "2024-05-18T14:00:00+02:00",
                  "endDate": "2024-05-18T16:00:00+02:00",
                  "location": {
                    "@type": "Place",
                    "name": "Festival Square, Piazza Vittorio Emanuele",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Piana degli Albanesi",
                      "addressRegion": "Palermo",
                      "addressCountry": "IT"
                    }
                  },
                  "performer": {
                    "@type": "Organization",
                    "name": "Local Bakeries"
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
                  "name": "Cultural Performances",
                  "description": "Enjoy traditional Sicilian music and dance performances throughout the festival.",
                  "image": "https://cannolofest.it/performance.jpg",
                  "startDate": "2024-05-17T18:00:00+02:00",
                  "endDate": "2024-05-17T20:00:00+02:00",
                  "location": {
                    "@type": "Place",
                    "name": "Garden Stage, Piazza Vittorio Emanuele",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Piana degli Albanesi",
                      "addressRegion": "Palermo",
                      "addressCountry": "IT"
                    }
                  },
                  "performer": {
                    "@type": "MusicGroup",
                    "name": "Traditional Sicilian Performers"
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
          })
        }}
      />
      <EventHighlights />
    </>
  );
} 
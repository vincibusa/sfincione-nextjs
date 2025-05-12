import PresentersSection from "../PresentersSection";
import Script from 'next/script';

export default function PresentersSectionWrapper() {
  return (
    <>
      <Script
        id="presenters-section-jsonld"
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
                  "@type": "Person",
                  "name": "Sasà Salvaggio",
                  "jobTitle": "Conduttore",
                  "description": "Comico, conduttore e attore televisivo siciliano, noto per il suo umorismo",
                  "image": "https://cannolofest.it/personaggi/sasa-salvaggio.png",
                  "sameAs": [
                    "https://www.instagram.com/sasa_salvaggio/",
                    "https://twitter.com/sasa_salvaggio"
                  ],
                  "performerIn": {
                    "@type": "Event",
                    "name": "Cannolo Fest",
                    "startDate": "2024-05-17T10:30:00+02:00",
                    "location": {
                      "@type": "Place",
                      "name": "Piazza Vittorio Emanuele",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Piana degli Albanesi",
                        "addressRegion": "Palermo",
                        "addressCountry": "IT"
                      }
                    }
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Person",
                  "name": "Barbara Politi",
                  "jobTitle": "Conduttrice",
                  "description": "Giornalista e conduttrice televisiva. Ha lavorato per Gazzetta del Mezzogiorno, Gambero Rosso tv e Rai",
                  "image": "https://cannolofest.it/personaggi/marianna-bonanno.png",
                  "sameAs": [
                    "https://www.instagram.com/barbara_politi/",
                    "https://twitter.com/barbara_politi"
                  ],
                  "performerIn": {
                    "@type": "Event",
                    "name": "Cannolo Fest",
                    "startDate": "2024-05-17T10:30:00+02:00",
                    "location": {
                      "@type": "Place",
                      "name": "Piazza Vittorio Emanuele",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Piana degli Albanesi",
                        "addressRegion": "Palermo",
                        "addressCountry": "IT"
                      }
                    }
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Person",
                  "name": "Nadia La Malfa",
                  "jobTitle": "Giornalista sportiva",
                  "description": "Giornalista sportiva e comunicatrice istituzionale palermitana",
                  "image": "https://cannolofest.it/personaggi/nadia-la-malfa.png",
                  "sameAs": [
                    "https://www.instagram.com/nadia_lamalfa/",
                    "https://twitter.com/nadia_lamalfa"
                  ],
                  "performerIn": {
                    "@type": "Event",
                    "name": "Cannolo Fest",
                    "startDate": "2024-05-17T10:30:00+02:00",
                    "location": {
                      "@type": "Place",
                      "name": "Piazza Vittorio Emanuele",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Piana degli Albanesi",
                        "addressRegion": "Palermo",
                        "addressCountry": "IT"
                      }
                    }
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "MusicGroup",
                  "name": "I Cugini di Campagna",
                  "image": "https://cannolofest.it/concerti/cugini-campagna.png",
                  "performerIn": {
                    "@type": "MusicEvent",
                    "name": "Concerto I Cugini di Campagna",
                    "startDate": "2024-05-17T20:00:00+02:00",
                    "location": {
                      "@type": "Place",
                      "name": "Palco Principale, Piazza Vittorio Emanuele",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Piana degli Albanesi",
                        "addressRegion": "Palermo",
                        "addressCountry": "IT"
                      }
                    }
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "MusicGroup",
                  "name": "I Quaranta che Ballano i 90",
                  "image": "https://cannolofest.it/concerti/quaranta2.png",
                  "performerIn": {
                    "@type": "MusicEvent",
                    "name": "Concerto I Quaranta che Ballano i 90",
                    "startDate": "2024-05-18T20:00:00+02:00",
                    "location": {
                      "@type": "Place",
                      "name": "Palco Principale, Piazza Vittorio Emanuele",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Piana degli Albanesi",
                        "addressRegion": "Palermo",
                        "addressCountry": "IT"
                      }
                    }
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 6,
                "item": {
                  "@type": "MusicGroup",
                  "name": "Sugarfree",
                  "image": "https://cannolofest.it/concerti/sugarfree.png",
                  "performerIn": {
                    "@type": "MusicEvent",
                    "name": "Concerto Sugarfree",
                    "startDate": "2024-05-18T22:00:00+02:00",
                    "location": {
                      "@type": "Place",
                      "name": "Palco Principale, Piazza Vittorio Emanuele",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Piana degli Albanesi",
                        "addressRegion": "Palermo",
                        "addressCountry": "IT"
                      }
                    }
                  }
                }
              }
            ]
          })
        }}
      />
      <PresentersSection />
    </>
  );
} 
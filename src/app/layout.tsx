import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sfincione Fest 2025 | Festival dello Sfincione Siciliano - Bagheria 6-7-8-9 Novembre",
  description: "Sfincione Fest 2025 a Bagheria: la più grande festa dello street food siciliano. 4 giorni di degustazioni, cooking show con chef stellati, competizioni culinarie e spettacoli musicali. 6-7-8-9 Novembre 2025.",
  keywords: [
    "sfincione fest 2025",
    "sfincione siciliano", 
    "festival gastronomico sicilia",
    "street food siciliano",
    "bagheria eventi",
    "festival del cibo sicilia",
    "sfincione di bagheria",
    "cooking show sicilia",
    "chef stellati sicilia",
    "tony lo coco",
    "eventi gastronomici palermo",
    "tradizioni siciliane",
    "pizza siciliana",
    "cultura arbëreshë",
    "novembre 2025 sicilia",
    "corso umberto bagheria",
    "catanzaro partners eventi"
  ],
  authors: [{ name: "Catanzaro & Partners", url: "https://sfincionefest.it" }],
  creator: "Catanzaro & Partners",
  publisher: "Sfincione Fest",
  metadataBase: new URL("https://sfincionefest.it"),
  alternates: {
    canonical: "/",
  },
  category: "Eventi Gastronomici",
  classification: "Festival Enogastronomico",
  other: {
    "geo.region": "IT-PA",
    "geo.placename": "Bagheria",
    "geo.position": "38.078638;13.507068",
    "ICBM": "38.078638, 13.507068",
    "DC.title": "Sfincione Fest 2025 - Festival dello Sfincione Siciliano",
    "DC.creator": "Catanzaro & Partners",
    "DC.subject": "Festival Gastronomico, Sfincione Siciliano, Street Food",
    "DC.description": "Festival dedicato allo sfincione siciliano e alle tradizioni culinarie siciliane",
  },
  openGraph: {
    title: "Sfincione Fest 2025 | La più grande festa dello street food siciliano",
    description: "4 giorni di festa a Bagheria con degustazioni di sfincione siciliano, cooking show con chef stellati, competizioni culinarie e spettacoli musicali. 6-7-8-9 Novembre 2025.",
    url: "https://sfincionefest.it",
    siteName: "Sfincione Fest",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/hero1.JPG",
        width: 1200,
        height: 630,
        alt: "Sfincione Fest 2025 - Festival dello Sfincione Siciliano a Bagheria",
        type: "image/jpeg",
      },
      {
        url: "/LogoSfincione.png", 
        width: 800,
        height: 800,
        alt: "Logo Sfincione Fest 2025",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sfincionefest",
    creator: "@sfincionefest",
    title: "Sfincione Fest 2025 | Festival dello Sfincione Siciliano",
    description: "La più grande festa dello street food siciliano. 6-7-8-9 Novembre 2025 a Bagheria. Degustazioni, cooking show e spettacoli musicali.",
    images: ["/hero1.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "7iXbgvXsCzI1emd9ETa5cVTTW9cTeDa2a4rqpK_WpcE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="application-name" content="Sfincione Fest" />
        <meta name="apple-mobile-web-app-title" content="Sfincione Fest" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/LogoSfincione.png" />
        
        {/* Additional SEO links */}
        <link rel="canonical" href="https://sfincionefest.it" />
        <link rel="alternate" hrefLang="it" href="https://sfincionefest.it" />
        <link rel="alternate" hrefLang="x-default" href="https://sfincionefest.it" />
        
        {/* Structured Data for Event */}
        <Script
          id="schema-event"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEvent",
              "name": "Sfincione Fest 2025",
              "description": "La più grande festa dello street food siciliano. Festival dedicato allo sfincione siciliano con degustazioni, cooking show, competizioni culinarie e spettacoli musicali.",
              "image": [
                "https://sfincionefest.it/hero1.JPG",
                "https://sfincionefest.it/LogoSfincione.png",
                "https://sfincionefest.it/about.JPG"
              ],
              "url": "https://sfincionefest.it",
              "startDate": "2025-11-06T10:00:00+01:00",
              "endDate": "2025-11-09T23:00:00+01:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "Corso Umberto I, Bagheria",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Corso Umberto I",
                  "addressLocality": "Bagheria",
                  "addressRegion": "Sicilia",
                  "postalCode": "90011",
                  "addressCountry": "IT"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 38.078638,
                  "longitude": 13.507068
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": "Catanzaro & Partners",
                "url": "https://sfincionefest.it",
                "telephone": "+39 327 167 7871"
              },
              "performer": [
                {
                  "@type": "Person", 
                  "name": "Tony Lo Coco",
                  "description": "Chef patron del ristorante stellato I Pupi"
                },
                {
                  "@type": "Person",
                  "name": "Sasà Salvaggio", 
                  "description": "Comico, conduttore e attore televisivo siciliano"
                },
                {
                  "@type": "Person",
                  "name": "Barbara Politi",
                  "description": "Giornalista e conduttrice televisiva"
                },
                {
                  "@type": "MusicGroup",
                  "name": "I Cugini di Campagna"
                },
                {
                  "@type": "MusicGroup", 
                  "name": "Sugarfree"
                }
              ],
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": "0",
                "priceCurrency": "EUR",
                "validFrom": "2025-01-01T00:00:00+00:00",
                "url": "https://sfincionefest.it"
              },
              "cuisine": "Sicilian",
              "foodEvent": "Street Food Festival",
              "about": [
                {
                  "@type": "Thing",
                  "name": "Sfincione Siciliano",
                  "description": "Tradizionale focaccia siciliana, specialità di Bagheria"
                },
                {
                  "@type": "Thing", 
                  "name": "Street Food Siciliano",
                  "description": "Cucina tradizionale siciliana di strada"
                }
              ]
            })
          }}
        />

        {/* Structured Data for Organization */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sfincione Fest",
              "alternateName": "Festival dello Sfincione Siciliano",
              "url": "https://sfincionefest.it",
              "logo": "https://sfincionefest.it/LogoSfincione.png",
              "image": "https://sfincionefest.it/hero1.JPG",
              "description": "Festival dedicato allo sfincione siciliano e alle tradizioni culinarie siciliane",
              "telephone": "+39 327 167 7871",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bagheria",
                "addressRegion": "Sicilia", 
                "addressCountry": "IT"
              },
              "sameAs": [
                "https://www.instagram.com/sfincionefest",
                "https://www.facebook.com/sfincionefest"
              ],
              "founder": {
                "@type": "Organization",
                "name": "Catanzaro & Partners"
              }
            })
          }}
        />

        {/* Structured Data for Local Business */}
        <Script
          id="schema-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              "name": "Sfincione Fest",
              "description": "La più grande festa dello street food siciliano a Bagheria",
              "image": "https://sfincionefest.it/hero1.JPG",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Corso Umberto I",
                "addressLocality": "Bagheria",
                "addressRegion": "Sicilia",
                "postalCode": "90011",
                "addressCountry": "IT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 38.078638,
                "longitude": 13.507068
              },
              "touristType": [
                "Culinary Tourism",
                "Cultural Tourism"
              ],
              "isAccessibleForFree": true
            })
          }}
        />

        {/* Breadcrumb Structured Data */}
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://sfincionefest.it"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Festival",
                  "item": "https://sfincionefest.it#about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Programma",
                  "item": "https://sfincionefest.it#schedule"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Location",
                  "item": "https://sfincionefest.it#location"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

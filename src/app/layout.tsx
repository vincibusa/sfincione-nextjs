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
  title: "Sfincione Fest | Festival dello Sfincione Siciliano e della Cultura Arbëreshë",
  description: "Scopri lo Sfincione Fest, il festival che celebra lo sfincione siciliano e la cultura Arbëreshë con pasticcerie artigianali, dimostrazioni culinarie, competizioni e tradizioni siciliane.",
  keywords: ["sfincione siciliano", "festival gastronomico", "pasticceria siciliana", "cultura arbëreshë", "eventi gastronomici sicilia", "tradizioni siciliane"],
  authors: [{ name: "Sfincione Fest" }],
  creator: "Sfincione Fest",
  publisher: "Sfincione Fest",
  metadataBase: new URL("https://sfincionefest.it"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sfincione Fest | Festival dello Sfincione Siciliano",
    description: "Festival che celebra lo sfincione siciliano con pasticcerie artigianali, dimostrazioni culinarie e tradizioni siciliane",
    url: "https://sfincionefest.it",
    siteName: "Sfincione Fest",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sfincione Fest - Festival dello Sfincione Siciliano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sfincione Fest | Festival dello Sfincione Siciliano",
    description: "Festival che celebra lo sfincione siciliano con pasticcerie artigianali, dimostrazioni culinarie e tradizioni siciliane",
    images: ["/og-image.jpg"],
    creator: "@sfincionefest",
  },
  robots: {
    index: true,
    follow: true,
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
        <meta name="google-site-verification" content="7iXbgvXsCzI1emd9ETa5cVTTW9cTeDa2a4rqpK_WpcE" />
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Festival",
              "name": "Sfincione Fest",
              "description": "Festival che celebra lo sfincione siciliano e la cultura Arbëreshë con pasticcerie artigianali, dimostrazioni culinarie e tradizioni siciliane",
              "image": "https://sfincionefest.it/og-image.jpg",
              "url": "https://sfincionefest.it",
              "startDate": "2024-05-17T10:30:00+02:00",
              "endDate": "2024-05-18T23:00:00+02:00",
              "performer": [
                {
                  "@type": "Person",
                  "name": "Giuseppe Sparacello",
                  "description": "Workshop sulla cassata"
                },
                {
                  "@type": "Person",
                  "name": "Salvatore Capizzi",
                  "description": "Patron e pizzaiolo di 'Molecola'"
                },
                {
                  "@type": "Person",
                  "name": "Mario Fiasconaro",
                  "description": "Workshop sul panettone"
                },
                {
                  "@type": "Person",
                  "name": "Giovanni Cappello",
                  "description": "Workshop sulla cassata"
                },
                {
                  "@type": "Organization",
                  "name": "Radio 105",
                  "description": "DJ SET"
                }
              ],
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
              "organizer": {
                "@type": "Organization",
                "name": "Catanzaro & Partners",
                "url": "https://sfincionefest.it"
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": "0",
                "priceCurrency": "EUR",
                "validFrom": "2023-01-01T00:00:00+00:00",
                "url": "https://sfincionefest.it/tickets"
              },
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled"
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

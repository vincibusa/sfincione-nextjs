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
  title: "Cannolo Fest | Festival del Cannolo Siciliano e della Cultura Arbëreshë",
  description: "Scopri il Cannolo Fest, il festival che celebra il cannolo siciliano e la cultura Arbëreshë con pasticcerie artigianali, dimostrazioni culinarie, competizioni e tradizioni siciliane.",
  keywords: ["cannolo siciliano", "festival gastronomico", "pasticceria siciliana", "cultura arbëreshë", "eventi gastronomici sicilia", "tradizioni siciliane"],
  authors: [{ name: "Catanzaro & Partners" }],
  creator: "Cannolo Fest",
  publisher: "Cannolo Fest",
  metadataBase: new URL("https://cannolofest.it"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cannolo Fest | Festival del Cannolo Siciliano",
    description: "Festival che celebra il cannolo siciliano con pasticcerie artigianali, dimostrazioni culinarie e tradizioni siciliane",
    url: "https://cannolofest.it",
    siteName: "Cannolo Fest",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cannolo Fest - Festival del Cannolo Siciliano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cannolo Fest | Festival del Cannolo Siciliano",
    description: "Festival che celebra il cannolo siciliano con pasticcerie artigianali, dimostrazioni culinarie e tradizioni siciliane",
    images: ["/twitter-image.jpg"],
    creator: "@cannolofest",
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
              "name": "Cannolo Fest",
              "description": "Festival che celebra il cannolo siciliano e la cultura Arbëreshë con pasticcerie artigianali, dimostrazioni culinarie e tradizioni siciliane",
              "image": "https://cannolofest.it/og-image.jpg",
              "url": "https://cannolofest.it",
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
                "url": "https://cannolofest.it"
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": "0",
                "priceCurrency": "EUR",
                "validFrom": "2023-01-01T00:00:00+00:00",
                "url": "https://cannolofest.it/tickets"
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

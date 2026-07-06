import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Pas dit aan naar het definitieve domein (met of zonder www).
const siteUrl = "https://paris-bv.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Paris BV — Logistiek, Koerier, Transport & Verkeersregelaars",
    template: "%s — Paris BV",
  },
  description:
    "Paris BV levert betrouwbare logistieke diensten: koerier, transport en professionele verkeersregelaars. Snel, veilig en altijd op tijd — door heel Nederland.",
  applicationName: "Paris BV",
  keywords: [
    "Paris BV",
    "logistiek",
    "logistieke diensten",
    "koeriersdienst",
    "koerier",
    "transport",
    "wegtransport",
    "verkeersregelaars",
    "verkeersregelaar",
    "wegafzetting",
    "evenementen verkeer",
    "Nederland",
  ],
  authors: [{ name: "Paris BV" }],
  creator: "Paris BV",
  publisher: "Paris BV",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: "Paris BV",
    title: "Paris BV — Logistiek & Verkeersregelaars",
    description:
      "Betrouwbare koeriers- en transportdiensten en gecertificeerde verkeersregelaars. Snel, veilig en altijd op tijd.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paris BV — Logistiek & Verkeersregelaars",
    description:
      "Betrouwbare koeriers- en transportdiensten en gecertificeerde verkeersregelaars. Snel, veilig en altijd op tijd.",
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%230b1f3a'/%3E%3Ctext x='50' y='68' font-size='58' font-family='Arial' font-weight='bold' text-anchor='middle' fill='%23ff7a00'%3EP%3C/text%3E%3C/svg%3E",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Paris BV",
  description:
    "Logistieke diensten (koerier en transport) en gecertificeerde verkeersregelaars in Nederland.",
  url: siteUrl,
  email: "info@paris-bv.nl",
  telephone: "+31649450245",
  vatID: "NL005473456B31",
  areaServed: { "@type": "Country", name: "Nederland" },
  address: {
    "@type": "PostalAddress",
    addressCountry: "NL",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Koeriersdiensten" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Verkeersregelaars" } },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${jakarta.variable} ${inter.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

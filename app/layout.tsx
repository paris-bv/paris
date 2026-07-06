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

export const metadata: Metadata = {
  title: "Paris BV — Logistiek, Koerier, Transport & Verkeersregelaars",
  description:
    "Paris BV levert betrouwbare logistieke diensten: koerier, transport en professionele verkeersregelaars. Snel, veilig en altijd op tijd — door heel Nederland.",
  keywords: [
    "Paris BV",
    "logistiek",
    "koeriersdienst",
    "transport",
    "verkeersregelaars",
    "verkeersregelaar",
    "Nederland",
  ],
  openGraph: {
    title: "Paris BV — Logistiek & Verkeersregelaars",
    description:
      "Betrouwbare koeriers- en transportdiensten en gecertificeerde verkeersregelaars. Snel, veilig en altijd op tijd.",
    locale: "nl_NL",
    type: "website",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${jakarta.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anamine.com.tr"),
  title: {
    default: "AnaMine | Mining, Industrial Chemicals & Digital Transformation",
    template: "%s | AnaMine",
  },
  description:
    "AnaMine is a global leader in mining chemicals, industrial procurement, supply chain consultancy, and digital transformation — serving clients across Turkey, Angola, and beyond.",
  keywords: [
    "mining chemicals",
    "industrial procurement",
    "digital transformation",
    "supply chain consultancy",
    "Angola mining",
    "Turkey industrial",
    "ERP implementation",
    "e-sourcing",
    "mining consumables",
  ],
  authors: [{ name: "AnaMine" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.anamine.com.tr",
    siteName: "AnaMine",
    title: "AnaMine | Mining, Industrial Chemicals & Digital Transformation",
    description:
      "Global partner for mining, industrial chemicals, procurement, and digital transformation solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AnaMine Corporate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnaMine | Mining & Industrial Solutions",
    description:
      "Global partner for mining, industrial chemicals, procurement, and digital transformation.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

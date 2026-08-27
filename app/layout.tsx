import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Qwigley } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-heading",
});

const body = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

const script = Qwigley({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: {
    default: "Brand Persona | Thoughtfully Designed Websites",
    template: "%s | Brand Persona",
  },

  description:
    "Brand Persona creates thoughtfully designed, responsive websites for small businesses, professionals and growing organisations.",

  keywords: [
    "web design",
    "website design",
    "website development",
    "responsive web design",
    "small business websites",
    "web design South Africa",
    "web designer Pretoria",
    "website designer Pretoria",
    "Brand Persona",
  ],

  authors: [
    {
      name: "Brand Persona",
    },
  ],

  creator: "Brand Persona",

  metadataBase: new URL("https://thebrandpersona.co.za"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Brand Persona | Thoughtfully Designed Websites",
    description:
      "Thoughtfully designed websites that build trust, elevate your brand, and create a lasting impression from the very first click.",
    type: "website",
    locale: "en_ZA",
    siteName: "Brand Persona",
  },

  twitter: {
    card: "summary_large_image",
    title: "Brand Persona | Thoughtfully Designed Websites",
    description:
      "Thoughtfully designed websites for businesses ready to build a stronger digital presence.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${body.variable} ${heading.variable} ${script.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
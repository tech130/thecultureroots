import type { Metadata } from "next";
import { Manrope, Dancing_Script } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["700"],
});

const brittneySignature = localFont({
  src: "../../public/fonts/brittney-signature/Brittney Signature.otf",
  variable: "--font-brittney",
  display: "swap",
});


export const metadata: Metadata = {
  title: "CultureRoots",
  description: "Culture Flows. Brands Follow. A Multicultural Media & Services Agency.",
  keywords: "multicultural agency, global media, culture roots, localization services, influencer marketing, global branding",
  icons: {
    icon: '/images/logos/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dancingScript.variable} ${brittneySignature.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

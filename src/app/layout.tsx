import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B4Fire Technology | Certified Fire Protection & Electronic Security — Cape Town",
  description:
    "SANS & SAQCC compliant fire detection, gas suppression, fire equipment servicing, fire stopping, access control and electric fencing. 24/7 emergency response for Cape Town and the Western Cape. PSIRA registered.",
  keywords: [
    "fire protection Cape Town",
    "fire detection systems",
    "gas fire suppression",
    "SANS 10139",
    "SANS 1475",
    "SAQCC Fire",
    "PSIRA registered security",
    "access control Cape Town",
    "electric fencing Kuils River",
    "fire equipment maintenance",
  ],
  authors: [{ name: "B4Fire Technology" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "B4Fire Technology | Certified Fire Protection & Electronic Security",
    description:
      "SANS & SAQCC compliant fire detection, gas suppression, access control and maintenance for Cape Town & beyond. 24/7 emergency support.",
    siteName: "B4Fire Technology",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "B4Fire Technology | Fire Protection & Security",
    description:
      "Certified fire protection and electronic security solutions for Cape Town & beyond.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-navy-900 text-slate-100`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

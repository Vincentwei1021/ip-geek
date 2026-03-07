import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ipgeek.dev";

export const metadata: Metadata = {
  title: "What Is My IP? Free IP Address Lookup Tool | IPGeek",
  description:
    "What is my IP address? Check your IP instantly — free IP address lookup with geolocation, ISP, timezone & coordinates. Look up any IP, no sign-up required.",
  keywords: [
    "what is my ip",
    "what is my ip address",
    "ip address lookup",
    "ip lookup",
    "check my ip",
    "find my ip",
    "ip geolocation",
    "ip checker",
    "ip location finder",
    "my public ip",
    "ip address checker",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "What Is My IP? Free IP Address Lookup Tool | IPGeek",
    description:
      "Find your public IP address instantly. See geolocation, ISP, timezone — free IP lookup, no sign-up.",
    url: siteUrl,
    siteName: "IPGeek",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "IPGeek — What Is My IP? Free IP Address Lookup Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is My IP? Free IP Address Lookup Tool | IPGeek",
    description:
      "Find your public IP address instantly. See geolocation, ISP, timezone — free IP lookup, no sign-up.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: { index: true, follow: true },
  other: {
    "theme-color": "#0891b2",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>{children}</body>
    </html>
  );
}

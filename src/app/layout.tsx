import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ipgeek.dev";

export const metadata: Metadata = {
  title: "What Is My IP Address? Free IP Lookup | IPGeek",
  description:
    "Find your public IP address instantly. See your location, ISP, timezone, and coordinates. Look up any IP address — free, no sign-up required.",
  keywords: [
    "what is my ip",
    "my ip address",
    "ip lookup",
    "ip address lookup",
    "ip geolocation",
    "find my ip",
    "ip checker",
    "ip location finder",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "What Is My IP Address? | IPGeek",
    description: "Find your public IP address instantly. See location, ISP, timezone — free, no sign-up.",
    url: siteUrl,
    siteName: "IPGeek",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is My IP Address? | IPGeek",
    description: "Find your public IP address instantly. See location, ISP, timezone — free.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>{children}</body>
    </html>
  );
}

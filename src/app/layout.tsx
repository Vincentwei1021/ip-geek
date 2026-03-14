import Script from "next/script";
import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-heading", weight: ["400","500","600","700","800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ip.toolboxlite.com";

export const metadata: Metadata = {
  title: "What Is My IP Address? — Free IP Geolocation Lookup | IP Geek",
  description: "Find your IP address and look up any IP's geolocation — country, city, ISP, timezone, coordinates. Free, instant, no sign-up.",
  keywords: ["what is my ip", "ip address lookup", "ip geolocation", "ip location finder", "ip checker", "my ip address"],
  metadataBase: new URL(siteUrl), alternates: { canonical: "/" },
  openGraph: { title: "What Is My IP? | IP Geek", description: "IP geolocation lookup — free and instant.", url: siteUrl, siteName: "IP Geek", type: "website" },
  twitter: { card: "summary_large_image", title: "What Is My IP? | IP Geek", description: "Free IP address lookup with geolocation." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5881105388002876" crossOrigin="anonymous" strategy="afterInteractive" />
      </head>
      <body className={`${dmSans.variable} ${inter.variable} font-sans antialiased bg-gray-50 text-gray-900`}>{children}</body>
    </html>
  );
}

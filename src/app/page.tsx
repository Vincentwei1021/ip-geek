import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IPLookup from "@/components/IPLookup";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IPLookup />
        <FAQ />
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">About IPGeek</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              IPGeek is a free IP address lookup tool. Instantly find your public IP, see your
              geolocation, ISP, timezone, and coordinates. Look up any IP address for free —
              no sign-up, no tracking, no limits.
            </p>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "IPGeek",
            url: "https://ipgeek.dev",
            description: "Free IP address lookup tool. Find your public IP, geolocation, ISP, and timezone instantly.",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            browserRequirements: "Requires a modern web browser",
          }),
        }}
      />
    </>
  );
}

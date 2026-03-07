import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IPLookup from "@/components/IPLookup";
import HowTo from "@/components/HowTo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

/* ── FAQ data ── */
const faqItems = [
  {
    q: "What is an IP address?",
    a: "An IP (Internet Protocol) address is a unique numerical label assigned to every device connected to the internet. It serves as your device\u0027s identity on the network, allowing data to be sent to and from your device.",
  },
  {
    q: "What is the difference between IPv4 and IPv6?",
    a: "IPv4 addresses are 32-bit numbers written as four groups (e.g. 192.168.1.1), allowing about 4.3 billion unique addresses. IPv6 addresses are 128-bit, written in hexadecimal (e.g. 2001:db8::1), supporting a virtually unlimited number of addresses.",
  },
  {
    q: "Can someone find my exact location from my IP?",
    a: "No. IP geolocation provides an approximate location \u2014 typically accurate to the city level. It cannot pinpoint your exact street address or home location. The accuracy varies by ISP and region.",
  },
  {
    q: "What is an ISP?",
    a: "ISP stands for Internet Service Provider \u2014 the company that provides your internet connection. Examples include Comcast, AT&T, Vodafone, and China Telecom. Your ISP assigns your public IP address.",
  },
  {
    q: "Why does my IP location seem wrong?",
    a: "IP geolocation databases are estimates. If you use a VPN, proxy, or mobile network, the detected location may differ from your actual location. ISPs also sometimes route traffic through infrastructure in different cities.",
  },
  {
    q: "Can I look up any IP address?",
    a: "Yes! Enter any public IPv4 or IPv6 address in the lookup field. Private/internal IPs (like 192.168.x.x or 10.x.x.x) cannot be looked up as they are not routable on the public internet.",
  },
  {
    q: "Is IPGeek free?",
    a: "Yes, completely free with no sign-up, no limits, and no tracking. Your IP queries are processed in real-time and not logged.",
  },
  {
    q: "How do I hide my IP address?",
    a: "You can hide your IP address by using a VPN (Virtual Private Network), the Tor browser, or a proxy server. These tools route your traffic through different servers, masking your real IP from websites you visit.",
  },
];

/* ── JSON-LD: WebApplication ── */
const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "IPGeek",
  url: "https://ipgeek.dev",
  description:
    "Free IP address lookup tool. Find your public IP, geolocation, ISP, timezone, and coordinates instantly.",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  browserRequirements: "Requires a modern web browser",
};

/* ── JSON-LD: FAQPage ── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

/* ── JSON-LD: HowTo ── */
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Find Your IP Address and Look Up Any IP",
  description:
    "Follow these simple steps to check your IP address and look up geolocation data for any IP using IPGeek \u2014 a free online IP address lookup tool.",
  step: [
    {
      "@type": "HowToStep",
      name: "See your IP address",
      text: "Visit IPGeek and your public IP address is detected and displayed automatically \u2014 along with your city, country, and ISP.",
    },
    {
      "@type": "HowToStep",
      name: "Look up any IP",
      text: "Enter any public IPv4 or IPv6 address in the lookup field and click Lookup. IPGeek queries the geolocation database and returns detailed results in seconds.",
    },
    {
      "@type": "HowToStep",
      name: "Review geolocation details",
      text: "See the full breakdown: country, city, ZIP, coordinates, ISP, organization, AS number, and timezone. Copy your IP to clipboard with one click.",
    },
  ],
  tool: { "@type": "HowToTool", name: "IPGeek \u2014 Free IP Address Lookup Tool" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IPLookup />
        <HowTo />

        {/* Features section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Why Use Our IP Address Lookup Tool?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "\uD83C\uDF10",
                  title: "Instant IP Detection",
                  desc: "Open IPGeek and your public IP address is displayed instantly \u2014 no clicks needed. See your city, country, and ISP at a glance.",
                },
                {
                  icon: "\uD83D\uDCCD",
                  title: "Full Geolocation Data",
                  desc: "Get detailed IP geolocation: country, region, city, ZIP code, latitude/longitude coordinates, timezone, and AS number for any IP address.",
                },
                {
                  icon: "\uD83D\uDD0D",
                  title: "Look Up Any IP",
                  desc: "Enter any public IPv4 or IPv6 address and get full geolocation details instantly. Check IPs from server logs, emails, or security alerts.",
                },
                {
                  icon: "\uD83D\uDD12",
                  title: "Private & Free",
                  desc: "No sign-up, no data stored, no tracking. Your IP queries are processed in real-time and never logged \u2014 100% private.",
                },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                  <div className="mb-3 text-3xl">{f.icon}</div>
                  <h3 className="mb-2 text-base font-semibold text-gray-900">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ items={faqItems} />

        {/* About — keyword-rich */}
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              About IPGeek
            </h2>
            <div className="mt-4 space-y-4 text-gray-600 leading-relaxed text-left sm:text-center">
              <p>
                Wondering <strong>what is my IP address</strong>? <strong>IPGeek</strong> is a
                free <strong>IP address lookup</strong> tool that answers that question the moment
                you open the page. Your public IP, city, country, ISP, and timezone are detected
                and displayed automatically \u2014 no clicks required.
              </p>
              <p>
                Beyond checking your own IP, IPGeek lets you <strong>look up any IP address</strong>{" "}
                for detailed <strong>IP geolocation</strong> data. Enter an IPv4 or IPv6 address
                from a server log, an email header, or a security alert and get the full picture:
                country, region, city, ZIP code, coordinates, ISP, organization, and AS number.
              </p>
              <p>
                IPGeek is built for privacy. We never store, log, or share the IP addresses you
                query. No sign-ups, no tracking, no fees \u2014 just a fast, reliable tool to{" "}
                <strong>check your IP</strong> and <strong>find IP locations</strong> whenever you
                need to.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}

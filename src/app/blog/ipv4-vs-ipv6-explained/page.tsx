import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IPv4 vs IPv6: What's the Difference and Why It Matters | IP Geek",
  description: "A clear explanation of the differences between IPv4 and IPv6 — why IPv6 was created, what changes for users and developers, and the current state of the transition.",
  keywords: ["ipv4 vs ipv6", "ipv6 explained", "ip address types", "internet protocol", "ipv6 transition"],
  alternates: { canonical: "/blog/ipv4-vs-ipv6-explained" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IPv4 vs IPv6: What's the Difference and Why It Matters",
  description: "A clear explanation of the differences between IPv4 and IPv6 — why IPv6 was created and the current state of the transition.",
  datePublished: "2026-03-08",
  dateModified: "2026-03-08",
  author: { "@type": "Organization", name: "IP Geek" },
  publisher: { "@type": "Organization", name: "IP Geek" },
};

export default function Ipv4VsIpv6Explained() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-sm text-cyan-600 hover:underline">← Back to Blog</Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            IPv4 vs IPv6: What&apos;s the Difference and Why It Matters
          </h1>
          <time className="text-sm text-gray-400">March 8, 2026</time>

          <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
            <p>
              If you&apos;ve checked your IP address with a tool like <Link href="/" className="text-cyan-600 hover:underline">IP Geek</Link>, you may have noticed it looks like one of two very different formats: something like <code className="bg-gray-100 px-1 rounded">203.0.113.42</code> or something like <code className="bg-gray-100 px-1 rounded">2001:db8::1</code>. These are IPv4 and IPv6 — two versions of the Internet Protocol that coexist today. Here&apos;s what you need to know about both.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">What Is IPv4?</h2>
            <p>
              IPv4 (Internet Protocol version 4) has been the backbone of the internet since 1983. An IPv4 address is 32 bits long, written as four numbers separated by dots: <code className="bg-gray-100 px-1 rounded">192.168.1.1</code>. Each number ranges from 0 to 255.
            </p>
            <p>
              The math: 2³² = approximately 4.3 billion possible addresses. In 1983, that sounded like more than enough. By the 2010s, with smartphones, IoT devices, and global internet growth, we ran out. IANA (the Internet Assigned Numbers Authority) exhausted its IPv4 address pool in 2011. Regional internet registries have been operating in scarcity ever since.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">What Is IPv6?</h2>
            <p>
              IPv6 (Internet Protocol version 6) was designed to solve the address exhaustion problem. An IPv6 address is 128 bits long, written as eight groups of four hexadecimal digits separated by colons: <code className="bg-gray-100 px-1 rounded">2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>.
            </p>
            <p>
              The math: 2¹²⁸ = approximately 340 undecillion addresses. That&apos;s 340 followed by 36 zeros — enough to assign a unique IP to every atom on Earth&apos;s surface and still have addresses left over. IPv6 solves the scarcity problem permanently.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">Key Differences</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Address space:</strong> IPv4 — ~4.3 billion; IPv6 — ~340 undecillion</li>
              <li><strong>Format:</strong> IPv4 — dotted decimal (192.168.0.1); IPv6 — colon hexadecimal (2001:db8::1)</li>
              <li><strong>NAT:</strong> IPv4 networks use Network Address Translation to share one public IP across many devices. IPv6 is designed to give every device its own public IP, eliminating the need for NAT.</li>
              <li><strong>Security:</strong> IPv6 was designed with IPsec (encryption and authentication) as a built-in component, though implementation is still optional in practice.</li>
              <li><strong>Configuration:</strong> IPv6 supports stateless address autoconfiguration (SLAAC) — devices can configure their own addresses without a DHCP server.</li>
              <li><strong>Header size:</strong> IPv6 has a simpler, fixed-size header that improves routing efficiency.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">The Current State of IPv6 Adoption</h2>
            <p>
              IPv6 was standardized in 1998 but adoption was slow for decades. Today, major ISPs, cloud providers, and mobile carriers have broad IPv6 support. Google reports that over 45% of users reach its services over IPv6. Mobile networks in particular are heavily IPv6 — it&apos;s cheaper to run mobile networks on IPv6 than to maintain IPv4 NAT infrastructure.
            </p>
            <p>
              Most modern devices support both IPv4 and IPv6 simultaneously — a scheme called &quot;dual-stack.&quot; When you connect to a website, your device prefers IPv6 if both you and the server support it, falling back to IPv4 otherwise.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">Does This Affect You?</h2>
            <p>
              For most everyday users, the IPv4/IPv6 distinction is invisible — your device handles it automatically. Where it matters:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Developers and sysadmins:</strong> You need to ensure services listen on both IPv4 and IPv6 sockets, configure firewalls for both, and handle both in logging and analytics.</li>
              <li><strong>Privacy:</strong> IPv6 addresses can be more persistent than IPv4 addresses (which are often shared via NAT). Some IPv6 privacy extensions randomize the last 64 bits to reduce tracking.</li>
              <li><strong>Geolocation accuracy:</strong> IPv6 geolocation databases are still maturing compared to IPv4. If you see inaccurate location data for your IPv6 address, this is why.</li>
            </ul>

            <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-5">
              <p className="font-semibold text-cyan-800">What version is your IP?</p>
              <p className="mt-1 text-cyan-700">
                <Link href="/" className="underline">IP Geek</Link> shows whether you&apos;re on IPv4 or IPv6, along with your location, ISP, and connection details.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

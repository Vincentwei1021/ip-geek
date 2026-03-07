"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is an IP address?",
    a: "An IP (Internet Protocol) address is a unique numerical label assigned to every device connected to the internet. It serves as your device's identity on the network, allowing data to be sent to and from your device.",
  },
  {
    q: "What is the difference between IPv4 and IPv6?",
    a: "IPv4 addresses are 32-bit numbers written as four groups (e.g. 192.168.1.1), allowing about 4.3 billion unique addresses. IPv6 addresses are 128-bit, written in hexadecimal (e.g. 2001:db8::1), supporting a virtually unlimited number of addresses.",
  },
  {
    q: "Can someone find my exact location from my IP?",
    a: "No. IP geolocation provides an approximate location — typically accurate to the city level. It cannot pinpoint your exact street address or home location. The accuracy varies by ISP and region.",
  },
  {
    q: "What is an ISP?",
    a: "ISP stands for Internet Service Provider — the company that provides your internet connection. Examples include Comcast, AT&T, Vodafone, and China Telecom. Your ISP assigns your public IP address.",
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-gray-200 bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium text-gray-900 sm:text-base">{faq.q}</span>
                <svg className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${openIndex === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="border-t border-gray-100 px-5 pb-4 pt-3">
                  <p className="text-sm leading-relaxed text-gray-600">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

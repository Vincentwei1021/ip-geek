"use client";

import { useState, useEffect } from "react";

interface GeoIPData {
  ip: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
}

function InfoRow({ label, value, icon }: { label: string; value: string; icon: string }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3 py-3">
      <span className="mt-0.5 text-lg">{icon}</span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{label}</p>
        <p className="text-sm font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

export default function IPLookup() {
  const [ip, setIp] = useState("");
  const [query, setQuery] = useState("");
  const [data, setData] = useState<GeoIPData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const lookup = async (targetIp?: string) => {
    setError("");
    setLoading(true);
    setData(null);
    try {
      const url = targetIp
        ? `/api/geoip?ip=${encodeURIComponent(targetIp)}`
        : "/api/myip";
      const res = await fetch(url);
      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setIp(json.data.ip);
      } else {
        setError(json.error || "Lookup failed");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Auto-detect on load
  useEffect(() => { lookup(); }, []);

  const handleManualLookup = () => {
    const trimmed = query.trim();
    if (!trimmed) return;
    lookup(trimmed);
  };

  const copyIp = () => {
    if (ip) navigator.clipboard.writeText(ip);
  };

  return (
    <section id="lookup" className="px-4 py-12 sm:px-6 sm:py-16">
      <h2 className="sr-only">IP Address Lookup Tool</h2>
      <div className="mx-auto max-w-3xl">
        {/* Your IP display */}
        {!loading && data && (
          <div className="mb-8 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 p-6 text-center text-white shadow-lg">
            <p className="text-sm font-medium uppercase tracking-wider text-cyan-100">Your IP Address</p>
            <div className="mt-2 flex items-center justify-center gap-3">
              <span className="text-3xl font-bold tracking-wide sm:text-4xl">{ip}</span>
              <button onClick={copyIp} className="rounded-lg bg-white/20 p-2 transition-colors hover:bg-white/30" title="Copy IP">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              </button>
            </div>
            <p className="mt-2 text-sm text-cyan-100">
              {data.city}{data.city && data.country ? ", " : ""}{data.country}
              {data.countryCode ? ` (${data.countryCode})` : ""}
            </p>
          </div>
        )}

        {loading && (
          <div className="mb-8 flex items-center justify-center rounded-xl bg-gray-50 p-10">
            <svg className="h-8 w-8 animate-spin text-cyan-500" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
            <span className="ml-3 text-gray-500">Detecting your IP address…</span>
          </div>
        )}

        {/* Manual lookup */}
        <div className="mb-8 flex gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleManualLookup()}
            placeholder="Look up any IP address (e.g. 8.8.8.8)"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          />
          <button
            onClick={handleManualLookup}
            disabled={loading}
            className="rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-cyan-700 disabled:opacity-50"
          >
            Lookup
          </button>
        </div>

        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

        {/* Results grid */}
        {data && (
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-gray-900">IP Details for {data.ip}</h2>
            <div className="grid gap-x-8 sm:grid-cols-2">
              <div className="divide-y divide-gray-100">
                <InfoRow icon="🌍" label="Country" value={`${data.country}${data.countryCode ? ` (${data.countryCode})` : ""}`} />
                <InfoRow icon="🏙️" label="City" value={[data.city, data.regionName].filter(Boolean).join(", ")} />
                <InfoRow icon="📮" label="ZIP Code" value={data.zip} />
                <InfoRow icon="📍" label="Coordinates" value={data.lat && data.lon ? `${data.lat}, ${data.lon}` : ""} />
              </div>
              <div className="divide-y divide-gray-100">
                <InfoRow icon="🌐" label="ISP" value={data.isp} />
                <InfoRow icon="🏢" label="Organization" value={data.org} />
                <InfoRow icon="🔗" label="AS Number" value={data.as} />
                <InfoRow icon="🕐" label="Timezone" value={data.timezone} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

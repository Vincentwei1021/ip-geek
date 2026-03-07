export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-cyan-50/30 px-4 pb-10 pt-20 text-center sm:px-6 sm:pb-16 sm:pt-28">
      <div className="pointer-events-none absolute left-[10%] top-20 text-4xl opacity-20 animate-float">🌐</div>
      <div className="pointer-events-none absolute right-[15%] top-32 text-3xl opacity-15 animate-float" style={{animationDelay:'1s'}}>📍</div>
      <div className="pointer-events-none absolute left-[70%] top-16 text-2xl opacity-10 animate-float" style={{animationDelay:'2s'}}>🛰️</div>
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-medium text-cyan-700">
          <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
          Free &middot; Instant &middot; Any IP Address
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          What Is My{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">IP Address</span>?
        </h1>
        <p className="mt-6 text-lg text-gray-600 sm:text-xl leading-relaxed">
          Instantly find your IP address and look up geolocation for any IP — country, city, ISP, timezone, and coordinates. Zero setup.
        </p>
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5"><span className="text-cyan-500">✓</span> Geolocation</span>
          <span className="flex items-center gap-1.5"><span className="text-cyan-500">✓</span> ISP Info</span>
          <span className="flex items-center gap-1.5"><span className="text-cyan-500">✓</span> Timezone</span>
          <span className="flex items-center gap-1.5"><span className="text-cyan-500">✓</span> Coordinates</span>
        </div>
      </div>
    </section>
  );
}

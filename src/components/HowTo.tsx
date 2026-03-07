export default function HowTo() {
  const steps = [
    {
      num: "1",
      title: "See Your IP Address",
      desc: "Open IPGeek and your public IP address is detected automatically \u2014 along with your city, country, ISP, and timezone. No clicks needed.",
    },
    {
      num: "2",
      title: "Look Up Any IP",
      desc: "Enter any public IPv4 or IPv6 address in the lookup field and click Lookup. Our IP address lookup queries the geolocation database in seconds.",
    },
    {
      num: "3",
      title: "Review IP Details",
      desc: "See the full geolocation breakdown: country, city, ZIP, coordinates, ISP, organization, AS number, and timezone. Copy your IP with one click.",
    },
  ];

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight text-gray-900">
          How to Check Your IP &amp; Look Up Any IP Address
        </h2>
        <p className="mb-10 text-center text-gray-500">
          Find your IP and get geolocation data in three simple steps with our free IP lookup tool.
        </p>
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-lg font-bold text-cyan-700">
                {s.num}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 text-sm text-gray-500 sm:flex-row sm:justify-between sm:px-6">
        <p className="font-[family-name:var(--font-heading)]">&copy; {new Date().getFullYear()} IP Geek. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/" className="transition-colors hover:text-cyan-600">Home</Link>
          <Link href="/#lookup" className="transition-colors hover:text-cyan-600">Lookup</Link>
          <Link href="/#faq" className="transition-colors hover:text-cyan-600">FAQ</Link>
        </div>
      </div>
    </footer>
  );
}

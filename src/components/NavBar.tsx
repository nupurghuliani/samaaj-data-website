"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { href: "/about", label: "About" },
  { href: "/collective", label: "The Collective" },
  { href: "/data", label: "Data" },
  { href: "/resources", label: "Resources" },
  { href: "/get-involved", label: "Get Involved" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur" style={{ backgroundColor: "#575858", borderBottomColor: "#575858" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Samaaj Data"
              width={250}
              height={250}
              className="rounded mt-1.5 ml-0.4"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold transition-colors ${
                    isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="https://ai.samaajdata.org"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center rounded-md px-4 py-2 text-sm font-bold text-black hover:opacity-90"
              style={{ backgroundColor: "#fbb040" }}
            >
              Try the CDA
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}





"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  // Base style for inactive links
  const inactiveStyle =
    "text-gray-900 hover:text-primary font-bold uppercase tracking-wide transition-colors";

  // Active style (Green box, rotated, shadow)
  const activeStyle =
    "bg-black text-primary px-3 py-1 font-bold uppercase tracking-wide transform -rotate-2 shadow-hard-sm cursor-default inline-block";

  return (
    <nav className="w-full bg-white border-b-4 border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-full border-2 border-black flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-icons text-black">agriculture</span>
            </div>
            <div className="flex flex-col items-start leading-none">
              <span
                className="font-black text-xl tracking-tighter uppercase text-banner-red"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Subur Makmur
              </span>
              <span className="bg-primary px-1 text-xs font-bold border-2 border-black -rotate-1 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                Pantang Mundur
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              className={isActive("/") ? activeStyle : inactiveStyle}
              href="/"
            >
              Beranda
            </Link>
            <Link
              className={isActive("/katalog") ? activeStyle : inactiveStyle}
              href="/katalog"
            >
              Produk
            </Link>
            {/* Removed 'Tentang' as per previous request, assuming user wants it gone or just used 'Tentang' in the example image as reference. 
                The user said "sisanya biarkan seperti sekarang" (leave the rest as is), and we removed 'Tentang' previously. 
                Reviewing the image, 'TENTANG' is there. But previously user said "Remove Tentang". 
                I will stick to the current definition of "sisanya biarkan seperti sekarang" which implies the current code state (no Tentang). 
                If user wants it back, they will ask. */}
            <Link
              className={isActive("/hubungi-kami") ? activeStyle : inactiveStyle}
              href="/hubungi-kami"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

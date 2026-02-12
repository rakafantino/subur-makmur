"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerLinksRef = useRef<HTMLDivElement>(null);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Animate menu items when drawer opens
  const animateMenuItems = useCallback(() => {
    if (drawerLinksRef.current) {
      const items = drawerLinksRef.current.querySelectorAll(".drawer-link");
      gsap.fromTo(
        items,
        { x: 60, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "back.out(1.4)",
          delay: 0.15,
        }
      );
    }
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      animateMenuItems();
    }
  }, [mobileOpen, animateMenuItems]);

  const isActive = (path: string) => pathname === path;

  const inactiveStyle =
    "text-gray-900 hover:text-primary font-bold uppercase tracking-wide transition-colors";
  const activeStyle =
    "bg-black text-primary px-3 py-1 font-bold uppercase tracking-wide transform -rotate-2 shadow-hard-sm cursor-default inline-block";

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/katalog", label: "Produk" },
    { href: "/hubungi-kami", label: "Hubungi Kami" },
  ];

  return (
    <>
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

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className={isActive(link.href) ? activeStyle : inactiveStyle}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center border-2 border-black bg-primary rounded shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={3} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-72 bg-white border-l-4 border-black shadow-[-6px_0_0_0_rgba(0,0,0,0.1)] transform transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between h-20 px-5 border-b-4 border-black">
          <span className="font-black text-lg uppercase tracking-tight">Menu</span>
          <button
            className="w-10 h-10 flex items-center justify-center border-2 border-black bg-red-400 rounded shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all text-black"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} strokeWidth={3} />
          </button>
        </div>

        {/* Drawer Links */}
        <div ref={drawerLinksRef} className="flex flex-col p-5 gap-3 overflow-hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`drawer-link ${
                isActive(link.href)
                  ? "bg-black text-primary px-4 py-3 font-bold uppercase tracking-wide border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] -rotate-1"
                  : "px-4 py-3 font-bold uppercase tracking-wide border-2 border-black bg-white hover:bg-primary/20 shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              }`}
              style={{ visibility: "hidden" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

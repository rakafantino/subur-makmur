"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NotFound() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".error-code", {
        scale: 0,
        rotate: -360,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
      })
      .from(".error-icon", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "bounce.out",
        stagger: 0.2
      }, "-=0.8")
      .from(".error-title", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      }, "-=0.4")
      .from(".error-desc", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      }, "-=0.3")
      .from(".home-button", {
        scale: 0.8,
        y: 20,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, "-=0.2");

    },
    { scope: container }
  );

  return (
    <div ref={container} className="min-h-screen bg-background-light font-display flex flex-col items-center justify-center text-center p-4 bg-banner-texture relative overflow-hidden">
        {/* Floating Background Icons */}
        <div className="absolute top-10 left-10 text-pecel-orange opacity-20 transform -rotate-12 error-icon">
            <span className="material-icons text-8xl">search_off</span>
        </div>
        <div className="absolute bottom-20 right-10 text-primary opacity-20 transform rotate-12 error-icon">
            <span className="material-icons text-8xl">question_mark</span>
        </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="error-code text-[150px] md:text-[200px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-banner-red to-orange-600 drop-shadow-xl" style={{ WebkitTextStroke: "4px white" }}>
          404
        </div>
        
        <div className="bg-black text-primary px-6 py-2 inline-block transform -rotate-2 mb-8 border-2 border-primary shadow-[4px_4px_0_0_#5bec13]">
            <h1 className="error-title text-2xl md:text-4xl font-black uppercase tracking-wider">
            Waduh! Lu Nyasar?
            </h1>
        </div>

        <p className="error-desc text-xl md:text-2xl font-bold text-gray-800 mb-10 max-w-lg mx-auto bg-white/80 backdrop-blur-sm p-4 rounded-lg border-2 border-black border-dashed">
          Halaman yang lu cari ga ketemu nih. Mungkin udah dipatok ayam atau emang ga ada.
        </p>

        <Link
          href="/"
          className="home-button inline-flex items-center gap-3 bg-primary hover:bg-[#4cd30f] text-black font-black text-2xl px-8 py-4 rounded-full border-4 border-black shadow-[0_0_20px_rgba(91,236,19,0.5)] transition-all hover:translate-y-1 hover:shadow-none group relative z-50"
        >
          <span className="material-icons text-3xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span>Balik ke Kandang (Home)</span>
        </Link>
      </div>

    </div>
  );
}

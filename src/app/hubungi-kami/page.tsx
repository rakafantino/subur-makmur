"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ContactPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Header Animation
      tl.from(".contact-header", {
        scale: 0.8,
        autoAlpha: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
      .from(".contact-header-text", {
         y: 20,
         autoAlpha: 0,
         duration: 0.5,
         stagger: 0.1
      }, "-=0.4");

      // Content Animation
      gsap.from(".left-column-item", {
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "circ.in",
        delay: 0.3,
      });

      gsap.from(".right-column-item", {
        x: 50,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
      });
      
       gsap.from(".bottom-quote", {
        y: 50,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.8,
      });

    },
    { scope: container }
  );

  return (
    <div ref={container} className="bg-background-light font-display h-full text-gray-900 min-h-screen flex flex-col relative overflow-hidden bg-banner-texture">
      {/* Decorative Corner Elements (Simulated Illustrations) */}
      <div className="absolute top-24 left-0 w-32 h-32 md:w-48 md:h-48 opacity-20 pointer-events-none z-0 transform -rotate-12">
        <Image
          className="w-full h-full object-contain grayscale contrast-200"
          alt="Stylized rooster illustration outline"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7lW5DfAIFcbga1z0fsnmCpotMfySBVJQu6a2QRMJLkpgETeCDnhugcgaOuhycezUFeIkTl9iJVOQi7n49QyNV8zV-RSMdWk6Hby9_he9mnqW5uEdpNtExheNe8Ndk36d6CmEMDnxIeRxWyqtFDW1HLxyGEpcruigCIL0IfHSpB2Tt7-R4Y6J6c6NSO8gqYYqc-r7UMM7a07GjhCA5MxqH6tFJxuJ1iOAQss5SnHAajc5A-ofEYr65wUlVMdfCWzvxuin41FgvG3k"
          fill
          sizes="(max-width: 768px) 128px, 192px"
        />
      </div>

      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="contact-header text-center mb-12 relative" style={{ visibility: "hidden" }}>
          <div className="absolute -top-6 -left-6 text-pecel-orange opacity-40 transform -rotate-12">
            <span className="material-icons text-6xl">spa</span>
          </div>
          <div className="absolute -bottom-4 -right-8 text-primary opacity-60 transform rotate-12">
            <span className="material-icons text-6xl">pets</span>
          </div>
          <h1 className="contact-header-text text-6xl md:text-8xl font-black pecel-gradient-text uppercase leading-none tracking-tight transform -rotate-2" style={{ visibility: "hidden" }}>
            Hubungi
            <br />
            Kami
          </h1>
          <p className="contact-header-text mt-6 text-lg md:text-xl font-bold bg-black text-white inline-block px-4 py-1 transform rotate-1 shadow-hard" style={{ visibility: "hidden" }}>
            Sedia Pakan Ayam, Ikan, Bebek &amp; Hewan Peliharaan
          </p>
        </div>

        {/* Contact Cards Container */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start px-2">
          {/* WhatsApp / Contact Column */}
          <div className="flex flex-col gap-10">
            {/* Main WhatsApp Card */}
            <div className="left-column-item bg-white border-3 md:border-4 border-black p-5 md:p-8 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] md:shadow-hard transform hover:-translate-y-1 transition-transform duration-200 relative overflow-hidden group" style={{ visibility: "hidden" }}>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pecel-orange via-yellow-400 to-primary"></div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-500 text-white p-4 rounded-full mb-4 border-2 border-black shadow-sm">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase">
                  Mau Pesan Antar?
                </h3>
                <p className="text-gray-600 mb-6 font-medium">
                  Kalo Mau Pesan Klik Tombol Di Bawah
                </p>
                <a
                  className="w-full bg-primary hover:bg-primary-dark text-black font-black text-2xl py-4 px-6 rounded border-2 border-black shadow-hard hover:shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-3"
                  href="https://wa.me/6282268862400"
                  target="_blank"
                >
                  <span>Tombol Ini</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="left-column-item bg-yellow-50 border-2 border-dashed border-black p-6 rounded-lg relative" style={{ visibility: "hidden" }}>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-primary px-4 py-1 font-bold text-sm uppercase rounded shadow-sm">
                Jam Buka
              </div>
              <ul className="space-y-3 mt-2 text-center font-bold text-gray-800">
                <li className="flex justify-between border-b border-gray-300 pb-2">
                  <span>Senin - Minggu</span>
                  <span>07:00 - 21:00</span>
                </li>
                <li className="flex justify-between text-red-600">
                  <span>Tutup</span>
                  <span>Kalo Ga Mood</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map Column */}
          <div className="flex flex-col h-full">
            <div className="right-column-item bg-white p-2 md:p-3 border-3 md:border-4 border-black rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] md:shadow-hard h-full flex flex-col" style={{ visibility: "hidden" }}>
              <div className="flex justify-between items-center mb-3 px-2">
                <h3 className="font-black text-xl uppercase italic tracking-wider flex items-center gap-2">
                  <span className="material-icons text-pecel-orange">
                    place
                  </span>
                  Lokasi Toko
                </h3>
                <span className="text-xs font-bold bg-gray-200 px-2 py-1 rounded">
                  Riau, ID
                </span>
              </div>
              <div className="flex-grow relative rounded border-2 border-black overflow-hidden bg-gray-200 min-h-[300px]">
                {/* Google Maps Embed */}
                <iframe
                  allowFullScreen
                  className="absolute inset-0 w-full h-full transition-all duration-500"
                  height="100%"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.647348912345!2d102.438060!3d-0.363137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjEnNDcuMyJTIDEwMsKwMjYnMTcuMCJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                  style={{ border: 0 }}
                  title="Lokasi Toko Subur Makmur"
                  width="100%"
                ></iframe>
                {/* Custom Map Overlay Label */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 border border-black rounded shadow-md max-w-[200px]">
                  <p className="text-xs font-bold leading-tight">
                    Jl. Raya Pematang Reba - Pekan Heran,
                    <br /> Kabupaten Indragiri Hulu, Riau
                  </p>
                </div>
              </div>
              <div className="mt-3 text-center">
                <a
                  className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 hover:underline"
                  href="https://maps.google.com/?q=-0.363137,102.438060"
                  target="_blank"
                >
                  Buka di Google Maps{" "}
                  <span className="material-icons text-sm ml-1">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fun little text at bottom */}
        <div className="bottom-quote mt-16 text-center max-w-lg mx-auto transform rotate-1" style={{ visibility: "hidden" }}>
          <div className="inline-block bg-primary px-6 py-2 border-2 border-black rounded-full shadow-hard-sm">
            <p className="font-bold text-black uppercase tracking-wide text-sm md:text-base">
              "Ternak Kenyang, Juragan Tenang"
            </p>
          </div>
        </div>
      </main>

    </div>
  );
}

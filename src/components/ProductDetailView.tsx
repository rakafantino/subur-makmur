"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ProductDetailViewProps {
  product: {
    id: string;
    title: string;
    price: string;
    unit?: string;
    imageSrc: string;
    imageAlt: string;
    bgColorClass?: string;
    badge?: string;
    description?: string;
  };
  features: string[];
}

export default function ProductDetailView({ product, features }: ProductDetailViewProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Decorative Corners Animation
      tl.from(".decorative-corner", {
        scale: 0,
        opacity: 0,
        rotate: 45,
        duration: 1.2,
        stagger: 0.15,
        ease: "elastic.out(1, 0.5)",
      }, 0);

      // Background Splash Animation
      tl.from(".product-splash", {
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      }, 0.2);

      // Image Animation
      tl.from(".product-image-container", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.7)",
      }, 0.3)
      .from(".product-badge", {
        scale: 0,
        rotate: -180,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, "-=0.6");

      // Details Animation
      gsap.from(".detail-item", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5,
      });

    },
    { scope: container }
  );

  return (
    <div ref={container} className="bg-background-light font-display text-gray-900 min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Decorative Corner Motifs (Pecel Lele Style Florals) */}
      <div className="decorative-corner fixed top-0 left-0 w-32 h-32 md:w-48 md:h-48 z-0 opacity-20 pointer-events-none transform -translate-x-4 -translate-y-4">
        <svg
          className="text-banner-orange w-full h-full"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <path d="M10,10 Q50,0 90,10 Q100,50 90,90 Q50,100 10,90 Q0,50 10,10 Z M30,30 Q50,20 70,30 Q80,50 70,70 Q50,80 30,70 Q20,50 30,30" />
          <circle
            className="text-primary fill-current"
            cx="50"
            cy="50"
            r="10"
          />
          <path
            d="M10,10 L30,30 M90,10 L70,30 M90,90 L70,70 M10,90 L30,70"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="decorative-corner fixed top-0 right-0 w-32 h-32 md:w-48 md:h-48 z-0 opacity-20 pointer-events-none transform translate-x-4 -translate-y-4 rotate-90">
        <svg
          className="text-banner-orange w-full h-full"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <path d="M10,10 Q50,0 90,10 Q100,50 90,90 Q50,100 10,90 Q0,50 10,10 Z M30,30 Q50,20 70,30 Q80,50 70,70 Q50,80 30,70 Q20,50 30,30" />
          <circle
            className="text-primary fill-current"
            cx="50"
            cy="50"
            r="10"
          />
          <path
            d="M10,10 L30,30 M90,10 L70,30 M90,90 L70,70 M10,90 L30,70"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="decorative-corner fixed bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 z-0 opacity-20 pointer-events-none transform -translate-x-4 translate-y-4 -rotate-90">
        <svg
          className="text-banner-orange w-full h-full"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <path d="M10,10 Q50,0 90,10 Q100,50 90,90 Q50,100 10,90 Q0,50 10,10 Z M30,30 Q50,20 70,30 Q80,50 70,70 Q50,80 30,70 Q20,50 30,30" />
          <circle
            className="text-primary fill-current"
            cx="50"
            cy="50"
            r="10"
          />
          <path
            d="M10,10 L30,30 M90,10 L70,30 M90,90 L70,70 M10,90 L30,70"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="decorative-corner fixed bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 z-0 opacity-20 pointer-events-none transform translate-x-4 translate-y-4 rotate-180">
        <svg
          className="text-banner-orange w-full h-full"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <path d="M10,10 Q50,0 90,10 Q100,50 90,90 Q50,100 10,90 Q0,50 10,10 Z M30,30 Q50,20 70,30 Q80,50 70,70 Q50,80 30,70 Q20,50 30,30" />
          <circle
            className="text-primary fill-current"
            cx="50"
            cy="50"
            r="10"
          />
          <path
            d="M10,10 L30,30 M90,10 L70,30 M90,90 L70,70 M10,90 L30,70"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <main className="flex-grow flex items-center justify-center relative z-10 px-4 py-8 md:py-12 canvas-bg">
        <div className="max-w-6xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Product Illustration */}
            <div className="product-image-container relative group">
              {/* Background Splash Shape */}
              <div className="product-splash absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-banner-orange/20 rounded-full blur-3xl -z-10"></div>
              <div className="bg-white p-4 border-pecel rounded-xl transform rotate-[-2deg] transition-transform hover:rotate-0 duration-300 relative">
                <div
                  className={`aspect-[4/5] w-full ${
                    product.bgColorClass || "bg-background-light"
                  } rounded-lg overflow-hidden relative border-2 border-black`}
                >
                  {/* Product Image */}
                  <Image
                    className="object-contain w-full h-full mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-500"
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Overlay Badges */}
                {product.badge === 'TERLARIS' && (
                  <div className="product-badge absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-banner-red text-white font-black text-sm md:text-xl px-4 py-2 md:px-6 md:py-3 rounded-lg border-4 border-black shadow-[4px_4px_0_0_#000] transform rotate-12 z-20">
                    TERLARIS!
                  </div>
                )}
                {product.badge === 'BARU' && (
                  <div className="product-badge absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-pecel-orange text-white font-black text-sm md:text-xl px-4 py-2 md:px-6 md:py-3 rounded-lg border-4 border-black shadow-[4px_4px_0_0_#000] transform rotate-12 z-20">
                    BARU!
                  </div>
                )}
                {product.badge && product.badge !== 'TERLARIS' && product.badge !== 'BARU' && (
                  <div className="product-badge absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-primary text-black font-black text-sm md:text-xl px-4 py-2 md:px-6 md:py-3 rounded-lg border-4 border-black shadow-[4px_4px_0_0_#000] transform rotate-12 z-20">
                    {product.badge}!
                  </div>
                )}
              </div>
              {/* Decorative elements under image */}
              <div className="detail-item absolute -bottom-6 -left-6 bg-primary text-black font-black px-6 py-3 rounded-lg border-4 border-black shadow-[4px_4px_0_0_#000] transform -rotate-6 z-20">
                STOK BANYAK!
              </div>
            </div>

            {/* Right Column: Product Details */}
            <div className="flex flex-col space-y-8 text-left">
              {/* Header Section */}
              <div className="space-y-2">
                <div className="detail-item inline-block bg-black text-primary px-3 py-1 font-bold rounded text-sm uppercase tracking-wider mb-2">
                  Pakan Unggas Premium
                </div>
                <h2
                  className="detail-item text-5xl md:text-7xl font-black text-banner-red tracking-tighter leading-none text-pecel-title drop-shadow-xl transform -skew-x-6 uppercase"
                  style={{ WebkitTextStroke: "2px white" }}
                >
                  {product.title}
                </h2>
                <div className="detail-item text-xl md:text-3xl font-bold text-gray-700 italic flex flex-col gap-1">
                  <span>"Kualitas Juara, Harga Saudara."</span>
                  <span className="text-pecel-orange not-italic mt-2">
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Specs & Features */}
              <div className="detail-item bg-white p-6 md:p-8 rounded-xl border-4 border-black shadow-[8px_8px_0_0_#5bec13]">
                <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b-2 border-dashed border-gray-300">
                  <div className="bg-banner-orange text-black font-black text-3xl px-6 py-3 rounded-full border-2 border-black transform -rotate-3 shadow-md">
                    {product.unit}
                  </div>
                  <span className="text-lg font-bold text-gray-500">
                    Berat Bersih / Kemasan
                  </span>
                </div>
                <h3 className="font-black text-2xl mb-4 underline decoration-wavy decoration-primary underline-offset-4">
                  KEUNGGULAN:
                </h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-lg md:text-xl font-bold"
                    >
                      <span className="flex-shrink-0 w-8 h-8 bg-primary rounded-full border-2 border-black flex items-center justify-center">
                        <span className="material-icons text-black text-sm">
                          {index === 0
                            ? "bolt"
                            : index === 1
                            ? "shield"
                            : index === 2
                            ? "fitness_center"
                            : "savings"}
                        </span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Description */}
              {product.description && (
                <div className="detail-item bg-pecel-yellow/20 p-4 md:p-6 rounded-xl border-4 border-black shadow-[4px_4px_0_0_#000] transform rotate-1">
                  <h4 className="font-black text-lg mb-3 uppercase tracking-wide flex items-center gap-2">
                    <span className="material-icons text-pecel-orange">info</span>
                    Deskripsi
                  </h4>
                  <div className="font-bold text-gray-800 leading-relaxed whitespace-pre-wrap">
                    {product.description.split('\n').map((line, i) => {
                      const trimmed = line.trim()
                      if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
                        return (
                          <div key={i} className="flex items-start gap-2 mt-1">
                            <span className="text-pecel-orange mt-1">•</span>
                            <span>{trimmed.replace(/^[-•]\s*/, '')}</span>
                          </div>
                        )
                      }
                      return <div key={i}>{line}</div>
                    })}
                  </div>
                </div>
              )}

              {/* Call to Action */}
              <div className="detail-item pt-4">
                <div className="bg-black/5 p-2 rounded-2xl inline-block w-full">
                  <a
                    href={`https://wa.me/6282268862400?text=Halo%20Subur%20Makmur,%20saya%20mau%20pesan%20${encodeURIComponent(
                      product.title
                    )}`}
                    target="_blank"
                    className="w-full bg-primary hover:bg-[#4cd30f] text-black font-black text-2xl md:text-3xl py-6 px-8 rounded-xl border-4 border-black shadow-[0_0_20px_rgba(91,236,19,0.6)] flex items-center justify-center gap-4 transition-all hover:translate-y-1 hover:shadow-none group relative overflow-hidden"
                  >
                    <div className="flex flex-col items-center justify-center leading-none">
                      <span className="text-sm font-bold opacity-80 uppercase tracking-widest">
                        Pesan Sekarang
                      </span>
                      <span>Melalui WhatsApp</span>
                    </div>
                  </a>
                </div>
                <p className="text-center mt-3 text-sm font-bold text-gray-500 uppercase tracking-wide">
                  Langsung Owner • Respon Cepat • Siap Antar
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

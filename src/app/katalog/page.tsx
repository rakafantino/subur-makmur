"use client";

import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "@/data/products";

gsap.registerPlugin(ScrollTrigger);

export default function KatalogPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Header Animation
      tl.from(".header-title", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
      })
      .from(".header-decoration", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      }, "-=0.5");

      // Search Bar Animation
      gsap.from(".search-bar", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.5,
      });

      // Product Grid Animation
      gsap.from(".product-item", {
        scrollTrigger: {
          trigger: ".product-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
      });
      
       // Load More Button
      gsap.from(".load-more-btn", {
        scrollTrigger: {
          trigger: ".load-more-btn",
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
      });

    },
    { scope: container }
  );

  return (
    <div ref={container} className="bg-background-light font-display text-gray-900 min-h-screen flex flex-col">
      {/* Header Section mimicking a street banner */}
      <header className="w-full bg-white border-b-4 border-black relative overflow-hidden">
        {/* Decorative top stripe pattern */}
        <div className="h-4 w-full bg-pecel-orange flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTAgMjBMMjAgME0xMCAyMEwzMCAwTS0xMCAyMEwxMCAwIi8+PC9zdmc+')] opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 py-8 md:py-12 text-center relative z-10">
          {/* Main Title with Pecel Lele Style */}
          <h1 className="header-title text-5xl md:text-7xl font-black uppercase tracking-tighter pecel-text mb-2 transform -rotate-1">
            Subur Makmur
          </h1>
          <h2
            className="header-title text-3xl md:text-5xl font-black uppercase tracking-tighter text-stroke-black text-white"
            style={{
              WebkitTextStroke: "1.5px black",
              textShadow: "3px 3px 0px #000",
            }}
          >
            Pantang Mundur
          </h2>
          <div className="header-title mt-4">
            <p className="text-lg md:text-xl font-bold bg-black text-primary inline-block px-4 py-1 rounded-full border-2 border-white transform rotate-1 shadow-hard">
                Sedia Pakan Ternak & Hewan Peliharaan
            </p>
          </div>
        </div>
        {/* Abstract stylized animal silhouettes in background */}
        <div className="header-decoration absolute bottom-0 left-0 opacity-10 w-32 h-32 pointer-events-none">
          <Image
            className="w-full h-full object-contain grayscale contrast-200"
            alt="Abstract silhouette of a rooster"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWGu6aXlBWwN7t4LWU68oPNYX4pd4h5Z73CCqUXUjlpWiccVO-aAR47XPSwUc_WxP9w2cH4A4PQtFK-kdcZAg9yY_Y7wsDm5d8BwKFDyNlXsn1ZSiJwuMJt4L719qL6Bf2mroo7lfyguuY5Ntu9qua3Wv3kZTuXEhGCurl3zdM5kpGlenkz6nvQfpKvl_bhuzaH3KC451hJ8pltBGGKswQAPNUnled4ywGD1BkjaxYdA9-Hd-rdlivZ4YsAhKe3ECGTbjoQAusEKs"
            width={128}
            height={128}
          />
        </div>
        <div className="header-decoration absolute top-10 right-10 opacity-10 w-40 h-40 pointer-events-none transform rotate-12">
          <Image
            className="w-full h-full object-contain grayscale contrast-200"
            alt="Abstract silhouette of a cat"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2cdKpkJdGKWsID_FXpN-C7FN8H30VcPD_OAH0qsZrSbRWOkJs06piBhk-nIa7C3pnFSCfUGHqkL-vaN4eFwXq6rwDY93Fa_BNbpSef69SJjTvHSCiAP2JM1fsgpJ1lHkHMe1NP1-bPTM8uQAbUrB30UBfWwSZmrDRQXD3AikoJbm8v9GA1OzvWQgYqXaMhUMdSQF4TTo5Bl4eiKpI6u7jlGlrHSDBDNZDubdQqKgrpD3O3mImLciWpyPLmmhz4aIopSeUitTXv7I"
            width={160}
            height={160}
          />
        </div>
      </header>

      {/* Search & Filter Bar */}
      <section className="search-bar container mx-auto px-4 -mt-6 mb-8 relative z-20">
        <div className="bg-primary border-4 border-black p-4 rounded-xl shadow-hard transform rotate-1 max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full">
            <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-black rounded-lg font-bold placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-black/20 text-black uppercase"
              placeholder="Cari yang kamu butuhin"
              type="text"
            />
          </div>
          <button className="w-full md:w-auto px-8 py-3 bg-pecel-orange text-white font-black uppercase border-2 border-black rounded-lg hover:bg-orange-600 transition-colors shadow-sm whitespace-nowrap">
            Cari Produk
          </button>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {products.map((product, index) => (
             <div key={index} className="product-item">
                <ProductCard 
                  {...product} 
                  linkHref={`/produk/${product.id}`}
                />
             </div>
          ))}
        </div>

        {/* Pagination / Load More */}
        <div className="mt-12 text-center">
          <button className="load-more-btn px-8 py-3 bg-white text-black font-black uppercase border-2 border-black rounded-lg hover:bg-gray-100 transition-colors shadow-hard transform hover:scale-105">
            Muat Lebih Banyak Barang
          </button>
        </div>
      </main>

    </div>
  );
}

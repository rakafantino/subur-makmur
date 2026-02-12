"use client";

import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Product } from "@/data/products";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch dari Sanity
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (data.products && data.products.length > 0) {
          setProducts(data.products);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  useGSAP(
    () => {
      // Hero Animation
      const tl = gsap.timeline();
      
      tl.from(".hero-text-element", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      })
      .from(
        ".hero-image",
        {
          scale: 0.5,
          opacity: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.5"
      );

      // Features Animation
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Menu/Showcase Animation
      gsap.from(".menu-title", {
        scrollTrigger: {
          trigger: ".menu-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: ".menu-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
      
      // Testimonial Animation
      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: ".testimonial-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Location Animation
      gsap.from(".location-content", {
        scrollTrigger: {
          trigger: ".location-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
       gsap.from(".location-map", {
        scrollTrigger: {
          trigger: ".location-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.1
      });

    },
    { scope: container }
  );

  return (
    <div ref={container} className="flex flex-col min-h-screen relative font-display overflow-hidden">
      {/* Canvas Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-canvas"></div>

      {/* Hero Section */}
      <main className="flex-grow relative z-10">
        <div className="relative overflow-hidden bg-background-light pt-12 pb-20">
          {/* Decorative Elements */}
          <div className="absolute top-10 left-0 w-32 h-32 bg-pecel-yellow rounded-full opacity-50 blur-3xl mix-blend-multiply"></div>
          <div className="absolute bottom-10 right-0 w-64 h-64 bg-primary rounded-full opacity-40 blur-3xl mix-blend-multiply"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
              {/* Text Content */}
              <div className="text-center md:text-left space-y-6 order-2 md:order-1">
                <div className="hero-text-element inline-block bg-black text-white px-4 py-1 font-bold text-sm uppercase tracking-widest transform -rotate-2 shadow-hard-sm rounded-sm">
                  Spesialis Pakan Ternak
                </div>
                <h1
                  className="hero-text-element text-6xl md:text-8xl font-black leading-none tracking-tighter drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-b from-pecel-red via-pecel-orange to-pecel-yellow"
                  style={{ WebkitTextStroke: "2px black" }}
                >
                  SUBUR MAKMUR
                  
                </h1>
                <h2 className="hero-text-element text-2xl md:text-4xl bg-primary px-1 text-center font-bold border-2 border-black -rotate-1 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  PANTANG MUNDUR!
                </h2>
                <div className="hero-text-element">
                  <p className="text-xl md:text-2xl font-bold text-gray-800 max-w-lg mx-auto md:mx-0 border-l-8 border-primary pl-4">
                    Sedia pelet ikan, Pur ayam, dan Dedak Berkualitas. 
                    <br />
                    <br />
                    Ternak Kenyang, Jurangan Tenang!
                  </p>
                </div>
                <div className="hero-text-element flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 w-full">
                  <Link
                    href="/katalog"
                    className="flex-1 bg-banner-red text-white py-4 px-6 rounded-xl border-4 border-black shadow-hard hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-3 group"
                  >
                    <span className="material-icons text-2xl group-hover:rotate-12 transition-transform">
                      shopping_bag
                    </span>
                    <div className="text-left leading-tight">
                      <div className="text-sm font-bold opacity-90">LIHAT KATALOG</div>
                    </div>
                  </Link>
                  <a
                    href="https://wa.me/6282268862400"
                    target="_blank"
                    className="flex-1 bg-white text-black py-4 px-6 rounded-xl border-4 border-black shadow-hard hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center"
                  >

                      <div className="text-md font-black uppercase">
                        Pesan Melalui Whatsapp
                      </div>

                  </a>
                </div>
              </div>

              {/* Illustration Area - Generated Image */}
              <div className="hero-image relative h-[250px] md:h-[500px] w-full flex items-center justify-center mt-0 md:mt-0 order-1 md:order-2">
                 <div className="relative w-[240px] md:w-full md:max-w-xl aspect-square transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <Image
                      src="/hero-illustration-v3.png"
                      alt="Subur Makmur Feed Sack with Rooster and Catfish - Sticker Style"
                      className="object-contain drop-shadow-2xl"
                      priority
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Strip */}
        <div className="features-section bg-primary border-y-4 border-black py-8 relative overflow-hidden">
          {/* Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="feature-card flex flex-col items-center group">
                <div className="w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center mb-3 shadow-hard group-hover:scale-110 transition-transform">
                  <span className="material-icons text-4xl text-pecel-red">
                    savings
                  </span>
                </div>
                <h3 className="font-black text-2xl text-black uppercase tracking-tight">
                  Harga Saudara
                </h3>
                <p className="font-bold text-black/80">
                  Murah meriah, kantong aman.
                </p>
              </div>
              <div className="feature-card flex flex-col items-center group">
                <div className="w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center mb-3 shadow-hard group-hover:scale-110 transition-transform">
                  <span className="material-icons text-4xl text-pecel-orange">
                    inventory_2
                  </span>
                </div>
                <h3 className="font-black text-2xl text-black uppercase tracking-tight">
                  Stok Melimpah
                </h3>
                <p className="font-bold text-black/80">
                  Selalu ada, tak perlu pre-order.
                </p>
              </div>
              <div className="feature-card flex flex-col items-center group">
                <div className="w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center mb-3 shadow-hard group-hover:scale-110 transition-transform">
                  <span className="material-icons text-4xl text-green-600">
                    local_shipping
                  </span>
                </div>
                <h3 className="font-black text-2xl text-black uppercase tracking-tight">
                  Antar Cepat
                </h3>
                <p className="font-bold text-black/80">
                  Pesan pagi, sore sampai kandang.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Showcase (Menu Style) */}
        <div className="menu-section py-20 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="menu-title text-center mb-16">
              <h2
                className="text-5xl font-black inline-block relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-pecel-red to-pecel-orange"
                style={{ WebkitTextStroke: "1.5px black" }}
              >
                DAFTAR MENU
              </h2>
              <div className="h-4 w-64 bg-primary mx-auto -mt-4 border-2 border-black transform rotate-1 shadow-hard-sm"></div>
              <p className="mt-6 text-xl text-gray-600 font-bold max-w-2xl mx-auto">
                Pilih pakan yang pas buat peliharaan kesayanganmu. Dijamin
                lahap!
              </p>
            </div>
            <div className="menu-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-xl font-bold">Loading produk...</p>
                </div>
              ) : products.length > 0 ? (
                products.slice(0, 3).map((product, index) => (
                  <div key={product.id || index} className="product-card">
                    <ProductCard
                      {...product}
                      linkHref={`/produk/${product.id}`}
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-xl font-bold text-gray-500">Produk tidak tersedia</p>
                </div>
              )}
            </div>
            <div className="menu-title mt-12 text-center">
              <Link
                href="/katalog"
                className="inline-block text-black font-black text-lg underline decoration-4 decoration-primary underline-offset-4 hover:text-primary transition-colors uppercase"
              >
                Lihat Semua Produk →
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="testimonial-section py-16 bg-pecel-yellow border-t-4 border-black relative overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/canvas-orange.png')]"></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="testimonial-card bg-white border-4 border-black p-8 rounded-xl shadow-hard transform rotate-1 relative">
              <div className="absolute -top-6 -left-6 bg-primary border-4 border-black p-2 rounded-full z-20 shadow-hard-sm">
                <span className="material-icons text-4xl text-black">
                  format_quote
                </span>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 flex-shrink-0 bg-gray-300 rounded-full border-4 border-black overflow-hidden shadow-sm">
                  <Image
                    className="w-full h-full object-cover"
                    alt="Portrait of a smiling Indonesian farmer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb3PnviByORgAlFAxSglW1yCBDBZ74CjqF3w-IozGnXsJ2CnYi-B3wUXvlAhrZzHBCxf2K_jGPp0_uPlmkBo8luBtW4KfZfzYsO2PyR4keqFEZWbz-nxrQG9E6ELTlqaI3ccE2tP33ejPUEUIdPw7W2rUKjUiJlOOw6gju4U0OdSLJL1j9FubDqS0n79O20W-PUf84DqOhemUWOlZRC6uDtfypw9l8sv6KKEt62ZjzasoZkSKCYDSfbj77p21UO2_dEWi2q8j-BDY"
                    width={96}
                    height={96}
                  />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-black italic mb-4">
                    "Pelet lelenya mantap! Ikan cepat gede, panen lebih cepat 2
                    minggu. Sukses terus Subur Makmur!"
                  </p>
                  <p className="font-black text-lg text-pecel-red uppercase tracking-wide">
                    — Pak Bambang, Juragan Lele
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="location-section py-20 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="location-map order-2 md:order-1 relative">
                <div className="absolute top-4 left-4 w-full h-full bg-black rounded-xl"></div>
                <div className="relative bg-white border-4 border-black rounded-xl overflow-hidden p-2 shadow-hard h-[400px]">
                  <iframe
                    allowFullScreen
                    className="w-full h-full transition-all duration-500"
                    loading="lazy"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.647348912345!2d102.438060!3d-0.363137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjEnNDcuMyJTIDEwMsKwMjYnMTcuMCJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                    style={{ border: 0 }}
                    title="Lokasi Toko Subur Makmur"
                  ></iframe>
                </div>
              </div>
              <div className="location-content order-1 md:order-2 space-y-6">
                <h2 className="text-5xl font-black text-black uppercase leading-none">
                  Mampir Ke Toko!
                </h2>
                <h3 className="text-xl font-black text-black/60">
                  Buka Setiap hari dari subuh sampai malam, kalo tutup berarti lagi ngopi
                </h3>
                <p className="text-xl font-bold text-gray-800">
                  Jl. Raya Pematang Reba - Pekan Heran, Pekan Heran, Kec. Rengat Barat., Kabupaten Indragiri Hulu, Riau 29351
                </p>
                <Link
                   href="/hubungi-kami"
                  className="inline-flex items-center gap-2 bg-black text-white font-bold px-6 py-3 rounded hover:bg-pecel-orange transition-colors"
                >
                  <span className="material-icons">map</span>
                  Lihat Peta Google
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

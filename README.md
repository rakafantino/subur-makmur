<p align="center">
  <img src="public/hero-illustration-v3.png" alt="Subur Makmur Logo" width="200" />
</p>

<h1 align="center">🐔 Subur Makmur Pantang Mundur</h1>

<p align="center">
  <em>Katalog Online Toko Pakan Ternak & Hewan Peliharaan</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=flat-square&logo=tailwindcss" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/GSAP-3.14-88CE02?style=flat-square&logo=greensock" alt="GSAP" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
</p>

---

## 📖 Tentang Proyek

Website katalog produk untuk **Toko Subur Makmur**, sebuah toko pakan ternak dan hewan peliharaan di Riau, Indonesia. Dibangun dengan estetika **"Pecel Lele"** — terinspirasi dari spanduk warung makan kaki lima Indonesia yang ikonik: warna-warna cerah, tipografi tebal, hard shadow, dan gaya visual yang playful.

### ✨ Fitur Utama

- **Katalog Produk** — 16+ produk pakan dengan gambar, harga, dan deskripsi lengkap
- **Halaman Detail Produk** — Setiap produk memiliki halaman detail dengan fitur dan informasi nutrisi
- **Animasi GSAP** — Scroll-triggered animations, elastic bounces, dan staggered reveals di setiap halaman
- **Desain Responsif** — Optimal di mobile, tablet, dan desktop
- **Halaman 404 Kustom** — Pesan error bertema "Pecel Lele" yang playful
- **Integrasi WhatsApp** — Tombol langsung ke WhatsApp untuk pemesanan
- **Google Maps** — Peta lokasi toko di halaman kontak dan homepage

---

## 🗂️ Struktur Proyek

```
src/
├── app/
│   ├── globals.css            # Design system & custom utilities
│   ├── layout.tsx             # Root layout (Navbar + Footer)
│   ├── page.tsx               # 🏠 Homepage
│   ├── not-found.tsx          # 🚫 Custom 404
│   ├── katalog/page.tsx       # 📦 Katalog produk
│   ├── produk/[id]/page.tsx   # 📄 Detail produk (SSG)
│   └── hubungi-kami/page.tsx  # 📞 Halaman kontak
├── components/
│   ├── Navbar.tsx             # Navigasi global
│   ├── Footer.tsx             # Footer global
│   ├── ProductCard.tsx        # Kartu produk (reusable)
│   └── ProductDetailView.tsx  # Client component detail produk
├── data/
│   └── products.ts            # Database produk (single source of truth)
└── public/
    └── hero-illustration-v3.png
```

---

## 🎨 Design System

Desain menggunakan palette warna kustom bertema "warung banner":

| Token              | Warna     | Kegunaan                 |
| ------------------ | --------- | ------------------------ |
| `primary`          | `#5bec13` | Aksen utama (hijau neon) |
| `banner-red`       | `#d91e18` | CTA & highlight          |
| `pecel-orange`     | `#ff6b00` | Badge & dekorasi         |
| `pecel-yellow`     | `#fff200` | Aksen kuning             |
| `pecel-red`        | `#DC143C` | Gradient teks            |
| `background-light` | `#f6f8f6` | Background halaman       |

**Font**: [Work Sans](https://fonts.google.com/specimen/Work+Sans) — Bold & Black weights  
**Shadows**: Hard shadow (`4px 4px 0px 0px rgba(0,0,0,1)`) untuk gaya sticker/banner  
**Icons**: [Material Icons](https://fonts.google.com/icons)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x

### Instalasi

```bash
# Clone repository
git clone <repository-url>
cd my-feed-store

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Scripts

| Script          | Deskripsi                       |
| --------------- | ------------------------------- |
| `npm run dev`   | Development server (hot reload) |
| `npm run build` | Production build                |
| `npm start`     | Jalankan production build       |
| `npm run lint`  | Jalankan ESLint                 |

---

## 🏗️ Arsitektur

### Rendering Strategy

- **SSG (Static Site Generation)** — Halaman produk di-generate secara statis menggunakan `generateStaticParams()` dari data di `products.ts`
- **Static Pages** — Homepage, Katalog, Kontak, dan 404 di-render sebagai halaman statis
- **Client Components** — Digunakan hanya untuk halaman yang membutuhkan animasi GSAP (`"use client"`)

### Data Flow

```
products.ts (Source of Truth)
    ├── page.tsx (Homepage — tampilkan 3 produk pertama)
    ├── katalog/page.tsx (Katalog — tampilkan semua produk)
    └── produk/[id]/page.tsx (Detail — lookup by ID → SSG)
```

Semua data produk disimpan di `src/data/products.ts` sebagai satu sumber data. Tidak ada API call atau database — murni static data.

### Animasi

Animasi diimplementasi menggunakan **GSAP 3** + `@gsap/react`:

- `useGSAP()` hook untuk lifecycle management
- `ScrollTrigger` plugin untuk scroll-based animations
- Timeline sequencing untuk coordinated entrance animations

---

## 📱 Halaman

| Route           | Deskripsi                                           |
| --------------- | --------------------------------------------------- |
| `/`             | Homepage dengan hero, features, showcase, & lokasi  |
| `/katalog`      | Grid semua produk dengan search bar                 |
| `/produk/[id]`  | Detail produk dengan gambar, harga, fitur           |
| `/hubungi-kami` | Info kontak, alamat, Google Maps, & jam operasional |
| `404`           | Custom page — "Waduh! Lu Nyasar?"                   |

---

## 🛠️ Tech Stack

| Teknologi      | Versi  | Kegunaan                     |
| -------------- | ------ | ---------------------------- |
| Next.js        | 16.x   | Framework React (App Router) |
| React          | 19.x   | UI Library                   |
| TypeScript     | 5.x    | Type safety                  |
| TailwindCSS    | 3.x    | Utility-first CSS            |
| GSAP           | 3.14.x | Animasi                      |
| Work Sans      | —      | Font utama                   |
| Material Icons | —      | Icon set                     |

---

## 📄 Lisensi

Private project — Hak cipta © 2026 Subur Makmur Pantang Mundur.

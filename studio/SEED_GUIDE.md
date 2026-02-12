# Sanity Seed Guide

## Cara 1: Manual via Studio (Gambar perlu diupload satu-satu)

```bash
cd studio
npm run dev
```

Buka http://localhost:3333 → Login → Tambah produk di menu **Produk**

## Cara 2: Seed Script (Tanpa gambar, text only)

### Step 1: Get Write Token
1. Buka https://www.sanity.io/manage
2. Klik project **Subur Makmur Store**
3. Go to **API** → **Tokens**
4. Klik **New Token**
5. Name: `seed-token`
6. Permissions: **Editor** atau **Write**
7. Copy token-nya

### Step 2: Run Seed
```bash
cd studio
SANITY_API_TOKEN=your-token-here npx tsx seed-products.ts
```

## Catatan
- Seed script hanya masukin data text (nama, harga, deskripsi, fitur)
- **Gambar perlu diupload manual** di Sanity Studio
- Setelah seed, kamu bisa edit/ tambah gambar di http://localhost:3333

## Alternatif: Import via CSV
Bisa juga import CSV pake Sanity Import tool kalau butuh bulk import dengan gambar.

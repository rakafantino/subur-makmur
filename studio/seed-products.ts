/**
 * Sanity Seed Script - Import local products to Sanity
 * Run: npx tsx seed-products.ts
 */

import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId: 'ffm6pf0o',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Needs write token
  useCdn: false,
})

const products = [
  {
    id: 'pakan-ayam-super',
    title: 'Pakan Ayam Pedaging 511',
    price: 'Rp 450.000',
    unit: '50 KG',
    bgColorClass: 'bg-pecel-yellow/20',
    badge: 'TERLARIS',
    description: 'Pakan ayam pedaging terbaik untuk pertumbuhan maksimal. Mengandung nutrisi lengkap yang dibutuhkan ayam.',
    features: ['Cepat Besar & Berbobot', 'Tahan Segala Penyakit', 'Daging Padat & Sehat', 'Hemat Pakan, Hasil Maksimal'],
  },
  {
    id: 'pelet-ikan-nila-781',
    title: 'Pelet Ikan Nila -781',
    price: 'Rp 335.000',
    unit: '30 KG',
    bgColorClass: 'bg-blue-100',
    description: 'Pelet ikan nila protein tinggi, mempercepat pertumbuhan dan menjaga kualitas air kolam.',
    features: ['Protein Tinggi > 30%', 'Air Tetap Jernih', 'Ikan Sehat & Lincah', 'Tidak Mudah Hancur'],
  },
  {
    id: 'whiskas-tuna-1-2kg',
    title: 'Whiskas Tuna 1.2kg',
    price: 'Rp 65.000',
    unit: '1.2 KG',
    bgColorClass: 'bg-pink-100',
    description: 'Makanan kucing rasa tuna lezat dengan nutrisi seimbang untuk kucing dewasa.',
    features: ['Rasa Tuna Asli', 'Bulu Halus & Berkilau', 'Pencernaan Sehat', 'Mata & Jantung Sehat'],
  },
  {
    id: 'pakan-bebek-petelur',
    title: 'Pakan Bebek Petelur',
    price: 'Rp 380.000',
    unit: '50 KG',
    bgColorClass: 'bg-green-100',
    description: 'Pakan khusus bebek petelur untuk meningkatkan produksi telur dan kualitas kerabang.',
    features: ['Produksi Telur Meningkat', 'Kuning Telur Pekat', 'Cangkang Telur Kuat', 'Nutrisi Lengkap'],
  },
  {
    id: 'milet-lovebird-putih',
    title: 'Milet Lovebird Putih',
    price: 'Rp 25.000',
    unit: '1 KG',
    bgColorClass: 'bg-yellow-100',
    description: 'Milet putih pilihan yang bersih dan berkualitas untuk burung lovebird kesayangan.',
    features: ['Biji Milet Pilihan', 'Bersih & Higienis', 'Disukai Burung', 'Meningkatkan Stamina'],
  },
  {
    id: 'jagung-giling-halus',
    title: 'Jagung Giling Halus',
    price: 'Rp 8.000/kg',
    unit: '1 KG',
    bgColorClass: 'bg-orange-100',
    description: 'Jagung giling halus murni tanpa campuran, cocok untuk pemasak ayam, bebek, dan ternak lainnya.',
    features: ['Jagung Murni', 'Gilingan Halus Merata', 'Kaya Karbohidrat', 'Tanpa Bahan Pengawet'],
  },
  {
    id: 'dedak-padi-murni',
    title: 'Dedak Padi Murni',
    price: 'Rp 4.500/kg',
    unit: '1 KG',
    bgColorClass: 'bg-gray-200',
    description: 'Dedak padi halus sisa penggilingan beras, sumber serat dan energi yang baik untuk ternak.',
    features: ['Tekstur Halus', 'Aroma Segar', 'Tinggi Serat', 'Ekonomis'],
  },
  {
    id: 'bolt-cat-food-20kg',
    title: 'Bolt Cat Food 20kg',
    price: 'Rp 480.000',
    unit: '20 KG',
    bgColorClass: 'bg-purple-100',
    description: 'Bolt Cat Food kemasan karung 20kg, lebih hemat untuk pecinta kucing dengan banyak anabul.',
    features: ['Kemasan Hemat', 'Rasa Disukai Kucing', 'Nutrisi Seimbang', 'Bikin Gemuk & Sehat'],
  },
  {
    id: 'pelet-lele-sangkuriang',
    title: 'Pelet Lele Sangkuriang',
    price: 'Rp 310.000',
    unit: '30 KG',
    bgColorClass: 'bg-teal-100',
    description: 'Pakan khusus untuk budidaya lele sangkuriang agar cepat panen dan daging lebih gurih.',
    features: ['Formula Khusus Lele', 'Mempercepat Pertumbuhan', 'Meningkatkan Daya Tahan', 'Efisien Pakan'],
  },
  {
    id: 'pakan-burung-kenari',
    title: 'Pakan Burung Kenari',
    price: 'Rp 15.000',
    unit: '500 GR',
    bgColorClass: 'bg-red-100',
    description: 'Campuran biji-bijian lengkap untuk burung kenari agar rajin berkicau dan sehat.',
    features: ['Biji-bijian Lengkap', 'Meningkatkan Kicauan', 'Burung Lebih Aktif', 'Vitamin & Mineral'],
  },
  {
    id: 'konsentrat-ayam-petelur',
    title: 'Konsentrat Ayam Petelur',
    price: 'Rp 495.000',
    unit: '50 KG',
    bgColorClass: 'bg-yellow-200',
    description: 'Konsentrat protein tinggi untuk dicampur dengan jagung dan dedak, khusus ayam petelur.',
    features: ['Protein Tinggi 36%', 'Hemat Penggunaan', 'Produksi Telur Stabil', 'Kuning Telur Merah'],
  },
  {
    id: 'pakan-koi-spirulina',
    title: 'Pakan Koi Spirulina',
    price: 'Rp 85.000',
    unit: '1 KG',
    bgColorClass: 'bg-blue-200',
    description: 'Pakan koi premium dengan tambahan Spirulina untuk mencerahkan warna ikan.',
    features: ['Mengandung Spirulina', 'Warna Ikan Cerah', 'Tidak Mengeruhkan Air', 'Mudah Dicerna'],
  },
  {
    id: 'pelet-kelinci-nova',
    title: 'Pelet Kelinci Nova',
    price: 'Rp 22.000',
    unit: '1 KG',
    bgColorClass: 'bg-green-200',
    description: 'Pelet kelinci dengan kandungan serat kasar tinggi untuk kesehatan pencernaan kelinci.',
    features: ['Serat Kasar Tinggi', 'Mengasah Gigi Kelinci', 'Kotoran Tidak Bau', 'Kelinci Sehat'],
  },
  {
    id: 'royal-canin-kitten',
    title: 'Royal Canin Kitten',
    price: 'Rp 95.000',
    unit: '400 GR',
    bgColorClass: 'bg-pink-200',
    description: 'Makanan khusus anak kucing usia 4-12 bulan untuk mendukung pertumbuhan yang optimal.',
    features: ['Dukung Sistem Imun', 'Kibble Mudah Kunyah', 'Pencernaan Sehat', 'Pertumbuhan Tulang'],
  },
  {
    id: 'jagung-kristal-merpati',
    title: 'Jagung Kristal Merpati',
    price: 'Rp 12.000/kg',
    unit: '1 KG',
    bgColorClass: 'bg-indigo-100',
    description: 'Jagung kristal kecil khusus untuk pemasak burung merpati hias.',
    features: ['Jagung Kristal Pilihan', 'Biji Kecil & Bersih', 'Sumber Energi Tinggi', 'Cocok untuk Merpati'],
  },
  {
    id: 'konsentrat-bebek-petelur',
    title: 'Konsentrat Bebek Petelur',
    price: 'Rp 485.000',
    unit: '50 KG',
    bgColorClass: 'bg-green-200',
    description: 'Konsentrat formulasi khusus untuk bebek petelur agar produksi maksimal dan cangkang kuat.',
    features: ['Protein Tinggi', 'Percepat Bertelur', 'Kualitas Telur Bagus', 'Bebek Sehat'],
  },
]

async function seedProducts() {
  console.log('🧪 Seeding products to Sanity...\n')

  for (const product of products) {
    try {
      const doc = {
        _type: 'product',
        _id: product.id,
        ...product,
      }

      await client.createOrReplace(doc)
      console.log(`✅ Created: ${product.title}`)
    } catch (error) {
      console.log(`❌ Failed: ${product.title}`, error.message)
    }
  }

  console.log('\n🎉 Done seeding products!')
}

seedProducts().catch(console.error)

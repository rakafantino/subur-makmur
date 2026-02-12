export interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  imageSrc: string;
  imageAlt: string;
  bgColorClass: string;
  badge?: string;
  description: string;
  features: string[];
  unit: string;
}

export const products: Product[] = [
  {
    id: "pakan-ayam-super",
    title: "Pakan Ayam Pedaging 511",
    price: "Rp 450.000",
    unit: "50 KG",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWWr7_vZb8a19EeNKpyLyoij5Jng5vOCS-CXHRGwYN_jXaWpwA2GG3ftOL4MZ5EvWIDbvKPI848jBOUEcM7EkWEAc4oj8t7ga0WooDpx63CSxXI5PvIdM_dPn4hqrJswx3oCy_7FpNuNH3tEk3RXRKaMrmue-jHs6xgOU-u3NyL9DstRrfIeIs5I-80ohkDOyadqMZ8p6nJmXzdamEiQaikAEqcr4K9n1XNA0y-BxbkO4ul4FyMq2q7PgnpH9npkESSvTb5N7nMDo",
    imageAlt: "Illustration style photo of a rooster",
    bgColorClass: "bg-pecel-yellow/20",
    badge: "TERLARIS",
    description: "Pakan ayam pedaging terbaik untuk pertumbuhan maksimal. Mengandung nutrisi lengkap yang dibutuhkan ayam.",
    features: [
      "Cepat Besar & Berbobot",
      "Tahan Segala Penyakit",
      "Daging Padat & Sehat",
      "Hemat Pakan, Hasil Maksimal",
    ],
  },
  {
    id: "pelet-ikan-nila-781",
    title: "Pelet Ikan Nila -781",
    price: "Rp 335.000",
    unit: "30 KG",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_PO7kx2XCl8A_ZKZh51Bxa3JdwzWNoIqD_2Q2_QzQH2h2L4p77fJWncnV9avKZAZnXH5JHUN3EJTFzkI8koM3d1nuiUpwajWhfMOFAzrOthafLG3BApSk44UlHQQrqzP2VF_q9X1tJ8j3R5q8yOAovw1ZezayJ1OCSytI-Ll-Mm5vpwNBtWumzx_G2255mSFXtkTnWp2dSQmAJjkbvYFzHdjuNCJNR4gWN02xNyTOH4WOlbNBpF_l7TB726btoQRSTzEVBakOp8g",
    imageAlt: "High contrast tilapia fish swimming",
    bgColorClass: "bg-blue-100",
    description: "Pelet ikan nila protein tinggi, mempercepat pertumbuhan dan menjaga kualitas air kolam.",
    features: [
      "Protein Tinggi > 30%",
      "Air Tetap Jernih",
      "Ikan Sehat & Lincah",
      "Tidak Mudah Hancur",
    ],
  },
  {
    id: "whiskas-tuna-1-2kg",
    title: "Whiskas Tuna 1.2kg",
    price: "Rp 65.000",
    unit: "1.2 KG",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7BPSZ1DGC22s52GS3ifUYtC44yitqtiMSzZLTAguuXgZ_0uVB4K8qgprWp8i_LxxEJF1P1wTfwnyxEHxQqJlAIyGBNNXtOd270BosPa6xBl_kxRUcDi5wK_RAB_lX-3Ta5IlBc5hBfaspYEYuld4Ua0eaGDzFYQGx8koyiIhMqIDgfDEJGA7uMQKhEE5toQ465WPOqDfktgIFIfEUUjnTBHzKWroYGHEPzxjNO8v0vlRgndbyHsh5y-5T1Ks3oQNQTH0PNAU9Czs",
    imageAlt: "Cute cat looking up illustration style",
    bgColorClass: "bg-pink-100",
    description: "Makanan kucing rasa tuna lezat dengan nutrisi seimbang untuk kucing dewasa.",
    features: [
      "Rasa Tuna Asli",
      "Bulu Halus & Berkilau",
      "Pencernaan Sehat",
      "Mata & Jantung Sehat",
    ],
  },
  {
    id: "pakan-bebek-petelur",
    title: "Pakan Bebek Petelur",
    price: "Rp 380.000",
    unit: "50 KG",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8xRm88qrTUL3o0SPjYQDne6zP3ac2wvqginuD2X4dnrl6LxKSaT54a17c9phoIDfwS0QZNOKmJPmhUrRBr-bwhdCZ4CVVK_rBINGkDojn_LLcXnm2_6b4dbH5lRWafKyASfKqB5PQPzJim7NclKiLzEq8UYQNCWRKObW1IJsJvlYy9FrI4qxcs1Td4VMz6GF2_V2lQUiGl0F6E9oRkNzbDWD88Bg2hDroS-zB_L-trz4LDvZD09vOdHol188CbJZOyUN7GTaN9XA",
    imageAlt: "Two white ducks standing",
    bgColorClass: "bg-green-100",
    description: "Pakan khusus bebek petelur untuk meningkatkan produksi telur dan kualitas kerabang.",
    features: [
      "Produksi Telur Meningkat",
      "Kuning Telur Pekat",
      "Cangkang Telur Kuat",
      "Nutrisi Lengkap",
    ],
  },
  {
    id: "milet-lovebird-putih",
    title: "Milet Lovebird Putih",
    price: "Rp 25.000",
    unit: "1 KG",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRz2Y_GwdExLA-2PNZJ-Fa9I-JsW7-BJyi3f6mUe8iKbWRqdNGfLrJkrJOWAtWRhuSJw9_jeV1td63Xjxy3KnXPF0jiHNZ9mDlEBMs82kUDjupx62RnlJ68eYGcqQ1QxetoAv-NK3Y2SyUBh4XT14z6moQbgCXp79pR3m2wPC4BvEldSGwHKbkCZIzkYVW6yosWo5F5y43clObb7FC1bxVjapiza7zJ5LuH4aoSXw-RmU-GElAt6cnODeVPV7y8r082PK8ZnpTp9g",
    imageAlt: "Colorful bird lovebird illustration",
    bgColorClass: "bg-yellow-100",
    description: "Milet putih pilihan yang bersih dan berkualitas untuk burung lovebird kesayangan.",
    features: [
      "Biji Milet Pilihan",
      "Bersih & Higienis",
      "Disukai Burung",
      "Meningkatkan Stamina",
    ],
  },
  {
    id: "jagung-giling-halus",
    title: "Jagung Giling Halus",
    price: "Rp 8.000/kg",
    unit: "1 KG",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhb2td_YRdRmYxGkrgDwp_czPz5khw9M0ZjJAJEMaPTORAEsJ4BWT1ozUaVNErbkSWhg54vUSaypMZ95ifxrctcS27b9_WgvBU4XDwOIrhqDgWwHxTK5QIhmKODJ25PjeRhnjGyHlt4gqwBr64QA9pdAFk3RnEareroXCEQ4R5lduLHiUypmY1kxtmS1w2hEECnsShp_qK0VdrcOkKmg0SlmLbUpD9v5r_SNdLrnA-UEzAgD6PrFR8xSt9b9G94mBZ77epsu9S--A",
    imageAlt: "Raw corn kernels pile",
    bgColorClass: "bg-orange-100",
    description: "Jagung giling halus murni tanpa campuran, cocok untuk pakan ayam, bebek, dan ternak lainnya.",
    features: [
      "Jagung Murni",
      "Gilingan Halus Merata",
      "Kaya Karbohidrat",
      "Tanpa Bahan Pengawet",
    ],
  },
  {
    id: "dedak-padi-murni",
    title: "Dedak Padi Murni",
    price: "Rp 4.500/kg",
    unit: "1 KG",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDd0RMWfge1yg4nGhDw3m59z6XLrT2zJYtIWl1ehZjCOBsCmZNf7WkPEdBB8gSIEPAJeIOS4tZTlMq2F7Y4WnD_0K5apUktvbf9zk-CzfBjVgD1-wYgJtUXK1ajsdv6kVd_U7HijviMVZGibjtyPqHUDPaAJMgbzs7mKvSkDRFhlN3hgunuDzGUf3Z5jgO53HX2xqTYxObq95ajmH7WumZvsp5BPl4oFnfPValwuJMYMA8wPs_XMdWPYZ36gtnaRUemY4FpqKDPMMk",
    imageAlt: "Sack of rice bran texture",
    bgColorClass: "bg-gray-200",
    description: "Dedak padi halus sisa penggilingan beras, sumber serat dan energi yang baik untuk ternak.",
    features: [
      "Tekstur Halus",
      "Aroma Segar",
      "Tinggi Serat",
      "Ekonomis",
    ],
  },
  {
    id: "bolt-cat-food-20kg",
    title: "Bolt Cat Food 20kg",
    price: "Rp 480.000",
    unit: "20 KG",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDZA-B0aV7TFjolbIfvKRtU7BctrjLXng0O--Mfcd2qzNgsa1WluHR3YaeiLsFD8LZrb98JO8XrVTs8xmUATXgCR4oQcX3BLFr9WyrLE-LP2KhoS7ffRxzSwxmAAbQdrGMhSsLaCjJMn5it-4K2qMATSYNl5FKkU-OFQ4aTxTs_zLVxYVYNhvCzvwy72lwymzDvaqAAJMxBvLrakjiR5w2QAar65gs3o1YbIN3-93-stTLCVd4vTBIBALYR1rKIphOm-0oHDlr4wM",
    imageAlt: "Portrait of a cute cat",
    bgColorClass: "bg-purple-100",
    description: "Bolt Cat Food kemasan karung 20kg, lebih hemat untuk pecinta kucing dengan banyak anabul.",
    features: [
      "Kemasan Hemat",
      "Rasa Disukai Kucing",
      "Nutrisi Seimbang",
      "Bikin Gemuk & Sehat",
    ],
  },
  {
    id: "pelet-lele-sangkuriang",
    title: "Pelet Lele Sangkuriang",
    price: "Rp 310.000",
    unit: "30 KG",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHQodYY6ZKi1TKbCCafBLcvvCJLTn5IT_crLAvDZxN3-CVWO4AgRQ5adPAzgUc-TFyn2gj5ZuFbVc3jpMrLqS_68NKUC0DFrWoANMxIsvikKpzC5NhW2PpXlqJV7y5iyzpYrYjVLCxIqUYWgOOwO2CJpq4eaNBvCXNp_B8sYcPaqlkvV7M45OKLGDnH75Eup2dTnM7lalxtcjktMMFRa9LngUfKDM8B1W5S1bcAhxy8FFRB-PECwQnrYjK7bt10vEpVX_LYrhxnMo",
    imageAlt: "Colorful catfish swimming",
    bgColorClass: "bg-teal-100",
    description: "Pakan khusus untuk budidaya lele sangkuriang agar cepat panen dan daging lebih gurih.",
    features: [
      "Formula Khusus Lele",
      "Mempercepat Pertumbuhan",
      "Meningkatkan Daya Tahan",
      "Efisien Pakan",
    ],
  },
  {
    id: "pakan-burung-kenari",
    title: "Pakan Burung Kenari",
    price: "Rp 15.000",
    unit: "500 GR",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaAlG3olpHHORElHXQQRSpsG_RZzAEwmPcAnNAuwtZF86aOrMDtb2mLZn5c-EiTDZ7Poh8T8JZFvdlJhPA99-vslWnPKeFO8M1un-pWsia9sK6viasoCnKF_lh9uI_jEkR9IIer2T7Osnrh7KxkqUgHIDQnBzRPGpLkiPyro8fSLB1a2cca8zHvwHmD31poFkuCxzcvdQdMwusAg7kKF22lbv69GcukyyqQsavleNwdkbcZlwM98Yz3YVQrHhWKu9HNsKXFtBoGVw",
    imageAlt: "Small singing bird canary",
    bgColorClass: "bg-red-100",
    description: "Campuran biji-bijian lengkap untuk burung kenari agar rajin berkicau dan sehat.",
    features: [
      "Biji-bijian Lengkap",
      "Meningkatkan Kicauan",
      "Burung Lebih Aktif",
      "Vitamin & Mineral",
    ],
  },
  {
    id: "konsentrat-ayam-petelur",
    title: "Konsentrat Ayam Petelur",
    price: "Rp 495.000",
    unit: "50 KG",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxiI4EGBNrtFaiGenLEj_EH0qFrCYH3S2hTdcIL9hxHy5XDEY3sm5KeSVyHxpJ3m4l--oIuRjAu8wSlNrm6a2pcEMdr1_42ZCBnEGLtem-GMB-IhrFDQ1Dbo3bV-R3QX4c4hmBmoTZPhQxEkK11pSDxn6dtWvVlTi0CnPnzxWhuElS_IjxiENhJ-gU8OyD6cPG7PQrp21C5WSAfiEJw81pyCHZlvN-PcIEFJCZw56RuSHjNwPs_eZWR3qLAkXsFZe5PUzwOVyk0_c",
    imageAlt: "Brown laying hen chicken",
    bgColorClass: "bg-yellow-200",
    description: "Konsentrat protein tinggi untuk dicampur dengan jagung dan dedak, khusus ayam petelur.",
    features: [
      "Protein Tinggi 36%",
      "Hemat Penggunaan",
      "Produksi Telur Stabil",
      "Kuning Telur Merah",
    ],
  },
  {
    id: "pakan-koi-spirulina",
    title: "Pakan Koi Spirulina",
    price: "Rp 85.000",
    unit: "1 KG",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGRulw388JBQoAJ_24cn_L5qfBUbiyqf3IlRzbUlsvMflTUpeTWdGFaTebLgpax53TozGr9oMkvlMnvQ-jxzzX_ie6ZJuEdEmfgbucbsOuUD5RS4kh-fiWXTmIiHf3DEZ2QvHf8guom4CXYMSy3Wa55FlX9vaPpnOzHSzXh0PgjqvBZv7NDmqwO9JlTNmviEFlelMNk8NsowZFtwc5CgIRRQ54Iu2noYnKOZjZa9eS-S35zcOUMWXq7BSRwplFMlnUR7ikA5jjdQ0",
    imageAlt: "Koi fish swimming top view",
    bgColorClass: "bg-blue-200",
    description: "Pakan koi premium dengan tambahan Spirulina untuk mencerahkan warna ikan.",
    features: [
      "Mengandung Spirulina",
      "Warna Ikan Cerah",
      "Tidak Mengeruhkan Air",
      "Mudah Dicerna",
    ],
  },
  {
    id: "pelet-kelinci-nova",
    title: "Pelet Kelinci Nova",
    price: "Rp 22.000",
    unit: "1 KG",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7ERu-fNAIrz2Kqnwi7piOlnzyHcanRwZC1Co5zhqzWDvf2N3eYG8GKGBVi0V55u1QGoJYfJAwVXiL1M5kViTO0-S4KlWnqXzuvp1dl5XLK2bimEeDtIGGHDNX4zi3SwQkB9dvydBG-sqU77858KLw_lL8Y3dG0GCKpNzDA8XM3MfU8SzTW3LhRGSx4HOdiIT7KK0xjPx37A45uNBT33tdM7hzWYOfQ7M23R6OaS1-lU3dVdPMGPKU6fDExjxZd1m0AHFx6YybT8s",
    imageAlt: "Rabbit eating grass",
    bgColorClass: "bg-green-200",
    description: "Pelet kelinci dengan kandungan serat kasar tinggi untuk kesehatan pencernaan kelinci.",
    features: [
      "Serat Kasar Tinggi",
      "Mengasah Gigi Kelinci",
      "Kotoran Tidak Bau",
      "Kelinci Sehat",
    ],
  },
  {
    id: "royal-canin-kitten",
    title: "Royal Canin Kitten",
    price: "Rp 95.000",
    unit: "400 GR",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5W27HVW7rquwDAIqE-B5qNTFRM8IxxIKisUGvNeSNfDyXOc-Ry8fIXiykJNI4N-hTnmmFDQVlfVZwRMCUR-15JTTLKdGXtGSIBq47wZ8eeEOnGdTgE2zPhAH9Wmv31sLgEaCVWISJt1htiB9wk5CRM-gpCw8ArT8A2uYcl1wb5s_PX3u_GwDQeYqa5OADxJi-1iFBYu9j2kSpp8BTy5gxY-1FEW2k_C23ue40OiftrLP7v2KR9kI6LDlDv3UWiLwx7aSAZY02JQ",
    imageAlt: "Playful cat with bright eyes",
    bgColorClass: "bg-pink-200",
    description: "Makanan khusus anak kucing usia 4-12 bulan untuk mendukung pertumbuhan yang optimal.",
    features: [
      "Dukung Sistem Imun",
      "Kibble Mudah Kunyah",
      "Pencernaan Sehat",
      "Pertumbuhan Tulang",
    ],
  },
  {
    id: "jagung-kristal-merpati",
    title: "Jagung Kristal Merpati",
    price: "Rp 12.000/kg",
    unit: "1 KG",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrCIHiwZCDHTu2pMMi8nnWKSj1DtQCz1U7mWIHxBSNDJI_lolgAm4owSn27Xcj4h0RqehNfiNb89aoPojPzTkwV_sYSfQYogNsOh2QxBaMd6NLTfwIPuciR7JmAdBqNo98g9GWFd5HpOmzuU6dlyab4wc2Nk-LSVuhYVIk79YhaRDGBUqdhnncpDbuIJbJVW_s5Pz2hPCF3J6WFEldBQ401GYZVcdodi5xeZMwFECNdAeA9NVH5_diXUdL6lUEyWevSlKu9cPNQKI",
    imageAlt: "Pigeon bird standing",
    bgColorClass: "bg-indigo-100",
    description: "Jagung kristal kecil khusus untuk pakan burung merpati balap maupun hias.",
    features: [
      "Jagung Kristal Pilihan",
      "Biji Kecil & Bersih",
      "Sumber Energi Tinggi",
      "Cocok untuk Merpati",
    ],
  },
  {
    id: "konsentrat-bebek-petelur",
    title: "Konsentrat Bebek Petelur",
    price: "Rp 485.000",
    unit: "50 KG",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8xRm88qrTUL3o0SPjYQDne6zP3ac2wvqginuD2X4dnrl6LxKSaT54a17c9phoIDfwS0QZNOKmJPmhUrRBr-bwhdCZ4CVVK_rBINGkDojn_LLcXnm2_6b4dbH5lRWafKyASfKqB5PQPzJim7NclKiLzEq8UYQNCWRKObW1IJsJvlYy9FrI4qxcs1Td4VMz6GF2_V2lQUiGl0F6E9oRkNzbDWD88Bg2hDroS-zB_L-trz4LDvZD09vOdHol188CbJZOyUN7GTaN9XA", // Using same image as Pakan Bebek for now or placeholder
    imageAlt: "Duck concentrate feed",
    bgColorClass: "bg-green-200",
    description: "Konsentrat formulasi khusus untuk bebek petelur agar produksi maksimal dan cangkang kuat.",
    features: [
      "Protein Tinggi",
      "Percepat Bertelur",
      "Kualitas Telur Bagus",
      "Bebek Sehat",
    ],
  },
];

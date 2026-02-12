import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Produk',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Produk',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'id',
      title: 'ID Produk',
      type: 'string',
      description: 'ID unik untuk produk (contoh: pakar-ayam-511)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Harga',
      type: 'string',
      description: 'Harga produk (contoh: Rp 450.000)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'unit',
      title: 'Satuan',
      type: 'string',
      description: 'Satuan produk (contoh: 50 KG, 1.2 KG)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Gambar Produk',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'bgColorClass',
      title: 'Warna Background',
      type: 'string',
      description: 'Tailwind color class (contoh: bg-pecel-yellow/20)',
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
      description: 'Label khusus (contoh: TERLARIS, BARU)',
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Fitur',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List fitur produk',
    }),
  ],
})

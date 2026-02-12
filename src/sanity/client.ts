import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export interface SanityImage {
  asset: {
    _ref: string
    _type: string
  }
  alt?: string
}

export interface SanityProduct {
  _id: string
  _type: 'product'
  id?: string
  title: string
  price: string
  unit: string
  image?: SanityImage | string
  bgColorClass?: string
  badge?: string
  description: string
  features?: string[]
  _createdAt: string
}

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImage) {
  return builder.image(source)
}

// GROQ Query untuk products
export async function getProducts() {
  return client.fetch<SanityProduct[]>(`*[_type == "product"] | order(_createdAt desc)`)
}

export async function getProduct(id: string) {
  return client.fetch<SanityProduct | null>(`*[_type == "product" && id == $id][0]`, { id })
}

import { client, type SanityProduct } from '@/sanity/client'
import { products as localProducts, type Product } from './products'

// Flag untuk cek apakah Sanity tersedia
const SANITY_AVAILABLE = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== undefined

function getImageUrl(product: SanityProduct): string {
  const image = product.image
  if (!image) return '/images/placeholder.jpg'
  
  // Jika image sudah berupa string URL
  if (typeof image === 'string') return image
  
  // Jika image adalah object Sanity
  if (image.asset?._ref) {
    const ref = image.asset._ref
    const filename = ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')
    return `https://cdn.sanity.io/images/${client.config().projectId}/production/${filename}`
  }
  
  return '/images/placeholder.jpg'
}

function getImageAlt(product: SanityProduct): string {
  const image = product.image
  if (!image) return product.title
  if (typeof image === 'string') return product.title
  return image.alt || product.title
}

function transformSanityToProduct(p: SanityProduct): Product {
  return {
    id: p.id || p._id,
    title: p.title,
    price: p.price,
    unit: p.unit,
    imageSrc: getImageUrl(p),
    imageAlt: getImageAlt(p),
    bgColorClass: p.bgColorClass || 'bg-white',
    badge: p.badge,
    description: p.description,
    features: p.features || [],
  }
}

export async function fetchProducts(): Promise<Product[]> {
  if (!SANITY_AVAILABLE) {
    console.log('Sanity not configured, using local data')
    return localProducts
  }

  try {
    const sanityProducts = await client.fetch<SanityProduct[]>(`*[_type == "product"] | order(_createdAt desc)`)
    if (sanityProducts && sanityProducts.length > 0) {
      return sanityProducts.map(transformSanityToProduct)
    }
    console.log('Sanity connected but no products found, using local data')
    return localProducts
  } catch (error) {
    console.error('Error fetching from Sanity, using local data:', error)
    return localProducts
  }
}

export { localProducts as products }

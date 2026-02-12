import { NextResponse } from 'next/server'
import { client, type SanityProduct } from '@/sanity/client'

function getImageUrl(product: SanityProduct): string {
  const image = product.image
  if (!image) return '/images/placeholder.jpg'
  
  if (typeof image === 'string') return image
  
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

export async function GET() {
  try {
    const products = await client.fetch<SanityProduct[]>(`*[_type == "product"] | order(_createdAt desc)`)
    
    // Transform Sanity data to match Product interface
    const transformedProducts = products.map((p) => ({
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
    }))

    return NextResponse.json({ products: transformedProducts })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ products: [], error: 'Failed to fetch products' }, { status: 500 })
  }
}

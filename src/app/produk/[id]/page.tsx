import { client, type SanityProduct } from '@/sanity/client'
import { notFound } from 'next/navigation'
import ProductDetailView from '@/components/ProductDetailView'
import type { Product } from '@/data/products'

interface PageProps {
  params: Promise<{ id: string }>
}

function transformSanityProduct(p: SanityProduct): Product {
  const image = p.image
  let imageSrc = '/images/placeholder.jpg'
  let imageAlt = p.title
  
  if (typeof image === 'string') {
    imageSrc = image
  } else if (image?.asset?._ref) {
    const ref = image.asset._ref
    const filename = ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')
    imageSrc = `https://cdn.sanity.io/images/${client.config().projectId}/production/${filename}`
  }
  
  if (typeof image === 'object' && image.alt) {
    imageAlt = image.alt
  }

  return {
    id: p.id || p._id,
    title: p.title,
    price: p.price,
    unit: p.unit,
    imageSrc,
    imageAlt,
    bgColorClass: p.bgColorClass || 'bg-white',
    badge: p.badge,
    description: p.description,
    features: p.features || [],
  }
}

export async function generateStaticParams() {
  try {
    const products = await client.fetch<Array<{ id: string | undefined }>>(`*[_type == "product"]{id}`)
    return products.map((product) => ({
      id: product.id || '',
    })).filter(p => p.id !== '')
  } catch {
    return []
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  if (!id) {
    notFound()
  }
  
  try {
    const product = await client.fetch<SanityProduct | null>(`*[_type == "product" && id == $id][0]`, { id })

    if (!product) {
      notFound()
    }

    const transformedProduct = transformSanityProduct(product)

    return <ProductDetailView product={transformedProduct} features={transformedProduct.features} />
  } catch (error) {
    console.error('Error fetching product:', error)
    notFound()
  }
}

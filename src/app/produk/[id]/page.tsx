import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetailView from "@/components/ProductDetailView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Fallback for features if not defined in product (though we defined them all)
  const features = product.features || [
    "Kualitas Terbaik",
    "Harga Terjangkau",
    "Stok Selalu Ada",
    "Siap Antar",
  ];

  return <ProductDetailView product={product} features={features} />;
}

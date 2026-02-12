import Image from "next/image";

interface ProductCardProps {
  title: string;
  subtitle?: string;
  price: string;
  unit?: string;
  originalPrice?: string;
  imageSrc: string;
  imageAlt: string;
  bgColorClass: string;
  badge?: string;
  priceColorClass?: string;
  linkHref?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ProductCard({ title, subtitle, price, unit, originalPrice, imageSrc, imageAlt, bgColorClass, badge, priceColorClass, linkHref = "/produk/pakan-ayam-super", priority = false, sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" }: ProductCardProps) {
  return (
    <article className="group bg-white border-4 border-black rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-200 shadow-hard hover:shadow-hard-hover flex flex-col h-full">
      <div className={`h-48 ${bgColorClass} border-b-4 border-black p-4 flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-yellow-100 to-transparent opacity-50"></div>
        <Image src={imageSrc} alt={imageAlt} fill className="object-contain filter contrast-125 saturate-150 drop-shadow-xl transform group-hover:scale-110 transition-transform duration-300" priority={priority} sizes={sizes} />
        {badge && <div className="absolute top-2 right-2 bg-pecel-orange text-white text-xs font-bold px-2 py-1 border border-black rounded shadow-sm">{badge}</div>}
      </div>
      <div className="p-4 flex flex-col flex-grow text-center">
        <h3 className="text-xl font-black uppercase leading-tight mb-2 text-black">{title}</h3>
        {subtitle && <p className="text-sm font-bold text-gray-600 mb-2">{subtitle}</p>}

        <div className="mt-auto pt-2">
          {originalPrice && <p className="text-sm font-bold text-gray-400 line-through decoration-2 decoration-red-500 mb-1">{originalPrice}</p>}

          <p className={`text-2xl font-bold ${priceColorClass || "text-pecel-orange"} drop-shadow-sm mb-1`}>{price}</p>

          {unit && <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">{unit}</p>}

          <a className="block w-full py-2 bg-primary/20 hover:bg-primary text-black border-2 border-black rounded font-bold uppercase tracking-wider transition-colors" href={linkHref}>
            Lihat Detail
          </a>
        </div>
      </div>
    </article>
  );
}

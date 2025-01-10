import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  name: string
  price: string
  imageUrl: string
  category: string
  isNewArrival?: boolean
}

export function ProductCard({ name, price, imageUrl, category, isNewArrival }: ProductCardProps) {
  return (
    <Link href="#" className="group">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={name}
          width={348}
          height={348}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-2 space-y-1">
        {isNewArrival && (
          <div className="text-sm text-orange-600">Just In</div>
        )}
        <h3 className="text-sm font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-sm font-medium text-gray-900">MRP : ₹ {price}</p>
      </div>
    </Link>
  )
}
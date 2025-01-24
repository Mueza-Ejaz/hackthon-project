import Image from "next/image"

interface Products {
    image: string;
    description: string;
    price: number;
    category: string;
    status: string;
    inventory: number;
    colors: string[];
    productName: string;
    _id: string;
  }
  


const Cart = (item:Products) => {
  return (
    <div key={item._id} className="bg-white rounded-lg shadow-md">
    <div className="bg-[#f5f5f5] rounded-t-lg">
      <Image
        src={item.image}
        alt={item.productName}
        width={300}
        height={300}
        className="w-full h-64 object-cover rounded-t-lg"
      />
    </div>
    <div className="px-4 py-3">
      <h2 className="text-md font-bold">{item.productName}</h2>
      <p className="text-sm text-gray-500">{item.category}</p>
      <p className="text-sm mt-1 text-gray-700 line-clamp-2">
        {item.description}
      </p>
      <p className="text-lg font-semibold mt-2 text-gray-800">
        ${item.price}
      </p>
      <p className="text-sm text-gray-500">Status: {item.status}</p>
      <p className="text-sm">Inventory: {item.inventory}</p>
      {item.colors.length > 0 && (
        <div className="mt-2">
          <span className="text-sm font-semibold">
            Available Colors:
          </span>
          <div className="flex gap-2 mt-1">
            {item.colors.map((color:string, index:number) => (
              <span
                key={index}
                className="w-5 h-5 rounded-full border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);
  
}

export default Cart
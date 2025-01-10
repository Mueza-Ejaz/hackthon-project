import Image from "next/image";
import Link from "next/link";

const Essential = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">The Essentials</h2>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <Link href="/mens" className="relative group">
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src="/men.png"
              alt="Mens Category"
              width={440}
              height={540} 
              className="w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium">
                Mens
              </span>
            </div>
          </div>
        </Link>

        <Link href="/allProduct" className="relative group">
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src="/women.png"
              alt="Womens Category"
              width={440}
              height={540} 
              className="w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium">
                Womens
              </span>
            </div>
          </div>
        </Link>

        <Link href="/allProduct" className="relative group">
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src="/kids.png"
              alt="Kids Category"
              width={440}
              height={540} 
              className="w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium">
                Kids
              </span>
            </div>
          </div>
        </Link>
      </div>
       
      

<div className="text-gray-600 body-font">
  <div className="container px-28 py-8  flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
 
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md mb-3">
        Icons
        </h2>
        <nav className="list-none mb-10">
        <ul className="space-y-2 text-md">
            <li><Link href="allProduct" className="hover:underline">Air Force 1</Link></li>
            <li><Link href="allProduct" className="hover:underline">Huarache</Link></li>
            <li><Link href="allProduct" className="hover:underline">Air Max 90</Link></li>
            <li><Link href="allProduct" className="hover:underline">Air Max 95</Link></li>
          </ul>
        </nav>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md mb-3">
          Shoes
        </h2>
        <nav className="list-none mb-10">
        <ul className="space-y-2 text-md">
            <li><Link href="allProduct" className="hover:underline">All Shoes</Link></li>
            <li><Link href="allProduct" className="hover:underline">Custom Shoes</Link></li>
            <li><Link href="allProduct" className="hover:underline">Jordan Shoes</Link></li>
            <li><Link href="allProduct" className="hover:underline">Running Shoes</Link></li>
          </ul>
        </nav>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md mb-3">
          Clothing
        </h2>
        <nav className="list-none mb-10">
        <ul className="space-y-2 text-md">
            <li><Link href="allProduct" className="hover:underline">All Clothing</Link></li>
            <li><Link href="allProduct" className="hover:underline">Modest Wear</Link></li>
            <li><Link href="allProduct" className="hover:underline">Hoodies & Pullovers</Link></li>
            <li><Link href="allProduct" className="hover:underline">Shirts & Tops</Link></li>
          </ul>
        </nav>
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-md mb-3">
          Kids
        </h2>
        <nav className="list-none mb-10">
        <ul className="space-y-2 text-md">
            <li><Link href="allProduct" className="hover:underline">Infant & Toddler Shoes</Link></li>
            <li><Link href="allProduct" className="hover:underline">Kids Shoes</Link></li>
            <li><Link href="allProduct" className="hover:underline">Kids Jordan Shoes</Link></li>
            <li><Link href="allProduct" className="hover:underline">Kids Basketball Shoes</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
 
  </div>
</div>

</div>
  );
};
export default Essential;
      
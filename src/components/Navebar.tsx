import Link from "next/link";
import Image from "next/image";
import { Search, Heart, ShoppingBag } from "lucide-react";

export function Navebar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-auto lg:px-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo2.png"
              alt="Jordan"
              className="object-contain" // Ensure image maintains aspect ratio
              width={64} // Adjust width for larger size
              height={64} // Adjust height for larger size
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/allproduct"
            className="text-sm font-medium transition-colors hover:text-gray-600"
          >
            New & Featured
          </Link>
          <Link
            href="/allproduct"
            className="text-sm font-medium transition-colors hover:text-gray-600"
          >
            Men
          </Link>
          <Link
            href="/allproduct"
            className="text-sm font-medium transition-colors hover:text-gray-600"
          >
            Women
          </Link>
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-gray-600"
          >
            Kids
          </Link>
          <Link
            href="/allproduct"
            className="text-sm font-medium transition-colors hover:text-gray-600"
          >
            Sale
          </Link>
          <Link
            href="/allproduct"
            className="text-sm font-medium transition-colors hover:text-gray-600"
          >
            SNKRS
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center rounded-full bg-gray-100 px-4 py-1.5">
            <Search className="h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 bg-transparent text-sm outline-none placeholder:text-gray-500"
            />
          </div>
          <button>
            <Heart className="h-6 w-6 hover:text-red-600" />
          </button>
          <button>
            <ShoppingBag className="h-6 w-6  hover:text-indigo-600" />
          </button>
        </div>
      </div>
      </header>)}
      export default Navebar
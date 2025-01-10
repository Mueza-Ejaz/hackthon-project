import { ProductGrid } from "./Product_grid";
import { Sidebar } from "./Sidebar"


const AllProduct = () => { 
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <h1 className="text-2xl font-bold">New (500)</h1>
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium">Hide Menu</button>
            <select className="text-sm border-gray-300 rounded-md">
              <option>Sort By</option>
              <option>Featured</option>
              <option>Newest</option>
              <option>Price: High-Low</option>
              <option>Price: Low-High</option>
            </select>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4">
          <Sidebar />
          <main className="flex-1 py-6">
            <ProductGrid />
          </main>
        </div>
      </div>
    </div>
  )}
  export default AllProduct
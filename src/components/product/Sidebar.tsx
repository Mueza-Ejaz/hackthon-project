'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface SidebarSectionProps {
  title: string
  items: string[]
}

function SidebarSection({ title, items }: SidebarSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm font-medium">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <ul className="mt-2 space-y-2">
          {items.map((item, index) => (
            <li key={index}>
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function Sidebar() {
  return (
    <aside className="w-full md:w-64 shrink-0">
      <nav className="sticky top-0 pt-4">
       

 {/* First Section: Static heading and links */}
 <div className="border-b border-gray-200 py-4">
          <span className="text-sm font-medium">New (500)</span>
          <ul className="mt-2 space-y-2">
            {[
              'Shoes',
              'Tops & T-Shirts',
              'Hoodies & Sweatshirts',
              'Shorts',
              'Trousers & Tights',
              'Jackets',
              'Tracksuits',
              'Accessories & Equipment',
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="text-sm text-gray-600 hover:text-black">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <SidebarSection
          title="Gender"
          items={['Men', 'Women', 'Unisex']}
        />
    
        
        <SidebarSection
          title="Kids"
          items={['Boys', 'Girls']}
        />
        <SidebarSection
          title="Shop By Price"
          items={['Under ₹ 7,500.00', '₹ 7,501.00 - ₹ 15,000.00', 'Over ₹ 15,000.00']}
        />
      </nav>
    </aside>
  )
}
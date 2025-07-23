import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'

const menuItems = [
  {
    title: 'Credit Cards',
    items: ['View All Cards', 'Travel Cards', 'Cash Back', 'Student Cards']
  },
  {
    title: 'Banking',
    items: ['Checking', 'Savings', 'Mobile Banking']
  },
  {
    title: 'Loans & Auto',
    items: ['Auto Loans', 'Refinance', 'Pre-qualification']
  }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-900">Capital One</Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {menuItems.map((menu, index) => (
            <div key={index} className="relative group">
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-800">
                <span>{menu.title}</span>
                <ChevronDown size={16} className="ml-1" />
              </button>
              <ul className="absolute left-0 top-full mt-2 w-48 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-20">
                {menu.items.map((item, i) => (
                  <li key={i}>
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link to="/login" className="text-sm font-medium text-blue-700 hover:underline">
            Sign In
          </Link>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          {menuItems.map((menu, index) => (
            <div key={index}>
              <p className="font-semibold text-gray-700">{menu.title}</p>
              <ul className="pl-4 space-y-1">
                {menu.items.map((item, i) => (
                  <li key={i}>
                    <Link to="#" className="block text-sm text-gray-600 hover:text-blue-700">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link to="/login" className="block text-sm font-medium text-blue-700 hover:underline">
            Sign In
          </Link>
        </div>
      )}
    </header>
  )
}

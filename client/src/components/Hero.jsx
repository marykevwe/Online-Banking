import React from 'react'

export default function Hero() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Experience Banking Reimagined
        </h1>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Discover innovative financial solutions, smarter ways to manage your money,
          and the tools you need to succeed.
        </p>
        <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900">
          Explore Products
        </button>
      </div>
    </section>
  )
}
